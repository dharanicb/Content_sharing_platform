import {useState} from 'react'

function PostList({posts, editPost, deletePost, handleLike}) {
  const [editId, setEditId] = useState(null)
  const [editedContent, setEditedContent] = useState('')
  const [editedTitle, setEditedTitle] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [searchQuery, setSearchQuery] = useState('')

  const handleEditClick = (postId, content, title) => {
    setEditId(postId)
    setEditedContent(content)
    setEditedTitle(title)
  }

  const handleTitleChange = event => {
    setEditedTitle(event.target.value)
  }

  const handleContentChange = event => {
    setEditedContent(event.target.value)
  }

  const handleUpdateClick = (postId, oldLikes) => {
    if (editedContent.trim() !== '') {
      editPost({
        id: postId,
        title: editedTitle,
        content: editedContent,
        likes: oldLikes,
      })
      setEditId(null)
      setEditedTitle('')
      setEditedContent('')
    }
  }

  const getLikesText = likes => `Likes: ${likes}`

  const handleSearch = query => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredPosts(filtered)
  }

  const handleSearchClick = () => {
    if (searchQuery.trim() !== '') {
      handleSearch(searchQuery)
    } else {
      setFilteredPosts([])
    }
  }

  return (
    <div>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          value={searchQuery}
          placeholder="Search posts..."
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="btns"
          onClick={() => handleSearchClick(searchQuery)}
        >
          Search
        </button>
      </div>
      <div className="post-list">
        {(searchQuery.trim() !== '' ? filteredPosts : posts).map(post => (
          <div key={post.id} className="post">
            {editId === post.id ? (
              <form className="login-form">
                <div className="update-text">
                  <input
                    value={editedTitle}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    className="edit-title"
                  />
                  <textarea
                    value={editedContent}
                    onChange={handleContentChange}
                    placeholder="Content"
                    rows="6"
                    className="edit-title"
                  />
                  <button
                    type="submit"
                    onClick={() => handleUpdateClick(post.id, post.likes)}
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h1 className="text1">{post.title}</h1>
                <div>
                  <p className="text2">{post.content}</p>
                </div>
                <p className="text3">
                  {getLikesText(post.isLiked ? '1' : '0')}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleEditClick(
                      post.id,
                      post.content,
                      post.title,
                      post.likes,
                    )
                  }
                  className="btns"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => deletePost(post.id)}
                  className="btns"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => handleLike(post.id)}
                  className="btns"
                >
                  {post.isLiked ? 'Unlike' : 'Like'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
