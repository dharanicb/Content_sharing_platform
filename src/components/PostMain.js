import {useState} from 'react'
import PostForm from './PostForm'
import PostList from './PostList'

const PostMain = () => {
  const [posts, setPosts] = useState([])

  const addPost = post => {
    const newPost = {
      ...post,
      id: Date.now(),
      likes: 0,
      isLiked: false,
    }
    setPosts(prevPosts => [...prevPosts, newPost])
  }

  const editPost = editedPost => {
    const updatedPosts = posts.map(post =>
      post.id === editedPost.id ? editedPost : post,
    )
    setPosts(updatedPosts)
  }

  const deletePost = id => {
    const updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }

  const handleLike = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post,
      ),
    )
  }

  return (
    <div className="create-post">
      <div style={{width: '50%'}}>
        <h1 className="title-post">Create Your Post Here</h1>
        <PostForm onAddPost={addPost} />
      </div>
      <div className="w-50">
        <PostList
          posts={posts}
          editPost={editPost}
          deletePost={deletePost}
          handleLike={handleLike}
        />
      </div>
    </div>
  )
}

export default PostMain
