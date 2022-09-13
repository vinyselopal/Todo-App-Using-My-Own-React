
import { createElement, render, createTextElement, useState } from '../libraries/recat'
import { List } from './List'
import {AddTodo} from './AddTodo'
import { Todo } from './Todo'


function App() {
    return () => {
    const [todos, setTodos] = useState([])
    let todoContent = ""

    function addListItem(event) {
        if (event.key !== "Enter") return 

        const value = event.target.value
        todoContent = value

        const listItem = Todo(todoContent)
        setTodos([...todos, listItem], App, document.getElementById('root'))

        event.target.value = ""
        
    }

    const app = createElement('div', [{id: 'app'}, AddTodo({onkeydown: addListItem}), List(todos)])
    return app
}
}

render(App(), document.getElementById('root'))

module.exports = {App}
