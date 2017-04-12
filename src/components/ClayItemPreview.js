import React from 'react';

const ClayItemPreview = (clayItem) => (
	<div className="ClayItemPreview row">
		<div className="item-name">{clayItem.name}</div>
		<div>{clayItem.clay}</div>
		<div>{clayItem.date.thrown}</div>
	</div>
);

export default ClayItemPreview;
