const nodes = []

let globalId = 0
let globalParent
const componentStates = new Map()


function createElement (type, [props, ...children]) {
  const element = {
    type,
    props: {
    children,
    ...props
    }
  }
  nodes.push(element)
  return element
}

function createTextElement (text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function useState(initialState) {
  const id = globalId
  const parent = globalParent
  globalId++

    const { cache } = componentStates.get(parent)
    if (cache[id] == null) {
      cache[id] = {
        value:
        typeof initialState === 'function' ? initialState() : initialState,
      }
      }
    const setState = state => {
      const {component} = componentStates.get(parent)
      if (typeof state === 'function') {
        cache[id].value = state(cache[id].value)
      } else {
        cache[id].value = state
      }

      render(component, parent)
    }

    return [cache[id].value, setState]
}
const isProperty = (key) => {
  return key !== 'children'
}
const isEvent = (prop) => typeof prop === "string" && prop.slice(0,2) === "on"

function render (elm, parent) {

  const state = componentStates.get(parent) || {cache: []}
  componentStates.set(parent, {...state, component: elm})

  // setting global parent
  globalParent = parent

  const component = elm()

  // removing prev instance of element
  const prevElement = document.getElementById(component.props.id)
  if (prevElement) prevElement.remove()

  // creating new instance of element
  const element = component.type === 'TEXT_ELEMENT'
  ? document.createTextNode(component.nodeValue) 
  : document.createElement(component.type)

  // appending element to container
  const elementNode = parent.appendChild(element)

  // add properties
  Object.keys(component.props).filter(isProperty).forEach(prop => {
    elementNode[prop] = component.props[prop]
  })

  // recursively render children
  component.props.children.forEach(child => {
    render(child, element)
  })

  globalId = 0
}

// virtual DOM 
module.exports = { createElement, createTextElement, render, useState }
