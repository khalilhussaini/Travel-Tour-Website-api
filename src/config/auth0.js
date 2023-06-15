import { auth } from 'express-oauth2-jwt-bearer';


const jwtCheck = auth({
  audience: 'https://dev-e8adm88h4os40q5w.us.auth0.com/api/v2/',
  issuerBaseURL: 'https://dev-qdp67cma.us.auth0.com/',
  tokenSigningAlg: '35999'
});

export default jwtCheck; 