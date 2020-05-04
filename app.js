var express = require("express");
var HTTP_PORT = 8000;
var request = require("request");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");

//routes
app.get("/", function(req , res){
   
request("https://script.googleusercontent.com/macros/echo?user_content_key=ABVEkxlexxd0wL88n3EL56SVbf5bfND5ipBi2sCdbNjbvZcTbyylpIGPvNkOhu_QGKmTIvViAzXFRQm35SeeOddVG0TIgU9im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6",function(error, response , body){
    if( !error && response.statusCode == 200 ){
        var data = JSON.parse(body);
        
        res.render("index",{data:data});
      }
});
});


app.listen(process.env.PORT || HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
  });