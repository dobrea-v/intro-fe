import React from 'react';
import { RemoveButton } from '../uielements/Button'
export function TodoItem(props) {
    console.log(props)
    return (
        <li className="todolist__item">
            <input onChange={() => props.handleItemStatusToggle(props.item)} type="checkbox" />
            <span className={props.item.status ? 'complete' : ''}>{props.item.text}</span>
            <RemoveButton>Remove</RemoveButton>
        </li>
    )
}