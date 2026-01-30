// Запускає сервер в тому ж процесі, потім емулює хоста через socket.io-client
require('./server.js');

const { io } = require('socket.io-client');
const URL = process.env.URL || 'http://localhost:3000';

setTimeout(() => {
  const socket = io(URL, { transports: ['websocket'], forceNew: true });

  socket.on('connect', () => {
    console.log('test-client connected:', socket.id);
    socket.emit('host:create-room');
  });

  socket.on('room-created', (data) => {
    console.log('room-created:', data);
    socket.disconnect();
    process.exit(0);
  });

  socket.on('connect_error', (err) => {
    console.error('connect_error:', err.message || err);
    process.exit(1);
  });

  setTimeout(() => {
    console.error('timeout waiting for room-created');
    process.exit(2);
  }, 10000);
}, 500);
