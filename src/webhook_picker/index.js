import React from "react";
import Empty from "./components/empty";
import { TEXT_DOMAIN } from "../constants";

const { useEffect, useState } = wp.element;
const {
	Modal,
	Button,
	TextControl,
	SelectControl,
	__experimentalRadio: Radio,
	__experimentalRadioGroup: RadioGroup,
} = wp.components;

const { isEmpty, map } = window.lodash;
const { __ } = wp.i18n;

function WebhookPicker(props) {
	const [modal, setModal] = useState(false);
	const webhookActions = [];

	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);

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

	return (
		<div className="cwp-webhook-picker">
			{!isEmpty(webhookActions) &&
				map(webhookActions, (action) => {
					return <div className="cwp-webhook-action"></div>;
				})}
			{isEmpty(webhookActions) && <Empty onAdd={openModal} />}
			{modal && (
				<Modal
					className="cwp-gf-wb-action-modal"
					title={__("Webhook Action", TEXT_DOMAIN)}
					onRequestClose={closeModal}
				>
					<div className="wb-field">
						<TextControl
							label={__("Webhook Name", TEXT_DOMAIN)}
							help={__("Custom name for the webhook.", TEXT_DOMAIN)}
							placeholder={__("Webhook Name", TEXT_DOMAIN)}
							type="text"
						/>
					</div>
					<div className="wb-field">
						<TextControl
							placeholder={__("URL", TEXT_DOMAIN)}
							help={__("Will be used in the webhook request.", TEXT_DOMAIN)}
							label={__("Request URL", TEXT_DOMAIN)}
							type="text"
						/>
					</div>
					<div className="row wb-field">
						<div className="row-v">
							<SelectControl
								label={__("Request Formats", TEXT_DOMAIN)}
								options={supportedRequestMethods}
							/>
						</div>
						<div className="row-v">
							<SelectControl
								label={__("Request Method", TEXT_DOMAIN)}
								options={supportedFormats}
							/>
						</div>
					</div>
					<div className="wb-field row">
						<span className="mr-10">
							{" "}
							{__("Request Headers", TEXT_DOMAIN)}{" "}
						</span>
						<RadioGroup
							label={__("Headers", TEXT_DOMAIN)}
							// onChange={setChecked}
							// checked={checked}
						>
							<Radio value={false}>{__("No Headers")}</Radio>
							<Radio value={true}>{__("With Headers")}</Radio>
						</RadioGroup>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default WebhookPicker;
