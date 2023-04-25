export const config = {
  serverHost: process.env.REACT_APP_API_URL,
  appKey: process.env.REACT_APP_APP_KEY,
  tokenString:
    JSON.parse(localStorage.getItem(`${process.env.REACT_APP_APP_KEY}`) as any)?.auth?.token ||
    JSON.parse(sessionStorage.getItem(`${process.env.REACT_APP_APP_KEY}`) as any)?.auth?.token
};
