const data = [1070];
const result = [];

for (let i = 0; i < data.length; i++) {
  const payload = { element: data[i],
    tableId: 1,
    skinId: "6",
    providerCode: "wac", //provider-code,
    type: "CHARGED",
    gameType: "1X2-8026", //game-type,
    lang: "en",
    homeUrl: "https://www.joshgames.in/casino",
    lobby: false,
    device: "mobile"}; // create payload with element at ith position
  makeApiCall(payload)
    .then(response => {
      result.push(response); // append the API call result to the result array
    })
    .catch(error => {
      console.error(error); // handle error if API call fails
    });
}

function makeApiCall(payload) {
  // replace with your API endpoint URL and request method
  return fetch('https://wd-prod-api.joshgames.in/app/genGameLaunchUrl', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'x-real-ip': '49.207.219.199',
      'X-Application': 'xnm2ox7ajlek',
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo5MTUsInVzZXJuYW1lIjoiR3Vlc3RyMHVWYW4iLCJzaXRlLWlkIjoxLCJ1dWlkIjoiMjU1ZDhjNDYtODE3OC00ZTc2LTk3YmQtODkyYWQ0ODFkMDk3In0sImV4cCI6MTY4MTU0NDE0OH0.hRTHO30DJIL_YYgHah2NKkUozkjMMDh5r8Hc3IKbvuo'
    }
  })
    .then(response => response.json())
    .then(data => {
      return data; // return the API response
    });
}
