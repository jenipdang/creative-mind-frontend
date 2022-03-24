import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar1 from './components/pages/Navbar1'
import SuggesstionCard from './components/suggestions/SuggesstionCard'
import SuggesstionsContainer from './components/suggestions/SuggestionsContainer'
import SuggestionForm from './components/suggestions/SuggestionForm';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import SignOut from './components/account/SignOut';
import Notification from './components/pages/Notification';
import Missing from './components/pages/Missing';
import { useGlobalContext } from './components/data/context'
import { useEffect } from 'react'
import {ProtectedRoute} from './components/pages/ProtectedRoute';


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
    }, [])


  return (
    <div className="App">
     <Router>
       <Navbar1 storeName="Creative Minds" slogan="Be Creative...Be You." />
       <Notification />
       <Switch>
        <ProtectedRoute path="/suggestions/new">
          <SuggestionForm />
        </ProtectedRoute>
        <ProtectedRoute path="/suggestions/:id">
          <SuggesstionCard />
        </ProtectedRoute>
        <ProtectedRoute path="/suggestions">
          <SuggesstionsContainer />
        </ProtectedRoute>
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
