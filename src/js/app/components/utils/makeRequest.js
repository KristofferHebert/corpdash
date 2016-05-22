import 'whatwg-fetch'

let defaultOptions = {
  headers: {
    'Accept': 'application/json'
  }
}

function makeRequest (endpoint, userOptions) {
  let options = Object.assign(defaultOptions, userOptions)
  if (options.method === 'get' || options.method === 'GET') {
    delete options.body
  }
  return fetch(endpoint, options)
  .then((response) => {
    console.log(response.headers.get('content-type'))
    return response.json()
  }).then((data) => {
    return data
  }).catch((ex) => {
    console.log('request failed', ex)
  })
}

export default makeRequest
