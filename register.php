<?php


add_action('admin_enqueue_scripts', function () {
    wp_enqueue_script('cwp_gf_webhook_addon_script', plugins_url('/', __FILE__) . '/build/index.js', array('cwp_gf_dashboard_script'), '', true);
    wp_enqueue_style('cwp_gf_webhook_addon_style', plugins_url('/', __FILE__) . '/build/style-index.css', array('cwp_gf_dashboard_style'), 'updated');
});


# Registering integration
add_filter('gutenberg_forms_integrations', function ($integrations) {

    $arguments = array(
        'title' => __('Webhook'),
        'is_pro'  => true,
        'type'  => 'autoResponder',
        'guide' => '',
        'description' => "This add-on let's user send webhook payload to any urls",
        'banner' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsuwNquqMLhgVu59LwrDc0E293hAg9ftkyzA&usqp=CAU',
        'fields' => array(
            'webhook_actions' => array(
                'field_type'    => 'text',
                'hide_field'    => true,
                'value'         => '',
                'placeholder'   => 'Webhook Action'
            )
        ),
        'query_fields' => array(),
        'api_fields' => array(),
    );

    $integrations['webhook'] = $arguments;

    return $integrations;
});
