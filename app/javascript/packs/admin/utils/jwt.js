import jwtDecode from 'jwt-decode';

export const validToken = (token) => {
  if (!token) return false;

  const jwt = jwtDecode(token);
  const current = Math.round(new Date().getTime() / 1000);

  if (jwt.exp < current) { return false; }

  return true;
};
