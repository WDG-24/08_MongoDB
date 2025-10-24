import http, { type RequestListener } from 'node:http';

const requestHandler: RequestListener = (req, res) => {
  const { method, url } = req;
  console.log(method, url);
  res.end();
};

const server = http.createServer(requestHandler);

const port = 8000;

server.listen(port, () =>
  console.log(`Server is running at: http://localhost:${port}`)
);
