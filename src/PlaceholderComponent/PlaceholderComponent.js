import React    from "react";
import template from "./PlaceholderComponent.jsx";

class PlaceholderComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default PlaceholderComponent;
