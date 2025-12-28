// // Add these imports at the top
// import portfolio1 from '../assets/portfolio-1.jpg';
// import portfolio2 from '../assets/portfolio-2.jpg';
// import portfolio3 from '../assets/portfolio-3.jpg';
// import portfolio4 from '../assets/portfolio-4.jpg';

// export const projects = [
//   {
//     id: 'geometric-branding',
//     image: portfolio1,
//     title: 'Geometric Branding',
//     category: 'Brand Identity',
//     span: 'md:col-span-2',
//     description: '...',
//     client: 'TechFlow Inc.',
//     year: '2024',
//     services: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Stationery Design'],
//     gallery: [portfolio1, portfolio2], // Gallery images for detail page
//   },
//   {
//     id: 'typography-poster',
//     image: portfolio2,
//     // ... rest of config
//     gallery: [portfolio2, portfolio3],
//   },
//   {
//     id: 'corporate-identity',
//     image: portfolio3,
//     // ... rest of config
//     gallery: [portfolio3, portfolio1],
//   },
//   {
//     id: 'product-packaging',
//     image: portfolio4,
//     // ... rest of config
//     gallery: [portfolio4, portfolio2],
//   },
// ];





// Import JPG images from assets folder
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio-4.jpg';

export const projects = [
  {
    id: 'geometric-branding',
    image: portfolio1,
    title: 'Geometric Branding',
    category: 'Brand Identity',
    span: 'md:col-span-2',
    description: 'A bold geometric brand identity system designed for a modern tech startup. The project encompasses logo design, color palette development, typography selection, and comprehensive brand guidelines that establish a distinctive visual language.',
    client: 'TechFlow Inc.',
    year: '2024',
    services: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Stationery Design'],
    gallery: [portfolio1, portfolio2],
  },
  {
    id: 'typography-poster',
    image: portfolio2,
    title: 'Typography Poster',
    category: 'Print Design',
    span: '',
    description: 'An experimental typography poster series exploring the intersection of form and meaning. Each poster uses custom letterforms and abstract compositions to create visually striking pieces that challenge conventional design boundaries.',
    client: 'Art Basel Exhibition',
    year: '2024',
    services: ['Poster Design', 'Typography', 'Art Direction'],
    gallery: [portfolio2, portfolio3],
  },
  {
    id: 'corporate-identity',
    image: portfolio3,
    title: 'Corporate Identity',
    category: 'Brand Identity',
    span: '',
    description: 'Complete corporate identity redesign for an established financial services firm. The project involved modernizing their visual presence while maintaining the trust and professionalism their clients expect.',
    client: 'Sterling Financial Group',
    year: '2023',
    services: ['Brand Strategy', 'Logo Redesign', 'Marketing Collateral', 'Digital Assets'],
    gallery: [portfolio3, portfolio1],
  },
  {
    id: 'product-packaging',
    image: portfolio4,
    title: 'Product Packaging',
    category: 'Packaging',
    span: 'md:col-span-2',
    description: 'Sustainable packaging design for an organic skincare line. The design emphasizes eco-friendly materials and minimalist aesthetics that reflect the brand\'s commitment to natural beauty and environmental responsibility.',
    client: 'Pure Botanics',
    year: '2024',
    services: ['Packaging Design', 'Label Design', 'Material Selection', 'Production Management'],
    gallery: [portfolio4, portfolio2],
  },
];


