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
     await queryInterface.createTable('therapies', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        therapies_name:{
          type:Sequelize.STRING,
          allowNull:false,

        },
        therapies_description:{
          type:Sequelize.STRING,
          allowNull:true,
        },
         avatar:{
          type:Sequelize.STRING,
          allowNull:true,
        },
        status:{
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue:1
        },
        is_deleted:{
          type: Sequelize.TINYINT,
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
