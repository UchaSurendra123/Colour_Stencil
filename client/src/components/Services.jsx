// import { Palette, Layout, PenTool, Monitor, Package, Camera } from 'lucide-react';

// const services = [
//   {
//     icon: Palette,
//     title: 'Brand Identity',
//     description: 'Complete visual identity systems that capture your brand\'s essence and resonate with your audience.',
//   },
//   {
//     icon: Layout,
//     title: 'UI/UX Design',
//     description: 'Intuitive digital experiences that delight users and drive business results.',
//   },
//   {
//     icon: PenTool,
//     title: 'Logo Design',
//     description: 'Distinctive logos that become the cornerstone of your brand recognition.',
//   },
//   {
//     icon: Monitor,
//     title: 'Web Design',
//     description: 'Stunning websites that combine aesthetics with seamless functionality.',
//   },
//   {
//     icon: Package,
//     title: 'Packaging',
//     description: 'Eye-catching packaging designs that stand out on shelves and online.',
//   },
//   {
//     icon: Camera,
//     title: 'Art Direction',
//     description: 'Strategic creative direction for campaigns that capture attention.',
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-24 bg-background">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="text-center mb-16">
//           <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">What We Do</p>
//           <h2 className="font-display text-5xl md:text-7xl text-foreground">OUR SERVICES</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={service.title}
//                 className="group p-8 bg-card border border-border rounded-lg hover-lift cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
//                   <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
//                 <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import { Palette, Layout, PenTool, Monitor, Package, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Complete visual identity systems that capture your brand\'s essence and resonate with your audience.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Intuitive digital experiences that delight users and drive business results.',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    description: 'Distinctive logos that become the cornerstone of your brand recognition.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Stunning websites that combine aesthetics with seamless functionality.',
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Eye-catching packaging designs that stand out on shelves and online.',
  },
  {
    icon: Camera,
    title: 'Art Direction',
    description: 'Strategic creative direction for campaigns that capture attention.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] mb-4 text-sm font-normal">
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground font-light">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 bg-card border border-border rounded-lg hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4 font-medium">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;