import { Navigate } from 'react-router-dom'

const PostItem2 = (props) => {
  const { title, content } = props

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <hr />
    </div>
  )
}
export default PostItem2
