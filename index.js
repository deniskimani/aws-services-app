const app = require("./src/app")
const APP_PORT = 4001;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});