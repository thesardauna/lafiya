# LAFIYA Healthcare Marketplace

LAFIYA is a comprehensive healthcare marketplace designed to enhance access and delivery of healthcare services across Nigeria. This repository contains all resources, code, and documentation needed to develop and deploy the platform.

---

## Table of Contents

1. [Front-End](#front-end)
2. [Back-End](#back-end)
3. [Database](#database)
4. [Docs](#docs)
5. [Other Resources](#other-resources)

---

## Project Structure

```plaintext
LAFIYA_Healthcare_Marketplace/
│
├── README.md                 # Project index and overview
├── front-end/                # Front-end code and assets
│   ├── public/               # Static assets (images, fonts, etc.)
│   ├── src/                  # React app source files
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Individual pages (e.g., Home, Patient Portal)
│   │   └── App.js            # Main app file
│   └── index.html            # Entry point for the React app
│
├── back-end/                 # Back-end server and API code
│   ├── config/               # Configuration files (database, authentication)
│   ├── controllers/          # Controller logic for API endpoints
│   ├── models/               # Database schemas and models
│   ├── routes/               # API routes
│   └── server.js             # Entry point for the back-end
│
├── database/                 # Database scripts and configuration
│   ├── migrations/           # Database migration files
│   └── schemas/              # Database schemas
│
└── docs/                     # Documentation and resources
    ├── images/               # Screenshots, design images, etc.
    └── requirements.md       # Project requirements and features
