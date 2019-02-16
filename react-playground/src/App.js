import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HasRenderChildren from './components/render-prop/RenderProp'
import Hoc from './components/hoc/Hoc'
import './App.css'

const Menu = () => (
  <header className="App-header">
    <ul>
      <li>
        <Link to="/render-prop" className="App-link">
          Render prop example
        </Link>
      </li>
      <li>
        <Link to="/hoc" className="App-link">
          HOC example
        </Link>
      </li>
    </ul>
  </header>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/hoc" component={Hoc} />
            <Route exact path="/render-prop" component={HasRenderChildren} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
