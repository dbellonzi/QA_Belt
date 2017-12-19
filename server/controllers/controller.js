var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
    home: function( req, res ){
        Question.find({}, function( err, quest ){
            if (err) {
                console.log("jlfsdjl");
                res.json(err);
            } else {
                console.log("getting data")
                res.json(quest);
            }
        })
    },
    new: function( req, res ){
        var newQuestion =  new Question;
        newQuestion.question = req.body.question;
        newQuestion.user = req.body.user;
        newQuestion.desc = req.body.desc;
        newQuestion.save(function( err ){
            if(err){
                console.log(err);
            } else {
                console.log('goodboy');
            }
        })
    },
    find: function( req, res ){
        var it = req.params.key;
        var notIt =  req.params.val;
        Question.find({ '_id' : notIt }).populate('_answers').exec(function( err, quest ){ 
            if( err ){
                console.log("errorrrrrrr");
            } else {
                res.json(quest);
            }
        });
    },
    newAns: function( req, res ){
        Question.findOne({ '_id' : req.body._question }, function( err, quest ){ 
            var answer = new Answer ( req.body );
            answer.likes = 0;
            Question.update({ '_id' : req.body._question },{ $push : { _answers : answer }}, function( err ){
                if(err){console.log(err)}
            })
            answer.save(function(err){
                if(err){console.log(err)}
            })
        });
    },
    like: function( req, res ){
        Answer.findByIdAndUpdate({ '_id' : req.params.id}, {$inc: {likes: 1}}, function( err, data ){
            if(err){console.log(err)};
        })
    }
}