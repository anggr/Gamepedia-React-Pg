"use strict";
const { hashPassword } = require("../utils/passwordHandler");

module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert("Players", [
      {
        username: "admin",
        email: "admin@gmail.com",
        password: await hashPassword("adminpassword"),
        experience: 600000,
        lvl: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "admin2",
        email: "admin2@gmail.com",
        password: await hashPassword("adminpassword2"),
        experience: 600000,
        lvl: 666,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete("Players", null, {});
  },
};
