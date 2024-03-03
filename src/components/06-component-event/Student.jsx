import { useRef } from 'react'

const Student = (props) => {
  const { data, deleteStudent, editStudent } = props
  const updatedNameInput = useRef()

  const onDeleteStudent = () => {
    deleteStudent()
  }

  const onEditStudent = () => {
    const editData = {
      id: data.id,
      name: data.name,
      editingStatus: !data.editingStatus,
    }
    editStudent(data.id, editData)
  }

  const onConfirmEdit = () => {
    const editData = {
      id: data.id,
      name: updatedNameInput.current.value,
      editingStatus: false,
    }
    editStudent(data.id, editData)
  }

  const onCancelEdit = () => {
    const editData = { id: data.id, name: data.name, editingStatus: false }
    editStudent(data.id, editData)
  }
  const editForm = (
    <div className="row">
      <div className="input-group mb-3">
        <input
          type="text"
          name="updatedName"
          className="form-control col-6"
          defaultValue={data.name}
          ref={updatedNameInput}
        />
        <button
          onClick={onCancelEdit.bind()}
          className="btn btn-outline-primary btn-sm ml-1 col-3"
        >
          Cancel
        </button>
        <button
          onClick={onConfirmEdit.bind()}
          className="btn btn-primary btn-sm ml-1 col-3"
        >
          OK
        </button>
      </div>
    </div>
  )
  return (
    <div className="card">
      <div className="card-header text-center">
        <button
          onClick={onEditStudent}
          className="btn btn-outline-success btn-sm mr-1"
        >
          edit
        </button>
        &nbsp;
        <button
          onClick={onDeleteStudent}
          className="btn btn-outline-danger btn-sm ml-1"
        >
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
        {props.data.editingStatus ? editForm : null}
      </div>
    </div>
  )
}
export default Student
