import {createStore} from 'vuex'
import storeExample from './storeExample'

const store = createStore({
  modules: {
    storeExample
  }
})

export default store;