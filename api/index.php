<?php


require_once plugin_dir_path(__FILE__) . 'funcs.php';

/**
 * This class will handle all the custom webhooks requests
 */


class cwp_gf_webhook_API
{

    /**
     * Will parse and format the repeater field value
     * @param array $repeater_value
     * @param array $extended_fields
     */

    public static function parse_repeater($repeater_value, $extended_fields)
    {
        $parsed_value = [];
        $tagHandler = new gforms_TagHandler($extended_fields);

        foreach ($repeater_value as $key => $field) {
            $field_name    = cwp_gf_wb_get($field, 'queryValue', null);
            $field_value   = cwp_gf_wb_get($field, 'optionValue',  null);

            if (!empty($field_name) and !empty($field_value)) {
                $parsed_value[$field_name] = $tagHandler->merge($field_value);
            }
        }

        return $parsed_value;
    }

    /**
     * Will send a single webhook payload
     * @param array $WebhookAction
     * @param array $fields Form Fields
     * @param array $extended_fields full fields with their respective data
     */

    public static function send($webhookAction, $fields, $extended_fields)
    {
        $url                        = cwp_gf_wb_get($webhookAction, 'url', '');
        $request_method             = cwp_gf_wb_get($webhookAction, 'requestMethod', 'post');
        $request_format             = cwp_gf_wb_get($webhookAction, 'requestFormat', 'json');
        $include_headers            = cwp_gf_wb_get($webhookAction, 'includeHeaders', false);
        $request_headers            = cwp_gf_wb_get($webhookAction, 'requestHeaders', []);
        $include_selective_fields   = cwp_gf_wb_get($webhookAction, 'includeSelectiveFields', false);
        $request_body               = cwp_gf_wb_get($webhookAction, 'requestBody', []);

        $request_args = [
            'timeout'     => '5',
            'redirection' => '5',
            'httpversion' => '1.0',
            'blocking'    => true,
            'headers'     => []
        ];

        if ($request_format === 'json') {
            $request_args['headers']['content-type'] = 'application/json';
        }

        if ($include_headers === 'true' or $include_headers === true) {
            $request_args['headers'] = array_merge($request_args['headers'], self::parse_repeater($request_headers, $extended_fields));
        }
        if ($include_selective_fields === 'true' or $include_selective_fields === true) {
            $request_args['body'] = self::parse_repeater($request_body, $extended_fields);
        } else if ($include_selective_fields === 'false' or $include_selective_fields === false) {
            $request_args['body'] = $fields;
        }

        if (trim($request_args['headers']['content-type']) === 'application/json') {
            $request_args['body'] = json_encode($request_args['body']);
        }

        try {

            $response;

            switch ($request_method) {

                case 'post':
                    $response = wp_remote_post($url, $request_args);
                    break;
                case 'get':
                    $response = wp_remote_get($url, $request_args);
                    break;
                default:
                    $request_args['method'] = strtoupper($request_method); # overwriting method
                    $response = wp_remote_request($url, $request_args);
            }
        } catch (\Exception $e) {
            # Silence is Golden
        }
    }

    /**
     * Will get the whole entry and sendAll the webhook payloads asynchronously
     * @param array,GutenbergFormsEntry $entry
     */

    public static function sendAll($entry)
    {


        $extended_data = $entry['extended_data'];
        $extended_fields = $entry['extended_fields'];
        $webhooks_extended_data = array_key_exists('webhooks', $extended_data) ? $extended_data['webhooks'] : [];
        # webhook payloads are saved in the extendedData
        unset($entry['extended_data']);
        unset($entry['extended_fields']);
        # after this line entry just has fields remaining

        foreach ($webhooks_extended_data as $idx => $webhook_action) {
            self::send($webhook_action, $entry, $extended_fields);
        }
    }
}
