const mongoose=requir('mongoose');

mongoose.connect("mongod://localhost:27017/mr.Rembo.com",{useNewUrlParser:true,useUnifiedtopology:true})

.then(()=>{
    console.log("Database connected succesfully")
}).catch((err)=>{
    console.log("error in connection with database "+err);
})

