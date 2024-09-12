# Task Board

A simple and intuitive task management application built with Nuxt 3 and TypeScript.

## Description

Task Board is a user-friendly application designed to help you manage tasks efficiently. It allows you to create, edit, delete, and track tasks across different statuses. With drag-and-drop functionality, you can easily move tasks between columns to reflect their current status. The application features a clean interface, making task management straightforward and effective.

## Features

Create, Edit, and Delete Tasks
Drag-and-Drop Tasks Between Status Columns (TODO, In Progress, Done)
Global State Management with Pinia
Responsive Design Using Bootstrap 5
Assign Priorities and Responsible Persons to Tasks
Search Tasks by Name

## Technologies Used

Nuxt 3 (v3.13.0) - A Vue.js framework for building modern web applications
TypeScript - A typed superset of JavaScript that compiles to plain JavaScript
Pinia (v2.2.2) - A state management library for Vue.js
Bootstrap 5 (v5.3.3) - A CSS framework for building responsive, mobile-first sites
Bootstrap Icons (v1.11.3) - Official open-source icons for Bootstrap
Vue 3 - The Progressive JavaScript Framework
Vue Router - The official router for Vue.js
vuedraggable (v4.1.0) - A Vue component allowing drag-and-drop sorting in Vue.js applications
vue3-smooth-dnd (v0.0.6) - A library for smooth drag-and-drop in Vue 3

# Installation and Setup

## Prerequisites

Node.js (version 14 or higher recommended)
npm or yarn

## Steps to Install

Clone the Repository

```bash
git clone git@github.com:K1ngp1nDev/task-board.git
```

Navigate to the Project Directory

```bash
cd task-board
```

Install Dependencies
```bash
npm install
# or, if you prefer yarn
yarn install
```
Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open the Application in Your Browser

Visit http://localhost:3000 to view the Task Board.

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

# Development Server

Start the development server on `http://localhost:3000`:

# Usage
Create a New Task

Click the "New Task" button to open the task creation form.
Fill in the task details and save.
Edit a Task

Click the "Edit" button on a task card to modify it.
Delete a Task

Click the "Delete" button on a task card to remove it.
Drag and Drop

Drag tasks from one column to another to change their status.
Search Tasks

Use the search bar to filter tasks by name.
