import GoogleSiginIn from './login/GoogleSiginIn';
import Contact from './contact/Contact'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const responseGoogle = (response) => {
    console.log(response);
    global.window.alert(response);
  }
  
  return (
    <>
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route exact path='/' component={GoogleSiginIn} ></Route>
              <Route path='/Contact' component={Contact} ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
