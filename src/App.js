import Home from "./pages/home/home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext/AuthContext";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Carrier from "./pages/carrier/carrier";
import About from "./pages/about/about";
import Shipper from "./pages/shipper/shipper";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import Term from "./pages/contact/term";
import history from "./helpers/history";
import AuthLayout from "./layout/authLayout";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/login/login";

const App = () => {
  const { user } = useContext(AuthContext);

  function RouteWithLayout({ layout, component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          React.createElement(
            layout,
            props,
            React.createElement(component, props)
          )
        }
      />
    );
  }

  const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <AuthLayout>
            <Component {...matchProps} />
          </AuthLayout>
        )}
      />
    );
  };

  const AppLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <MainLayout>
            <Component {...matchProps} />
          </MainLayout>
        )}
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <LoginLayoutRoute path="/signin" component={Login} />
        <AppLayoutRoute path="/home" component={Home} />
        <AppLayoutRoute path="/shipper" component={Shipper} />
      </Switch>
    </Router>
  );
};

export default App;
