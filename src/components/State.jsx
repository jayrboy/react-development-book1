import AppFn51 from './05-state/AppFn51'
import AppFn52 from './05-state/AppFn52'
import AppFn53 from './05-state/AppFn53'
import Navbar54 from './05-state/Navbar54'
import AppFn55 from './05-state/AppFn55'
import AppFn561 from './05-state/AppFn561'
import AppC562 from './05-state/AppC562'
import AppFn571 from './05-state/AppFn571'
import AppC572 from './05-state/AppC572'
import AppFn581 from './05-state/AppFn581'
import AppC582 from './05-state/AppC582'
import AppFn59 from './05-state/AppFn59'

const State = () => {
  return (
    <div className="container mt-3 mb-5">
      <AppFn51 />
      <AppFn52 />
      <AppFn53 />
      <Navbar54 />
      <AppFn55 />
      <div className="row">
        <AppFn561 />
        <AppC562 />
      </div>
      <div className="row">
        <AppFn571 />
        <AppC572 />
      </div>
      <div className="row">
        <AppFn581 />
        <AppC582 />
      </div>
      <AppFn59 />
    </div>
  )
}
export default State
