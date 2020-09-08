import React from "react";
import { TEXT_DOMAIN } from "../../../constants";
const { __ } = wp.i18n;

function Empty(props) {
	const { Button } = props.components;
	return (
		<div className="cwp-gf-wb-empty-fields" onClick={props.addField}>
			<Button> {__("Create Your first Webhook Action +", TEXT_DOMAIN)}</Button>
		</div>
	);
}

export default Empty;
