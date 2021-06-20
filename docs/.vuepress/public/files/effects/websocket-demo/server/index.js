const WebSocketServer = require('ws').Server

const ws = new WebSocketServer({port: 8181})
ws.on('connection', ws => {
  console.log('client connected ' + (new Date().toLocaleString()))
  ws.on('message', message => {
    console.log('on message: ', message)
  })

  setInterval(()=>{
    sendStockUpdate(ws)
  }, 1000)
})

function sendStockUpdate(ws) {
  if (ws.readyState !== 1) return

  let number = Math.random()
  ws.send(number, ()=>{
    console.log('send:', number)
  })
}
