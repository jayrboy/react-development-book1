function App() {
  const randomNumber = Math.random()

  return (
    <div className="container border p-2 rounded-3">
      {randomNumber < 0.5 ? (
        <div className="alert alert-danger">คุณแพ้</div>
      ) : (
        <div className="alert alert-success">คุณชนะแล้ว</div>
      )}
    </div>
  )
}

export default App
