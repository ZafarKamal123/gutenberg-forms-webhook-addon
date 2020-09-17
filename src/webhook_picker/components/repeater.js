import React from "react";
import { TEXT_DOMAIN } from "../../constants";

const { TextControl, SelectControl, Button, Popover } = wp.components;
const { useEffect, useState } = wp.element;
const { __ } = wp.i18n;
const {
	clone,
	set,
	uniqueId,
	isEqual,
	findIndex,
	find,
	isEmpty,
	get,
	each,
	has,
} = window.lodash;
const TagSelector = get(window.cwp_gf_select("cwp/components"), "TagSelector");

function Repeater(props) {
	const [fields, setFields] = useState([]);
	const { queryOptions, queryTitle, optionTitle } = props;

	const defaultCustom = has(props, "defaultCustom")
		? props.defaultCustom
		: false;

	const addField = (custom = false) => {
		const newFields = clone(fields);
		const generatedID = Math.floor(Math.random() * 10000);
		const fieldToAdd = {
			queryValue: "",
			optionValue: "",
			id: generatedID,
			displayTagSelector: false,
			addCustom: custom,
		};

		if (defaultCustom) {
			fieldToAdd.addCustom = true;
		}

		newFields.push(fieldToAdd);
		setFields(newFields);
	};

	const deleteField = (id) => {
		let newFields = clone(fields);
		// deleting field matching the given id
		newFields = newFields.filter((field) => !isEqual(field.id, id));

		setFields(newFields);
	};

	const handleChange = (value, type, id) => {
		const newFields = clone(fields);

		// finding the target field
		const targetField = find(newFields, { id });
		// finding the index of the target field

		const targetIndex = findIndex(newFields, { id });

		if (type === "displayTagSelector") {
			each(newFields, (field) => set(field, "displayTagSelector", false));
		}

		newFields.splice(targetIndex, 1, { ...targetField, [type]: value });

		setFields(newFields);
	};

	useEffect(() => {
		props.onChange(fields); // updating the value
	}, [fields]);

	useEffect(() => {
		const { value } = props;

		if (isEmpty(value)) {
			addField(); // adding placeholder first field
		} else {
			setFields(value);
		}
	}, []);

	return (
		<div className="cwp-gf-wb-repeater-field">
			{!isEmpty(fields) &&
				fields.map((field, idx) => {
					const {
						queryValue,
						optionValue,
						id,
						displayTagSelector,
						addCustom,
					} = field;
					const includeLabel = idx === 0;
					const totalFields = fields.length;

					return (
						<div className="row">
							<div className="query_select">
								{!addCustom && !defaultCustom && (
									<SelectControl
										value={queryValue}
										onChange={(newQueryValue) => {
											handleChange(newQueryValue, "queryValue", id);
										}}
										label={includeLabel ? __(queryTitle, TEXT_DOMAIN) : ""}
										options={queryOptions}
									/>
								)}
								{addCustom && (
									<TextControl
										onChange={(newQueryValue) =>
											handleChange(newQueryValue, "queryValue", id)
										}
										placeholder={__(`Custom ${props.context}...`, TEXT_DOMAIN)}
										value={queryValue}
										label={includeLabel ? __(queryTitle, TEXT_DOMAIN) : ""}
									/>
								)}
							</div>
							<div className="query_value">
								<div className="query_value_select">
									<TextControl
										value={optionValue}
										onChange={(newOptionValue) =>
											handleChange(newOptionValue, "optionValue", id)
										}
										label={includeLabel ? __(optionTitle, TEXT_DOMAIN) : ""}
										placeholder={__("Value..", TEXT_DOMAIN)}
									/>
								</div>
								<div className="query_value_options">
									<div>
										{displayTagSelector && (
											<Popover
												position="bottom center"
												className="cwp-tag-selector"
											>
												<TagSelector
													clientId={props.clientId}
													{...props}
													insertTag={(tag) => {
														handleChange(
															optionValue.concat(" ", tag),
															"optionValue",
															id
														);
													}}
												/>
											</Popover>
										)}
										<Button
											onClick={() =>
												handleChange(
													!displayTagSelector,
													"displayTagSelector",
													id
												)
											}
											showTooltip={true}
											label={__(
												displayTagSelector ? `Close Inserter` : `Insert Tag`,
												TEXT_DOMAIN
											)}
											icon={displayTagSelector ? "no-alt" : "list-view"}
											isSmall
										/>
									</div>
									{totalFields > 1 && (
										<Button
											onClick={() => deleteField(id)}
											showTooltip={true}
											label={__(`Delete ${props.context}`, TEXT_DOMAIN)}
											icon="trash"
											isSmall
										/>
									)}
								</div>
							</div>
						</div>
					);
				})}
			<div className="foot">
				{!defaultCustom && (
					<Button isSmall isDefault onClick={() => addField(true)}>
						{__(`Add Custom ${props.context}`, TEXT_DOMAIN)}
					</Button>
				)}

				<Button isSmall isPrimary onClick={() => addField(false)}>
					{__(`Add ${props.context}`, TEXT_DOMAIN)}
				</Button>
			</div>
		</div>
	);
}

export default Repeater;
