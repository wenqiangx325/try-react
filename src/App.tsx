import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import  * as page from "page"

function App() {
  return (
    <div>
      <div>
        <Link to="/">Index</Link>
        <Link to="/d3">D3</Link>
      </div>
      {/* Switch for react-router-dom */}
      <Switch>
        {/* Route for react-router-dom */}
        <Route exact path="/">
          <div>Index</div>
        </Route>
        <Route path="/d3" component={page.d3}/>
      </Switch>
    </div>
  );
}

export default App;
