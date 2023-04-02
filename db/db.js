import  Sequelize  from "sequelize";

export const sequelize = new Sequelize( 'tusenacopia','postgres','0000',{
host:'localhost',
dialect:'postgres'
})
