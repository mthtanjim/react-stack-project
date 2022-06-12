import React, { Component } from "react"
import Bio from "./Bio"
import "./profile.index.css"
import Skills from "./Skills"
import Social from './Social'



class Profile extends Component {

  me = {
    name: 'Tanjimul hasan tanjim',
    title: 'Full Stack Web Developer'
  }


  render() {
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills />
        <Social/>
      </div>
    );
  }
}

export default Profile;
