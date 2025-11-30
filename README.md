<div align="center">
  <!-- <br />
    <img src="public/readme/hero.png" alt="Project Banner">
  <br /> -->

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-black?style=for-the-badge&logoColor=white&logo=vapi.com&color=green" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>

  <h3 align="center">LearnMate  - SaaS App with Next.js, Supabase & Payments</h3>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🤖 Introduction

**LearnMate – AI SaaS Learning Companion** is a modern, voice-interactive platform designed to transform the self-learning experience. In today’s digital learning landscape, students often feel isolated while learning online, missing the engagement and motivation that comes from interacting with peers and instructors. LearnMate addresses this challenge by providing an AI-powered tutor that delivers personalized guidance in real-time.

With LearnMate, users can:  
- Engage in AI voice-based learning sessions for any subject or topic.  
- Create personalized learning companions tailored to their style and needs.  
- Access secure authentication and manage accounts via Clerk.  
- Track learning progress through session history and bookmarks.  
- Subscribe to premium features and manage payments seamlessly.

Built using a modern, scalable tech stack—**Next.js, Tailwind CSS, shadcn/ui, Supabase, Clerk, Vapi, and TypeScript**—LearnMate ensures a responsive, intuitive, and reliable learning experience. The platform demonstrates how AI integration, full-stack development, and interactive design can come together to enhance personalized education.

## ⚙️ Tech Stack

- **[Clerk](https://jsm.dev/converso-clerk)**: Unified platform for authentication, user management, and billing. Provides secure user management, subscription handling, and flexible APIs.  
- **[Next.js](https://nextjs.org/)**: React framework for scalable web apps, server-side rendering, static site generation, and API routes.  
- **[Sentry](https://jsm.dev/converso-sentry)**: Error tracking and performance monitoring tool with real-time alerts.  
- **[shadcn/ui](https://ui.shadcn.com/)**: Component library built on Radix UI and Tailwind CSS for modern, accessible UI components.  
- **[Supabase](https://supabase.com/)**: Open-source backend platform with real-time APIs, authentication, storage, and PostgreSQL database.  
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for fast and responsive UI design.  
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript superset for static typing and enhanced code quality.  
- **[Vapi](https://jsm.dev/converso-vapi)**: Voice AI platform for conversational agents with speech-to-text and text-to-speech capabilities.  
- **[Zod](https://zod.dev/)**: Schema validation library for ensuring data integrity and catching errors early.
## <a name="features">🔋 Features</a>

👉 **AI Voice Agents**: Take tutoring sessions with voiced AIs specializing in the topics you want to get better at.

👉 **Authentication**: Secure user sign-up and sign-in with Clerk; Google authentication and many more.

👉 **Billing & Subscriptions**: Easily manage plans, upgrades, and payment details.

👉 **Bookmarks and Session History**: Let users organise their learning by bookmarking tutors and accessing previous sessions.

👉 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

👉 **Create a Tutor**: Create your own AI tutors, choosing a subject, topic, and style of conversation.

👉 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

👉 **Database Integration**: Uses Supabase for real-time data handling and storage needs.

👉 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

👉 **Scalable Tech Stack**: Built with Next.js for a fast, production-ready web application that scales seamlessly.

👉 **Search Functionality**: Find tutors quickly with robust filters and search bar.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/TusharC19/LearnMate.git
cd myapp
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on: [Supabase](https://supabase.com), [Clerk]((https://clerk.com/)), [Sentry](https://sentry.io/welcome/), [Vapi](https://vapi.ai/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
