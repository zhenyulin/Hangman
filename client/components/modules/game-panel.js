import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LetterButtonGroup from 'components/widgets/letter-button-group';

export class GamePanel extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    life: PropTypes.number,
    mask: PropTypes.string,
    complete: PropTypes.bool,
    guessed: PropTypes.arrayOf(PropTypes.string),
    guess: PropTypes.func,
  };

  render() {
    const { className, life, mask, complete, guessed } = this.props;
    const { guess } = this.props;
    return (
      <div className={className}>
        <div className="life">Life: {life}</div>
        <div>Animal Name: {mask}</div>
        {complete || life === 0 ? null : <LetterButtonGroup guess={guess} guessed={guessed} />}
        {complete ? <div>You have got the right word!</div> : null}
        {life === 0 ? <div>Sorry, you did not get it this time.</div> : null}
      </div>
    );
  }
}

export default styled(GamePanel)`
  .life {
    float: right;
  }
`;
