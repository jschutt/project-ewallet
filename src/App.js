
import { Switch, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import MyCardsPage from "./pages/MyCardsPage";
import AddNewCardPage from "./pages/AddNewCardPage";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <StartPage />} />
      <Route path="/mycard" render={(props) => <MyCardsPage />} />
      <Route path="/createcard" render={(props) => <AddNewCardPage />} />
    </Switch>

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Nu kör vi 😀</h1>
    </div>

  );
}

export default App;
