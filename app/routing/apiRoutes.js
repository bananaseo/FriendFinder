//Link routes to "data" source
var friendlist = require("../data/friend")

//APIRoutes- 2 Routes

module.exports = function(app) {

    //Display all friends
    app.get("/api/friends", function(req, res){
        res.json(friendlist); 
    }); 

    //POST route "/api/friends"-this will be used to handle incoming survey results. this route will also be used to handle the compatibility logic. create new friend 
    app.post("/api/friends", function (req,res){
        var newfriend = req.body; 

        console.log(newfriend);

        friendlist.push(newfriend);

        res.json(newfriend);
}); 
}; 

