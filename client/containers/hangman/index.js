import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Actions as Controllers } from 'controllers/hangman';

import GamePanel from './elements/game-panel';
import BasicButton from 'components/basic-button';

export class Hangman extends React.PureComponent {
	render() {
		const {className, end, complete, life, guessed, mask} = this.props;
		const {guess, next, restart} = this.props;

		return (
			<div className={className}>
				{end ? <div>You have played all games.</div> :
					<GamePanel
						life={life}
						complete={complete}
						mask={mask}
						guessed={guessed}
						guess={guess}
						next={next}
					/>
				}
				<div className='result'>
					<a href='/management'>Game Summary</a>
				</div>
				<BasicButton className='restartButton' func={restart} text='Restart Game' />
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

const component = styled(Hangman)`
	width: 360px;
	margin: 240px auto;
	font-family: 'Helvetica';

	div {
		line-height: 30px;
	}

	.result {
		margin-top: 30px;
		line-height: 50px;
		border-top: 1px solid grey;
	}

	.restartButton {
		background: tomato;
		float: right;
		margin-top: -40px;
	}
`;

export default connect(mapStateToProps, Controllers)(component);