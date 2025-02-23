const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve();
        } else {
          reject(new Error('Simulated error'));
        }
      }, 1000);
    });

    // If the promise resolves, send a successful response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    // If the promise rejects, handle the error and send an error response
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});