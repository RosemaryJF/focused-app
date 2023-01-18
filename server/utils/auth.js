const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '7200';

module.exports = {

  authMiddleware: function ({ req, res, next }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    // if no token, return request object as is
    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};