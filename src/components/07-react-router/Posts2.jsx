import { useParams, useNavigate } from 'react-router-dom'
import PostItem from './PostItem'

const Posts2 = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  let post = null

  if (id === '1') {
    post = <PostItem title="Hello" content="Hello, World!" />
  } else if (id === '2') {
    post = <PostItem title="Bye" content="Goodbye, World!" />
  }

  return (
    <div className="container mt-5">
      {post}
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

export default Posts2
