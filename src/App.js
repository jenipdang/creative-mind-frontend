import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar1 from './components/pages/Navbar1'
import SuggestionCard from './components/suggestions/SuggestionCard'
import SuggestionsContainer from './components/suggestions/SuggestionsContainer'
import SuggestionForm from './components/suggestions/SuggestionForm';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import SignOut from './components/account/SignOut';
import Notification from './components/pages/Notification';
import Missing from './components/pages/Missing';
import { useGlobalContext } from './components/data/context'
import { useEffect } from 'react'


function App() {
    const { setUser } = useGlobalContext()


    useEffect(() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUser(data.user)
          })
        } else {
          r.json().then((error) => console.log(error.error))
        }
      })
      .catch(err => console.log(err))
    }, [setUser])


  return (
    <div className="App">
     <Router>
       <Navbar1 storeName="Creative Minds" slogan="Be Creative...Be You." />
       <Notification />
       <Switch>
        <Route path="/suggestions/new">
          <SuggestionForm />
        </Route>
        <Route path="/suggestions/:id">
          <SuggestionCard />
        </Route>
        <Route path="/suggestions">
          <SuggestionsContainer />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signout">
          <SignOut />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*" >
          <Missing />
        </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
