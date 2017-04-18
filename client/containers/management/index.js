import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

export class Management extends React.PureComponent {
	render() {
		const {className} = this.props;

		return (
			<div className={className}>
				management page
			</div>
		);
	}
}

const mapStateToProps = state => ({
	test: 0
});

const component = styled(Management)`

`;

export default connect(mapStateToProps)(component);