import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Apollo hooks and modules
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AddDay from './pages/AddDay';
import Days from './pages/Days';

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
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/newday"
              element={<AddDay />}
            />
            <Route
              path="/days"
              element={<Days />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider >
  );
}

export default App;