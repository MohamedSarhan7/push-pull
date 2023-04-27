const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

try {

    mongoose.connect('mongodb://localhost/chatroom');
} catch (error) {
    console.log("mongoose : ", error)
}


const messageSchema = new mongoose.Schema({
    message: String,
},
    { timestamps: true });


const Message = mongoose.model('Message', messageSchema);

app.use(cors());

app.use(express.json());


const resArr={};
app.get('/messages', async (req, res) => {
    console.log(req.query.lastMessage)
    // const    filterDate=req.query.lastmessage.toIsoString();
    // console.log(filterDate)    
    try {

        // if (req.query.lastMessage) {
        //     const data = await Message.find({ createdAt: { $gt: new Date(req.query.lastMessage) }, }).sort({ timestamp: -1 }).exec()
        //     console.log("query =>  length: ", data.length, " time:: ", new Date(Date.now()))
        //     // return res.json(data);
        //     resArr[Math.ceil(Math.random()*10000)]=res;

        // } else {
            const data = await Message.find().sort({ timestamp: -1 }).exec();
            console.log("NO(query) =>  length: ", data.length, " time:: ", new Date(Date.now()))
            // return res.json(data);
            resArr[Math.ceil(Math.random() * 10000)] = res;

        // }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');

    }
});


app.post('/messages', async (req, res) => {
    const { message } = req.body;
    try {
        const newMessage = await Message.create({ message });
        Object.keys(resArr).forEach((el)=>{
            // console.log(typeof el)
            resArr[el].json(newMessage);
            delete resArr[el];
            
        });

        // await newMessage.save()
        res.status(201).send('Message created');
    } catch (error) {

        console.error(error);
        res.status(500).send('Internal server error');
    }

});


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});