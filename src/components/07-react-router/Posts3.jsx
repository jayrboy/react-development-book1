import { useNavigate } from 'react-router-dom'
import PostItem2 from './PostItem2'

const Posts3 = () => {
  const navigate = useNavigate()
  return (
    <div className="container mt-5">
      <PostItem2 title="หัวข้อแรก" content="สวัสดี หัวข้อแรก" />
      <PostItem2 title="หัวข้อสอง" content="Hello World!" />
      <PostItem2 title="University" content="SuankularbWittayalai" />
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

export default Posts3
