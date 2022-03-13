const express = require('express');
const app = express();
const {cloudinary} = require('./utils/cloudinary');
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));

app.get('/api/images', async (req,res)=>{
    const {resources} = await cloudinary.search
    .expression('folder:ml_default')
    .sort_by('public_id','desc')
    .max_results(30) 
    .execute();
const publicIds= resources.map(file => file.public_id);
res.send(publicIds);
});

app.post('/api/upload', async (req,res)=>{

    try{
        const fileStr=req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{ upload_preset : 'ml_default'});
        console.log(uploadedResponse);
        res.json({msg : "DONE"})
    } catch (error){
        console.error(error);
        res.status(500).json({err : "something went wrong"});
    }

});
// use 'npm run dev' to start the server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})