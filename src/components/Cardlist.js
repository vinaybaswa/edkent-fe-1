import React from 'react';
import './Cardlist.scss';
import Card from './Card';

const Cardlist = props => {
  return (
    <div className='card-list'>
      {props.users.map(user => {
        return <Card key={user.id} user={user} />
      })}
    </div>)
}

export default Cardlist;