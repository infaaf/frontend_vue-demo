/**
 * Created by infaa on 2018/9/22.
 */
export default {
  totalCount (state) {
    return state.todos.length
  },
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  isAllSelected (state, getters) {
    return getters.totalCount === getters.completeCount && state.todos.length > 0
  }
}
