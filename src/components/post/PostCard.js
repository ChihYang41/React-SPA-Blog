import React from 'react';

export default function PostCard({ posts, history }) {
  return (
    posts.map(post => {
      return (
        <div key={post.id} className="card text-white bg-dark mb-3" onClick={() => {
          history.push('/posts/' + post.id)
        }}>

          <div className="card-body">
            <h4 className="card-title">{post.id}. {post.title}</h4>
          </div>
        </div>
      )
    })
  )
}