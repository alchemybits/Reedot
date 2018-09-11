import React    from "react";
import template from "./Request.jsx";
import { connect } from 'react-redux';
import { getRequests,getThumbnails,getFeaturedrequests } from '../Actions/Actions';



function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    requests: state.requests
  };
}


class Request extends React.Component {
  constructor(){
    super();
    
    this.state = {
      requests: ["0"],
      collection: []
    };

    this.ssearchQueryearch = this.searchQuery.bind(this);
  }

  
  
  getThumbnail(s){

		let arre = [];
		let tbs = Object.values(this.props.thumbnails);
		let tbn = ""
		s = s.substring(0, s.indexOf('?'));
		var n = s.lastIndexOf('/');
		s = s.substring(n + 1);

		tbs.map(tb =>{
			if(tb.path.includes(s)){
				tbn = tb.thumbnail;
			}
			

		})

		return tbn;


  }  

  componentDidMount(){
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ requests: nextProps.requests });  
  }

  componentWillMount() {
    this.props.getRequests();
  }

  searchQuery(e){
    e.preventDefault();

    console.log("goona searchbar-input");

    const cat = this.props.match.params.cat;
    const subcat = this.props.match.params.subcat;
    this.props.getRequests(cat,subcat,document.getElementById("search-inputSMALL").value);
  }

  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getRequests })(Request);
