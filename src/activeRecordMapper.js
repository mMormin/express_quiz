const { Quiz } = require('./models/index.js');

const allSequelizeRequests = {

  getAllQuizList: async () => {
    const allQuiz = await Quiz.findAll({include: ["author", "tags"]});
    console.log(allQuiz);
    return allQuiz;
  }


};


module.exports = allSequelizeRequests;
