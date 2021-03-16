const express = require('express');
const app = express();

const port = 80 ;

app.configure(function(){

  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

});

app.use(cors());

app.get('/', ( req, res) => {
    res.status(200).send(`<h1>Sitio Web en Construcción 2021 </h1> `);
});

app.listen(port, async () => {
  await  console.log(`Servidor Se esta esuchando en el puerto 80`);
});
