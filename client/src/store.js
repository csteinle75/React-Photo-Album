import {createStore} from 'redux'

import albumAppReducer from './albumAppReducer'

const store = createStore(albumAppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store