import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/banco_servico.db'
});

const usuario = sequelize.define('Usuario', {
    // eu tenho que pensar como eu vou fazer a implementação correta disso
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});
