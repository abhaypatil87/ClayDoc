import React, {Component} from 'react';

class ClayItemPreview extends Component {
	loadClayItemDetails = () => {
		this.props.onClick(this.props.id);
	};

	render() {
		return (
			<div className="link ClayItemPreview row" onClick={this.loadClayItemDetails}>
				<div className="item-name">{this.props.name}</div>
				<div>{this.props.clay}</div>
				<div>{this.props.date.thrown}</div>
			</div>
		);
	}
}

ClayItemPreview.propTypes = {
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	clay: React.PropTypes.string,
	date: React.PropTypes.object,
	onClick: React.PropTypes.func
}

export default ClayItemPreview;
