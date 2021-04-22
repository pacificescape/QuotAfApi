const autocannon = require('autocannon')
const json = require('./post.json')

async function cannon () {
  const result = await autocannon({
    url: 'http://localhost:4444/component',
    connections: 20, // default
    pipelining: 10, // default
    duration: 20, // default
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  console.log(result)
}

cannon()
