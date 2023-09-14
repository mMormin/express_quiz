const activeRecordMapper = require('../activeRecordMapper');

const mainController = {
  renderHomePage: async (req, res) => {
    const allQuiz = await activeRecordMapper.getAllQuizList();
    res.render("home", { allQuiz });
  }
};

module.exports = mainController;
