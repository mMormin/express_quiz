const activeRecordMapper = require('../activeRecordMapper');

const mainController = {
  renderHomePage: async (req, res) => {
    const allQuiz = await activeRecordMapper.getAllQuizList();
    res.render("home", { allQuiz });
  },

  renderQuizPage: async (req, res) => {
    const { id } = req.params;
    const quizById = await activeRecordMapper.getQuizById(id);

    res.render('quiz', { quizById });
  }

};

module.exports = mainController;
