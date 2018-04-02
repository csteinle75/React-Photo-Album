import {createStore} from 'redux'

import Reducer from './albumAppReducer'

const store = createStore(Reducer)

export default store