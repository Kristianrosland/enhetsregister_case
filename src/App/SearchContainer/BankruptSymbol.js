import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchContainer.css';

class BankruptSymbol extends React.Component {
  render = () => (
    <div className='bankrupt-status-box'>
      <p className='bankrupt-header'> KONKURS </p>
      <FontAwesome name='ban' style={{fontSize: '60px'}}/>
    </div>
  )
}

export default BankruptSymbol;
