import { IPost } from './postsReducer'
import { CREATE_POST, LOAD_POSTS, SET_SERVER_POSTS } from './actionsTypes'

export const createPost = (title: string) => ({
	type: CREATE_POST,
	payload: { title } 
} as const)

export const loadPosts = () => ({
	type: LOAD_POSTS
} as const)

export const setServerPosts = (serverPosts: Array<IPost>) => ({
	type: SET_SERVER_POSTS,
	payload: { serverPosts }
} as const)