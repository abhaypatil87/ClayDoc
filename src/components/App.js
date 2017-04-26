import React from 'react';
import Header from './Header';
import ItemList from './ItemList';
import Item from './Item';

const pushState = (object, url) =>
	window.history.pushState(object, '', url);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMessage: 'ClayDoc! from App.',
			items: this.props.initialItems
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
		console.log("Inside Component will unmount");
	}

	render() {
		return (
			<div>
				<Header message={this.state.headerMessage}/>
				{this.loadCurrentItem()}
			</div>
		);
	}

	/* User defined functions */
	loadCurrentItem() {
		if (this.state.currentItemId) {
			return <Item {...this.state.items[this.state.currentItemId]}/>;
		} else {
			return <ItemList onItemClick={this.fetchItem} items={this.state.items}/>;
		}
	}
	fetchItem = (itemId) => {
		pushState({currentItemId: itemId}, `/items/${itemId}`);
		this.setState({
			headerMessage: this.state.items[itemId].name,
			currentItemId: itemId
		})
	}
};

App.propTypes = {
	message: React.PropTypes.string
};
App.defaultProps = {
	message: 'Hellow There'
};

export default App;
