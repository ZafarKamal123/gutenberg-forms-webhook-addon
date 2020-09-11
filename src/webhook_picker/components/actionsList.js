import React from "react";
import { TEXT_DOMAIN } from "../../constants";
const { map, get } = window.lodash;
const { FormToggle, IconButton, PanelRow, Button } = wp.components;
const { __ } = wp.i18n;

/**
 * Will render added webhook lists
 */

function ActionsList({ actions, addNew, onDelete, onSelect }) {
	return (
		<div className="cwp-gf-wb-webhook-list">
			{map(actions, (action) => {
				const name = get(action, "name");
				const id = get(action, "id");

				return (
					<div className="cwp-gf-wb-action">
						<div>
							<span>{name}</span>
						</div>
						<div className="options">
							<IconButton icon="trash" isSmall onClick={() => onDelete(id)} />
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
