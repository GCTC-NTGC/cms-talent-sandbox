// import repl from "repl";
// import {knex} from "knex";
// import knexConfig from "../../knexfile.js";

const repl = require("repl");
const knex = require("knex");
const knexConfig = require("../../knexfile.js");


const r = repl.start('Knex console > ');
const run = async () => {
   r.context.knex = await knex(knexConfig);
};
run();