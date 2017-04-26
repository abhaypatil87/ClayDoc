import React from 'react';
import ClayItemPreview from './ClayItemPreview';

const ItemList = ({items, onItemClick}) => (
	<div className="item-list" onClick="">
		{Object.keys(items).map(clayItemId =>
			<ClayItemPreview
				key={clayItemId}
				onClick={onItemClick}
				{...items[clayItemId]}>
			</ClayItemPreview>
		)}
	</div>
);

ItemList.propTypes = {
	items: React.PropTypes.object,
	onItemClick: React.PropTypes.func
};

export default ItemList;
