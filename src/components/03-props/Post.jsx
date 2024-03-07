const Post1 = (props) => {
  return (
    <div>
      <p>Content from Post: {props.studentName}</p>
    </div>
  )
}

const Post21 = (props) => {
  const name = props.studentName
  const score = props.score
  return (
    <div>
      <h3>ผู้โพสต์: {name} </h3>
      <p>score: {score}</p>
    </div>
  )
}

const Post22 = (props) => {
  const myId = props.myId
  const content = props.children
  return (
    <div>
      <h3>ผู้โพสต์: {myId} </h3>
      <p>{content}</p>
    </div>
  )
}

const Post3 = (props) => {
  return (
    <div>
      <h2>Post id: {props.id}</h2>
      <p>Comment: </p>
      <p>{props.children}</p>
    </div>
  )
}

export { Post1, Post21, Post22, Post3 }
