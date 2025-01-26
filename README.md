# PhoneCase - Create Custom Phone Cases

## Description
PhoneCase is a Next.js application that allows users to create custom phone cases with their own images. It emphasizes a seamless and responsive design, user-friendly interface, and modern features to enhance the customization experience.

## Features
- **Custom Case Design**: Upload your own images and design your phone case.
- **Responsive Layout**: Optimized for all devices, including mobile, tablet, and desktop.
- **User Testimonials**: Showcasing reviews from satisfied customers.
- **Interactive UI Components**: Real-time progress indicators, animated elements, and dynamic displays.
- **State Management**: Utilizes Zustand for managing image-related states.
- **Reusable Components**: Modular design for better scalability and reusability.

## Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide-react

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd phonecase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Configure environment variables: .env

```
cloud_provider = the_url

```


## Project Structure
```
phonecase/
├── app/
│   ├── components/
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatOurCustomersSay.tsx
│   │   └── ShowExamples.tsx
│   ├── Zustand/
│   │   └── store.ts
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── Toaster.ts
│   │   └── uploadthing.ts
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Usage
1. **Design Your Case**: Upload your image, view real-time previews, and adjust the design.
2. **Interactive Features**: Explore animations, testimonials, and visual guides for customization.
3. **Responsive Experience**: Enjoy seamless navigation across all devices.

## Scripts
- `npm run dev`: Run the development server.
- `npm run build`: Build the production-ready application.
- `npm start`: Start the production server.

## Contributing
Contributions are welcome! If you have suggestions, feel free to open an issue or submit a pull request.

---

Enjoy creating your custom phone case!

Imrane ALI LAFKIH
