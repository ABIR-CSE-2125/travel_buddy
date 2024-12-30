import http from "http";
import app from "./app.js";
import { PORT } from "./config.js";
const server = http.createServer(app);
const port = PORT || 3000;
server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
