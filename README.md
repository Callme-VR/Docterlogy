# Docterlogy - AI-Powered Healthcare Appointment System

<div align="center">
  <img src="/hero.png" alt="Docterlogy Hero" width="600" />
</div>

<p align="center">
  <strong>An advanced healthcare platform featuring AI-powered voice assistance and seamless appointment booking.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#api-documentation">API Documentation</a> •
  <a href="#testing">Testing</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#security">Security</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
  ![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)
  ![Prisma](https://img.shields.io/badge/Prisma-6.18.0-black?logo=prisma)
  ![Clerk](https://img.shields.io/badge/Clerk-6.34.1-purple?logo=clerk)
  ![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

## Features

### 🔬 AI-Powered Healthcare Assistant
- Voice-enabled AI doctor assistant powered by Vapi.ai
- Natural language processing for medical inquiries
- 24/7 availability for patient support

### 📅 Smart Appointment Booking
- Multi-step appointment booking process
- Doctor selection with detailed profiles
- Real-time availability checking
- Automated email confirmations via Resend

### 👨‍⚕️ Doctor Management
- Admin panel for doctor management
- Doctor profiles with specialties and availability
- Appointment statistics and analytics

### 🔐 Secure Authentication
- Clerk-based authentication system
- Role-based access control (patient/admin)
- Subscription plan management

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Interactive components with Shadcn UI
- Smooth animations and transitions

## Tech Stack

### Frontend
- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Reusable component library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Zod](https://zod.dev/) - Schema validation

### Backend & Database
- [PostgreSQL](https://www.postgresql.org/) - Primary database
- [Prisma](https://www.prisma.io/) - Database ORM
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) - Server-side logic

### Authentication & Authorization
- [Clerk](https://clerk.com/) - Authentication and user management
- Role-based access control

### Email & Notifications
- [Resend](https://resend.com/) - Email delivery service
- [React Email](https://react.email/) - Email templating

### AI Integration
- [Vapi.ai](https://vapi.ai/) - Voice AI platform
- Voice-enabled healthcare assistant

### State Management & Data Fetching
- [TanStack Query](https://tanstack.com/query/latest) - Server state management
- Caching and background data synchronization

### Development Tools
- [Biome](https://biomejs.dev/) - Code formatting and linting
- [Pnpm](https://pnpm.io/) - Package manager

## Architecture

### Project Structure
```
docterlogy/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── appointments/      # Appointment booking flow
│   ├── dashboard/         # Patient dashboard
│   ├── pro/               # Pro plan features
│   ├── voice/             # Voice AI features
│   └── ...
├── components/            # React components
│   ├── admin/             # Admin components
│   ├── appointments/      # Appointment components
│   ├── dashboard/         # Dashboard components
│   ├── emails/            # Email templates
│   ├── landing/           # Landing page components
│   ├── ui/                # UI components
│   └── ...
├── hooks/                 # Custom React hooks
├── lib/                   # Business logic and utilities
│   ├── actions/           # Server actions
│   └── ...
├── prisma/                # Prisma schema and migrations
└── public/                # Static assets
```

### Database Schema
The application uses PostgreSQL with the following key entities:

- **User**: Patient information with Clerk integration
- **Doctor**: Healthcare provider profiles
- **Appointment**: Booking details with status tracking

### Authentication Flow
1. Users sign up/in via Clerk
2. User data synchronized with internal database
3. Role-based access control determines available features
4. Subscription plans unlock premium features (Voice AI)

### Appointment Booking Flow
1. Doctor Selection - Browse and select healthcare providers
2. Time Slot Selection - Choose available dates and times
3. Confirmation - Review and confirm appointment details
4. Email Notification - Automatic confirmation sent via Resend

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account
- Resend account
- Vapi.ai account

### Environment Variables
Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=your_postgresql_connection_string

# Vapi.ai Voice Assistant
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

# Admin Access
ADMIN_EMAIL=your_admin_email

# Email Service
RESEND_API_KEY=your_resend_api_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/docterlogy.git
cd docterlogy
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up the database:
```bash
pnpm prisma generate
pnpm prisma migrate dev
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Check code with Biome
- `pnpm format` - Format code with Biome

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Docker Deployment
```bash
# Build the image
docker build -t docterlogy .

# Run the container
docker run -p 3000:3000 docterlogy
```

### Environment Considerations
- Ensure DATABASE_URL points to production database
- Update NEXT_PUBLIC_APP_URL to your domain
- Configure webhook URLs in Clerk dashboard

## Contributing

We welcome contributions to Docterlogy! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Use Biome for formatting (`pnpm format`)
- Write descriptive commit messages
- Include tests for new functionality

### Reporting Issues
- Use the GitHub issue tracker
- Provide detailed reproduction steps
- Include screenshots when applicable

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@docterlogy.com or join our [Discord community](#).

---

<p align="center">
  Built with ❤️ for better healthcare accessibility
</p>