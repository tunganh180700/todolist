import { TextField } from '@mui/material'
import React from 'react'

const ToDoList = () => {
  return (
    <div>
      <div className='form'>
        <div>
          <TextField id='standard-basic' label='Standard' variant='standard' />
        </div>
        <div>
          <TextField id='standard-basic' label='Standard' variant='standard' />
        </div>
        <div>
          <TextField id='standard-basic' label='Standard' variant='standard' />
        </div>
      </div>
    </div>
  )
}

export default ToDoList
