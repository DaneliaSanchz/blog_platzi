import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Table from './Table';
import * as usersActions from '../../actions/usersActions';

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  putContent = () => {
    debugger;
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return <Table />;
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.putContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
