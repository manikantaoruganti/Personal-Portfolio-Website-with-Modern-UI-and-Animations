# Manikanta Venkateswarlu Oruganti - Personal Portfolio

This is a submission-ready personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## Project Description

A modern, responsive, and highly optimized personal portfolio website built with React, Tailwind CSS, and Framer Motion. It features smooth animations, parallax effects, and a clean, futuristic design. The site is designed for optimal performance, accessibility, and SEO, ready for deployment on platforms like Vercel or via Docker.

## Tech Stack

*   **Frontend**: React.js, Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion, react-scroll-parallax
*   **Icons**: React Icons
*   **Deployment**: Vercel-ready, Docker

## Live URL

[Live Demo Placeholder] - *Please update this with your deployed URL.*

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Docker Deployment

To build and run the application using Docker:

1.  **Build the Docker image and start the container:**
    ```bash
    docker compose up --build
    ```
    The application will be available at `http://localhost:3000`.

2.  **To stop the Docker container:**
    ```bash
    docker compose down
    ```

## Image Optimization Note

The `hero.webp` and `avatar.webp` images are referenced via Pexels URLs. For production deployment, it is recommended to download these images, optimize them (e.g., compress to under 300KB for `hero.webp`), and place them in the `public/` directory, then update the image paths in `Hero.jsx` and `About.jsx` accordingly.
