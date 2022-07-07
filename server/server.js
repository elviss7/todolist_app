const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');
const { response } = require('express');


const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks', (req,res)=> {
   const TASK_QUERY = "select *from todomanager.tasks";
   connection.query(TASK_QUERY, (err, resonse)=>{
    if(err) console.log(err)
    else res.send(resonse)
   })
})

app.post('/addTask' , (req,res) => {
    const ADD_QUERY = `INSERT INTO todomanager.tasks (tasks)  VALUES ('${req.body.task}')`;   
    connection.query(ADD_QUERY, (err)=> {
        if(err) { console.log(err);
        } else { 
            res.send('task has been added');
    } 
    });
   
});

app.delete('/deleteTask/:taskid', (req, res) => {
 const DELETE_QUERY = `DELETE FROM todomanager.tasks WHERE (taskid=${req.params.taskid})`;
 connection.query(DELETE_QUERY, (err, res)=>{
    if(err) {
        console.log(err);
    }  else {
        res.send('task has benn deleted');
    }
   });


});

app.listen(4000, ()=> {
    console.log('running on port 4000')
});