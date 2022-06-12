import React from "react";
import PropTypes from 'prop-types' 

const TextInput = props => {
    return (
      <div className="form-group" >
        <label htmlFor={props.name}>{props.label}</label>
          <input
            className="form-control"
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.name}
            onChange={props.onChange}
          /> 
      </div>
    )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  type: "text",
  lable: '',
  placeholder: ''
};

class SpiltForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    
    this.setState({name: '', email: '', password: ''})
  };

  render() {
      const {name, email, password} = this.state;
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
       <TextInput
        name= 'name'
        label="Enter Name"
        placeholder="Your Name"
        value={name}
        onChange= {this.handleChange}
       />
       <TextInput
        name= 'email'
        label="Enter email"
        placeholder="Your email"
        value={email}
        onChange= {this.handleChange}
       />
       <TextInput
        name= 'password'
        label="Enter password"
        placeholder="Your password"
        value={password}
        onChange= {this.handleChange}
       />



        <button className="btn-secondary" type="submit">
          Submit
        </button>
      </form>

      
      <br/><br/>
      <h2>Showing information</h2>
        {this.state.name} <br/>
        {this.state.email} <br/>
        {this.state.password} <br/>

    </div>
    );
  }
}

export default SpiltForm;
