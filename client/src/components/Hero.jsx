// // import { ArrowRight } from 'lucide-react';

// // const Hero = () => {
// //   return (
// //     <section className="min-h-screen flex items-center justify-center bg-gradient-dark pt-20">
// //       <div className="container mx-auto px-6 max-w-7xl">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <p 
// //             className="font-body text-primary uppercase tracking-[0.3em] mb-6 animate-fade-up" 
// //             style={{ animationDelay: '0.1s' }}
// //           >
// //             Creative Design Studio
// //           </p>
          
// //           <h1 
// //             className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-8 animate-fade-up" 
// //             style={{ animationDelay: '0.2s' }}
// //           >
// //             WE CREATE
// //             <br />
// //             <span className="text-gradient">BOLD</span> BRANDS
// //           </h1>
          
// //           <p 
// //             className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up" 
// //             style={{ animationDelay: '0.3s' }}
// //           >
// //             Award-winning graphic design agency crafting memorable visual identities 
// //             that make brands stand out in a crowded world.
// //           </p>
          
// //           <div 
// //             className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" 
// //             style={{ animationDelay: '0.4s' }}
// //           >
// //             <a
// //               href="#portfolio"
// //               className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-medium rounded-lg hover:bg-primary/90 transition-all shadow-orange"
// //             >
// //               View Our Work
// //               <ArrowRight className="ml-2 w-5 h-5" />
// //             </a>
// //             <a
// //               href="#contact"
// //               className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-white transition-all"
// //             >
// //               Get In Touch
// //             </a>
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Decorative Elements */}
// //       <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rotate-45 hidden lg:block" />
// //       <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-primary/10 rotate-12 hidden lg:block" />
// //     </section>
// //   );
// // };

// // export default Hero;





// import { ArrowRight } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-dark pt-20">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="max-w-5xl mx-auto text-center">
//           <p 
//             className="font-body text-primary uppercase tracking-[0.3em] mb-6 animate-fade-up text-sm font-normal" // Added font-normal
//             style={{ animationDelay: '0.1s' }}
//           >
//             Creative Design Studio
//           </p>
          
//           <div className="mb-12">
//             <h1 
//               className="font-display text-8xl md:text-9xl lg:text-10xl text-foreground leading-[0.9] font-light mb-4" // Increased size, added font-light
//               style={{ animationDelay: '0.2s' }}
//             >
//               WE CREATE
//             </h1>
//             <h1 
//               className="font-display text-9xl md:text-10xl lg:text-11xl text-foreground leading-[0.9] font-normal" // Increased size, font-normal
//               style={{ animationDelay: '0.25s' }}
//             >
//               <span className="text-gradient font-medium">BOLD</span> BRANDS {/* font-medium for gradient */}
//             </h1>
//           </div>
          
//           <p 
//             className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up font-normal" // Added font-normal
//             style={{ animationDelay: '0.3s' }}
//           >
//             Award-winning graphic design agency crafting memorable visual identities 
//             that make brands stand out in a crowded world.
//           </p>
          
//           <div 
//             className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" 
//             style={{ animationDelay: '0.4s' }}
//           >
//             <a
//               href="#portfolio"
//               className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body rounded-lg hover:bg-primary/90 transition-all shadow-orange text-sm uppercase tracking-wider font-medium" // Changed to font-medium
//             >
//               View Our Work
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-body rounded-lg hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-wider font-medium" // Changed to font-medium
//             >
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative Elements */}
//       <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rotate-45 hidden lg:block" />
//       <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-primary/10 rotate-12 hidden lg:block" />
//     </section>
//   );
// };

// export default Hero;





import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <p 
            className="font-body text-primary uppercase tracking-[0.3em] mb-6 text-sm font-normal animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Creative Design Studio
          </p>
          
          <div className="mb-12">
            <h1 
              className="font-display text-8xl md:text-9xl lg:text-10xl text-foreground leading-[0.9] font-light mb-4"
              style={{ animationDelay: '0.2s' }}
            >
              WE CREATE
            </h1>
            <h1 
              className="font-display text-9xl md:text-10xl lg:text-11xl text-foreground leading-[0.9] font-normal"
              style={{ animationDelay: '0.25s' }}
            >
              <span className="text-gradient font-medium">BOLD</span> BRANDS
            </h1>
          </div>
          
          <p 
            className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-normal animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Award-winning graphic design agency crafting memorable visual identities 
            that make brands stand out in a crowded world.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" 
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body rounded-lg hover:bg-primary/90 transition-all shadow-orange text-sm uppercase tracking-wider font-medium"
            >
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-body rounded-lg hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-wider font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;