import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import SuggesstionCard from './components/suggestions/SuggesstionCard'
import SuggesstionsContainer from './components/suggestions/SuggestionsContainer'
import SuggestionForm from './components/suggestions/SuggestionForm';
import UserProfile from './components/account/UserProfile';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar storeName="Creative Minds" slogan="Be Creative...Be You." />
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
          <UserProfile />
        </Route>
        <Route path="/account/signin">
          <SignIn />
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
