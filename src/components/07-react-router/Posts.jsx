import { useNavigate } from 'react-router-dom'
import PostItem from './PostItem'

const Posts = (props) => {
  const navigate = useNavigate()

  return (
    <div className="container mt-5">
      <PostItem
        title="Hello World"
        content="This is a
            content of Hello World"
      />
      <PostItem
        title="Goodbye World"
        content="This is a
            speech of say goodbye."
      />
      <div className="text-center">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navigate('/router')}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Posts
