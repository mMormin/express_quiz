const { Quiz } = require('./models/index.js');

const allSequelizeRequests = {

  getAllQuizList: async () => {
    const allQuiz = await Quiz.findAll({include: ["author", "tags"]});
    return allQuiz;
  },

  getQuizById: async (id) => {
    const quizById = await Quiz.findByPk(id, 
      {
        include: ["author", "tags", { association: "questions",
          include: ["propositions", { association: "level"} ]
        }
        ],
      }
    );


    // const questionsByQuiz = await Quiz.findByPK(id, {include: [{association: "questions"}]});
    console.log(quizById);
    return quizById;
  }

};


module.exports = allSequelizeRequests;
