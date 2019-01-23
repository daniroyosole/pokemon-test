export const get = (baseUrl, queryUrl = '') => {
    const fullUrl = baseUrl + queryUrl;
    const headers = {
      'Accept': 'application/json',
      'Content-Type': '*/*',
    };
  
    return fetch(fullUrl, { headers })
      .then(response => response.json());
  };
  