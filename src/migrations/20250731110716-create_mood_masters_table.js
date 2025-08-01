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
    await queryInterface.createTable('mood_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mood_master_name:{
        type:Sequelize.STRING,
        allowNull:false,

      },
      mood_master_description:{
        type:Sequelize.STRING,
        allowNull:true,

      },
      mood_master_icon:{
        type:Sequelize.STRING,
        allowNull:true,

      },
       mood_master_color_code:{
        type:Sequelize.STRING,
        allowNull:true,

      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      is_deleted:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
      },
   
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
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
