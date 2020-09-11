import WebhookPicker from "./webhook_picker/index";
import "./style.scss";
import { TEXT_DOMAIN } from "./constants";

const { isEqual, isEmpty, has, get, includes } = window.lodash;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { getBlock } = wp.data.select("core/block-editor");
const { InspectorControls } = wp.blockEditor;
const { PanelBody, Button } = wp.components;
const { __ } = wp.i18n;

const withCustomControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const currentBlock = getBlock(props.clientId),
			currentBlockName = get(currentBlock, "name"),
			isBlockSupported = isEqual(currentBlockName, "cwp/block-gutenberg-forms");

		if (!isBlockSupported) {
			return <BlockEdit {...props} />;
		}

		const { actions } = props.attributes;
		const isWebhookActionAdded = includes(actions, "Webhook");

		return (
			<Fragment>
				<BlockEdit {...props} />
				{!!props.isSelected && (
					<InspectorControls>
						{isWebhookActionAdded && (
							<PanelBody initialOpen={false} title={__("Webhook", TEXT_DOMAIN)}>
								<WebhookPicker {...props} />
							</PanelBody>
						)}
					</InspectorControls>
				)}
			</Fragment>
		);
	};
});

// TODO test if the addon is enabled
addFilter(
	"editor.BlockEdit",
	"cwp-wb-gutenberg-forms-webhook-addon/custom-panel",
	withCustomControls
);
