import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SuggestionsList from './components/SuggessionsList'
import SuggesstionCard from './components/SuggesstionCard'
import SuggesstionsContainer from './containers/SuggestionsContainer'
import SuggestionForm from './components/SuggestionForm';
import UserProfile from './account/UserProfile';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Header slogan="Be Creative. Be You!" storename="Where ideas come together!" />
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
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/suggestions/new">
          <SuggestionForm />
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
