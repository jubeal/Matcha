import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeContext from './Context/ThemeContext';

import { Header, Footer, Register, Home, Profile } from './Components';

function App() {
  /*const { xs, sm, md, lg, xl } = useBreakpoints({
    xs: { min: 0, max:600 },
    sm: { min: 600, max: 960 },
    md: { min: 960, max: 1280 },
    lg: { min: 1280, max: 1920 },
    xl: { min: 1920, max: null },
  });*/
  return (
    <ThemeContext>
      <div
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Router>
          <Header />
          {/*{mobile ? <MobileHeader /> : <Header />}*/}
          <div
            style={{
              display: 'flex',
              flex: '1',
              backgroundColor: '#212121',
            }}
          >
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/inscription">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeContext>
  );
}

export default App;
