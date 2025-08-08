const Route = require("express")
const bookingModel = require("../model/shema")
const route = Route()

route.get("/",(req,res)=>{
    res.render("Daseboard")
})
route.get("/booking", (req, res) => {
    res.render("Bookingform",{books});
});

route.get("/booking", async (req, res) => {
    const books = await bookingModel.find({})
    res.render("Admin",{books});
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
route.get("/rooms", (req, res) => {
    res.render("rooms");
});

route.get("/admin", async (req, res) => {
    try {
        const bookings = await bookingModel.find({});
        res.render("Admin", { bookings });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving bookings");
    }
});


route.get("/contact", (req, res) => {
    res.render("Contact");
});

route.get("/contact", (req, res) => {
    const contactinfo = bookingModel.find({});
    if (!contactinfo) {
        return res.status(404).send("No contact information found");
    }
    res.render("Admin", { contactinfo });
});


route.post("/contact", (req, res) => {
    const {name, email, phone, message} = req.body;
    if(!name || !email || !phone || !message){
        return res.status(400).send("All fields are required");
    }
    const contactinfo = new bookingModel({
        name,
        email,
        phone,
        message
    })

    contactinfo.save()
        .then(() => {
            res.render("Contact");
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error saving contact information");
        });
});


module.exports = route;