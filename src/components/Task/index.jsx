import React from 'react'
import { Headers } from './Headers/Headers'
import { ButtonTask } from './New Task/Button.Task'
import  {Search} from './New Task/Search'
import './style.css'


export function Task() {
  return (
    <div>
        <Headers />
        <h1 className='list'>Task List</h1>
        <ButtonTask />
        <Search />
        
    </div>
  )
}
