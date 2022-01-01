import Home from "./pages/home/home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import Shipper from "./pages/shipper/shipper";
import AddShipment from "./pages/shipper/AddShipment";
import ListShipment from "./pages/shipper/ListShipment";
import EditShipment from "./pages/shipper/EditShipment";

import AuthLayout from "./layout/authLayout";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/login/login";
import AddCarrier from "./pages/carrier/AddCarrier";
import ListCarrier from "./pages/carrier/ListCarrier";
import EditCarrier from "./pages/carrier/EditCarrier";
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
import AddVehicle from "./pages/vehicle/Addvehicle";
import ListInterest from "./pages/shipper/ListInterest";
import UserSubscription from "./pages/user/UserSubscription";
import UserList from "./pages/user/UserList";
import UploadShipment from "./pages/shipper/UploadShipment";
import AddUserSubscription from "./pages/user/AddUserSubscription";

const App = () => {
  const {
    authState: { user, isLoggedIn },
  } = useContext(GlobalContext);
  // console.log(`isLoggedIn`, isLoggedIn);
  // const getUser = () => {
  //   try {
  //     console.log(`users`, user);
  //     if (!user) {
  //       document.location.href = "/signin";
  //     }
  //   } catch (error) {}
  // };

  // React.useEffect(() => {
  //   if (isLoggedIn === false) {
  //     document.location.href = "/signin";
  //   }
  // }, [isLoggedIn]);

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
        <LoginLayoutRoute path="/signin" component={Login} />
        <Route exact path="/">
          {isLoggedIn ? (
            <AppLayoutRoute path="/dashboard" component={Home} />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>

        {user && (
          <>
            <AppLayoutRoute exact path="/shipper" component={Shipper} />
            <AppLayoutRoute exact path="/dashboard" component={Home} />
            <AppLayoutRoute
              exact
              path="/add-shipment"
              component={AddShipment}
            />

            <AppLayoutRoute
              exact
              path="/add-shipment-upload"
              component={UploadShipment}
            />
            <AppLayoutRoute
              exact
              path="/my-shipments"
              component={ListShipment}
            />
            <AppLayoutRoute
              exact
              path="/list-interest-for-shipment/:shipmentId"
              component={ListInterest}
            />
            <AppLayoutRoute
              exact
              path="/edit-shipment/:shipmentId"
              component={AddShipment}
            />
            <AppLayoutRoute
              key="edit-carrier"
              exact
              path="/edit-carrier/:carrierId"
              component={AddCarrier}
            />
            <AppLayoutRoute exact path="/add-carrier" component={AddCarrier} />
            <AppLayoutRoute
              key="list-carriers"
              exact
              path="/list-carriers"
              component={ListCarrier}
            />

            <AppLayoutRoute
              key="add-vehicle-to-carrier"
              exact
              path="/add-vehicle-to-carrier/:carrierId/"
              component={AddVehicle}
            />
            <AppLayoutRoute
              key="add-vehicle"
              exact
              path="/add-vehicle"
              component={AddVehicle}
            />

            <AppLayoutRoute
              exact
              path="/list-vehicles"
              component={ListVehicle}
            />
            <AppLayoutRoute
              exact
              path="/edit-vehicle/:vehicleId"
              component={AddVehicle}
            />
            <AppLayoutRoute
              exact
              path="/add-driver-info"
              component={AddDriver}
            />
            <AppLayoutRoute
              exact
              path="/edit-driver-info"
              component={AddDriver}
            />
            <AppLayoutRoute
              exact
              path="/list-drivers-info"
              component={ListDriver}
            />

            <AppLayoutRoute exact path="/add-trip" component={AddTrip} />
            <AppLayoutRoute exact path="/edit-trip" component={EditTrip} />
            <AppLayoutRoute exact path="/list-trip" component={ListTrip} />

            <AppLayoutRoute
              exact
              path="/add-subscription"
              component={AddSubscription}
            />
            <AppLayoutRoute
              key="edit-subscription"
              exact
              path="/edit-subscription/:subscribeId"
              component={AddSubscription}
            />

            <AppLayoutRoute
              exact
              path="/list-subscription"
              component={ListSubscription}
            />

            <AppLayoutRoute
              exact
              path="/list-user-subscription"
              component={UserSubscription}
            />

            <AppLayoutRoute
              exact
              path="/list-user-subscription/:userSubscriptionId"
              component={UserSubscription}
            />

            <AppLayoutRoute
              exact
              path="/add-user-subscription/:userId"
              component={AddUserSubscription}
            />

            <AppLayoutRoute
              exact
              path="/edit-user-subscription/:userSubscriptionId/:userId"
              component={AddUserSubscription}
            />

            <AppLayoutRoute exact path="/list-users" component={UserList} />

            <AppLayoutRoute
              exact
              path="/list-user/:userId"
              component={UserList}
            />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
