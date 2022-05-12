import _ from 'lodash';
import {getToken} from './auth';

const baseUrl = 'https://a3fe4e9fea9c.ngrok.io';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchMoreList = async (spage, npage) => {
    try {
      const token = await getToken();
        let response = await fetch(`${baseUrl}/user/storepages`, {
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "sPage": spage,
          "nPage": npage
        })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

export const join = async (email, name, password, agree) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/join`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "customerEmail": email,
        "customerName": name,
        "customerPassword": password,
        "personalAgree": agree,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email, password) => {
  try {
    let response = await fetch(`${baseUrl}/user/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        "username": email,
        "password": password,
      }),
    });
    let json = await response.json();
    
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const me = async () => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/customer`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "Token": `${token}`,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};


export const fetchReview = async (storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/riv/${storeNum}`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const addReview = async (score, storeNum, review, customerNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/riv`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "storeNum": storeNum,
        "score": score,
        "customerNum": customerNum,
        "reviewcon": review,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const waiting = async (customerName, customerPhone, numberofCustomer, customerNum, storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/waiting`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "storeNum": storeNum,
        "customerName": customerName,
        "customerNum": customerNum,
        "customerPhone": customerPhone,
        "customerCount": numberofCustomer,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchZzim = async (customerNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/zzim/${customerNum}`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const addZzim = async () => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/zzim`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "storeNum": storeNum,
        "customerNum": customerNum,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
export const delZzim = async () => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/zzim/delete`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "storeNum": storeNum,
        "customerNum": customerNum,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchWaiting = async (storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/waiting/${storeNum}`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSeat = async (storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/seat/${storeNum}`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMenu = async (storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/menu/${storeNum}`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStore = async (storeNum) => {
  try {
    const token = await getToken();
    let response = await fetch(`${baseUrl}/user/store/4`, {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};



