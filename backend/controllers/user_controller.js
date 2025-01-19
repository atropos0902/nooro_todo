const prisma = require("../src/connection");

module.exports.getAllTasks = function (req, res) {
  prisma.task.findMany().then((task) => {
    res.json(task);
  });
};

module.exports.getOneTask = function (req, res) {
  const { id } = req.params;
  prisma.task.findUnique({ where: { id: Number(id) } }).then((task) => {
    res.json(task);
  });
};

module.exports.createTask = function (req, res) {
  const { title, color, completed } = req.body;
  prisma.task
    .create({
      data: {
        title,
        color,
        completed,
      },
    })
    .then((task) => {
      res.json(task);
    });
};

module.exports.updateTask = function (req, res) {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  prisma.task
    .update({
      where: { id: Number(id) },
      data: {
        title,
        color,
        completed,
      },
    })
    .then((task) => {
      res.json(task);
    });
};

module.exports.deleteTask = function (req, res) {
  const { id } = req.params;
  prisma.task
    .delete({
      where: { id: Number(id) },
    })
    .then((task) => {
      res.json(task);
    });
};
