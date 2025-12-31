// // import { useEffect, useRef } from 'react';

// // // Import all client logos
// // import client1 from '../assets/clients/client-1.png';
// // import client2 from '../assets/clients/client-2.png';
// // import client3 from '../assets/clients/client-3.png';
// // import client4 from '../assets/clients/client-4.png';
// // import client5 from '../assets/clients/client-5.png';
// // import client6 from '../assets/clients/client-6.png';
// // import client7 from '../assets/clients/client-7.png';
// // import client8 from '../assets/clients/client-8.png';
// // import client9 from '../assets/clients/client-9.png';
// // import client10 from '../assets/clients/client-10.png';

// // const clients = [
// //   { id: 1, logo: client1, name: 'Pista House' },
// //   { id: 2, logo: client2, name: 'Zomato' },
// //   { id: 3, logo: client3, name: 'ICICI Bank' },
// //   { id: 4, logo: client4, name: 'Santosh Dhaba' },
// //   { id: 5, logo: client5, name: 'Yumzy' },
// //   { id: 6, logo: client6, name: 'Client 6' },
// //   { id: 7, logo: client7, name: 'Client 7' },
// //   { id: 8, logo: client8, name: 'Client 8' },
// //   { id: 9, logo: client9, name: 'Client 9' },
// //   { id: 10, logo: client10, name: 'Client 10' },
// // ];

// // const Clients = () => {
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;

// //     let scrollAmount = 0;
// //     const scrollStep = 1; // Speed of scroll
// //     const scrollInterval = 30; // Smooth animation (ms)

// //     const scroll = () => {
// //       scrollAmount += scrollStep;
      
// //       // Reset scroll when reaching halfway point (seamless loop)
// //       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
// //         scrollAmount = 0;
// //       }
      
// //       scrollContainer.scrollLeft = scrollAmount;
// //     };

// //     const interval = setInterval(scroll, scrollInterval);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="py-12 bg-background border-t border-border">
// //       <div className="container mx-auto px-6 max-w-7xl">
// //         {/* Optional: Section Title */}
// //         <div className="text-center mb-8">
// //           <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
// //             Trusted By Leading Brands
// //           </p>
// //         </div>

// //         {/* Scrolling Logo Container */}
// //         <div className="relative overflow-hidden">
// //           <div
// //             ref={scrollRef}
// //             className="flex gap-12 overflow-hidden"
// //             style={{ 
// //               scrollBehavior: 'auto',
// //               WebkitOverflowScrolling: 'touch' 
// //             }}
// //           >
// //             {/* First set of logos */}
// //             {clients.map((client) => (
// //               <div
// //                 key={`first-${client.id}`}
// //                 className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
// //                 style={{ width: '150px', height: '60px' }}
// //               >
// //                 <img
// //                   src={client.logo}
// //                   alt={client.name}
// //                   className="max-w-full max-h-full object-contain"
// //                 />
// //               </div>
// //             ))}
            
// //             {/* Duplicate set for seamless loop */}
// //             {clients.map((client) => (
// //               <div
// //                 key={`second-${client.id}`}
// //                 className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
// //                 style={{ width: '150px', height: '60px' }}
// //               >
// //                 <img
// //                   src={client.logo}
// //                   alt={client.name}
// //                   className="max-w-full max-h-full object-contain"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Clients;








// import { useEffect, useRef } from 'react';

// // Import all client logos
// import client1 from '../assets/clients/client-1.png';
// import client2 from '../assets/clients/client-2.png';
// import client3 from '../assets/clients/client-3.png';
// import client4 from '../assets/clients/client-4.png';
// import client5 from '../assets/clients/client-5.png';
// import client6 from '../assets/clients/client-6.png';
// import client7 from '../assets/clients/client-7.png';
// import client8 from '../assets/clients/client-8.png';
// import client9 from '../assets/clients/client-9.png';
// import client10 from '../assets/clients/client-10.png';

// const clients = [
//   { id: 1, logo: client1, name: 'Pista House' },
//   { id: 2, logo: client2, name: 'Zomato' },
//   { id: 3, logo: client3, name: 'ICICI Bank' },
//   { id: 4, logo: client4, name: 'Santosh Dhaba' },
//   { id: 5, logo: client5, name: 'Yumzy' },
//   { id: 6, logo: client6, name: 'Client 6' },
//   { id: 7, logo: client7, name: 'Client 7' },
//   { id: 8, logo: client8, name: 'Client 8' },
//   { id: 9, logo: client9, name: 'Client 9' },
//   { id: 10, logo: client10, name: 'Client 10' },
// ];

// const Clients = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollStep = 1; // Speed of scroll
//     const scrollInterval = 30; // Smooth animation (ms)

//     const scroll = () => {
//       scrollAmount += scrollStep;
      
//       // Reset scroll when reaching halfway point (seamless loop)
//       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollAmount = 0;
//       }
      
//       scrollContainer.scrollLeft = scrollAmount;
//     };

//     const interval = setInterval(scroll, scrollInterval);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-12 bg-background border-t border-border">
//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* Optional: Section Title */}
//         <div className="text-center mb-8">
//           <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
//             Trusted By Leading Brands
//           </p>
//         </div>

//         {/* Scrolling Logo Container */}
//         <div className="relative overflow-hidden">
//           <div
//             ref={scrollRef}
//             className="flex gap-12 overflow-hidden"
//             style={{ 
//               scrollBehavior: 'auto',
//               WebkitOverflowScrolling: 'touch' 
//             }}
//           >
//             {/* First set of logos */}
//             {clients.map((client) => (
//               <div
//                 key={`first-${client.id}`}
//                 className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all duration-300"
//                 style={{ width: '150px', height: '60px' }}
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             ))}
            
//             {/* Duplicate set for seamless loop */}
//             {clients.map((client) => (
//               <div
//                 key={`second-${client.id}`}
//                 className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all duration-300"
//                 style={{ width: '150px', height: '60px' }}
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;









import { useEffect, useRef } from 'react';

// Import all client logos
import client1 from '../assets/clients/client-1.png';
import client2 from '../assets/clients/client-2.png';
import client3 from '../assets/clients/client-3.png';
import client4 from '../assets/clients/client-4.png';
import client5 from '../assets/clients/client-5.png';
import client6 from '../assets/clients/client-6.png';
import client7 from '../assets/clients/client-7.png';
import client8 from '../assets/clients/client-8.png';
import client9 from '../assets/clients/client-9.png';
import client10 from '../assets/clients/client-10.png';

const clients = [
  { id: 1, logo: client1, name: 'Pista House' },
  { id: 2, logo: client2, name: 'Zomato' },
  { id: 3, logo: client3, name: 'ICICI Bank' },
  { id: 4, logo: client4, name: 'Santosh Dhaba' },
  { id: 5, logo: client5, name: 'Yumzy' },
  { id: 6, logo: client6, name: 'Client 6' },
  { id: 7, logo: client7, name: 'Client 7' },
  { id: 8, logo: client8, name: 'Client 8' },
  { id: 9, logo: client9, name: 'Client 9' },
  { id: 10, logo: client10, name: 'Client 10' },
];

const Clients = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Speed of scroll
    const scrollInterval = 30; // Smooth animation (ms)

    const scroll = () => {
      scrollAmount += scrollStep;
      
      // Reset scroll when reaching halfway point (seamless loop)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Optional: Section Title */}
        <div className="text-center mb-8">
          <p className="font-body text-gray-600 text-sm uppercase tracking-wider">
            Trusted By Leading Brands
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden"
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={`first-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{ width: '150px', height: '60px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`second-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{ width: '150px', height: '60px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;