import React from 'react';
import { RemoveButton } from '../uielements/Button'
export function TodoItem(props) {
    return (
        <li className={props.item.status ? 'todolist__item complete' : 'todolist__item'}>
            <input onChange={() => props.handleItemStatusToggle(props.item.id)} checked={props.item.status} type="checkbox" />
            <span>{props.item.text}</span>
            <RemoveButton onClick={() => props.handleItemRemove(props.item.id)}>Remove</RemoveButton>
        </li>
    )
}