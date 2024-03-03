const Student = (props) => {
  const onDeleteStudent = () => {
    props.deleteStudent()
  }

  return (
    <div className="card">
      <div className="card-header text-center">
        <button onClick={onDeleteStudent} className="btn btn-danger btn-sm">
          delete
        </button>
      </div>
      <div className="card-body">
        <dl className="row">
          <dt className="col-6">id: </dt>
          <dd className="col-6">{props.data.id}</dd>
          <dt className="col-6">name: </dt>
          <dd className="col-6">{props.data.name}</dd>
        </dl>
      </div>
    </div>
  )
}
export default Student
