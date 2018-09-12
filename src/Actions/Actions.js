import { productos,database,featuredProductos,thumbnails,Users,Carts,requests } from '../Firebase';
import _  from 'lodash';
import * as firebase from "firebase";

export const FETCH_PRODUCTOS = 'fetch_productos';
export const FETCH_REQUESTS = 'fetch_requests';
export const FETCH_THUMBNAILS = "fetch_thumbnails";
export const FETCH_USER = "fetch_user";
export const FETCH_CART = "fetch_cart";
export const FETCH_PRODUCTO_ID = "fetch_producto_id";


export function getPartidos(){
	//console.log("function worked");
	
	return dispatch => { 
		//console.log("dispatching...");
		database.on('value', data => {
		//console.log("ooohhh",data.val());
			dispatch({
				type: 'fetch_partidos',
				payload: data.val()
			})
		})
	}
}

export function getUser(){

	var user = firebase.auth().currentUser;
	return dispatch => { 
		Users.child(user.uid).on("value", function(snapshot) {
			dispatch({
				type: FETCH_USER,
				payload: snapshot.val()
			})
		})
	}
}

export function getCartById(id){
	if (id)
	return dispatch => { 
		Carts.child(id).on("value", function(snapshot) {
			dispatch({
				type: FETCH_CART,
				payload: snapshot.val()
			})
		})
	}
	else
		return false;
}

export function getThumbnails(){
	return dispatch => { 
			
		thumbnails.on("value", function(snapshot) {
			// console.log("9090909090",Object.values(snapshot.val())[0].thumbnail);
		  
		// const string = JSON.stringify(data.val());
		
			dispatch({
				type: FETCH_THUMBNAILS,
				payload: snapshot.val()
			})
		})
	}

}

export function getProductos(cat,location,queryText){
	console.log("THIS IS THE QUERY",queryText);
	console.log({cat,location});
	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		try {
			featuredProductos.orderByChild("nombre").startAt(queryText)
		.endAt(queryText+"\uf8ff").on('value', data => {
			
			if(!data.val()) 
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: {918282918:{sorry:"No values found...",url:"#"}}
			})
			else{
				let productos = Object.values(data.val());
				let keys = Object.keys(data.val());

				productos.forEach((item,index) => {
					item.key = keys[index];
					
				});
				
				let obj = []; //_.filter( productos, { 'categoria': "Flats" });
				if(!cat && !location)
					obj = productos;
				if(cat && !location)
					obj = _.filter( productos, { 'categoria': cat });
				if(location && !cat)
					obj = _.filter( productos, { 'country':location });
				if(cat && location)
					obj = _.filter( productos, { 'categoria': cat, 'country':location });

				

				
				dispatch({
					type: FETCH_PRODUCTOS,
					payload: obj
				})
			}
			
		})
			
		} catch (error) {
			
			
		}
		
	}
}


export function getRequests(cat,location,queryText){
	
	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		try {
			requests.orderByChild("nombre").startAt(queryText)
		.endAt(queryText+"\uf8ff").on('value', data => {
			if(!data.val())
			dispatch({
				type: FETCH_REQUESTS,
				payload: {918282918:{sorry:"No values found...",url:"#"}}
			})
			else{
				let productos = Object.values(data.val());
				let keys = Object.keys(data.val());

				productos.forEach((item,index) => {
					item.key = keys[index];
					
				});

				let obj = []; //_.filter( productos, { 'categoria': "Flats" });
				if(!cat && !location)
					obj = productos;
				if(cat && !location)
					obj = _.filter( productos, { 'categoria': cat });
				if(location && !cat)
					obj = _.filter( productos, { 'country':location });
				if(cat && location)
					obj = _.filter( productos, { 'categoria': cat, 'country':location });

				

				
				dispatch({
					type: FETCH_REQUESTS,
					payload: obj
				})
			}
			
		})
			
		} catch (error) {
			
			
		}
		
	}
}

export function getProductosById(id,type = false){
	console.log("this is the type",type);
	
	if(type){
		return dispatch => { 
			requests.child(id).on("value", function(snapshot) {
				
				if(!snapshot.val())
					dispatch({
						type: FETCH_PRODUCTO_ID,
						payload: {sorry:"No values found...",url:"#"}
					})
				else{
					dispatch({
						type: FETCH_PRODUCTO_ID,
						payload: snapshot.val()
					})
				}
			})
		}

	}
	else{
		return dispatch => { 
			productos.child(id).on("value", function(snapshot) {
				
				if(!snapshot.val())
					dispatch({
						type: FETCH_PRODUCTO_ID,
						payload: {sorry:"No values found...",url:"#"}
					})
				else{
					dispatch({
						type: FETCH_PRODUCTO_ID,
						payload: snapshot.val()
					})
				}
			})
		}
	}
	
}

export function getFeaturedProductos(){

	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		// featuredProductos.orderByChild("nombre").startAt(queryText)
		// .endAt(queryText+"\uf8ff").on('child_added', data => {
			
		featuredProductos.limitToFirst(4).on('value', data => {
		// const string = JSON.stringify(data.val());
		
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: data.val()
			})
		})
	}
}