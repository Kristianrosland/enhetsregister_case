import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  render () {
    const handleChange = (event) => {
      if (event.target.value.length < this.state.value.length ||
          event.target.value.length >= 3) {
        this.props.submit(event.target.value);
      }
      this.setState({value: event.target.value})
    };
    const handleSubmit = (event) => event.preventDefault();

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Søk med navn eller organisasjonsnummer'
          className='input-field box-sizing'
          value={this.state.value}
          onChange={handleChange} />
      </form>
    );
  }
}

export default InputField;
