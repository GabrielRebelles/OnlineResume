require("dotenv").config()
const express = require("express")
const app = express()
const path = require("path")

const options = {
    root: path.join(__dirname),
    headers: {
        "Cache-Control": "no-store",
        "Content-Disposition":`inline; filename="CV Gabriel Rebelles.pdf"`
    }
}

app.use("/en",(req,res,next)=>{    
    res.removeHeader('X-Powered-By')
    res.status(200).sendFile("GabrielRebelles-CV-En.pdf",options)
})

app.use((req,res,next)=>{    
    res.removeHeader('X-Powered-By')
    res.status(200).sendFile("GabrielRebelles-CV.pdf",options)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server lanzado en puerto: ${process.env.PORT}`);
})