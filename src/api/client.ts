import ky from 'ky';

export const api = ky.create({
  prefixUrl: '/',
  timeout: 1e4,
});
