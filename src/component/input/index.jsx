import React from "react";

class Inputs extends React.Component {
  state = {
    names: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
    skills: []

  };

  change = (event) => {
    console.log(event.target.name);
    this.setState({ gender: event.target.value });
  };

  check = (event) => {
      this.setState({agree: event.target.checked}) 
  }

  skillsChange = (event) => {
   
        if (event.target.checked) {
            
        }
  }

  showdata = (event) => {
    console.log(this.state);
  };

  render() {
    const { names, bio, birthDay, country, agree, skills } = this.state;
    return (
      <div className="form-control ">
        <input
          onChange={this.change}
          value={names}
          className="form-control my-2"
          placeholder="Name"
          type="text"
          name="names"
        />

        <select
          onChange={this.change}
          value={country}
          className="my-2"
          name="country"
        >
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakisthan">Pakisthan</option>
          <option value="Africa">Africa</option>
        </select>

        <input
          onChange={this.change}
          value={birthDay}
          className="form-control my-2 "
          name="birthDay"
          type="date"
        />

        <textarea
          onChange={this.change}
          value={bio}
          className="form-control my-2 "
          name="bio"
          placeholder="Write Something"
        ></textarea>

        <div>
          <input
            type="radio"
            name="gender"
            value='Male'
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value='others'
            onChange={this.handleChange}
          />
          Others
        </div>

        <div>
            skills: <br/>
            <input type="checkbox" name="skills" value="Java" checked={skills.includes} onChange={this.skillsChange}/>
            Java
        </div>
 
        <div>
            <input type="checkbox" name="agree" checked={agree} onChange={this.check} />
            I agree to all the terms & condition
        </div>
        <br />

        <br />

        <button onClick={this.showdata} className="btn bg-dark text-light">
          Show Data
        </button>
      </div>
    );
  }
}

export default Inputs;
