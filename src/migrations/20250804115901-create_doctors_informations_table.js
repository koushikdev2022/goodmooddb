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
      await queryInterface.createTable('doctors_informations', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        doctor_id:{
          type:Sequelize.BIGINT,
          allowNull:false,

        },
        degree:{
          type:Sequelize.STRING,
          allowNull:true,
        },
        cirtificate_url:{
          type:Sequelize.INTEGER,
          allowNull:true,
        },
        start_date:{
          type:Sequelize.DATEONLY,
          allowNull:true,
        },
        end_date:{
          type:Sequelize.DATEONLY,
          allowNull:true,
        },
        extra_info:{
          type:Sequelize.TEXT('long'),
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
