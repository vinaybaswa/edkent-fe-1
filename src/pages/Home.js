import React from 'react';
import './Home.scss'
import Cardlist from '../components/Cardlist'
import { users } from './Userdata.js';

function Home() {
  return (
    <div className='home'>
      <button type="button" className="btn btn-primary">Upgrade</button>
      <Cardlist users={users} />
    </div>
  );
}

export default Home;