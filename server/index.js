const express = require("express");
const next = require("next");
const ReactDomServer = ("react-dom/server")

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/products/:id/:name', (req, res) => {
      return app.render(req, res, '/products', req.params)
    })

    /*server.get("/products", async (req, res) => {
      const props = await ProductList.getInitialProps()
      const html = ReactDomServer.renderToString(<ProductList {...props} />)
      return handle(req, res.send(html));
    });*/

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
