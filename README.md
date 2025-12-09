# DayTracker — 24-hour Time Tracking & Analytics

**Short description:**  
DayTracker is a lightweight time-tracking web app that lets users log daily activities in minutes and view a date-based analytics dashboard (pie + bar charts). Built with vanilla JS and Firebase (Auth + Firestore).

## Live Demo
[Add your GitHub Pages link here]

## Video Walkthrough
[Add your YouTube/Drive link here]

## Features
- Firebase Authentication (Google & Email/Password)
- Log multiple activities per date (title, category, minutes)
- Prevents total day's minutes from exceeding 1440 (24 hours)
- Shows remaining minutes live
- Analyse a day's data to see:
  - Total hours
  - Time per category (pie chart)
  - Activity durations (bar chart)
  - "No data available" friendly UI
- Responsive design for mobile/tablet/desktop
- Uses AI tools for UI ideation & code scaffolding (see below)

## Tech stack
- Frontend: HTML, CSS, JavaScript (DOM)
- Charts: Chart.js
- Backend / Auth / DB: Firebase Authentication & Firestore
- Deployment: GitHub Pages

## Data model (Firestore)
`users/{uid}/days/{YYYY-MM-DD}/activities/{activityId}`  
Activity document fields: `title`, `category`, `minutes`, `createdAt` (timestamp)

## How to run locally
1. Clone the repo  
```bash
git clone https://github.com/<you>/daytracker.git
cd daytracker
