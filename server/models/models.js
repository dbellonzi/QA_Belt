var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    question: { type: 'string', required: true },
    desc: { type: 'string' },
    user: { type: 'string', required: true },
    _answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
}, { timestamps: true });
var AnswerSchema = new mongoose.Schema({
    user: { type: 'string', required: true },
    answer: { type: 'string', required: true },
    details: { type: 'string' },
    likes: { type: 'number', required: true },
    _question: { type: Schema.Types.ObjectId, ref: 'Question' }
}, { timestamps: true });
var Question = mongoose.model('Question', QuestionSchema);
var Answer = mongoose.model('Answer', AnswerSchema);
