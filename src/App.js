import {Route, Switch} from 'react-router-dom'
import './App.css'
import PostMain from './components/PostMain'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <PostMain />
        </Route>
      </Switch>
    </div>
  )
}

export default App
