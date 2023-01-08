import axios from 'axios';
// export const BASE_URL = 'https://seller.ecom.dev/api';
// export const URL = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL: 'https://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
