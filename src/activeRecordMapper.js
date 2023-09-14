const { Quiz, Tag } = require("./models/index.js");

const allSequelizeRequests = {
  getAllQuizList: async () => {
    const quizList = await Quiz.findAll({ include: ["author", "tags"] });
    return quizList;
  },

  getQuizById: async (id) => {
    const quizById = await Quiz.findByPk(id, {
      include: [
        "author",
        "tags",
        {
          association: "questions",
          include: ["propositions", { association: "level" }],
        },
      ],
    });

    return quizById;
  },

  getTagList: async () => {
    const tags = await Tag.findAll({
      include: ["quizzes"],
    });

    console.log(tags);

    return tags;
  },

  // getQuizList: async () => {
  //   const quizes = await Quiz.findAll({
  //     //attributes: ['quiz_id', 'tag'],
  //     //where: {"quizzes": "tags"},
  //     include: ["tags"],
  //   });

  //   console.log(quizes);

  //   return quizes;
  // },
};

module.exports = allSequelizeRequests;
