import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {
      name: '',
      date: '',
      time: ''
    }
  },
  getters: {
    getTasks: state => {
      return state.tasks
    }
  },
  mutations: {
    'ADD_NEW_TASK': (state, task) => {
      Vue.set(state.task, 'task', task)
    },
    'SAVE_NEW_TASK': (state, task) => {
      state.task.push({ task })
    }
  },
  actions: {
    // const deadline = new Date(this.task.date + 'T' + this.task.time + ':00');
    // deadline: deadline.getTime()
  },
  modules: {
  }
})
