# Momen Alhaddad | Portfolio

A personal portfolio showcasing my work and experience as a software engineer. The site includes an introduction, about section, projects, experience, and a contact form.

## Built With

- React
- Vite
- Tailwind CSS
- EmailJS

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Contact Form Setup

The contact form uses EmailJS. To enable message delivery, create a `.env.local` file in the project root and provide your EmailJS service ID, template ID, and public key:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The `.env.local` file is excluded from Git. Do not commit private credentials.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Links

- [GitHub](https://github.com/momenHaddad)
- [LinkedIn](https://www.linkedin.com/in/momen-alhaddad-509854319/)
