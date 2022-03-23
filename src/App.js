import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar1 from './components/pages/Navbar1'
import SuggesstionCard from './components/suggestions/SuggesstionCard'
import SuggesstionsContainer from './components/suggestions/SuggestionsContainer'
import SuggestionForm from './components/suggestions/SuggestionForm';
import Profile from './components/account/Profile';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import SignOut from './components/account/SignOut';
import Notification from './components/pages/Notification';
import { useGlobalContext } from './components/data/context'
import { useEffect } from 'react'

function App() {
    const { user, setUser } = useGlobalContext()

    useEffect(() => {
      fetch('http://localhost:9292/me')
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
          })
        } else {
          r.json().then((error) => console.log(error.error))
        }
      })
      .catch(err => console.log(err))
    }, [user, setUser])


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
          <SuggesstionCard />
        </Route>
        <Route path="/suggestions">
          <SuggesstionsContainer />
        </Route>
        <Route path="/account/profile">
          <Profile />
        </Route>
        <Route path="/account/signin">
          <SignIn />
        </Route>
        <Route path="/account/signout">
          <SignOut />
        </Route>
        <Route path="/account/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
