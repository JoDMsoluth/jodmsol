const app = require("./app");
const winston = require("./config/winston");

const port = process.env.PORT || 3001;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
