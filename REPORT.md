# Doctrology - Project Analysis Report

## 1. Project Overview
Doctrology is a modern healthcare management platform designed to streamline the interaction between patients and doctors. It provides a robust interface for patients to book appointments, manage their health overview, and interact with an AI-powered voice assistant. For administrators, it offers a comprehensive dashboard to manage doctor profiles, track appointments, and monitor platform statistics.

## 2. Technology Stack
The project is built using a contemporary and performant stack:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescript.org/)
- **Database ORM:** [Prisma](https://www.prisma.io/) with PostgreSQL
- **Authentication:** [Clerk](https://clerk.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [Shadcn UI](https://ui.shadcn.com/)
- **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Email Service:** [Resend](https://resend.com/)
- **AI Voice Assistant:** [Vapi](https://vapi.ai/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 3. Core Features & Functionalities

### For Patients
- **Dashboard:** A personalized view of health stats, next appointments, and recent activities.
- **Appointment Booking:** A multi-step process for selecting doctors, choosing time slots, and confirming appointments.
- **AI Voice Assistant:** An interactive voice-based interface for health inquiries and platform navigation.
- **Email Confirmations:** Automated emails sent upon successful appointment booking.

### For Administrators
- **Admin Dashboard:** High-level statistics on total appointments, doctors, and users.
- **Doctor Management:** CRUD (Create, Read, Update, Delete) operations for managing doctor profiles, including specialties and availability.
- **Appointment Tracking:** A centralized view of all scheduled appointments across the platform.

## 4. Project Structure
The codebase follows a modular and organized structure:

- `app/`: Contains the Next.js App Router pages and API routes.
  - `admin/`: Admin-specific pages and logic.
  - `api/`: Backend API endpoints (e.g., email service).
  - `appointments/`: Patient-facing appointment booking pages.
  - `dashboard/`: Patient dashboard.
  - `voice/`: AI voice assistant integration.
- `components/`: Reusable UI components.
  - `admin/`: Components specific to the admin interface.
  - `Appointments/`: Components for the booking flow.
  - `Dashboard/`: Patient dashboard components.
  - `ui/`: Base Shadcn UI components.
- `hooks/`: Custom React hooks for data fetching and UI state (e.g., `use-appointments.ts`, `use-doctors.ts`).
- `lib/`: Shared utility functions, Prisma client, and server actions.
  - `actions/`: Next.js Server Actions for secure database operations.
- `prisma/`: Database schema definition and migration files.
- `public/`: Static assets such as images and icons.

## 5. Database Schema (Prisma)
The database model is centered around three primary entities:

- **User:** Stores patient and admin information, linked via Clerk authentication.
- **Doctor:** Contains professional details, specialties, experience, and pricing.
- **Appointment:** Connects users and doctors, storing date, time, status, and optional notes.

## 6. Key API Endpoints & Actions
The project primarily uses **Next.js Server Actions** for data mutations, which are located in `lib/actions/`.

- **Appointments:** `getAppointments`, `getUserAppointments`, `Bookappointmentconfirm`.
- **Doctors:** `getDoctors`, `createDoctor`, `updateDoctor`, `deleteDoctor`.
- **Users:** `syncUser` (for Clerk integration).
- **API Route:** `app/api/send-email-appointment/route.ts` handles POST requests for sending confirmation emails via Resend.

## 7. UI/UX Design
The application features a clean, professional "healthcare-themed" design.
- **Responsive Design:** Fully optimized for mobile and desktop using Tailwind CSS and custom hooks.
- **Interactive Elements:** Uses Shadcn UI for accessible and polished components like dialogs, calendars, and forms.
- **Loading States:** Implemented using Skeleton components and React Suspense for a smooth user experience.

## 8. External Integrations
- **Clerk:** Handles secure user authentication and session management.
- **Vapi:** Provides the real-time AI voice conversation capabilities.
- **Resend:** Powering the automated transactional emails for appointment confirmations.

## 9. Architectural Patterns
- **Server-First Approach:** Leverages Next.js Server Components and Server Actions to minimize client-side JavaScript and improve security.
- **Type Safety:** Comprehensive TypeScript usage across the frontend and backend (via Prisma types).
- **Component-Based Architecture:** Highly modular UI components for better maintainability and reusability.
- **Centralized Data Fetching:** Custom hooks powered by TanStack Query for efficient caching and state management.
