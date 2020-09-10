import React from "react";
import { TEXT_DOMAIN } from "../../constants";

const { Button } = wp.components;
const { __ } = wp.i18n;

export default function Empty({ onAdd }) {
	return (
		<div className="cwp-gf-wb-empty">
			<Button className="editor-post-featured-image__toggle" onClick={onAdd}>
				{__("Add New", TEXT_DOMAIN)}
			</Button>
		</div>
	);
}
