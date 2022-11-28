import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Layout} from "../Components/HOCs/Layout";
import {Routes} from "./Routes";
import ContextWrapper from "../../Context/ContextWrapper";

function App() {
  return (
    <>
      <Router>
        <Switch>
            <ContextWrapper>
                <Layout>
                    {Routes.map((el, idx) => (
                        <Route key={idx} path={el.path} exact>
                            {el.page}
                        </Route>
                    ))}
                </Layout>
            </ContextWrapper>
        </Switch>
      </Router>
    </>
  );
}

export default App;
