import makeRequest from './makerequest'

function getData (url) {
  let options = {
    method: 'get'
  }
  
  return makeRequest(url, options)

}

export default getData
