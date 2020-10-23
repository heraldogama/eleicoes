# Usando Migrations

1. Configuração do ormconfig.json

{
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "postgres",
"database": "elections",
"synchronize": true,
"logging": false,
"entities": ["src/entity/**/*.ts"],
"migrations": ["src/database/migrations/**/*.ts"],
"subscribers": ["src/subscriber/**/*.ts"],
"cli": {
"entitiesDir": "src/entity",
"migrationsDir": "src/database/migrations",
"subscribersDir": "src/subscriber"
}
}
