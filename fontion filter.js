
var unirest =require ("unirest")

function filter()
{
    
    var r =unirest("GET","http://localhost:3000/profil_sportif?$filter=startswith(nom,'M')eq true")

    r.headers(
        {
            "cache-control": "no-cache",
        })
   
        
   
         
    
      
   return  r.end(function (res){
    if (res.error) throw new Error(res.error)
    console.log(res.body)  })

} 
filter();
 