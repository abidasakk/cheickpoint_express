
let express=require('express')

let serveur = express();
const myLogger = function (req, res, next) {
    console.log("A new request received at " + Date.now());
     next();
  }

serveur.set('view engine','ejs');
serveur.listen(3000);



serveur.get('/',(req,res)=>{
res.render('acceuil')
})

serveur.get('/contactez',(req,res)=>{
    res.render('contactez')
})

serveur.get('/services',(req,res)=>{
    res.render('nos_services')
})

serveur.use((req,res)=>{
    res.render('404')
})
serveur.use(myLogger)
