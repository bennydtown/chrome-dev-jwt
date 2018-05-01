import jwt from 'jsonwebtoken';

const makeToken = (data) => {
  let tokenData = {
    id: data.userId,
    roles: JSON.parse(data.roles),
  }
  let token = jwt.sign(tokenData,
  null,
  {
    issuer: 'yourdomain.com',
    algorithm: 'none',
    expiresIn: '1y',
    audience: 'yourdomain.com',
    subject: data.userId,
  });

  return {
    jwt: token,
    decoded: jwt.decode(token)
  };
};

export default makeToken;
