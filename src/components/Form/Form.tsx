import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showAlert } from '../../redux/reducers/alertReducer/actions'
import { createPost } from '../../redux/reducers/postsReducer/actions'
import './Form.scss'

export const Form: React.FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value.trim().length) {
      dispatch(createPost(value))
    } else {
      dispatch(showAlert('This field cannot be empty'))
    }
    
    setValue('')
  }

  return (
    <form action="#" onSubmit={submitHandler} className="form">
      <TextField
        type="text"
        variant="filled"
        label="Name of your post"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit" color="primary" variant="contained">
        Add
      </Button>
    </form>
  )
}
