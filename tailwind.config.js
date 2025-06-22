module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#2C3E50", // slate-800
          900: "#0F172A", // slate-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#E74C3C", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#E74C3C", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#F39C12", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F39C12", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#7F8C8D", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#27AE60", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          600: "#27AE60", // green-600
        },
        warning: {
          DEFAULT: "#F39C12", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#F39C12", // orange-500
        },
        error: {
          DEFAULT: "#E74C3C", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          600: "#E74C3C", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E1E8ED", // gray-200
          active: "#2C3E50", // slate-800
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(44, 62, 80, 0.1)',
        card: '0 2px 8px rgba(44, 62, 80, 0.08)',
        hover: '0 8px 30px rgba(44, 62, 80, 0.15)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
    },
  },
  plugins: [],
}