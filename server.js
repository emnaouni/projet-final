const express =require( "express")
const mongoose = require("mongoose");
const app= express()

  app.use(express.json())

const mongoURI =
  "mongodb+srv://iheb:iheb@cluster0-d5gr4.mongodb.net/test?retryWrites=true&w=majority";

  mongoose.connect(mongoURI,
       { useUnifiedTopology: true, useNewUrlParser: true },
       (err) => {
      if (err) throw err;
      console.log('Database connected');
  })
  

app.use("/medicaments", require('./routes/medicaments'));
app.use("/analyses", require('./routes/analyses'));
app.use("/rdv", require('./routes/rdv'));
app.use('/personne',require('./routes/personne'))
app.use('/maladies',require('./routes/maladies'))
app.use('/auth',require("./routes/auth"))
app.use('/avis',require('./routes/avis'))
app.use('/visite',require('./routes/visites'))


app.use('/dossiermedical',require('./routes/dossiermedical'))



app.listen( 5000, ()=>{
console.log("Server is running on port 5000") 
})