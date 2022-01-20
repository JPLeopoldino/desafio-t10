const appp = require('./app');
const config = require('./config');

appp.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
