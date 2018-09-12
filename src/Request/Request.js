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

    this.searchQuery = this.searchQuery.bind(this);
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
    this.searchQuery();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ requests: nextProps.requests });  
  }

  componentWillMount() {
    this.props.getRequests();
  }

  searchQuery(e){
    if(e)
      e.preventDefault();
    //console.log('[][][][][][][][][][[||||||||||||||',this.props.match.params.cat);
    if(this.props.match.params.cat === undefined)
      if(this.props.location.search){
        let arr,cat,loc,q;
        arr = this.props.location.search.split("&");

        arr.forEach((item,index) => {
          let type,str ;
          type = item.split("=")[0];
          str = item.split("=")[1];
          switch(type){
            case "?cat" : {cat = str; break;}
            case "loc" : {loc = str; break;}
            case "q" : {q = str; break;}
          }
        })
        //console.log("SEARCH ######################",{cat,loc,q});
        this.props.getRequests(cat,loc,q);
      }
      
    else{
      const cat = this.props.match.params.cat;
      const subcat = this.props.match.params.location;
      this.props.getRequests(cat,subcat,"");

    }    
    
  }

  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getRequests })(Request);
