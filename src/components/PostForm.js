import {useState} from 'react'

function PostForm({onAddPost}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !content.trim() !== '') {
      const newItem = {title, content}
      onAddPost(newItem)
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        rows={6}
        onChange={e => setContent(e.target.value)}
      />
      <button className="btn" type="submit">
        Create Post
      </button>
    </form>
  )
}

export default PostForm
