import AppFn21 from './02-JSX/AppFn21'
import AppFn22 from './02-JSX/AppFn22'
import AppFn23 from './02-JSX/AppFn23'
import AppFn24 from './02-JSX/AppFn24'
import AppFn25 from './02-JSX/AppFn25'
import AppFn26 from './02-JSX/AppFn26'
import AppFn27 from './02-JSX/AppFn27'

const ReactJsx = () => {
  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col">
          <AppFn21 />
          <br />
          <AppFn22 />
        </div>
        <div className="col">
          <AppFn21 />
          <br />
          <AppFn22 />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <AppFn23 />
          <br />
          <AppFn24 />
          <br />
          <AppFn25 />
          <br />
          <AppFn26 />
          <br />
          <AppFn27 />
        </div>
      </div>
    </div>
  )
}
export default ReactJsx
