import "./App.css";
import Home from "./components/Home/Home";
import savedRecipes from "./components/Recipes/Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/savedrecipes"]}>
            <savedRecipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
