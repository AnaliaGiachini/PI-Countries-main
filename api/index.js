//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//--Server configuration--

// Require: Server for the conection to DB
const server = require('./src/app.js')

// Require: Conn (Sequelize) for the conection to DB
const { conn, Country } = require('./src/db.js')

// Require: axios to make the REQ to the server
const axios = require('axios')

const {
  loadCountriesToDB,
} = require("./src/controllers/loadCountriesToDBController.js")


// Sync -> Connect: all the models of the DB and then listen to the server 
// Force: elimina las tablas y las vuelve a crear.
// Alter: las actualiza y no las borra
conn.sync({ force: true }).then(() => {
  // Listen: to the server
  server.listen(3001, async () => {
    await loadCountriesToDB()
    console.log('%s listening at 3001') // eslint-disable-line no-console
  })
})


