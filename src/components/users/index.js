import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({
      users: result.data,
    });
  }

  putFiles = () =>
    this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>{this.putFiles()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
