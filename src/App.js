<<<<<<< HEAD
=======
import './App.css';
>>>>>>> Aleksandra

import { Switch, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import MyCardsPage from "./pages/MyCardsPage";
import AddNewCardPage from "./pages/AddNewCardPage";
function App() {
  return (
<<<<<<< HEAD
    
    <Switch>
      <Route exact path="/" render={(props) => <StartPage />} />
      <Route path="/mycard" render={(props) => <MyCardsPage />} />
      <Route path="/createcard" render={(props) => <AddNewCardPage />} />
    </Switch>
    
  )
=======
    <div className="App">
     <p>Test</p>
    </div>
  );
>>>>>>> Aleksandra
}

export default App;
