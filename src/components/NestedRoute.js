import React from "react";
import Home from './Home';
import Topics from './Topics';
import About from './About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





//routes
const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path:'/topics',
    component: Topics,
  }
]


class NestedRoute extends React.Component {

  render() {
    return (
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      {routes.map((route) => (
         <Route
         key={route.path}
         path={route.path}
         component={route.component}/>
        ))}
      <hr />
    </div>
  </Router>
    )
  }
}


export default NestedRoute;