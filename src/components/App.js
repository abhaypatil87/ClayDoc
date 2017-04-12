import React from 'react';
import Header from './Header';
import ClayItemPreview from './ClayItemPreview';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMessage: 'ClayDoc! from App.'
		};
	}

	componentDidMount() {
		console.log("Inside Component Did Mount");
	}

	componentWillUnmount() {
		console.log("Inside Component will unmount");
	}
	render() {
		return (
			<div>
				<Header message={this.state.headerMessage}/>
				<div>
					{this.props.data.map(clayItem =>
						<ClayItemPreview {...clayItem}></ClayItemPreview>
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
