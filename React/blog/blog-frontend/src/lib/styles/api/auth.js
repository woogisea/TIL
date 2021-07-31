import client from './client';

export const login  = ({ username, password}) => 
    client.post('/api/auth/login', {username, password});

export const register = ({username, password, passwordConfirm}) => 
    client.post('/api/auth/reigster', {username, password, passwordConfirm});

export const check = () => client.get('/api/auth/check');