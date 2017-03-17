console.log('friends controller');

var Friend = mongoose.model('Friend')
    // WE NEED TO ADD A FEW lines of code here!
    // How does a controller talk to mongoose and get a model?
    // Build out the methods in the friendsControllers below
function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, friends) {
            if (err) {
                console.log('Could not find friends')
            } else {
                res.json(friends)
            }
        })
    };



    this.create = function(req, res) {
        console.log(req);
        console.log("reached createUser in friends.js")
        var friend = Friend({ firstName: req.body.firstName, lastName: req.body.lastName, birthDate: req.body.birthDate })
        friend.save(function(err) {
            if (err) {
                console.log('Error')
            }
            res.json(friend)
        })
    };

        this.edit = function(req, res) {
        Friend.findOne({ _id: req.params.id }, function(err, friend) {
            if (err) {
                console.log('this should not be happening')
            } else {
                res.json(friend)
            }
        })
    };

    this.update = function(req, res) {
        Friend.findOne({ _id: req.params.id }, function(err, friend) {
            if (err) {
                console.log('You have erooorrrrr')
            } else {
                friend.firstName = req.body.firstName;
                friend.lastName = req.body.lastName;
                friend.birthDate = req.body.birthDate;
                friend.save(function(err) {
                    if (err) {
                        console.log('ooooooo')
                    }
                    res.json(friend)
                })
            }
        });
    };


    this.delete = function(req, res) {
        Friend.remove ({'_id': req.params.id }, function(err, friend) {
            if (err) {
                console.log("Record NOT deleted")
            } 
            else {
                console.log("Record was deleted")
            }
        })
        res.send("Process complete");
    };



    this.show = function(req, res) {
        console.log("Find THE one")
        console.log(req.params.id);
        Friend.findOne({ '_id': req.params.id }, 'firstName lastName birthDate', function(err, friend) {
                if (err) return handleError(err);
                console.log(friend) // Space Ghost is a talk show host.
                res.json(friend)
            })
            // var friend = Friend.findOne({ _id: req.params.id }, function(err, user) {
            //     if (err) {
            //         console.log('Everything is going wrong')
            //     } else {
            //         console.log('Your friend is', friend);
            //         res.json(friend)
            //     }
            // })
    };








}

module.exports = new FriendsController();
