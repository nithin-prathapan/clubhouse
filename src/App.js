import React from "react";
import "./App.css";
import PlanLayout from "./Pages/Layout/PlanLayout";
import Welcome from "./Pages/Welcome";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PhoneConfirmation from "./Pages/PhoneConfirmation";
import CodeConfirm from "./Pages/CodeConfirm";
import AllowNotification from "./Pages/AllowNotification";
import AppLayout from "./Pages/Layout/AppLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={["/", "/invite", "/code_confirm", "/allow_notification"]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />}></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
