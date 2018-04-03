import store from './store'
import axios from 'axios'

export function getAlbums(){
	axios.get('http://localhost:3001/albums?_embed=images').then(response => {
		console.log('getAlbums action: ' , response.data)
		store.dispatch({
			type: "GET_ALBUMS",
			payload: response.data
		})
	})
}
export function getImages(){
	axios.get('http://localhost:3001/images').then(response => {
		store.dispatch({
			type: "GET_IMAGES",
			payload: response.data
		})
	})
}
export function getCurrentAlbum(albumid){
	axios.get('http://localhost:3001/albums/' + albumid + '?_embed=images').then(response => {
		console.log('getCurrentAlbum action: ' , response.data)
		store.dispatch({
			type: "GET_CURRENT_ALBUM",
			payload: response.data
		})
		getAlbums()
	})
}
export function getCurrentImage(imageid){
	axios.get('http://localhost:3001/images/' + imageid).then(response => {
		store.dispatch({
			type: "GET_CURRENT_IMAGE",
			payload: response.data
		})		
	})
}
