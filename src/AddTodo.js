import { createElement, render, createTextElement, useState } from '../libraries/recat'

function AddTodo(props) {
    return () => {
    const addTodo = createElement('input', [{ id: 'addTodo', ...props}])
    return addTodo
    }
}

module.exports = { AddTodo }