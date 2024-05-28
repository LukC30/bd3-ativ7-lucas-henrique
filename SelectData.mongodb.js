const database = "db_produtos";
const collection = "Produtos";

use(database);

//Consulta 1
//==========================================================================
// db[collection].find({"valor" : {$gt : 700.0}})


//Consulta 2
//==========================================================================
// db[collection].find({"valor": {$lt: 450.0}});

//Consulta 3
//==========================================================================
// db[collection].find({"valor" : {$gte: 500.00, $lte: 950.00}})
