import React from "react";
import Empty from "./components/empty";
import { TEXT_DOMAIN } from "../constants";
import WebhookFields from "./components/fields";
import ActionsList from "./components/actionsList";

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
	uniqueId,
	isEqual,
	has,
	findIndex,
} = window.lodash;
const { __ } = wp.i18n;

function WebhookPicker(props) {
	const [modal, setModal] = useState(false);
	const [webhookActions, setWebhookActions] = useState([]);
	const [selectedWebhook, setSelectedWebhook] = useState([]);

	const openModal = () => setModal(true);
	const closeModal = () => {
		setModal(false);
		setSelectedWebhook({}); // un selecting the selected webhook
	};

	// this will update the webhook if there is selected in the selectedWebhook

	const addAction = (webhookAction) => {
		const newActions = clone(webhookActions);
		const generatedId = Math.floor(Math.random() * 1000);

		if (has(webhookAction, "id") && !isEmpty(selectedWebhook)) {
			const selectedWebhookIndex = findIndex(webhookActions, {
				id: webhookAction.id,
			});

			newActions.splice(selectedWebhookIndex, 1, webhookAction); // updating the selected webhook
			setWebhookActions(newActions);
			setSelectedWebhook({}); // un selecting the selected webhook
		} else {
			newActions.push({
				...webhookAction,
				id: generatedId,
			});
			setWebhookActions(newActions);
		}

		props.setAttributes({
			extendedData: {
				...props.attributes.extendedData,
				webhooks: newActions,
			},
		});
		closeModal();
	};

	const deleteAction = (id) => {
		let newActions = clone(webhookActions);
		newActions = newActions.filter((action) => !isEqual(action.id, id));
		setWebhookActions(newActions);
		props.setAttributes({
			extendedData: {
				...props.attributes.extendedData,
				webhooks: newActions,
			},
		});
	};

	const onSelect = (action) => {
		setSelectedWebhook(action);
		openModal();
	};

	useEffect(() => {
		const savedWebhooks = get(props.attributes, "extendedData.webhooks");

		if (!isEmpty(savedWebhooks)) {
			setWebhookActions(savedWebhooks);
		}
	}, []);

	return (
		<div className="cwp-webhook-picker">
			{isEmpty(webhookActions) && <Empty onAdd={openModal} />}
			{!isEmpty(webhookActions) && (
				<ActionsList
					addNew={openModal}
					onDelete={deleteAction}
					onSelect={onSelect}
					actions={webhookActions}
				/>
			)}
			{modal && (
				<Modal
					className="cwp-gf-wb-action-modal"
					title={__("Webhook Action", TEXT_DOMAIN)}
					onRequestClose={closeModal}
					shouldCloseOnEsc={false}
					shouldCloseOnClickOutside={false}
				>
					<WebhookFields
						value={selectedWebhook}
						onAdd={addAction}
						closeModal={closeModal}
					/>
				</Modal>
			)}
		</div>
	);
}

export default WebhookPicker;
