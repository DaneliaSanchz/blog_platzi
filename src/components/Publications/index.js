import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
// import Comments from './Comments';
import * as usersActions from '../../actions/usersActions';
import * as publicationsActions from '../../actions/publicationsActions';

const { getAll: usersGetAll } = usersActions;
const { getPerUser: publicationsGetPerUser } = publicationsActions;

class Publications extends Component {
  async componentDidMount() {
    const {
      usersGetAll,
      publicationsGetPerUser,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await usersGetAll();
    }
    if (this.props.usersReducer.error) {
      return;
    }
    if (!('publications_key' in this.props.usersReducer.users[key])) {
      publicationsGetPerUser(key);
    }
  }

  putUser = () => {
    const {
      usersReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (usersReducer.error) {
      return <Fatal message={usersReducer.error} />;
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Spinner />;
    }

    const name = usersReducer.users[key].name;

    return <h1>Publications' {name}</h1>;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.match.params.key}
        {this.putUser()}
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer,
  };
};

const mapDispatchToProps = {
  usersGetAll,
  publicationsGetPerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
