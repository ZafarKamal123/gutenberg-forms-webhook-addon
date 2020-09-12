import React from "react";
import { TEXT_DOMAIN } from "../../constants";
const { map, get } = window.lodash;
const { FormToggle, IconButton, Flex, Button, Modal } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useState } = wp.element;

/**
 * Will render added webhook lists
 */

function ActionsList({ actions, addNew, onDelete, onSelect }) {
	const [deleteConfirmationModal, setDeleteConfirmationModal] = useState({
		render: false,
		id: "",
	});

	return (
		<div className="cwp-gf-wb-webhook-list">
			{deleteConfirmationModal.render && (
				<Modal
					title={__("Delete Webhook?", TEXT_DOMAIN)}
					onRequestClose={() =>
						setDeleteConfirmationModal({ render: false, id: "" })
					}
				>
					<p>
						{" "}
						{__(
							"This will permanently delete the webhook action.",
							TEXT_DOMAIN
						)}
					</p>
					<div style={{ textAlign: "right" }}>
						<Button isDefault style={{ marginRight: 10 }}>
							{" "}
							{__("Cancel", TEXT_DOMAIN)}
						</Button>
						<Button
							isPrimary
							onClick={() => {
								onDelete(deleteConfirmationModal.id);
								setDeleteConfirmationModal({ render: false, id: "" });
							}}
						>
							{" "}
							{__("Delete", TEXT_DOMAIN)}
						</Button>
					</div>
				</Modal>
			)}
			{map(actions, (action) => {
				const name = get(action, "name");
				const id = get(action, "id");

				return (
					<div className="cwp-gf-wb-action">
						<div>
							<span>{name}</span>
						</div>
						<div className="options">
							<IconButton
								icon="trash"
								isSmall
								onClick={() => setDeleteConfirmationModal({ render: true, id })}
							/>
							<IconButton
								icon="admin-generic"
								isSmall
								onClick={() => onSelect(action)}
							/>
						</div>
					</div>
				);
			})}
			<div className="cwp-gf-wb-action-foot">
				<Button isSmall isPrimary onClick={addNew}>
					{__("Add New")}
				</Button>
			</div>
		</div>
	);
}

export default ActionsList;
