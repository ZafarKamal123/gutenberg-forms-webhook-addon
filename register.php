<?php

require_once plugin_dir_path(__FILE__) . 'api/index.php';

add_action('admin_enqueue_scripts', function ($suffix) {
    if ($suffix === 'post.php' or $suffix === 'post-new.php') {
        wp_enqueue_script('cwp_gf_webhook_addon_script', plugins_url('/', __FILE__) . '/build/index.js', array('wp-editor', 'wp-edit-post'), '', true);
        wp_enqueue_style('cwp_gf_webhook_addon_style', plugins_url('/', __FILE__) . '/build/style-index.css', array(), 'updated');
    }
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
        'fields' => array(),
        'query_fields' => array(),
        'api_fields' => array(),
        'include_all_fields' => true,
        'include_extended_data' => true
    );

    $integrations['webhook'] = $arguments;

    return $integrations;
});

$cwp_gf_webhook_addon_api = new cwp_gf_webhook_API();

add_action('gutenberg_forms_submission__webhook', array($cwp_gf_webhook_addon_api, 'sendAll'));
