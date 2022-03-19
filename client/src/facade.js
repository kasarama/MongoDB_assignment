const URL = "http://127.0.0.1:5000/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  const makeOptions = (method, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const get_tweets = () => {
    const options = makeOptions("GET");
    return fetch(URL + "10tweets", options).then(handleHttpErrors);
  };

  const post_user = (user) => {
    console.log(user);
    const options = makeOptions("POST", user);
    return fetch(URL + "user", options).then(handleHttpErrors);
  };

  const post_topics = (user) => {
    const options = makeOptions("POST", user);
    return fetch(URL + "topics", options).then(handleHttpErrors);
  };

  const estimate = (user) => {
    const options = makeOptions("POST", user);
    return fetch(URL + "estimate", options).then(handleHttpErrors);
  };
  const getEstimateStatus = () => {
    const options = makeOptions("GET");
    return fetch(URL + "estimatestate", options).then(handleHttpErrors);
  };

  return {
    get_tweets,
    post_user,
    post_topics,
    makeOptions,
    estimate,
    getEstimateStatus,
  };
}

const facade = apiFacade();
export default facade;
