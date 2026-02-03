# Additional setup notes

- To use the Postgres container:
  1. Start: `docker-compose up -d`
  2. Connect your server to Postgres using connection info:
     - host: `localhost`
     - port: `5432`
     - user: `postgres`
     - password: `postgres`
     - database: `analytics`

- The server currently returns mock data from `/api/data`. Replace the controller with real DB queries when ready.
