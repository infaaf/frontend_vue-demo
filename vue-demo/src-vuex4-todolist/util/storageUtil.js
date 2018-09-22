/**
 * Created by infaa on 2018/9/20.
 */
const TODO_KEY = 'todos_key'
export default {
  saveTodos (value) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(value))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}
