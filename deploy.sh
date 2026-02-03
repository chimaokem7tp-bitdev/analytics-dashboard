#!/bin/bash
# Analytics Dashboard - Deployment Script

echo "🚀 Analytics Dashboard Deployment"
echo "=================================="
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm run install:all

echo ""
echo "✅ Installation complete!"
echo ""
echo "📋 To run the project locally:"
echo ""
echo "Terminal 1 - Start Server:"
echo "  npm run dev:server"
echo ""
echo "Terminal 2 - Start Client:"
echo "  npm run start:client"
echo ""
echo "The application will be available at: http://localhost:3000"
echo ""
echo "📊 Server runs on: http://localhost:5000"
echo "API endpoint: http://localhost:5000/api/data"
echo ""
