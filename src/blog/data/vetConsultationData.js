/* ─────────────────────────────────────────────
   VET CONSULTATION — DATA
───────────────────────────────────────────── */
export const vcFeatures = [
  { icon:"📹", iconBg:"fib-blue", title:"Video Consultations", desc:"HD video calls with licensed vets — same quality as a clinic visit from the comfort of your home. No travel, no waiting rooms." },
  { icon:"📋", iconBg:"fib-teal", title:"Digital Health Records", desc:"Vaccination history, diagnosis notes, prescriptions, and lab results — all stored securely and shareable with any vet instantly." },
  { icon:"💊", iconBg:"fib-amber", title:"E-Prescriptions", desc:"Vets can issue digital prescriptions sent directly to partner pharmacies for same-day delivery. No paper, no fuss." },
  { icon:"🔔", iconBg:"fib-purple", title:"Vaccine Reminders", desc:"Automatic reminders for all upcoming vaccinations, deworming schedules, and annual health screenings — never miss a shot." },
  { icon:"🚨", iconBg:"fib-red", title:"Emergency Triage", desc:"24/7 emergency vet chat for urgent questions. Our triage team assesses severity and directs you to the nearest emergency clinic." },
  { icon:"🔗", iconBg:"fib-green", title:"Specialist Referrals", desc:"If your pet needs specialist care — oncology, cardiology, neurology — we connect you directly with the right expert, fast." },
];

export const vets = [
  { name:"Dr. Kavitha Nair", degree:"BVSc, MVSc Internal Medicine · 10 yrs", rating:"4.99", reviews:"1,247", price:"₹599", avatarColor:"#d97706", initials:"N", tags:["Internal Medicine","Dermatology","Nutrition"] },
  { name:"Dr. Rajesh Kumar", degree:"BVSc, MVSc Surgery · 8 yrs", rating:"4.97", reviews:"876", price:"₹749", avatarColor:"#8b5cf6", initials:"R", tags:["Orthopaedics","Surgery","Rehabilitation"] },
  { name:"Dr. Sunita Verma", degree:"PhD Oncology · 15 yrs", rating:"5.00", reviews:"500", price:"₹899", avatarColor:"#f59e0b", initials:"S", tags:["Oncology","Geriatric Care","Cardiology"] },
];

export const vcPlans = [
  { icon:"💬", iconBg:"pib-amber", name:"Quick Chat", desc:"15-min text consultation for minor concerns and quick questions.", price:"₹399", unit:"/session", features:["Certified vet response","Written summary","Follow-up message"], popular:false },
  { icon:"📹", iconBg:"pib-teal", name:"Video Consultation", desc:"30-min HD video call with diagnosis, treatment plan and records update.", price:"₹699", unit:"/session", features:["Full diagnosis & plan","E-prescription if needed","Health record update","48hr follow-up"], popular:true },
  { icon:"📅", iconBg:"pib-blue", name:"Annual Health Plan", desc:"12 consultations + vaccine management + priority access.", price:"₹5,999", unit:"/year", features:["12 video consultations","Vaccine management","Priority emergency access","Nutrition counselling"], popular:false },
];

export const vcTestimonials = [
  { stars:5, text:"Dr. Nair diagnosed Leo's ear infection within 8 minutes on video. She explained everything clearly, issued a prescription, and it was at the pharmacy in 3 hours. Outstanding.", name:"Lakshmi T.", info:"Beagle · Chennai", time:"4 days ago", color:"#d97706", initials:"L" },
  { stars:5, text:"The annual health plan saved me enormous time and money. Dr. Kumar caught my dog's joint issue early — before it became serious. Worth every rupee.", name:"Sanjay M.", info:"German Shepherd · Bangalore", time:"1 week ago", color:"#8b5cf6", initials:"S" },
  { stars:5, text:"All of Whiskers' records are in one place. When I changed cities, the new vet had her entire history in seconds. The digital health record feature is simply brilliant.", name:"Preethi K.", info:"Persian Cat · Mumbai", time:"2 weeks ago", color:"#f59e0b", initials:"P" },
];
