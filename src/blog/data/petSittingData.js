/* ─────────────────────────────────────────────
   PET SITTING — DATA
───────────────────────────────────────────── */
export const sitters = [
  { name:"Priya Sharma", exp:"3 years, 4 mos", walks:"142", rating:"4.98", reviews:"98+", tags:["Dogs","Cats","Birds"], price:"₹299", avatarColor:"#00c49a", initials:"PS" },
  { name:"Ravi Menon", exp:"5 years, 1 mo", walks:"208", rating:"4.96", reviews:"120+", tags:["Dogs","Rabbits"], price:"₹249", avatarColor:"#8b5cf6", initials:"RM" },
  { name:"Ananya Nair", exp:"2 years, 8 mos", walks:"89", rating:"4.94", reviews:"72+", tags:["Cats","Birds","Fish"], price:"₹199", avatarColor:"#f472b6", initials:"AN" },
];

export const psFeatures = [
  { icon:"📱", title:"Live Photo Updates", desc:"Your sitter sends you direct photos and videos during every session so you can see your pet in real time." },
  { icon:"📋", title:"Daily Activity Reports", desc:"Detailed reports with feeding times, mood updates, and health notes sent straight to your phone." },
  { icon:"💊", title:"Medication Management", desc:"Trained sitters can administer medications on schedule and track health events in your profile." },
  { icon:"✅", title:"Fully Verified Sitters", desc:"Every sitter undergoes background checks, ID verification, and a training certification before joining." },
  { icon:"🆘", title:"Emergency Pet Protocol", desc:"If your pet needs urgent care, sitters have a clear emergency plan and direct vet contacts." },
  { icon:"🤝", title:"Meet & Greet Included", desc:"Free introductory meeting before booking so your pet can get comfortable with their sitter first." },
];

export const psPricingPlans = [
  { name:"Drop-in Visit", desc:"30-minute home visit", price:"₹299", unit:"per visit", features:["Photo update included","Feeding & walks","No stay planning"], popular:false },
  { name:"Overnight Stay", desc:"One full night stay", price:"₹799", unit:"per night", features:["Full-night monitoring","Hourly photo updates","Morning & evening walks","Medication support"], popular:true },
  { name:"Weekly Package", desc:"Best value for regular care", price:"₹4,999", unit:"per week", features:["7 nights guaranteed","Daily activity reports","Emergency vet access","Priority support"], popular:false },
];

export const psTestimonials = [
  { stars:5, text:"Priya was absolutely wonderful with our anxious rescue. She sent photos every hour and our dog seemed so relaxed when we returned.", name:"Sneha K.", info:"Mumbai · 2 Dogs", color:"#00c49a", initials:"SK" },
  { stars:5, text:"Got matched all within one day! Everything worked so well including the report updates, which I honestly didn't expect to be so detailed.", name:"Arjun P.", info:"Bangalore · 1 Cat", color:"#8b5cf6", initials:"AP" },
  { stars:5, text:"Pawzy's background checks gave me total peace of mind. Our sitter was professional, thorough and genuinely loved spending time with our pets.", name:"Sunil B.", info:"Chennai · 2 Cats", color:"#f59e0b", initials:"SB" },
];
