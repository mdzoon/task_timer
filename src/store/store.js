import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
    // task: {
    //   name: '',
    //   date: '',
    //   time: ''
    // }
  },
  getters: {
    // getTask: state => {
    //   return state.task
    // },
    // getTasksList: state => {
    //   return state.tasks
    // }
  },
  mutations: {
    'ADD_NEW_TASK': (state, task) => {
      Vue.set(state.tasks, 'task', task)
    }
    // 'SAVE_NEW_TASK': (state, task) => {
    //   state.tasks.push({ task })
    // },
    // 'CALCULATE_DEADLINE': (state, task) => {
    //   const deadline = new Date(state.task.date + 'T' + state.task.time + ':00');
    //   deadline: deadline.getTime();

    // }
  },
  actions: {
    calculateDeadline: ({ commit }, task) => {
      commit('CALCULATE_DEADLINE', task)
    }
  },
  modules: {
  }
})
