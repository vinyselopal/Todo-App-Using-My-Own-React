import { createElement, render, createTextElement } from '../libraries/myReact'

function Todo(todo) {
    return () => {
    const listItem = createElement('li', [{class: 'todo'}, () => createTextElement(todo)])
    return listItem
    }
}

module.exports = { Todo }
// abstract getElementById