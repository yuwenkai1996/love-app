import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user_id: ''
	},
	mutations: {
		setUserId(state, id){
			state.user_id = id
		}
	},
	actions: {
		
	}
})

export default store
