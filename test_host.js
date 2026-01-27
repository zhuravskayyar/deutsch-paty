const { io } = require('socket.io-client');

const URL = process.env.URL || 'http://localhost:3000';

const socket = io(URL, {
  reconnectionDelay: 0,
  forceNew: true,
  transports: ['websocket']
});

socket.on('connect', () => {
  console.log('connected:', socket.id);
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

socket.on('error', (err) => {
  console.error('error event:', err);
});

setTimeout(() => {
  console.error('timeout waiting for room-created');
  process.exit(2);
}, 10000);
