# 🚀 NASA Mission Explorer

## 🌌 Overview

**NASA Mission Explorer** is a web application that allows users to explore the **Astronomy Picture of the Day (APOD)** provided by NASA. 

Users can select any date to discover what the universe looked like on that specific day — making it especially fun to explore events like birthdays or special occasions.

---

## 🎯 Purpose

The goal of this project is to build an interactive and visually appealing web application using a public API. It focuses on:

* Fetching real-time data from an external API
* Displaying dynamic content based on user input
* Creating an engaging user experience with a responsive UI built in React

---

## 🔗 API Used

This project uses the NASA APOD API:

* **API Provider:** NASA
* **Endpoint:** `https://api.nasa.gov/planetary/apod`
* **Documentation:** [https://api.nasa.gov/](https://api.nasa.gov/)

---

## ✨ Features

### ✅ Current Features

* **Date Selection:** Pick any date to fetch historical astronomy data from NASA.
* **Information Display:** View the picture of the day, title, and detailed NASA explanation.
* **HD Image Lightbox:** Click on any image or the "View HD" button to open a high-resolution, full-screen lightbox overlay.
* **Favorites System:** Save your favorite astronomy pictures. All favorites are persistently saved in your browser using `localStorage`.
* **Favorites Filtering:** Easily search, filter, and sort your saved favorites.
* **Dynamic Ambient Backgrounds:** Toggle seamlessly between themes featuring custom CSS animations—a twinkling starry sky for Dark Mode and a softly pulsating morning sun for Light Mode.
* **Robust Loading & Error Handling:** Intercepts NASA API downtime gracefully with fallback UI alerts and displays a seamless pulsing CSS loading spinner while fetching.
* **Modern & Clean UI:** Clean React-based interface with floating UI elements, animations, and zero heavy dependencies.

---

## 🛠️ Technologies Used

* **Frontend:** React + Vite
* **Styling:** Custom CSS (Dynamic CSS variables for Dark/Light mode)
* **Routing:** React Router DOM
* **Data Fetching:** Fetch API with asynchronous JavaScript 
* **State Management:** React Hooks (`useState`, `useEffect`) and Browser `localStorage`

---

## 🧩 How It Works

1. User selects a date using the date picker on the Home page.
2. The application sends an asynchronous request to the NASA APOD API.
3. While waiting, a CSS spinner informs the user of the ongoing fetch operation.
4. The API returns data for that specific date (or the app gracefully handles `503` errors if NASA servers are down).
5. The interface dynamically updates with the image and details.
6. The user can toggle an HD viewing mode or save the entry to their persistent favorites list.
