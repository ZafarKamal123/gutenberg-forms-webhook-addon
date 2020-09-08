import React from "react";
import { TEXT_DOMAIN } from "../../constants";
import RepeaterGroup from "./components/repeaterGroup";
import Empty from "./components/empty";
const { __ } = wp.i18n;
const { get, clone, map, isEmpty, isEqual } = window.lodash;

function RepeaterField(props) {
	const { useEffect, useState } = props.element;
	const { Button } = props.components;

	const [fields, setFields] = useState([]);
	const fieldSchema = {
		value: {
			remoteUrl: "",
			actionName: "",
			requestType: null,
		},
	};

	const addField = () => {
		const newFields = clone(fields);
		const SAFE_MAX_RANDOM = 2000;

		newFields.push({
			value: fieldSchema.value,
			id: Math.floor(Math.random() * SAFE_MAX_RANDOM),
		});

		setFields(newFields);
	};

	const deleteField = (id) => {
		const newFields = clone(fields);
		const withoutCurrentField = newFields.filter(
			(field) => !isEqual(get(field, "id"), id)
		);

		setFields(withoutCurrentField);
	};

	const handleChange = (updatedValue) => console.log(updatedValue);

	return (
		<div className="cwp-gf-wb-repeater-field">
			{/* {map(fields, (field, idx) => {
				return (
					<RepeaterGroup
						{...props}
						key={idx}
						field={field}
						onDelete={deleteField}
						onChange={handleChange}
					/>
				);
			})} */}
			<div>
				<table className="wp-list-table widefat plugins striped">
					<thead>
						<tr>
							<th
								scope="col"
								id="name"
								className="manage-column column-name column-primary"
							>
								Name
							</th>
							<th scope="col" id="url" className="manage-column column-primary">
								Webhook URL
							</th>
							<th
								scope="col"
								id="actions"
								className="manage-column column-primary"
							>
								Actions
							</th>
						</tr>
					</thead>
					<tbody id="the-list">
						<tr>
							<td className="plugin-title column-primary">
								<strong className="field-title">Name: </strong>
								<strong>Zapier</strong>
							</td>
							<td className="column-description url">
								<strong className="field-title">Url: </strong>
								<button type="button" className="components-button is-link">
									www.zapier.com
								</button>
							</td>
							<td className="column-actions actions">
								<strong className="field-title">Actions: </strong>
								<a
									aria-current="page"
									className="active"
									href="/wp-admin/admin.php?page=gutenberg_forms#/entries/11"
								>
									<button
										type="button"
										className="components-button has-icon"
										aria-label="View Entry"
									>
										<svg
											aria-hidden="true"
											role="img"
											focusable="false"
											xmlns="http://www.w3.org/2000/svg"
											width={20}
											height={20}
											viewBox="0 0 20 20"
											className="dashicon dashicons-visibility"
										>
											<path d="M19.7 9.4C17.7 6 14 3.9 10 3.9S2.3 6 .3 9.4L0 10l.3.6c2 3.4 5.7 5.5 9.7 5.5s7.7-2.1 9.7-5.5l.3-.6-.3-.6zM10 14.1c-3.1 0-6-1.6-7.7-4.1C3.6 8 5.7 6.6 8 6.1c-.9.6-1.5 1.7-1.5 2.9 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-1.2-.6-2.3-1.5-2.9 2.3.5 4.4 1.9 5.7 3.9-1.7 2.5-4.6 4.1-7.7 4.1z" />
										</svg>
									</button>
								</a>
								<a
									aria-current="page"
									className="active"
									href="/wp-admin/admin.php?page=gutenberg_forms#/entries/form-e093475f"
								>
									<button
										type="button"
										className="components-button has-icon"
										aria-label="List All Form Entries"
									>
										<svg
											aria-hidden="true"
											role="img"
											focusable="false"
											xmlns="http://www.w3.org/2000/svg"
											width={20}
											height={20}
											viewBox="0 0 20 20"
											className="dashicon dashicons-list-view"
										>
											<path d="M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z" />
										</svg>
									</button>
								</a>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th
								scope="col"
								className="manage-column column-form form column-primary"
							>
								Name
							</th>
							<th scope="col" className="manage-column status column-primary">
								Webhook Url
							</th>
							<th scope="col" className="manage-column actions column-primary">
								Actions
							</th>
						</tr>
					</tfoot>
				</table>
			</div>

			{!isEmpty(fields) ? (
				<Button onClick={addField} isDefault>
					{__("New Action", TEXT_DOMAIN)}
				</Button>
			) : (
				<Empty addField={addField} {...props} />
			)}
		</div>
	);
}

export default RepeaterField;
