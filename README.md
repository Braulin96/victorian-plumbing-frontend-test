# Victorian Plumbing Frontend Test

A high-performance e-commerce product listing application built with React, Vite, and Tailwind CSS. Features optimized rendering, responsive design, and comprehensive component documentation via Storybook.

## 🚀 Features

- **Product Listing**: Display of 30 products per page with pagination
- **Sorting**: Multiple sort options (Recommended, Price Low/High, Largest Discount)
- **Performance Optimized**: React.memo, useMemo, and useCallback for ~95% render time improvement
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant components with proper ARIA labels
- **Component Library**: Fully documented components in Storybook
- **Error Handling**: User-friendly error messages and loading states

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool
- **Axios** - HTTP client for API requests

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Development Tools
- **Storybook 10.1.4** - Component development environment
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Playwright** - Browser automation for testing


## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build static Storybook |

## 📁 Project Structure
```
src/
├── assets/                 # Static assets (images, SVGs)
├── components/            
│   ├── Asset/             # Image and icon button component
│   ├── ErrorMessage/      # Error display component
│   ├── Link/              # Custom link component
│   ├── LoadingSpinner/    # Loading indicator
│   ├── Pagination/        # Pagination controls
│   ├── Price/             # Price display with discount
│   ├── ProductCard/       # Individual product card
│   ├── ProductBlock/      # Main product listing container
│   ├── Review/            # Star rating component
│   ├── Selector/          # Sort dropdown
│   ├── Stock/             # Stock status indicator
│   └── Title/             # Product title component
├── data/                  # Static data (selector options)
├── utils/                 # Utility functions
│   ├── helper.js          # Product mapping helper
│   ├── priceUtils.js      # Price formatting utilities
│   └── roundedRating.js   # Rating rounding function
├── App.jsx                # Root component
└── main.jsx               # Application entry point
```

## 🎨 Storybook

All components are documented with multiple variants and interactive controls.
```bash
# Start Storybook
npm run storybook
```

Visit `http://localhost:6006` to explore components.


## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus indicators
- Color contrast compliance


## 🔮Possible Future Improvements

- Implement lazy loading with Suspense for better initial load
- Add unit tests for all components
- Implement filtering by price, brand, and other attributes
- Add product quick view modal

## 📄 License

This project is private and for evaluation purposes only.
---

Built for Victorian Plumbing technical assessment