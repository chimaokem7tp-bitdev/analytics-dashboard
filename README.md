# Analytics Dashboard

Full-stack analytics dashboard (React + TypeScript frontend, Node.js + Express backend, PostgreSQL-ready).

Quick start
1. Install dependencies
   - Client: `cd client && npm install`
   - Server: `cd server && npm install`

2. Start the apps
   - Start client: `cd client && npm start`
   - Start server in development mode: `cd server && npm run dev`

Notes
- The client proxies API calls to `http://localhost:5000` (see client/package.json `proxy`).
- The server exposes a sample route: `GET /api/data` which returns mock analytics data suitable for charts.
- Optionally, bring up a local PostgreSQL with `docker-compose.yml` (see the `db` service). The server currently returns mock data; you can wire it to PostgreSQL later.

Project structure
analytics-dashboard/
 ├── README.md
 ├── package.json
 ├── .gitignore
 ├── client/
 │    ├── public/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── pages/
 │    │    ├── App.tsx
 │    │    └── index.tsx
 │    └── package.json
 ├── server/
 │    ├── src/
 │    │    ├── routes/
 │    │    ├── models/
 │    │    ├── controllers/
 │    │    └── index.js
 │    └── package.json
 ├── docker-compose.yml
 └── docs/
