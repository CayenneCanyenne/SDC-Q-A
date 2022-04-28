/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const express = require('express');

const app = express();
const morgan = require('morgan');

const {
    getQuestions,
    getAnswers,
    addQuestion,
    addAnswer,
    markQuesHelpful,
    reportQues,
    markAnsHelpful,
    reportAns,
} = require('./controller/qaController');

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.get('/qa/questions', getQuestions);
app.get('/qa/questions/:question_id/answers', getAnswers);
app.post('/qa/questions', addQuestion);
app.post('/qa/questions/:question_id/answers', addAnswer);
app.put('/qa/answers/:question_id/helpful', markQuesHelpful);
app.put('/qa/answers/:question_id/report', reportQues);
app.put('/qa/answers/:answer_id/helpful', markAnsHelpful);
app.put('/qa/answers/:answer_id/report', reportAns);
app.get(‘/loaderio-29c377388c8535fe5daa0fa92f4a642a’, (req, res) => {
    res.sendFile(‘/home/ubuntu/SDC-Q-A/loaderio-29c377388c8535fe5daa0fa92f4a642a.txt’);
  });

// start server
const port = process.env.PORT || 3000;
console.log(port);
app.listen(port, () => {
    console.log(`Server running on port ${port}....👩🏻‍💻`);
});
