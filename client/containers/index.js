import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Actions as actionsCreator } from 'controllers';

export class App extends React.PureComponent {
	render() {
		const {end, complete, life, guessed, mask} = this.props;
		const {className} = this.props;
		const ALPHABET = [
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z'
		];

		return (
			<div className={className}>
				{end ? <div>You have played all games.</div> :
					<div>
						<div className='life'>Life: {life}</div>
						<div>Animal Name: {mask}</div>
						{complete || life === 0 ? null :
							<div className='letterButtonContainer'>
								{ALPHABET.map(letter =>
									<button
										className='letterButton'
										key={letter}
										disabled={guessed.indexOf(letter) > -1}
										onClick={() => this.props.guess(letter)}
									>
										{letter}
									</button>
								)}
							</div>
						}
						{complete ?
							<div>You have got the right word!</div>
							 : null
						}
						{life === 0 ?
							<div>Sorry, you didn't get it this time.</div> 
							: null
						}
						<button
							className='nextButton'
							onClick={() => this.props.next()}
						>
							Next Word
						</button>
					</div>
				}
				<div className='result'>
					<a href='/management'>Game Summary</a>
				</div>
				<button
					className='restartButton' 
					onClick={() => this.props.restart()}
				>
					Restart Game
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	end: state.get('end'),
	complete: state.get('complete'),
	life: state.get('life'),
	guessed: state.get('guessed'),
	mask: state.get('mask'),
});

const component = styled(App)`
	width: 360px;
	margin: 240px auto;
	font-family: 'Helvetica';

	div {
		line-height: 30px;
	}

	button {
		height: 30px;
		border: none;
		margin: 5px;
		cursor: pointer;
		font-size: 13px;
	}

	button[disabled]{
		background: grey;
		color: white;
	}

	.life {
		float: right;
	}

	.letterButtonContainer{
		width: 360px;
	}

	.letterButton {
		width: 30px;
		background: lightblue;
	}

	.nextButton {
		background: lightgreen;
		margin-top: 20px;
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

export default connect(mapStateToProps, actionsCreator)(component);