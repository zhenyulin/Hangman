import React from 'react';
import styled from 'styled-components';

export class LetterButtonGroup extends React.PureComponent {
  static propTypes = {
    guess: React.PropTypes.func,
    guessed: React.PropTypes.object,
  };

  static defaultProps = {
    guess: () => null,
  };

  render() {
    const ALPHABET = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
      'w', 'x', 'y', 'z',
    ];
    const { className, guessed } = this.props;
    const { guess } = this.props;
    return (
      <div className={className}>
        {ALPHABET.map((letter) => {
          const disabled = guessed.indexOf(letter) > -1;
          return (
            <button
              disabled={disabled}
              onClick={() => guess(letter)}
              key={letter}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  }
}

export default styled(LetterButtonGroup)`
	width: 360px;

	button {
		height: 30px;
		border: none;
		margin: 5px;
		cursor: pointer;
		font-size: 13px;
		width: 30px;
		background: lightblue;
	}

	button[disabled] {
		background: grey;
		color: white;
	}
`;
