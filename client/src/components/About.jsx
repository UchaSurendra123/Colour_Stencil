// // const stats = [
// //   { number: '150+', label: 'Projects Completed' },
// //   { number: '50+', label: 'Happy Clients' },
// //   { number: '12', label: 'Years Experience' },
// //   { number: '25', label: 'Design Awards' },
// // ];

// // const About = () => {
// //   return (
// //     <section id="about" className="py-24 bg-background">
// //       <div className="container mx-auto px-6 max-w-7xl">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //           <div>
// //             <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">About Us</p>
// //             <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">
// //               WE ARE<br />
// //               <span className="text-gradient">BOLD</span>
// //             </h2>
// //             <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
// //               <p>
// //                 Founded in 2012, BOLD is a creative design studio that believes in the power 
// //                 of exceptional design to transform businesses. We're a team of passionate 
// //                 designers, strategists, and dreamers who live and breathe creativity.
// //               </p>
// //               <p>
// //                 Our approach combines strategic thinking with bold creativity. We don't just 
// //                 design—we craft experiences that connect brands with their audiences in 
// //                 meaningful ways. Every project is an opportunity to push boundaries and 
// //                 create something extraordinary.
// //               </p>
// //               <p>
// //                 From startups to Fortune 500 companies, we've helped brands across industries 
// //                 find their voice and stand out in competitive markets.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-2 gap-6">
// //             {stats.map((stat) => (
// //               <div
// //                 key={stat.label}
// //                 className="bg-card border border-border rounded-lg p-8 text-center hover-lift"
// //               >
// //                 <p className="font-display text-5xl md:text-6xl text-primary mb-2">{stat.number}</p>
// //                 <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
// //                   {stat.label}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;









// const stats = [
//   { number: '150+', label: 'Projects Completed' },
//   { number: '50+', label: 'Happy Clients' },
//   { number: '12', label: 'Years Experience' },
//   { number: '25', label: 'Design Awards' },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-background">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="font-body text-primary uppercase tracking-[0.3em] mb-4 text-sm font-normal">
//               About Us
//             </p>
//             <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8 font-light">
//               WE ARE<br />
//               <span className="text-gradient font-medium">BOLD</span>
//             </h2>
//             <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-base font-normal">
//               <p>
//                 Founded in 2012, BOLD is a creative design studio that believes in the power 
//                 of exceptional design to transform businesses. We're a team of passionate 
//                 designers, strategists, and dreamers who live and breathe creativity.
//               </p>
//               <p>
//                 Our approach combines strategic thinking with bold creativity. We don't just 
//                 design—we craft experiences that connect brands with their audiences in 
//                 meaningful ways. Every project is an opportunity to push boundaries and 
//                 create something extraordinary.
//               </p>
//               <p>
//                 From startups to Fortune 500 companies, we've helped brands across industries 
//                 find their voice and stand out in competitive markets.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             {stats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="bg-card border border-border rounded-lg p-8 text-center hover-lift"
//               >
//                 <p className="font-display text-5xl md:text-6xl text-primary mb-2 font-normal">
//                   {stat.number}
//                 </p>
//                 <p className="font-body text-muted-foreground text-xs uppercase tracking-wider font-medium">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;








import worldMap from '../assets/world-map.png';

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '12', label: 'Years Experience' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <p className="font-body text-primary uppercase tracking-[0.3em] mb-4 text-sm">
              About Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8">
             Built by Designers
<br />
              <span className="text-gradient">Run with Ownership</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-base">
              <p>
                Colorstencil is led by hands-on designers who understand deadlines, budgets, and 
                brand pressure. No outsourcing chaos. No over-selling. Just focused creative execution.
              </p>
              <p>
                When you work with us, you work directly with the creators. We don't pass the buck; we perfect the pixel.
              </p>
          
            </div>
          </div>

          {/* Right Side - World Map & Stats */}
          <div className="space-y-8">
            {/* World Map Image */}
            <div className="w-full">
              <img 
                src={worldMap} 
                alt="Our Global Reach" 
                className="w-full h-auto"
              />
            </div>

            {/* Stats Row - 3 columns */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6 text-center hover-lift"
                >
                  <p className="font-display text-3xl md:text-4xl text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="font-body text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;