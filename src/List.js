import { createElement, render, createTextElement } from '../libraries/myReact'

function List(todos) {
    return () => {
    const list = createElement('ul', [{id: 'todoList'}, ...todos])
    return list
    }
}

module.exports = { List }