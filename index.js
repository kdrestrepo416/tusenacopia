import { sequelize } from "./db/db.js";
import app from "./app.js";


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

async function main(){
    try {
        await sequelize.sync({force:false})
        app.listen(4000) 
       
        console.log("el proyecto y la base de datos estan conectados");

    } catch (error) {
        console.log('no hay conecxion con la base de datos',error);
    }
}


main()
