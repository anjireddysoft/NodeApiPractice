const express=require("express");

const router=express.Router();
const mysqlConnection=require("../connection");

router.get("/people",function(req,res){


mysqlConnection.query("select * from people",function(err,rows){
if(err){
    res.send({"Success":false,Message:"File not Found"})
}else if(rows.length>0){
    res.send({"Success":true,data:rows,Message:"Success"})
}else{
    res.send({"Success":false,Message:"No Data Found"})

}

})
 

})
router.get("/people/:id",function(req,res){
    var id=req.params.id;

    mysqlConnection.query("select * from people where id=?",[id],function(err,rows){
    if(err){
        res.send({"Success":false,Message:"File not Found"})
    }else if(rows.length>0){
        res.send({"Success":true,data:rows,Message:"Success"})
    }else{
        res.send({"Success":false,Message:"No Data Found"})
    
    }
    
    })

     
    
    })
    router.post("/people",function(req,res){
        var body=req.body;
       
        var user={
     name:body.name,
     age:body.age

        }
        console.log("name"+user.name);
        console.log("age"+user.age);
    
        mysqlConnection.query("select * from people where id=? or name=?",[body.id,body.name],function(err,rows){
        if(err){
            res.send({"Success":false,Message:"File not Found"})
        }else if(rows.length>0){
            res.send({"Success":true,data:rows,Message:"User Already Exist"})
        }else{

            mysqlConnection.query("insert into people (name,age) values(?,?)",[user.name,user.age],function(err,rows){
if(err){
    res.send({"Success":false,Message:"File not Stored"+err.message})

}else{
    res.send({"Success":true,Message:"Data Stored Successfully"})

}



            })
         
        
        }
        
        })
    
         
        
        })

        router.delete("/people/:id",function(req,res){
            var id=req.params.id;
        
            mysqlConnection.query("delete  from people where id=?",[id],function(err,rows){
            if(err){
                res.send({"Success":false,Message:"File not Found"})
            }else {
                res.send({"Success":true,Message:"Data deleted Successfully"})
            }
            
            })
        
             
            
            })

module.exports=router;




