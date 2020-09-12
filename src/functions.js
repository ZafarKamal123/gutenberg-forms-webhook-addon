import { TEXT_DOMAIN } from "./constants";
const { has, get, isEmpty, trim } = window.lodash;
const { __ } = wp.i18n;

/**
 * Run some validation based on the given webhook action
 * @param {object} action Webhook Action Object
 * @return {boolean} isValid
 */

export function validateWebhookAction(action) {
	// initially the webhook is valid
	let errors = {};
	let urlRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/;
	const [
		name,
		url,
		requestMethod,
		requestFormat,
		includeHeaders,
		requestHeaders,
		includeSelectiveFields,
		requestBody,
	] = [
		get(action, "name"),
		get(action, "url"),
		get(action, "requestMethod"),
		get(action, "requestFormat"),
		get(action, "includeHeaders"),
		get(action, "requestHeaders"),
		get(action, "requestHeaders"),
		get(action, "includeSelectiveFields"),
		get(action, "requestBody"),
	];

	if (typeof name === "undefined" || isEmpty(trim(name))) {
		errors["name"] = {
			message: __("Please Enter A Webhook Name", TEXT_DOMAIN),
		};
	}

	if (typeof url === "undefined" || isEmpty(trim(url))) {
		errors["url"] = {
			message: __("Please Enter A Webhook URL", TEXT_DOMAIN),
		};
	} else if (!urlRegex.test(url)) {
		errors["url"] = {
			message: __("Please Enter A Valid URL", TEXT_DOMAIN),
		};
	}

	return errors;
}
