import { app } from "./app";
const config = require('./config');
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));