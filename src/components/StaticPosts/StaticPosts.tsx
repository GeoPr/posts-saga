import React from 'react'
import { useSelector } from 'react-redux'
import { TApp } from '../../redux/store'
import './StaticPosts.scss'

export const StaticPosts: React.FC = () => {
  const { staticPosts } = useSelector((state: TApp) => state.posts)

  return (
    <ul className="static-posts posts">
      {staticPosts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
