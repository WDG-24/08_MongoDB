// /posts only GET & POST requests
// /posts/<id> only GET, PUT & Delete
// else => 404 Not Found

import http, { type RequestListener } from 'node:http';

const createResponse = (
  res: http.ServerResponse,
  statusCode: number,
  message: unknown
) => {
  res.writeHead(statusCode, { 'Conent-Type': 'application/json' });
  return res.end(
    typeof message === 'string'
      ? JSON.stringify({ message })
      : JSON.stringify(message)
  );
};

const requestHandler: RequestListener = (req, res) => {
  const { method, url } = req;

  if (url === '/posts') {
    if (method === 'GET')
      return createResponse(res, 200, 'GET request on /posts');
    if (method === 'POST')
      return createResponse(res, 201, 'POST request on /posts');
    return createResponse(res, 405, 'Method Not Allowed');
  }

  // posts/<id>
  if (url?.startsWith('/posts/')) {
    if (method === 'GET')
      return createResponse(res, 200, `GET request on ${url}`);
    if (method === 'PUT')
      return createResponse(res, 200, `PUT request on ${url}`);
    if (method === 'DELETE')
      return createResponse(res, 200, `DELETE request on ${url}`);
    return createResponse(res, 405, 'Method Not Allowed');
  }
  return createResponse(res, 404, 'Not Found');
};

const port = 8000;

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server is running at: http://localhost:${port}`)
);
