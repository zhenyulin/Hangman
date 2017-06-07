import React from 'react';
import styled from 'styled-components';

export class FunctionButton extends React.PureComponent {
  static propTypes = {
    func: React.PropTypes.func,
    text: React.PropTypes.string,
    disabled: React.PropTypes.bool,
  };

  static defaultProps = {
    func: () => null,
  };

  render() {
    const { className, text, disabled } = this.props;
    const { func } = this.props;
    return (
      <button
        className={className}
        onClick={() => func()}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}

export default styled(FunctionButton)`
  height: 30px;
  border: none;
  margin: 5px;
  cursor: pointer;
  font-size: 13px;

  &[disabled] {
    color: grey;
  }
`;
