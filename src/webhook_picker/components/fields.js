import React from "react";
import { TEXT_DOMAIN } from "../../constants";
import Repeater from "./repeater";

const { useEffect, useState } = wp.element;
const {
	Modal,
	Button,
	TextControl,
	SelectControl,
	__experimentalRadio: Radio,
	__experimentalRadioGroup: RadioGroup,
} = wp.components;

const { isEmpty, map, clone, set, get } = window.lodash;
const { __ } = wp.i18n;

function WebhookFields(props) {
	const [state, setState] = useState({
		name: "",
		url: "",
		requestMethod: "post",
		requestFormat: "json",
		includeHeaders: "false",
		requestHeaders: [],
		includeSelectiveFields: "false",
		requestBody: [],
	});

	useEffect(() => {
		const { value } = props;

		if (!isEmpty(value)) {
			setState(value);
		}
	}, []);

	const supportedRequestMethods = [
		{
			label: "GET",
			method: "get",
		},
		{
			label: "POST",
			value: "post",
		},
		{
			label: "PUT",
			value: "put",
		},
		{
			label: "PATCH",
			value: "patch",
		},
		{
			label: "DELETE",
			value: "delete",
		},
	];

	const supportedFormats = [
		{
			label: "JSON",
			value: "json",
		},
		{
			label: "FORM",
			value: "form",
		},
	];

	const supportedDefaultHeaders = [
		{
			label: "Accept",
			value: "accept",
		},
		{
			label: "Accept-Charset",
			value: "accept-charset",
		},
		{
			label: "Accept-Encoding",
			value: "accept-encoding",
		},
		{
			label: "Accept-Language",
			value: "accept-language",
		},
		{
			label: "Accept-Datetime",
			value: "accept-datetime",
		},
		{
			label: "Authorization",
			value: "authorization",
		},
		{
			label: "Cache-Control",
			value: "cache-control",
		},
		{
			label: "Connection",
			value: "connection",
		},
		{
			label: "Cookie",
			value: "cookie",
		},
		{
			label: "Content-Length",
			value: "content-length",
		},
		{
			label: "Date",
			value: "date",
		},
		{
			label: "Expect",
			value: "expect",
		},
		{
			label: "Forwarded",
			value: "forwarded",
		},
		{
			label: "Host",
			value: "host",
		},
		{
			label: "If-Match",
			value: "if-match",
		},
		{
			label: "If-Modified-Since",
			value: "if-modified-since",
		},
		{
			label: "If-None-Match",
			value: "if-none-match",
		},
		{
			label: "If-Range",
			value: "if-range",
		},
		{
			label: "If-Unmodified-Since",
			value: "if-unmodified-since",
		},
		{
			label: "Max-Forwards",
			value: "max-forwards",
		},
		{
			label: "Origin",
			value: "origin",
		},
		{
			label: "Pragma",
			value: "pragma",
		},
		{
			label: "Proxy-Authorization",
			value: "proxy-authorization",
		},
		{
			label: "Range",
			value: "range",
		},
		{
			label: "Referer",
			value: "referer",
		},
		{
			label: "TE",
			value: "te",
		},
		{
			label: "User-Agent",
			value: "user-agent",
		},
		{
			label: "Via",
			value: "via",
		},
		{
			label: "Warning",
			value: "warning",
		},
		{
			label: "Add Custom Header",
			value: "AddCustomHeader",
		},
	];

	const handleChange = (val, type) => {
		const newState = clone(state);
		set(newState, type, val);
		setState(newState);
	};

	const getValue = (type) => get(state, type);

	const saveAction = () => {
		props.onAdd(state);
	};

	return (
		<div>
			<div className="wb-field">
				<TextControl
					label={__(
						<span>
							Webhook Name
							<span className="cwp-gf-wb-required-field">*</span>
						</span>,
						TEXT_DOMAIN
					)}
					value={getValue("name")}
					onChange={(name) => handleChange(name, "name")}
					help={__("Custom name for the webhook.", TEXT_DOMAIN)}
					placeholder={__("Webhook Name", TEXT_DOMAIN)}
					type="text"
				/>
			</div>
			<div className="wb-field">
				<TextControl
					placeholder={__("URL", TEXT_DOMAIN)}
					help={__("Will be used in the webhook request.", TEXT_DOMAIN)}
					value={getValue("url")}
					onChange={(url) => handleChange(url, "url")}
					label={__(
						<span>
							Request URL
							<span className="cwp-gf-wb-required-field">*</span>
						</span>,
						TEXT_DOMAIN
					)}
					type="text"
				/>
			</div>
			<div className="row wb-field">
				<div className="row-v">
					<SelectControl
						value={getValue("requestMethod")}
						onChange={(requestMethod) =>
							handleChange(requestMethod, "requestMethod")
						}
						label={__("Request Method", TEXT_DOMAIN)}
						options={supportedRequestMethods}
					/>
				</div>
				<div className="row-v">
					<SelectControl
						value={getValue("requestFormat")}
						onChange={(requestFormat) =>
							handleChange(requestFormat, "requestFormat")
						}
						label={__("Request Formats", TEXT_DOMAIN)}
						options={supportedFormats}
					/>
				</div>
			</div>
			<div className="wb-field row">
				<span className="mr-10"> {__("Request Headers", TEXT_DOMAIN)} </span>
				<RadioGroup
					label={__("Headers", TEXT_DOMAIN)}
					onChange={(includeHeaders) =>
						handleChange(includeHeaders, "includeHeaders")
					}
					checked={getValue("includeHeaders")}
				>
					<Radio value={"false"}>{__("No Headers")}</Radio>
					<Radio value={"true"}>{__("With Headers")}</Radio>
				</RadioGroup>
			</div>
			{getValue("includeHeaders") === "true" && (
				<div className="wb-field">
					<Repeater
						context={"Header"}
						value={getValue("requestHeaders")}
						onChange={(value) => handleChange(value, "requestHeaders")}
						queryTitle={__("Header Name", TEXT_DOMAIN)}
						queryOptions={supportedDefaultHeaders}
						optionTitle={__("Header Value", TEXT_DOMAIN)}
					/>
				</div>
			)}
			<div className="wb-field row">
				<span className="mr-10">
					{" "}
					{__(
						<span>
							Request Body
							<span className="cwp-gf-wb-required-field">*</span>
						</span>,
						TEXT_DOMAIN
					)}{" "}
				</span>
				<RadioGroup
					label={__("Request Body", TEXT_DOMAIN)}
					onChange={(includeSelectiveFields) =>
						handleChange(includeSelectiveFields, "includeSelectiveFields")
					}
					checked={getValue("includeSelectiveFields")}
				>
					<Radio value={"false"}>{__("All Fields")}</Radio>
					<Radio value={"true"}>{__("Selected Fields")}</Radio>
				</RadioGroup>
			</div>
			{getValue("includeSelectiveFields") === "true" && (
				<div className="wb-field">
					<Repeater
						context={"Field"}
						queryTitle={__("Field Name", TEXT_DOMAIN)}
						value={getValue("requestBody")}
						onChange={(value) => handleChange(value, "requestBody")}
						queryOptions={[
							{
								label: "Select Field",
								value: "",
							},
						]}
						optionTitle={__("Field Value", TEXT_DOMAIN)}
					/>
				</div>
			)}
			<div className="cwp-gf-wb-footer">
				<Button isDefault onClick={props.closeModal}>
					{__("Cancel", TEXT_DOMAIN)}
				</Button>
				<Button isPrimary onClick={saveAction}>
					{__("Save Action", TEXT_DOMAIN)}
				</Button>
			</div>
		</div>
	);
}

export default WebhookFields;
