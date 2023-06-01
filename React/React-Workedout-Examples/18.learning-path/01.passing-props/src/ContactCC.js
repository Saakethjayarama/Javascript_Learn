import React, { Component } from "react";

export class ContactCC extends Component {
  render() {
    const { email, phone } = this.props.data;
    return (
      <div>
        Email: {email} <br />
        Phone: {phone} <br />
      </div>
    );
  }
}

export default ContactCC;
