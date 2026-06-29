/* ─────────────────────────────────────────────
   PET WALKING — DATA
───────────────────────────────────────────── */
export const walkFeatures = [
  { icon:"📍", iconBg:"wfi-teal", title:"Real-Time GPS Map", desc:"Follow your dog's exact route on a live map in the Pawzy app. See every street, park, and pause updated every 10 seconds." },
  { icon:"📊", iconBg:"wfi-blue", title:"Fitness & Activity Stats", desc:"Distance covered, pace, stops made, and calories burned — all automatically logged and added to your pet's health record." },
  { icon:"🗺️", iconBg:"wfi-purple", title:"Walk Route History", desc:"Browse your dog's complete walk history with replay. Share route maps with your vet as part of their activity record." },
  { icon:"👥", iconBg:"wfi-yellow", title:"Solo & Group Walks", desc:"Choose private solo walks for focused enrichment, or group walks for socialisation — all carefully matched by temperament." },
  { icon:"📸", iconBg:"wfi-pink", title:"Mid-Walk Photo Check-Ins", desc:"Walkers send at least 3 photos per walk — start, midpoint, and end — so you always know your dog is happy." },
  { icon:"📝", iconBg:"wfi-orange", title:"Post-Walk Report", desc:"After every walk, receive a detailed report covering mood, energy level, sniff stops, hydration, and anything worth noting." },
];

export const walkers = [
  { name:"Vikram Iyer", role:"Professional Dog Walker · 5 years", rating:"4.88", reviews:"621 reviews", tags:["Large Dogs","Group Walks","Training Walks"], price:"₹249", avatarColor:"#00c49a", initials:"V" },
  { name:"Meera Joshi", role:"Canine Fitness Walker · 3 years", rating:"4.96", reviews:"284 reviews", tags:["Puppies","Solo Walks","Enrichment"], price:"₹199", avatarColor:"#8b5cf6", initials:"M" },
  { name:"Karthik Raj", role:"Senior Dog Specialist · 7 years", rating:"5.00", reviews:"199 reviews", tags:["Senior Dogs","Reactive Dogs","Park Routes"], price:"₹349", avatarColor:"#f59e0b", initials:"K" },
];

export const walkPackages = [
  { icon:"🐕", iconBg:"wpi-teal", name:"30-Min Walk", desc:"Quick energiser walk ideal for busy weekdays or senior dogs.", price:"₹199", unit:"/walk", features:["GPS tracked route","3 photo check-ins","Post-walk report"], popular:false },
  { icon:"🏃", iconBg:"wpi-purple", name:"60-Min Adventure Walk", desc:"Extended park route with full enrichment and socialisation.", price:"₹349", unit:"/walk", features:["Custom park routes","6 photo check-ins","Fitness stats report","Socialisation notes"], popular:true },
  { icon:"📅", iconBg:"wpi-blue", name:"Monthly Bundle", desc:"20 walks/month with the same trusted walker, discounted rate.", price:"₹3,499", unit:"/month", features:["Save ₹999 vs one-off","Dedicated walker","Monthly health report","Free extra walk/month"], popular:false },
];

export const walkTestimonials = [
  { stars:5, text:"Watched Max's entire walk live on the app. He visited three parks and came home completely tuckered out. Perfect for my busy work schedule.", name:"Kiran P.", info:"Golden Retriever · Pune", time:"3 days ago", color:"#00c49a", initials:"K" },
  { stars:5, text:"Coco is reactive but Vikram handled her beautifully. Fitness report showed 3.2km walked. She is so much calmer in the evenings now!", name:"Nisha V.", info:"Border Collie · Hyderabad", time:"1 week ago", color:"#8b5cf6", initials:"N" },
  { stars:5, text:"Meera sends the most wonderful photos mid-walk. My 13-year-old lab gets a gentle pace and she always notes how he is feeling. Such a caring walker.", name:"Rohit S.", info:"Senior Lab · Delhi", time:"2 weeks ago", color:"#f59e0b", initials:"R" },
];
