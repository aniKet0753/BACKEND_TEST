import express from 'express';

const app = express();
  app.get('/api/',(req,res)=>{
    res.send("hey there this is server");

    app.get('/api/jokes',(req,res)=>{
        const jokes = [
    {id :1,
      title:'a joke',
      contenent:"this is a joke"
    },{
      id :2,
      title:'come joke',
      contenent:"this is not a joke"
    },
        {id :3,
      title:'to the joke',
      contenent:"this is for a joke"
    },
        {id :4,
      title:'voli joke',
      contenent:"this is then a joke"
    }
]
res.send(jokes);
      })
    })

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log("server is running ")
})