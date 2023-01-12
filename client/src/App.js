import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import { ThemeContext, ThemeProvider } from './utils/GlobalState';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
// TO WRITE
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Days from './pages/Days';
// import Profile from './pages/Profile';


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
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Router>
          <Container fluid>
            <Row>
              <Nav />
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
            </Row>
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

export default App;

