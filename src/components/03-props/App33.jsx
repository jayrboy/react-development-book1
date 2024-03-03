import { Post3 } from './Post'
import Comment from './Comment'

const App = () => {
  return (
    <div className="container border p-2 rounded-3">
      <Post3 id="2">
        <Comment userId="1" data="5 stars" />
        <Comment userId="8" data="4 stars" />
      </Post3>
    </div>
  )
}
export default App
