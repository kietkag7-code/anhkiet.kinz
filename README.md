# Anh Kiet's Portfolio

A stunning personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, GSAP, and Three.js. Features cinematic animations, smooth scrolling, and interactive elements inspired by Awwwards-winning designs.

## 🚀 Features

- **Cinematic Hero Section**: Animated background with particle systems and typing text effect
- **Smooth Scrolling**: Lenis-powered smooth scrolling experience
- **Interactive Animations**: Framer Motion and GSAP animations throughout
- **3D Effects**: Three.js integration for advanced visual effects
- **Custom Cursor**: Magnetic cursor with hover effects
- **Responsive Design**: Mobile-first design with touch interactions
- **Loading Screen**: Animated loading screen with progress bar
- **Glassmorphism UI**: Modern glassmorphism design with gradients
- **Project Showcase**: 3D tilt cards with modal previews
- **Experience Timeline**: Animated timeline with scroll triggers
- **Gallery**: Interactive image grid with hover effects
- **Contact Form**: Animated form with focus effects

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js
- **Smooth Scrolling**: Lenis
- **Icons**: Custom emoji icons

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5174](http://localhost:5174) in your browser

## 🏗️ Build

To build for production:

```bash
npm run build
```

## 🚀 Deployment

The project is ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📱 Responsive

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎨 Customization

To customize the portfolio:

1. Update personal information in components
2. Replace placeholder images with your own
3. Modify color schemes in Tailwind config
4. Adjust animations in component files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Anh Kiet

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
