const express = require('express')
const app = express()
const port = 3000


const tareas = [
    {
        id: 123,
        description: "hacer compras",
        isCompleted: false,
      },
      {
        id: 1234,
        description: "hacer tarea de programacion",
        isCompleted: false,
      },
      {
        id: 12345,
        description: "hacer tarea de estadistica",
        isCompleted: false,
      },
]


app.get('/listatareas' , (req, res)=>{
    res.json(tareas)
})


app.listen (port, ()=>{
console.log(`el servidor inicio correctamente en el port ${port}`)
})