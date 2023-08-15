import React from 'react'

function Post({title, content}) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Post
