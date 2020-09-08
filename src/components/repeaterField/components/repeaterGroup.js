import React from "react";
import { TEXT_DOMAIN } from "../../../constants";
const { __ } = wp.i18n;
const { get } = window.lodash;

function RepeaterGroup(props) {
	const { TextControl, SelectControl, Button, IconButton } = props.components;
	const { useState, useEffect } = wp.element;

	const requestMethods = [
		{
			label: __("Request Type", TEXT_DOMAIN),
			value: null,
		},
		{
			label: "GET",
			value: "get",
		},
		{
			label: "POST",
			value: "post",
		},
	];
	const id = get(props, "field.id");
	const value = get(props, "field.value");

	return (
		<div className="cwp-gf-wb-repeater-grp">
			<TextControl placeholder={__("Action Name", TEXT_DOMAIN)} />
			<div className="row">
				<div className="cwp-gf-wb-field">
					<TextControl
						type="url"
						onChange={(v) => console.log(v)}
						placeholder={__("Remote URL", TEXT_DOMAIN)}
					/>
				</div>
				<div className="cwp-gf-wb-field">
					<SelectControl options={requestMethods} />
				</div>
			</div>
			<div className="actions">
				<IconButton isDefault onClick={() => props.onDelete(id)} icon="trash" />
			</div>
		</div>
	);
}

export default RepeaterGroup;
