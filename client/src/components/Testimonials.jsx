// import { useState } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     quote: 'Working with this team transformed our brand completely. Their creative vision and attention to detail exceeded all our expectations.',
//     author: 'Sarah Chen',
//     role: 'CEO, TechFlow Inc.',
//   },
//   {
//     quote: 'The packaging design they created for us became a key differentiator in the market. Our customers constantly compliment the aesthetic.',
//     author: 'Marcus Johnson',
//     role: 'Founder, Pure Botanics',
//   },
//   {
//     quote: 'Professional, innovative, and incredibly talented. They delivered a brand identity that perfectly captures who we are.',
//     author: 'Emily Rodriguez',
//     role: 'Marketing Director, Sterling Financial',
//   },
//   {
//     quote: 'Their attention to detail and creative approach helped us stand out in a crowded marketplace. Highly recommended!',
//     author: 'David Park',
//     role: 'Co-founder, Nexus Studios',
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section id="testimonials" className="py-24 bg-background">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="text-center mb-16">
//           <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">
//             Client Stories
//           </p>
//           <h2 className="font-display text-5xl md:text-7xl text-foreground">
//             TESTIMONIALS
//           </h2>
//         </div>

//         <div className="max-w-5xl mx-auto relative">
//           {/* Left Arrow */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center z-10"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           {/* Testimonial Content */}
//           <div className="p-8 md:p-12 bg-dark-surface rounded-lg border border-border text-center">
//             <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-70" />
//             <p className="font-body text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10">
//               "{testimonials[current].quote}"
//             </p>
//             <div className="border-t border-border pt-8">
//               <p className="font-display text-2xl text-foreground">
//                 {testimonials[current].author}
//               </p>
//               <p className="font-body text-primary text-sm uppercase tracking-wider mt-2">
//                 {testimonials[current].role}
//               </p>
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center z-10"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Indicators (Dots) */}
//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   index === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Working with Colorstencil was refreshing. No agency bloat —just direct communication and incredible designs delivered on time.',
    author: 'Client name',
    role: 'CEO',
  },
  {
    quote: 'They understand that design is about solving business problems. From packaging to social posts, everything remained consistent.',
    author: 'Client name',
    role: ' Marketing Head',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll effect - changes testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            TESTIMONIALS
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Content with Fade Animation */}
          <div className="p-8 md:p-12 bg-dark-surface rounded-lg border border-border text-center transition-opacity duration-500">
            <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-70" />
            <p className="font-body font-light text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              "{testimonials[current].quote}"
            </p>
            <div className="border-t border-border pt-8">
              <p className="font-display text-xl text-foreground">
                {testimonials[current].author}
              </p>
              <p className="font-body text-primary text-xs uppercase tracking-wider mt-2">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;