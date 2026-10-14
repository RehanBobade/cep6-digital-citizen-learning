# Digital Citizen 360

A learning portal for digital services, online safety, modules, quizzes, videos, and progress tracking.

## Run locally

Requirements: Node.js 18 or newer.

```powershell
npm.cmd install
npm.cmd start
```

Open http://localhost:3000. The Express API runs on http://localhost:3001. In shells where `npm` is available directly, `npm install` and `npm start` work as well.

## Data and security

This is a demonstration project, not production-ready authentication. The backend currently stores account passwords in a local JSON file without password hashing. Do not use real or reused passwords, and do not deploy it for real user accounts without replacing this authentication and storage approach.

The `.gitignore` excludes `backend/data/users.json` and `backend/data/results.json`; these files contain local account and activity data and should not be committed.

## Hosting

GitHub can host this source repository, but GitHub Pages only serves static files and cannot run the Express backend. Login and registration require deploying the Node.js backend to a separate server and configuring the frontend API URL for that deployment.
