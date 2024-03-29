//IT21098246
//Samiru J.G.S
//Event Management

const router = require("express").Router();
let Event = require ("../models/Event");


//upload image on cloudinary
// let fs=require("fs");
// let cloudinary = require("cloudinary");
// let dotenv = require("dotenv");
// dotenv.config();
// cloudinary.config({
// cloud_name: process.env.CLOUD_NAME,
// api_key: process.env.CLOUD_API_KEY,
// api_secret: process.env.CLOUD_API_SECRET,

// })



////////////////////////////////////////create an event//////////////////////////////////////

router.route("/add").post(async (req,res)=>{ //loads http://localhost:8070/EVENT/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd

const name = req.body.name;
const eventType = req.body.eventType;
const description = req.body.description;
const date = req.body.date;
const place = req.body.place;
const eventLink = req.body.eventLink;



const newEvent = new Event({
    name,
    eventType,
    description,
    date,
    place,
    eventLink
    


})

    //validation of event name if exists 
       

const event = await Event.findOne({ name });

    if (event)

    return res.status(400).json({ msg: "This event already exists." });
    newEvent.save().then(()=>{  //passing values through via document
        res.json("Event Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})






////////////////////////////////view ALL Events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/events

    Event.find().then((events)=>{
        res.json(events)

    }).catch((err)=>{
        console.log(err)
    })
})









////////////////////////////////Update an event///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take EventID and update only the relevant Event only
    //loads http://localhost:8070/Students/update 
    let eventId = req.params.id;
    const {name, eventType, description, date, place,eventLink}  = req.body; //dStructure

    const updateEvent = {
        name,
        eventType,
        description,
        date,
        place,
        eventLink
        
    }
    const update = await Event.findByIdAndUpdate(eventId,updateEvent).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Event updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an event///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let eventId = req.params.id;  
    await Event.findByIdAndDelete(eventId).then(() => {
        res.status(200).send({status : "Event deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting event" , error: err.message});
    })
})

////////////////////////////////View only one event///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let eventId = req.params.id;  
    const event = await Event.findById(eventId).then((event) => {
        res.status(200).send({status : "Event Fetched", event : event});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Event" , error: err.message});
    })
})

////////////////////////////////Search event///////////////////////////////////////


router.route("/findone").get(async(req,res) => {

  let place = req.params.id;  



  const search = await Event.findOne({place}).then((event) => {
      res.status(200).send({status : "Event search Fetched", event : event});

  }).catch(() => {
      console.log(err.message);
      res.status(500).send({status : "Error with search Event" , error: err.message});
  })
})




//////////////uploading image////////////
router.route("/upload").post( //image route http://localhost:8070/event/upload

(req, res) => {

    console.log("REQ ",req.files)
    
    try {
      if (!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({ msg: "No files were uploaded." });

      const file = req.files.file;
      if (file.size > 10 * 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "Size too large" });
      }

      if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "File format is incorrect." });
      }

      cloudinary.v2.uploader
        .upload(
          file.tempFilePath,
          { folder: "Events" },
          async (err, result) => {
            if (err) {
              throw err;
            }

            removeTmp(file.tempFilePath);

            res.json({ public_id: result.public_id, url: result.secure_url });
          }
        )
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  })
////////////////////////////

module.exports = router; 

