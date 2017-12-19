var question = require('./../controllers/controller.js');
var path = require("path");

module.exports= function (app){
    app.get('/questions', function( req, res ){
        question.home( req, res );
    });
    app.post('/question/new', function( req, res ){
        question.new( req, res );
    });
    app.post('/answer/new', function( req, res ){
        question.newAns( req, res );
    });
    app.get('/question/:key/:val', function( req, res ){
        question.find( req, res );
    });
    app.get('/answer/:id/like', function( req, res ){
        question.like( req, res );
    });
    app.all("*", ( req, res ) => { 
        res.sendFile(path.resolve("./client/static/belt2/dist/index.html")) });
}





    // app.get('/ingredients/:id', function( req, res ){
    //     recipie.show( req, res )
    // })

    // app.post('/recipie/:id', function( req, res ){
    //     recipie.add( req, res );
    // });
    // app.post('/delete/:id', function( req, res ){
    //     recipie.delete( req, res );
    // });
