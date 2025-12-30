// // // import { Menu, X } from 'lucide-react';
// // // import { useState } from 'react';

// // // const navLinks = [
// // //   { href: '#services', label: 'Services' },
// // //   { href: '#portfolio', label: 'Portfolio' },
// // //   { href: '#about', label: 'About' },
// // //   { href: '#contact', label: 'Contact' },
// // // ];

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
// // //       <nav className="container mx-auto px-6 py-4 max-w-7xl">
// // //         <div className="flex items-center justify-between">
// // //           <a href="/" className="font-display text-3xl tracking-wider text-foreground">
// // //             BOLD<span className="text-primary">.</span>
// // //           </a>

// // //           {/* Desktop Navigation */}
// // //           <ul className="hidden md:flex items-center gap-8">
// // //             {navLinks.map((link) => (
// // //               <li key={link.href}>
// // //                 <a
// // //                   href={link.href}
// // //                   className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
// // //                 >
// // //                   {link.label}
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="md:hidden text-foreground"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //             aria-label="Toggle menu"
// // //           >
// // //             {isOpen ? <X size={24} /> : <Menu size={24} />}
// // //           </button>
// // //         </div>

// // //         {/* Mobile Navigation */}
// // //         {isOpen && (
// // //           <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-up">
// // //             {navLinks.map((link) => (
// // //               <li key={link.href}>
// // //                 <a
// // //                   href={link.href}
// // //                   className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   {link.label}
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;







// // import { Menu, X } from 'lucide-react';
// // import { useState } from 'react';
// // import logo from '../assets/logo.png';

// // const navLinks = [
// //   { href: '#services', label: 'Services' },
// //   { href: '#portfolio', label: 'Portfolio' },
// //   { href: '#about', label: 'About' },
// //   { href: '#contact', label: 'Contact' },
// // ];

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
// //       <nav className="container mx-auto px-6 py-4 max-w-7xl">
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <a href="/" className="flex items-center">
// //             <img src={logo} alt="Color Stencil" className="h-8 md:h-10 w-auto" />
// //           </a>

// //           {/* Desktop Navigation */}
// //           <ul className="hidden md:flex items-center gap-8">
// //             {navLinks.map((link) => (
// //               <li key={link.href}>
// //                 <a
// //                   href={link.href}
// //                   className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
// //                 >
// //                   {link.label}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden text-foreground"
// //             onClick={() => setIsOpen(!isOpen)}
// //             aria-label="Toggle menu"
// //           >
// //             {isOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-up">
// //             {navLinks.map((link) => (
// //               <li key={link.href}>
// //                 <a
// //                   href={link.href}
// //                   className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   {link.label}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;





// import { Menu, X, Sun, Moon } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import logo from '../assets/logo.png';

// const navLinks = [
//   { href: '#services', label: 'Services' },
//   { href: '#portfolio', label: 'Portfolio' },
//   { href: '#about', label: 'About' },
//   { href: '#contact', label: 'Contact' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   // Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light') {
//       setIsDark(false);
//       document.documentElement.classList.remove('dark');
//       document.documentElement.classList.add('light');
//     } else {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//       document.documentElement.classList.remove('light');
//     }
//   }, []);

//   // Toggle theme
//   const toggleTheme = () => {
//     if (isDark) {
//       setIsDark(false);
//       document.documentElement.classList.remove('dark');
//       document.documentElement.classList.add('light');
//       localStorage.setItem('theme', 'light');
//     } else {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//       document.documentElement.classList.remove('light');
//       localStorage.setItem('theme', 'dark');
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
//       <nav className="container mx-auto px-6 py-4 max-w-7xl">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a href="/" className="flex items-center">
//             <img src={logo} alt="Color Stencil" className="h-8 md:h-10 w-auto" />
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <ul className="flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Theme Toggle Button - Desktop */}
//             <button
//               onClick={toggleTheme}
//               className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-orange"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//           </div>

//           {/* Mobile Right Section */}
//           <div className="md:hidden flex items-center gap-3">
//             {/* Theme Toggle Button - Mobile */}
//             <button
//               onClick={toggleTheme}
//               className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               className="text-foreground"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-up">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;









import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', borderColor: 'hsl(var(--border))' }}>
      <nav className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Color Stencil" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-orange"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-up">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;