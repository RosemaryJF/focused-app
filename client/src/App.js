import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ThemeProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// TO WRITE
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Days from './pages/Days';
// import Profile from './pages/Profile';
// import Nav from './components/Nav';

// import Success from './pages/Success';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <ThemeProvider>
            {/* <Nav /> */}
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              {/* <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/days"
                element={<Days />}
              />
              <Route
                path="/days/:id"
                element={<Detail />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              /> */}
            </Routes>
          </ThemeProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

