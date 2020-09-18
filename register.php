<?php

require_once plugin_dir_path(__FILE__) . 'api/index.php';
require_once plugin_dir_path(__FILE__) . 'api/funcs.php';


add_action('admin_enqueue_scripts', function ($suffix) {
    if ($suffix === 'post.php' or $suffix === 'post-new.php') {
        wp_enqueue_script('cwp_gf_webhook_addon_script', plugins_url('/', __FILE__) . '/build/index.js', array('wp-editor', 'wp-edit-post'), '', true);
        wp_enqueue_style('cwp_gf_webhook_addon_style', plugins_url('/', __FILE__) . '/build/style-index.css', array(), 'updated');
    }
});

# Registering integration
add_filter('gutenberg_forms_integrations', function ($integrations) {

    $arguments = array(
        'title'                         => __('Webhook'),
        'is_pro'                        => true,
        'type'                          => 'autoResponder',
        'guide'                         => '',
        'description'                   => "This add-on let's user send webhook payload to any urls",
        'banner'                        => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsuwNquqMLhgVu59LwrDc0E293hAg9ftkyzA&usqp=CAU',
        'fields'                        => array(),
        'query_fields'                  => array(),
        'api_fields'                    => array(),
        'include_all_fields'            => true,
        'include_extended_data'         => true,
        'include_extended_fields'       => true
    );
    $supported_version = 2.1;
    $plugins = get_plugins();
    $gutenberg_forms_init_script = 'gutenberg-forms/plugin.php';
    $gutenberg_form_details = array_key_exists($gutenberg_forms_init_script, $plugins) ? $plugins[$gutenberg_forms_init_script] : [];
    $gutenberg_form_version = array_key_exists('Version', $gutenberg_form_details) ? (float)$gutenberg_form_details['Version'] : null;
    $c = $gutenberg_form_version <= $supported_version ? "true" : "false";


    if (!is_null($gutenberg_form_version) and cwp_gf_wb_addon_compare_floats($gutenberg_form_version, $supported_version, '<')) {

        $arguments['is_disabled'] = true; // disabling the integration
        $arguments['error'] = array(
            'status'    => 'error',
            'message'   => 'In order to use Gutenberg Forms Webhook Addon please update Gutenberg Forms to version 2.1.0 or above.'
        );
    }

    $integrations['webhook'] = $arguments;

    return $integrations;
});

$cwp_gf_webhook_addon_api = new cwp_gf_webhook_API();

add_action('gutenberg_forms_submission__webhook', function ($entry) use ($cwp_gf_webhook_addon_api) {

    $is_addon_enabled = get_option('cwp__enable__webhook') === '1' ? true : false;

    if ($is_addon_enabled) {
        $cwp_gf_webhook_addon_api->sendAll($entry);
    }
});
