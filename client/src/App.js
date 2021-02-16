import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SavedRecipes from "./components/Recipes/Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/savedrecipes"]}>
            <SavedRecipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
