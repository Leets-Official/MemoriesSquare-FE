import { is_login } from './store';

const springFetch = (operation, url, params, access_token, returnData) => {
  let method = operation;
  let content_type = 'application/json';
  let body = JSON.stringify(params);

  let _url = import.meta.env.VITE_SERVER_URL + url;

  if (method === 'get') {
    _url += '?' + new URLSearchParams(params);
  }

  let options = {
    method: method,
    headers: {
      'Content-Type': content_type,
      Authorization: 'Bearer ' + access_token
    }
  };

  if (method != 'get') {
    options['body'] = body;
  }

  fetch(_url, options)
    .then((r) => {
      if (r.status != 401) {
        return r.json();
      } else {
        is_login.set(false);
        location.href = '/';
      }
    })
    .then((data) => {
      returnData(data);
    });
};

export default springFetch;
