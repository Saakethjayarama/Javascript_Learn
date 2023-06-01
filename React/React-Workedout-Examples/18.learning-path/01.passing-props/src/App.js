import React, { Component } from "react";

import Bio from "./BioFC";
import ContactCC from "./ContactCC";
import ContactFC from "./ContactFC";

export default function AppFunction() {
  return (
    <div className="App">
      <Bio name="John" age="5" />
      <ContactFC data={{ email: "john@gmail.com", phone: "8457956895" }} />
    </div>
  );
}
