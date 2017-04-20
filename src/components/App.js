import React from 'react';
import Header from './Header';
import ClayItemPreview from './ClayItemPreview';
import data from '../clay';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMessage: 'ClayDoc! from App.',
			data: []
		};
	}

	componentDidMount() {
		this.setState({
			data: data.content
		})
	}

	componentWillUnmount() {
		console.log("Inside Component will unmount");
	}
	render() {
		return (
			<div>
				<Header message={this.state.headerMessage}/>
				<div>
					{this.state.data.map(clayItem =>
						<ClayItemPreview key={clayItem.id} {...clayItem}></ClayItemPreview>
					)}

				</div>
			</div>
		);
	}
};

App.propTypes = {
	message: React.PropTypes.string
};
App.defaultProps = {
	message: 'Hellow There'
};

export default App;
