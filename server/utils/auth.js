const jwt = require('jsonwebtoken');

// Sets token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Function for the authenticated routes
  authMiddleware: function ({ req, res }) {
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // if (req.headers.authorization) {
    //   const regex = /^Token\s+(.*)$/;
    //   const match = req.headers.authorization.match(regex);
    //   if (match) {
    //     token = match[1];
    //   }
    // }
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // Try to verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
