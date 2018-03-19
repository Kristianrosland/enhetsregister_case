import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchContainer.css';

class LinkButton extends React.Component {
  render () {
    if (!this.props.url) return null;
    let url = this.props.url;
    if (!url.startsWith('http'))
      url = 'http://' + url;

    const label = this.props.selected
      ? <p className='homepage-label'> {url} </p>
      : null;

    const onClick = () => window.location.replace(url);
    return (
      <div className='link-button' onClick={onClick}>
          <div> <FontAwesome name={this.props.icon} /> </div>
          <div> { label } </div>
      </div>
    );
  }
}

export default LinkButton;
