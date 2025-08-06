import app from "./app.js";

app.listen(process.env.PORT,()=> {
    console.log(`server Runing On Port ${process.env.PORT}`);
});