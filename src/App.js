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
import AddShipment from "./pages/shipper/AddShipment";
import ListShipment from "./pages/shipper/ListShipment";
import EditShipment from "./pages/shipper/EditShipment";

import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import Term from "./pages/contact/term";
import history from "./helpers/history";
import AuthLayout from "./layout/authLayout";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/login/login";
import AddCarrier from "./pages/carrier/AddCarrier";
import ListCarrier from "./pages/carrier/ListCarrier";
import EditCarrier from "./pages/carrier/EditCarrier";
import Addvehicle from "./pages/vehicle/AddVehicle";
import ListVehicle from "./pages/vehicle/ListVehicle";
import EditVehicle from "./pages/vehicle/EditVehicle";
import AddDriver from "./pages/driver/addDriver";
import ListDriver from "./pages/driver/listDriver";
import EditDriver from "./pages/driver/editDriver";
import AddTrip from "./pages/trip/AddTrip";
import EditTrip from "./pages/trip/EditTrip";
import ListTrip from "./pages/trip/ListTrip";
import AddSubscription from "./pages/subscribe/AddSubscription";
import EditSubscription from "./pages/subscribe/EditSubscription";
import ListSubscription from "./pages/subscribe/ListSubscription";

import { GlobalContext } from "./context/Provider";

const App = () => {
  const {
    authDispatch,
    authState: { error, loading, user, IsloggedIn },
  } = useContext(GlobalContext);

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
          {user ? (
            <AppLayoutRoute path="/dashboard" component={Home} />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>

        <LoginLayoutRoute path="/signin" component={Login} />

        {user && (
          <>
            <AppLayoutRoute path="/" component={Home} />
            <AppLayoutRoute exact path="/shipper" component={Shipper} />
            <AppLayoutRoute path="/dashboard" component={Home} />
            <AppLayoutRoute path="/add-shipment" component={AddShipment} />
            <AppLayoutRoute
              exact
              path="/my-shipments"
              component={ListShipment}
            />
            <AppLayoutRoute path="/edit-shipment" component={EditShipment} />
            <AppLayoutRoute path="/add-carrier" component={AddCarrier} />
            <AppLayoutRoute
              exact
              path="/list-carriers"
              component={ListCarrier}
            />
            <AppLayoutRoute path="/edit-carrier" component={EditCarrier} />
            <AppLayoutRoute path="/add-vehicle" component={Addvehicle} />
            <AppLayoutRoute
              exact
              path="/list-vehicles"
              component={ListVehicle}
            />
            <AppLayoutRoute path="/edit-vehicle" component={EditVehicle} />
            <AppLayoutRoute path="/add-driver-info" component={AddDriver} />
            <AppLayoutRoute
              exact
              path="/list-drivers-info"
              component={ListDriver}
            />
            <AppLayoutRoute path="/edit-driver-info" component={EditDriver} />
            <AppLayoutRoute path="/add-trip" component={AddTrip} />
            <AppLayoutRoute path="/edit-trip" component={EditTrip} />
            <AppLayoutRoute path="/list-trip" component={ListTrip} />

            <AppLayoutRoute path="/edit-driver-info" component={EditDriver} />
            <AppLayoutRoute
              path="/add-subscription"
              component={AddSubscription}
            />
            <AppLayoutRoute
              path="/edit-subscription"
              component={EditSubscription}
            />
            <AppLayoutRoute
              path="/list-subscription"
              component={ListSubscription}
            />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
