'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('doctors', 'f_name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('doctors', 'l_name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('doctors', 'email', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
