import { createElement, render, createTextElement } from '../libraries/recat'

function List(todos) {
    return () => {
    const list = createElement('ul', [{id: 'todoList'}, ...todos])
    return list
    }
}

module.exports = { List }