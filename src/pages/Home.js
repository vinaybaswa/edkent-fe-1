import React from 'react';
import './Home.scss'
import Cardlist from '../components/Cardlist'

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }))
  }

  render() {
    return (
      <div className='home'>
        <button type="button" className="btn btn-primary">Upgrade</button>
        <Cardlist users={this.state.users} />
      </div>
    );
  }

}

export default Home;