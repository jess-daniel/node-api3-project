// code away!
const server = require("./server");

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
