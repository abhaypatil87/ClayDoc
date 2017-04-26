import React, {Component} from 'react';
class Item extends Component {

	render() {
		return (
			<div className="Item">
				{this.props.id}
			</div>
		);
	}
}

Item.propTypes = {
	id: React.PropTypes.number
};

export default Item;
