# Analytics Dashboard

Full-stack analytics dashboard (React + TypeScript frontend, Node.js + Express backend, PostgreSQL-ready).

## Quick start
1. Backend: `cd server && npm install && npm run dev`
2. Frontend: `cd client && npm install && npm start`
3. Database: `docker-compose up -d`

## Notes
- Client proxies API calls to `http://localhost:5000`
- Server exposes `GET /api/data` returning mock analytics data
