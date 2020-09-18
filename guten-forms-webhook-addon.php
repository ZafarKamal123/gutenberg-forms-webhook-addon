<?php

/**
 * Plugin Name:     Gutenberg Forms Webhook Addon
 * Description:     Will let you send gutenberg forms data to any webhook url
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     guten-forms-webhook-addon
 *
 */
if (!function_exists('wg_fs')) {
    // Create a helper function for easy SDK access.
    function wg_fs()
    {
        global $wg_fs;
        if (!isset($wg_fs)) {
            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/freemius/start.php';
            $wg_fs = fs_dynamic_init(array(
                'id'                  => '6928',
                'slug'                => 'webhooks-gf',
                'type'                => 'plugin',
                'public_key'          => 'pk_dd8993b01bdd72b50a8d12a9f690f',
                'is_premium'          => true,
                'premium_suffix'      => 'Premium',
                // If your plugin is a serviceware, set this option to false.
                'has_premium_version' => true,
                'has_addons'          => false,
                'has_paid_plans'      => true,
                'is_org_compliant'    => false,
                'menu'                => array(
                    'first-path'     => 'plugins.php',
                    'contact'        => false,
                    'support'        => false,
                ),
                // Set the SDK to work in a sandbox mode (for development & testing).
                // IMPORTANT: MAKE SURE TO REMOVE SECRET KEY BEFORE DEPLOYMENT.
                'secret_key'          => 'sk_lR7p{(~^wBaC5O1TM1O-yFVs0lw;&',
            ));
        }
        return $wg_fs;
    }
    // Init Freemius.
    wg_fs();
    // Signal that SDK was initiated.
    do_action('wg_fs_loaded');
}

require_once plugin_dir_path(__FILE__) . 'register.php';
