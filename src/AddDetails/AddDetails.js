import React    from "react";
import template from "./AddDetails.jsx";
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getThumbnails,getProductosById } from '../Actions/Actions';
import { productos } from '../Firebase';

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

  addView(e){
    let nviews = 0;
    nviews = this.props.productoDetail.views;
    console.log("iniviews",this.props.productoDetail);
    nviews = nviews === undefined?0:nviews + 1;
    console.log("ddddd",nviews);
    productos.child(e).update({
      views: nviews
    });
  }

  componentDidMount(){
    //this.props.getProductosById(this.props.match.params.add);
    
    if(this.props.match.params.add){
        
      this.loadAdd(this.props.match.params.add);
    }
    else{
      return <Redirect to="/Products" />;
    }
      
      
      
  }

  componentWillReceiveProps(nprops){
    console.log(nprops.match.params.add);
    this.addView(nprops.match.params.add);
  }
  
  render() {
    if(this.props.productoDetail.sorry)
    return <h1>{this.props.productoDetail.sorry}</h1>
    else
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductosById })(AddDetails);
