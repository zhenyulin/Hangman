import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { push } from 'react-router-redux';

import BasicButton from 'components/basic-button';

export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const { navigate } = this.props;
    return (
      <div className={className}>
        <div className="navigation">
          <BasicButton
            className="statusButton"
            func={() => navigate('/test')}
            text="Test"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(push(location)),
});

const component = styled(Component)`
  width: 360px;
  margin: 240px auto;
  font-family: 'Helvetica';
  line-height: 30px;

  .navigation {
    margin-top: 30px;
    line-height: 50px;
    border-top: 1px solid grey;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(component);
