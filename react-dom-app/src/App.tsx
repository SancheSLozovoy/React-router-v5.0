import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import EntityListHeader from './components/EntityListHeader';
import EntityPage from './pages/EntityPage';
import PrivatePage from './pages/PrivatePage'; 
import EntityDetailPage from './pages/EntityDetailPage';
import NotFound from './pages/NotFound';


const App: React.FC = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <EntityListHeader onAuth={() => setAuth(!auth)} auth={auth} />
      <Switch>
        <Route path='/' exact><EntityPage/></Route>
        <Route path='/private'>
          {auth ? <PrivatePage /> : <Redirect to='/' />}
        </Route>
        <Route path='/entity/:name'><EntityDetailPage/></Route>
        <Route path='/404'><NotFound/></Route>
      </Switch>
    </Router>

  );
}

export default App;
