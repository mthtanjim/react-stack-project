import React from "react";

class controlFrom extends React.Component {
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
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="*******"
          value={password}
          onChange={this.handleChange}
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

export default controlFrom;
