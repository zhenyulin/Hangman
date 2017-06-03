import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Actions as Controllers } from 'controllers/hangman';
import { push } from 'react-router-redux';

import GamePanel from './elements/game-panel';
import BasicButton from 'components/basic-button';

export class Hangman extends React.PureComponent {
  render() {
    const { className, end, complete, life, guessed, mask } = this.props;
    const { guess, next, restart, navigate } = this.props;
    return (
      <div className={className}>
        {end ? <div>You have played all games.</div> :
        <GamePanel {...{ life, complete, mask, guessed, guess }} />
				}
        <div className="navigation">
          <BasicButton
            className="statusButton"
            func={() => navigate('/management')}
            text="Game Summary"
          />
          <BasicButton
            className="nextButton"
            disabled={end}
            func={next}
            text="Next Word"
          />
          <BasicButton
            className="restartButton"
            func={restart}
            text="Restart Game"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  end: state.hangman.get('end'),
  complete: state.hangman.get('complete'),
  life: state.hangman.get('life'),
  guessed: state.hangman.get('guessed'),
  mask: state.hangman.get('mask'),
});

const mapDispatchToProps = dispatch => ({
  guess: letter => dispatch(Controllers.guess(letter)),
  next: () => dispatch(Controllers.next()),
  restart: () => dispatch(Controllers.restart()),
  navigate: location => dispatch(push(location)),
});

const component = styled(Hangman)`
	width: 360px;
	margin: 240px auto;
	font-family: 'Helvetica';
	line-height: 30px;

	.navigation {
		margin-top: 30px;
		line-height: 50px;
		border-top: 1px solid grey;

		.nextButton {
			background: lightgreen;
			float: right;
			margin-top: 10px;
		}

		.restartButton {
			background: tomato;
			float: right;
			margin-top: 10px;
		}
	}
`;

export default connect(mapStateToProps, mapDispatchToProps)(component);
