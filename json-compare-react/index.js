import express from 'express';
const app=express();
const items=[
    {title:'kitkat',id:1},
    {title:'bourbon',id:2}
]
app.get('/',(request,response)=>{
    response.send('json compare');
});
app.get('/api/items',(request,response)=>{
    response.send(items);
});

const port=3000;
app.listen(port, ()=> console.log('Listening on port ${port}..'));