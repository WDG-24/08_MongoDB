import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello');
  // res.setHeader('Content-Type', 'text/html');
  // res.end('<h1>Hello</h1>');

  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    })
  );
});

const port = 3000;

server.listen(port, () =>
  console.log(`Server is running at: http://localhost:${port}`)
);
