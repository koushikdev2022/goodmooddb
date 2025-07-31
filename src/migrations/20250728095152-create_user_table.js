'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
       f_name:{
        type: Sequelize.STRING,
        allowNull: false,
      
      },
      l_name:{
        type: Sequelize.STRING,
        allowNull: false,
      
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
     
      },
      mobile:{
        type: Sequelize.STRING,
        allowNull: true,
     
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: true,
      
      },
      otp:{
        type: Sequelize.INTEGER,
        allowNull: true,
      
      },
      otp_expire:{
        type: Sequelize.DATE,
        allowNull: true,
 
      },
      o_auth:{
        type: Sequelize.STRING,
        allowNull: true,

      },
      oauth_provider:{
        type: Sequelize.STRING,
        allowNull: true,
    
      },
      parent_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue:0
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
