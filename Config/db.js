//const mysql2=require ("mysql2");


//const configInfoDB={
   // host: "127.0.0.1",
    //user: "root",
    //port: 3306,
    //password: "root",
    //database: "db_productos",
//};

 
//const dbConnection= mysql.createConnection(configInfoDB);


import mysql2 from 'mysql2';
const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  database: "db_productos",
};
const dbConnection = mysql2.createConnection(dbConfig);

//dbConnection.connect ((err)=>{
 //   err? console.log ("error al conectarse a la db"): console.log ("conexion exitosa")
//})

dbConnection.connect((err) => {
    if (err) {
        console.log("Error al conectarse a la db:", err.message);
    } else {
        console.log("Conexión exitosa");
    }
});

export default dbConnection;




