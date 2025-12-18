# FitzTar Web App

A modern, responsive landing page for the FitzTar fitness platform, designed to showcase features like activity tracking, gamified rewards, and community engagement. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Custom React components with responsive design

## ✨ Key Features

The application highlights the following core functionalities of the FitzTar platform:

- **Activity Tracking:** Real-time metrics for steps, calories, and movement.
- **Gamification:** Reward points system for workouts, challenges, and habits.
- **Community:** Social feeds to share progress and celebrate wins.
- **Wallet System:** Manage points and redeem perks seamlessly.
- **Personalization:** Smart workout and nutrition plan suggestions.
- **Progress Dashboard:** Visual insights into fitness growth and streaks.

## 📂 Project Structure

The project follows a standard Next.js App Router structure:

```bash
src/
├── app/
│   └── page.tsx          # Main landing page composition
├── components/
│   ├── ui/               # Reusable UI components (FaqItem, SupportSection, etc.)
│   ├── Features.tsx      # Detailed features list component
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── AboutSection.tsx  # About section
│   ├── FaqSection.tsx    # FAQ section
│   └── ...               # Other sections (Contact, Footer, etc.)
└── ...
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd fitztar_web_app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

- **Colors:** The project uses specific accent colors (e.g., `#7CFA6B`, `#1F2E1F`). These can be adjusted in the Tailwind classes or configuration.
- **Content:** Feature data is structured in `src/components/Features.tsx` for easy updates.
- **Images:** Assets are referenced from the `public/images/` directory.