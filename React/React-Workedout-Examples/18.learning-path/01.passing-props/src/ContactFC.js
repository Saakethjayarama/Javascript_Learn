import React from "react";

function Contact(props) {
  const { email, phone } = props.data;
  return (
    <div>
      Email: {email}
      <br />
      Phone: {phone}
      <br />
    </div>
  );
}

export default Contact;
