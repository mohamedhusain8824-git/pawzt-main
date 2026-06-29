/* ─────────────────────────────────────────────
   GROOMING — DATA
───────────────────────────────────────────── */
export const groomingFeatures = [
  { icon:"🛁", iconBg:"gfi-pink", title:"Spa Bath & Blow Dry", desc:"Deep-cleanse bath using pH-balanced, allergen-free shampoos and conditioners, followed by professional blow-dry and brushing." },
  { icon:"✂️", iconBg:"gfi-rose", title:"Breed-Specific Styling", desc:"Haircuts and styling tailored to breed standards — from golden retriever trims to poodle teddy bear cuts and Shih Tzu top-knots." },
  { icon:"💅", iconBg:"gfi-purple", title:"Nail Trimming & Filing", desc:"Professional nail clipping and filing to prevent painful overgrowth. Groomers use pet-safe styptic powder for complete safety." },
  { icon:"👂", iconBg:"gfi-yellow", title:"Ear Cleaning", desc:"Gentle ear cleaning to remove wax buildup and debris, reducing the risk of infections. Includes a visual health check of the ear canal." },
  { icon:"🦷", iconBg:"gfi-teal", title:"Teeth Brushing", desc:"Pet-safe enzymatic toothpaste and gentle brushing to keep teeth clean, breath fresh, and gums healthy between vet checkups." },
  { icon:"📸", iconBg:"gfi-orange", title:"Before & After Photos", desc:"Every session includes professional before and after photos, automatically added to your pet's grooming history in the app." },
];

export const groomers = [
  { name:"Pooja Desai", role:"Certified Master Groomer · 6 years", rating:"4.91", reviews:"504 reviews", tags:["Poodles","Doodles","Show Styling"], price:"₹799", avatarColor:"#ec4899", initials:"P" },
  { name:"Tara Singh", role:"Mobile Groomer · 3 years", rating:"4.88", reviews:"373 reviews", tags:["Anxious Pets","Large Breeds"], price:"₹699", avatarColor:"#f472b6", initials:"T" },
  { name:"Akash Reddy", role:"Cat Grooming Specialist · 4 years", rating:"4.95", reviews:"231 reviews", tags:["Cats","Long Hair","De-shedding"], price:"₹599", avatarColor:"#a78bfa", initials:"A" },
];

export const groomingPackages = [
  { icon:"🛁", iconBg:"gpi-pink", name:"Basic Groom", desc:"Bath, blow dry, brush out, and nail trim — the essential refresh.", price:"₹499", unit:"/session", features:["Bath & blow dry","Nail trim","Before/after photo"], popular:false },
  { icon:"✨", iconBg:"gpi-rose", name:"Signature Groom", desc:"Full spa treatment with breed cut, ear cleaning, teeth brushing, and perfume finish.", price:"₹899", unit:"/session", features:["Everything in Basic","Breed-specific haircut","Ear cleaning","Teeth brushing"], popular:true },
  { icon:"👑", iconBg:"gpi-purple", name:"Royal Treatment", desc:"Luxury spa with deep conditioning, paw massage, aromatherapy, and bandana.", price:"₹1,499", unit:"/session", features:["Everything in Signature","Deep conditioning mask","Paw bath massage","Aromatherapy & bandana"], popular:false },
];

export const groomingTestimonials = [
  { stars:5, text:"The mobile van came to our building and Luna was groomed without any travel stress. Pooja's poodle cut was absolutely show-quality. The before/after photos are stunning!", name:"Tanya B.", info:"Toy Poodle · Chennai", time:"3 days ago", color:"#ec4899", initials:"T" },
  { stars:5, text:"My poodle gets anxious at traditional salons. Tara's mobile van transformed his experience — calm, unhurried, and perfect results. Teddy bear cut was exactly right.", name:"Rahul D.", info:"Toy Poodle · Bangalore", time:"5 days ago", color:"#f472b6", initials:"R" },
  { stars:5, text:"Akash is the only groomer who can handle my Persian without stressing her. His cat-specialised techniques are unlike anything I have seen. She purrs during sessions now!", name:"Gayatri N.", info:"Persian Cat · Hyderabad", time:"1 week ago", color:"#a78bfa", initials:"G" },
];
