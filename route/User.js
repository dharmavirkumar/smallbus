const Route = require("express")
const bookingModel = require("../model/shema")
const route = Route()

route.get("/",(req,res)=>{
    res.render("Daseboard")
})
route.get("/booking", (req, res) => {
    res.render("Bookingform");
});
route.post("/booking", (req, res) => {
    const {checkin, checkout, guests} = req.body;
    if(!checkin || !checkout || !guests){
        return res.status(400).send("All fields are required");

    }
    const booking = new bookingModel({
        checkin, checkout, guests
    })
    booking.save()
    res.render("Bookingform")
})

route.get("/storbooking",(req, res) => {
res.render("Storbooking");
});

route.get("/about", (req, res) => {
    res.render("About");
});

route.post("/storbooking", (req, res) => {
    const { checkin, checkout, guests, hotel, name, email, roominfo } = req.body;
    if (!checkin || !checkout || !guests || !hotel || !name || !email || !roominfo) {
        return res.status(400).send("All fields are required");
    }
    
    const booking = new bookingModel({
        checkin,
        checkout,
        guests,
        hotel,
        name,
        email,
        roominfo
    });
    
    booking.save()
        .then(() => {
            res.render("Storbooking");
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error saving booking");
        });


});
module.exports = route;