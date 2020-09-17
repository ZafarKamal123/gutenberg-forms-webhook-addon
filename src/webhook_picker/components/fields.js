import React from "react";
import { TEXT_DOMAIN } from "../../constants";
import Repeater from "./repeater";
import { validateWebhookAction } from "../../functions";
import {
	supportedDefaultHeaders,
	supportedFormats,
	supportedRequestMethods,
} from "../supports";

const { useEffect, useState } = wp.element;
const {
	Modal,
	Button,
	TextControl,
	SelectControl,
	__experimentalRadio: Radio,
	__experimentalRadioGroup: RadioGroup,
} = wp.components;

const {
	isEmpty,
	map,
	clone,
	set,
	get,
	has,
	each,
	omit,
	trim,
	isString,
} = window.lodash;
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

	const [validationErrors, setValidationErrors] = useState({});

	useEffect(() => {
		const { value } = props;

		if (!isEmpty(value)) {
			setState(value);
		}
	}, []);

	const handleChange = (val, type) => {
		const newState = clone(state);
		set(newState, type, val);
		setState(newState);
		detectValidationErrorsFields(newState, type);
	};

	const getValue = (type) => get(state, type);

	const saveAction = () => {
		const currentValidationErrors = validateWebhookAction(state);

		if (!isEmpty(currentValidationErrors)) {
			setValidationErrors(currentValidationErrors);
		} else {
			props.onAdd(state);
			setValidationErrors({});
		}
	};

	const getHelpText = (field) => {
		const hasErrorInField = has(validationErrors, field);
		const fieldError = __(
			<span className="cwp-gf-wb-error-help">
				{get(validationErrors, `${field}.message`)}
			</span>
		);

		switch (field) {
			case "name":
				return hasErrorInField
					? fieldError
					: __("Custom Name For Webhook", TEXT_DOMAIN);
				break;
			case "url":
				return hasErrorInField
					? fieldError
					: __("Will be used in the webhook request.", TEXT_DOMAIN);
		}
	};

	const hasError = (field) =>
		has(validationErrors, field) && !isEmpty(validationErrors, field);

	/**
	 * Will detect if the field that has validation error is changing according to the
	 * validity of the field and removing the error notice
	 */

	const detectValidationErrorsFields = (updatedState, fieldType) => {
		const updatedValidationErrors = validateWebhookAction(updatedState);

		// this condition tests if the upcoming state has resolved the validation error
		if (!has(updatedValidationErrors, fieldType)) {
			const newValidationErrors = omit(validationErrors, [fieldType]);
			setValidationErrors(newValidationErrors);
		} else if (has(updatedValidationErrors, fieldType)) {
			setValidationErrors({
				...validationErrors,
				[fieldType]: get(updatedValidationErrors, fieldType),
			});
		}
	};

	const SaveTrigger = () => {
		if (!isEmpty(validationErrors)) {
			return (
				<Button disabled isDefault onClick={saveAction}>
					{__("Save Action", TEXT_DOMAIN)}
				</Button>
			);
		} else {
			return (
				<Button isPrimary onClick={saveAction}>
					{__("Save Action", TEXT_DOMAIN)}
				</Button>
			);
		}
	};

	return (
		<div>
			<div className="wb-field">
				<TextControl
					className={hasError("name") ? "cwp-gf-wb-field-error" : ""}
					label={__(
						<span>
							Webhook Name
							<span className="cwp-gf-wb-required-field">*</span>
						</span>,
						TEXT_DOMAIN
					)}
					value={getValue("name")}
					onChange={(name) => handleChange(name, "name")}
					help={getHelpText("name")}
					placeholder={__("Webhook Name", TEXT_DOMAIN)}
					type="text"
				/>
			</div>
			<div className="wb-field">
				<TextControl
					className={hasError("url") ? "cwp-gf-wb-field-error" : ""}
					placeholder={__("URL", TEXT_DOMAIN)}
					help={getHelpText("url")}
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
						help={__("HTTP Method used for request", TEXT_DOMAIN)}
					/>
				</div>
				<div className="row-v">
					<SelectControl
						value={getValue("requestFormat")}
						onChange={(requestFormat) =>
							handleChange(requestFormat, "requestFormat")
						}
						label={__("Request Formats", TEXT_DOMAIN)}
						help={__("Select Format for request", TEXT_DOMAIN)}
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
						{...props}
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
						{...props}
						defaultCustom={true}
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
				<SaveTrigger />
			</div>
		</div>
	);
}

export default WebhookFields;
