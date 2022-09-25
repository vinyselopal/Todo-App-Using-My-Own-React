import { createElement, render, createTextElement, useState } from '../libraries/myReact'

function AddTodo(props) {
    return () => {
    const addTodo = createElement('input', [{ id: 'addTodo', ...props}])
    return addTodo
    }
}

module.exports = { AddTodo }