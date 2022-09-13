import { createElement, render, createTextElement } from '../libraries/recat'

function Todo(todo) {
    return () => {
    const listItem = createElement('li', [{class: 'todo'}, () => createTextElement(todo)])
    return listItem
    }
}

module.exports = { Todo }
// abstract getElementById