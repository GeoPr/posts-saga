import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from '../../redux/reducers/postsReducer/actions'
import { TApp } from '../../redux/store'
import { Loader } from '../Loader/Loader'
import './ServerPosts'

const useStyles = makeStyles(() => ({
  button: {
    margin: '0 0 30px 0',
  },
}))

export const ServerPosts: React.FC = () => {
  const { serverPosts } = useSelector((state: TApp) => state.posts)
  const { isLoading } = useSelector((state: TApp) => state.loader)
  const dispatch = useDispatch()
  const styles = useStyles()

  const clickHandler = () => {
    dispatch(loadPosts())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        onClick={clickHandler}
        className={styles.button}
        disabled={!!serverPosts.length}>
        Load posts
      </Button>
      <ul className="server-posts posts">
        {serverPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
