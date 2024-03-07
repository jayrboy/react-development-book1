const StudentLists = () => {
  const data = [
    { id: 1, name: 'Jeerawuth' },
    { id: 2, name: 'Worrawan' },
    { id: 3, name: 'Thammasak' },
    { id: 4, name: 'Sombat' },
    { id: 5, name: 'Namcha' },
    { id: 6, name: 'Somboon' },
  ]

  const lists = data.map((item) => {
    return (
      <div key={item.id} className="col-lg-3 col-sm-4 mt-3">
        <div className="card">
          <div className="card-body">
            <dl className="row">
              <dt className="col-lg-6 col-sm-5 col-6">id: </dt>
              <dd className="col-lg-6 col-sm-7 col-6">{item.id}</dd>
              <dt className="col-lg-6 col-sm-5 col-6">name: </dt>
              <dd className="col-lg-6 col-sm-7 col-6">{item.name}</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  })
  return <div className="row">{lists}</div>
}
export default StudentLists
