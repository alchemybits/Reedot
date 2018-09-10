import React    from "react";
import template from "./Request.jsx";
import { connect } from 'react-redux';
import { getProductos,getThumbnails } from '../Actions/Actions';

function mapStateToProps(state) {
  

  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos,
    thumbnails: state.thumbnails
  };
}


class Request extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collection: []
    }

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
  componentWillMount() {
    const cat = this.props.match.params.cat;
    const subcat = this.props.match.params.subcat;
    this.props.getProductos(cat,subcat);
    this.props.getThumbnails();
    
      
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.cat !== nextProps.match.params.cat) {
      this.props.getProductos(nextProps.match.params.cat);
    }
    if (this.props.match.params.subcat !== nextProps.match.params.subcat) {
      this.props.getProductos(nextProps.match.params.cat,nextProps.match.params.subcat);
    }
    
  }

  search(){
    const search = document.getElementById("searchbar-input");
    search.classList.toggle("opensearch");
    search.classList.toggle("closesearch");
    const icon = document.getElementById("searchbar-icon");
    icon.classList.toggle("fa-search");
    icon.classList.toggle("fa-times");
    
  }

  goTo(query){
    if(query)
    window.location = query;
  }

  searchQuery(e){
    e.preventDefault();

    const cat = this.props.match.params.cat;
    const subcat = this.props.match.params.subcat;
    this.props.getProductos(cat,subcat,document.getElementById("searchbar-input").value);
  }

  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductos,getThumbnails })(Request);
