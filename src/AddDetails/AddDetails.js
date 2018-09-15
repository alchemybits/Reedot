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
    
    nviews = nviews === undefined?0:nviews + 1;
    
    if(this.props.productoDetail)
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
  componentWillUnmount() {
    this.addView(this.props.match.params.add);
  }

  componentWillReceiveProps(nprops){
    console.log('COMPONENT RECEVIED A NPROP',nprops.match.params.add);
    console.log('COMPONENT RECEVIED A PROP',this.props.match.params.add);
    // if(nprops.match.params.add)
      // 
  }
  
  render() {
    if(this.props.productoDetail.sorry)
    return <h1>{this.props.productoDetail.sorry}</h1>
    else{      
      return template.call(this);
    }
    
  }
}

export default connect(mapStateToProps,{ getProductosById })(AddDetails);
