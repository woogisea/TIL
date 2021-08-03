import client from './client';

export const login = ({username, password}) => 
    client.get('/api/auth/login', {username, password});

export const register = ({username, password, passwordConfirm}) =>
    client.get('/api/auth/register', {username, password, passwordConfirm});

export const check = () => client.get('/api/auth/check');