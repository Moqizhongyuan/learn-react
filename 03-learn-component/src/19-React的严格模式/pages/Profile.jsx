import React, { PureComponent } from "react";

export class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("Profile UNSAFE_componentWillMount");
  }

  componentDidMount() {
    // console.log(this.refs.title);
    console.log("profile componentDidMount");
  }
  render() {
    console.log("Profile render");
    return (
      <div>
        <h2 ref="title">Profile Title</h2>
      </div>
    );
  }
}

export default Profile;
