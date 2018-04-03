const initialState = {
	albums:[],
	images:[],
	currentAlbum:{},
	currentImage:{}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_ALBUMS':
			return {...state, albums: action.payload}

		case 'GET_IMAGES':
			return {...state, images: action.payload}

		case 'GET_CURRENT_ALBUM':
			return {...state, currentAlbum: action.payload}

		case 'GET_CURRENT_IMAGE':
			return {...state, currentImage: action.payload}

		default:
			return state
	}
}