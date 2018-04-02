const initialState = {
	albums:[],
	images:[],
	currentAlbum:{},
	currentImage:{}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_ALBUMS':
			return {albums: action.payload}
		case 'GET_IMAGES':
			return {images: action.payload}
		case 'GET_CURRENT_ALBUM':
			return {currentAlbum: action.payload}
		case 'GET_CURRENT_IMAGE':
			return {currentImage: action.payload}
		default:
			return state
	}
}