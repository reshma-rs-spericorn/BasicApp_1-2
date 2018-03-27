import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Homee = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = ({ routes }) => (
  <div>
    <h2>About</h2>
    <ul>
      {routes.map(({ path, name }) => (
        <li><Link to={path}>{name}</Link></li>
      ))}
    </ul>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </div>
);
const Bus = () => (
  <div>
    <h2>Bus</h2>
  </div>
);

const Cart = () => (
  <div>
    <h2>Cart</h2>
  </div>
);

//routes
const routes = [
  {
    path: '/home',
    component: Homee,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        name: 'Bus',
        path: '/about/bus',
        component: Bus,
      },
      {
        name: 'Cart',
        path: '/about/cart',
        component: Cart,
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) => (
    <route.component {...props} routes={route.routes} />
  )} />
)

class App extends React.Component {

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
        </ul>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
</div>
      </Router>
    )
  }
}


export default App;