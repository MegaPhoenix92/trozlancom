# TROZLANCOM (Business User Node Project Experience)

## Overview
Enterprise web application with role-based interfaces built using Next.js and TypeScript.

## Features
- **Admin Dashboard**: System configuration and user management
- **CEO Portal**: Executive metrics and reporting
- **User Interface**: Standard user operations and workflows

## Tech Stack
- Next.js 12
- React 18
- TypeScript 4.9
- Node.js 18+
- IBM Carbon Design System
- PostgreSQL
- Stripe Integration

## UI Components
We use IBM Carbon Design System for our component library:
- Carbon Components React
- Carbon Icons
- Carbon Grid
- Carbon Theme

## Project Structure
```bash
trozlancom/
├── components/     # Carbon Design components
│   ├── admin/     # Admin interface
│   ├── ceo/       # CEO dashboard
│   ├── layout/    # Shared layouts
│   └── user/      # User interface
├── pages/         # Next.js routes
├── public/        # Static assets
├── styles/        # Carbon theme customization
└── types/         # TypeScript types
```

## Quick Start

### Clone repository
```bash
git clone git@github.com:MegaPhoenix92/TROZLANCOM.git
cd TROZLANCOM
```

### Install dependencies
```bash
npm install
```

### Start development
```bash
npm run dev
```

## Development Commands
- `npm run dev` - Development mode (http://localhost:3000)
- `npm run build` - Production build
- `npm start` - Production server

## Repository
- **SSH**: `git@github.com:MegaPhoenix92/TROZLANCOM.git`
- **Key**: `SHA256:h7uYHYHi0OZYuX0nj1byPFNOPSGuDlCYWHTCsdjvZqo`

# Stage the changes
git add .

# Commit with a message
git commit -m "docs: initial README setup with project structure and instructions"

# Push to the remote repository
git push origin main

