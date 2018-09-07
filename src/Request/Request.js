import React    from "react";
import template from "./Request.jsx";

class Request extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Request;
