# Analytics Dashboard - Deployment Guide

## Project Structure
```
analytics-dashboard/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.tsx        # Main app component
│   │   ├── App.css        # App styling
│   │   ├── index.tsx      # React entry point
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx    # Dashboard page
│   │   │   └── Dashboard.css    # Dashboard styling
│   │   └── components/
│   │       ├── AnalyticsChart.tsx   # Chart component
│   │       └── AnalyticsChart.css   # Chart styling
│   ├── public/
│   │   └── index.html     # HTML template
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── index.js           # Server entry point
│   │   ├── routes/
│   │   │   └── data.js        # API routes
│   │   └── controllers/
│   │       └── dataController.js  # Data logic
│   └── package.json
├── package.json           # Root package.json
└── deploy.sh             # Deployment script

```

## Features

### Frontend Features
- Modern, responsive React application
- Real-time analytics dashboard with statistics cards
- Interactive line chart with Recharts
- Loading states and error handling
- Professional UI with gradient styling
- Mobile-responsive design

### Backend Features
- Express.js REST API
- CORS enabled for cross-origin requests
- Mock analytics data generation
- Health check endpoint

## Deployment Instructions

### Local Development
1. Install dependencies:
   ```bash
   npm run install:all
   ```

2. Start the server (Terminal 1):
   ```bash
   npm run dev:server
   ```

3. Start the client (Terminal 2):
   ```bash
   npm run start:client
   ```

4. Open http://localhost:3000 in your browser

### Production Deployment

#### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables if needed
4. Deploy automatically on push

#### Option 2: Docker
```dockerfile
# Build and deploy using Docker
docker build -t analytics-dashboard .
docker run -p 3000:3000 -p 5000:5000 analytics-dashboard
```

#### Option 3: Traditional Server
1. Build client:
   ```bash
   cd client && npm run build
   ```

2. Start server:
   ```bash
   cd server && npm start
   ```

## API Endpoints

- `GET /api/data` - Returns 12 hours of analytics data
- `GET /api/health` - Server health check

## Environment Variables

Currently, the project runs without additional environment variables. 
All mock data is generated server-side.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

### Frontend
- React 18.2.0
- TypeScript 5.1.6
- Recharts 2.6.2
- React Scripts 5.0.1

### Backend
- Express.js 4.18.2
- CORS 2.8.5
- Node.js

## Troubleshooting

### Port Already in Use
- Server (5000): `kill -9 $(lsof -t -i:5000)`
- Client (3000): `kill -9 $(lsof -t -i:3000)`

### CORS Errors
- Ensure server is running on port 5000
- Check client proxy setting in package.json

### Data Not Loading
- Check server is running and healthy at http://localhost:5000/api/health
- Open browser DevTools to check network requests

## Support

For issues or questions, check the console logs for detailed error messages.
