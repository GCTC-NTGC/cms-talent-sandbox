# cms-talent-sandbox
A repo for experimenting with a new tech stack for CMS Digital Talent tools.

## Postgres DB
Run `docker-compose up -d`  to start a Postgres database in a docker container. When it first runs, all scripts in `./db` will run. For now this will create a new schema called `gctalent` with username and password `gctalent`. 

You can inspect this database with Adminer at http://localhost:8080.