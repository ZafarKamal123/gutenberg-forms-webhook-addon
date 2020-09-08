import { __ } from "@wordpress/i18n";
import RepeaterField from "./components/repeaterField/index";
import "./style.scss";

const {
	extend: { registerAddon },
} = window.cwp_gf;

// including a custom repeater field for saving webhook urls
registerAddon("cwp_gf_webhook_settings_repeater", {
	parent: "webhook",
	renderSlot: "settings.integrations.fields.webhook",
	render: RepeaterField,
});
