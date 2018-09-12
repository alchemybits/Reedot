import React    from "react";
import template from "./AddDetails.jsx";
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getThumbnails,getProductosById } from '../Actions/Actions';

function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productoDetail: state.productoDetail
  };
}

class AddDetails extends React.Component {

  constructor(props){
    super(props);

    this.loadAdd = this.loadAdd.bind(this);

  }

  loadAdd(e){
    
    this.props.getProductosById(e);
  }

  componentDidMount(){
    this.props.getProductosById("kkolj");
    
    if(this.props.match.params.add)
      this.loadAdd(this.props.match.params.add);
    else
      return <Redirect to="/Products" />;
      
      
  }
  
  render() {
    if(this.props.productoDetail.sorry)
    return <h1>{this.props.productoDetail.sorry}</h1>
    else
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductosById })(AddDetails);
