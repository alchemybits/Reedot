import React    from "react";
import template from "./Request.jsx";
import { connect } from 'react-redux';
import { getProductos,getThumbnails,getFeaturedProductos } from '../Actions/Actions';



function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}


class Request extends React.Component {
  constructor(){
    super();
    
    this.state = {
      productos: ["0"],
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
    this.setState({ productos: nextProps.productos });  
  }

  componentWillMount() {
    this.props.getProductos();
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

export default connect(mapStateToProps,{ getProductos })(Request);
