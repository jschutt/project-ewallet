import { Switch, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import MyCardsPage from "./pages/MyCardsPage";
import AddNewCardPage from "./pages/AddNewCardPage";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <StartPage />} />
      <Route path="/mycards" render={(props) => <MyCardsPage />} />
      <Route path="/createcard" render={(props) => <AddNewCardPage />} />
    </Switch>
  );
}

export default App;
