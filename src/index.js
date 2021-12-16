import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";
import GlobalProvider from "./context/Provider";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import reportWebVitals from "./reportWebVitals";
import Slide from "@material-ui/core/Slide";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️",
        }}
        TransitionComponent={Slide}
        maxSnack={3}
      >
        <App />
      </SnackbarProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
