// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       fontFamily: {
// //         display: ['Bebas Neue', 'sans-serif'],
// //         body: ['Inter', 'sans-serif'],
// //       },
// //       colors: {
// //         background: 'hsl(0 0% 10%)',
// //         foreground: 'hsl(0 0% 100%)',
// //         card: 'hsl(0 0% 12%)',
// //         'card-foreground': 'hsl(0 0% 100%)',
// //         primary: {
// //           DEFAULT: 'hsl(16 100% 60%)',
// //           foreground: 'hsl(0 0% 100%)',
// //         },
// //         secondary: 'hsl(0 0% 15%)',
// //         muted: {
// //           DEFAULT: 'hsl(0 0% 18%)',
// //           foreground: 'hsl(0 0% 65%)',
// //         },
// //         border: 'hsl(0 0% 20%)',
// //         'dark-surface': 'hsl(0 0% 8%)',
// //       },
// //       keyframes: {
// //         'fade-up': {
// //           'from': { 
// //             opacity: '0', 
// //             transform: 'translateY(40px)' 
// //           },
// //           'to': { 
// //             opacity: '1', 
// //             transform: 'translateY(0)' 
// //           },
// //         },
// //         'fade-in': {
// //           'from': { opacity: '0' },
// //           'to': { opacity: '1' },
// //         },
// //       },
// //       animation: {
// //         'fade-up': 'fade-up 0.8s ease-out forwards',
// //         'fade-in': 'fade-in 0.6s ease-out forwards',
// //       },
// //     },
// //   },
// //   plugins: [],
// // }








// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         display: ['Bebas Neue', 'sans-serif'],
//         body: ['Inter', 'sans-serif'],
//       },
//       fontSize: {
//         // Base sizes (smaller)
//         'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
//         'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
//         'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
//         'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
//         'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        
//         // Display sizes (optimized for your reference images)
//         '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px - Service titles
//         '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px - Subheadings
//         '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px - Section subheadings
//         '5xl': ['3rem', { lineHeight: '1' }],             // 48px - Main headings
//         '6xl': ['3.75rem', { lineHeight: '1' }],          // 60px - Large headings
//         '7xl': ['4.5rem', { lineHeight: '1' }],           // 72px - Hero secondary
//         '8xl': ['6rem', { lineHeight: '1' }],             // 96px - Hero main "WE CREATE"
//         '9xl': ['8rem', { lineHeight: '1' }],             // 128px - Not used
//       },
//       colors: {
//         background: 'hsl(0 0% 10%)',
//         foreground: 'hsl(0 0% 100%)',
//         card: 'hsl(0 0% 12%)',
//         'card-foreground': 'hsl(0 0% 100%)',
//         primary: {
//           DEFAULT: 'hsl(16 100% 60%)',
//           foreground: 'hsl(0 0% 100%)',
//         },
//         secondary: 'hsl(0 0% 15%)',
//         muted: {
//           DEFAULT: 'hsl(0 0% 18%)',
//           foreground: 'hsl(0 0% 65%)',
//         },
//         border: 'hsl(0 0% 20%)',
//         'dark-surface': 'hsl(0 0% 8%)',
//       },
//       keyframes: {
//         'fade-up': {
//           'from': { 
//             opacity: '0', 
//             transform: 'translateY(40px)' 
//           },
//           'to': { 
//             opacity: '1', 
//             transform: 'translateY(0)' 
//           },
//         },
//         'fade-in': {
//           'from': { opacity: '0' },
//           'to': { opacity: '1' },
//         },
//       },
//       animation: {
//         'fade-up': 'fade-up 0.8s ease-out forwards',
//         'fade-in': 'fade-in 0.6s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// }



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['7rem', { lineHeight: '1' }],
        '10xl': ['8rem', { lineHeight: '1' }],
        '11xl': ['10rem', { lineHeight: '0.9' }],
      },
      colors: {
        background: 'hsl(0 0% 10%)',
        foreground: 'hsl(0 0% 100%)',
        card: 'hsl(0 0% 12%)',
        'card-foreground': 'hsl(0 0% 100%)',
        primary: {
          DEFAULT: 'hsl(16 100% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: 'hsl(0 0% 15%)',
        muted: {
          DEFAULT: 'hsl(0 0% 18%)',
          foreground: 'hsl(0 0% 65%)',
        },
        // Define border color here
        border: 'hsl(0 0% 20%)',
        'dark-surface': 'hsl(0 0% 8%)',
      },
      keyframes: {
        'fade-up': {
          'from': { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}