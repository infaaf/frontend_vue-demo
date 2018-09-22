/**
 * Created by infaa on 2018/9/22.
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storeageUtil from '../util/storageUtil'
export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  clearALLCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },
  reqTodos ({commit}) {
    // 模拟异步获取延迟1秒
    setTimeout(() => {
      const todos = storeageUtil.readTodos()
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}
