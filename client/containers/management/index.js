import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { push } from 'react-router-redux';

import BasicButton from 'components/basic-button';

export class Management extends React.PureComponent {
  static propTypes = {
    played: React.PropTypes.object,
  };

	// TODO: clean up the workaround
  static defaultProps = {
    played: {
      size: 0,
    },
  };

  render() {
    const { className, played } = this.props;
    const { navigate } = this.props;
    return (
      <div className={className}>
        <div className="summary">
          {played.size ? Object.keys(played.toJS()).map(item => (
            <div key={item}>{item} : {played[item] ? 'success' : 'fail'}</div>
						)) : 'No word has been played'}
        </div>
        <div className="navigation">
          <BasicButton
            className="statusButton"
            func={() => navigate('/')}
            text="Back to Game"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  played: state.hangman.get('played'),
});

const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(push(location)),
});

const component = styled(Management)`
	width: 360px;
	margin: 240px auto;
	font-family: 'Helvetica';
	line-height: 30px;

	.summary {
		height: 150px;
	}

	.navigation {
		margin-top: 30px;
		line-height: 50px;
		border-top: 1px solid grey;
	}
`;

export default connect(mapStateToProps, mapDispatchToProps)(component);
