import React from "react";
import { TEXT_DOMAIN } from "../../constants";

const { TextControl, SelectControl, Button } = wp.components;
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
} = window.lodash;

function Repeater(props) {
	const [fields, setFields] = useState([]);
	const { queryOptions, queryTitle, optionTitle } = props;

	const addField = () => {
		const newFields = clone(fields);
		const generatedID = uniqueId(); // generator function

		newFields.push({
			queryValue: "",
			optionValue: "",
			id: generatedID,
		});
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
			{fields.map((field, idx) => {
				const { queryValue, optionValue, id } = field;
				const includeLabel = idx === 0;
				const totalFields = fields.length;

				return (
					<div className="row">
						<div className="query_select">
							<SelectControl
								value={queryValue}
								onChange={(newQueryValue) =>
									handleChange(newQueryValue, "queryValue", id)
								}
								label={includeLabel ? __(queryTitle, TEXT_DOMAIN) : ""}
								options={queryOptions}
							/>
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
								<Button
									showTooltip={true}
									label={__(`Insert Tag`, TEXT_DOMAIN)}
									icon="list-view"
									isSmall
								/>
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
				<Button isSmall isPrimary onClick={addField}>
					{__(`Add ${props.context}`, TEXT_DOMAIN)}
				</Button>
			</div>
		</div>
	);
}

export default Repeater;
