import { CREATE_POST, SET_SERVER_POSTS } from './actionsTypes'
import { TActions } from './../../store'
import * as actions from './actions'

export interface IPost {
  userId: string
  id: string
  title: string
  body: string
}

type TInitalState = {
  staticPosts: Array<IPost>
  serverPosts: Array<IPost>
}

const initalState: TInitalState = {
  staticPosts: [],
  serverPosts: [],
}

type ActionsTypes = TActions<typeof actions>

export const postsReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case CREATE_POST: {
      const { title } = action.payload
      const id = Date.now().toString()
      const userId = id

      return {
        ...state,
        staticPosts: [...state.staticPosts, { id, title, userId, body: '' }],
      }
    }

    case SET_SERVER_POSTS: {
      const { serverPosts } = action.payload

      return {
        ...state,
        serverPosts,
      }
    }

    default:
      return state
  }
}
