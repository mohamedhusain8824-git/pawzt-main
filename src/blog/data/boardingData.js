/* ─────────────────────────────────────────────
   LUXURY BOARDING — DATA
───────────────────────────────────────────── */
export const lbdFeatures = [
  { icon:"🛏️", iconBg:"lfi-blue", title:"Private Suites", desc:"Spacious private rooms with a real bed, personalised bedding, toys, and an outdoor run — your pet has their own dedicated space." },
  { icon:"👁️", iconBg:"lfi-indigo", title:"24/7 Live Supervision", desc:"Staff are present around the clock — not just cameras. Trained attendants check on every pet throughout the night for complete safety." },
  { icon:"🎾", iconBg:"lfi-teal", title:"Daily Play & Exercise", desc:"Structured group play sessions, individual exercise time, and enrichment activities keep your pet mentally stimulated and active." },
  { icon:"🍽️", iconBg:"lfi-amber", title:"Personalised Feeding", desc:"Strict adherence to your pet's exact feeding schedule, diet, portion sizes, and treats. Special dietary requirements fully accommodated." },
  { icon:"🏥", iconBg:"lfi-sky", title:"On-Call Veterinarian", desc:"A licensed vet is on call at all times. Facilities have direct partnerships with 24-hour emergency vet clinics for any situation." },
  { icon:"📱", iconBg:"lfi-green", title:"Twice-Daily Updates", desc:"Morning and evening photo and video updates show your pet eating, playing, and resting — so you always know they are happy." },
];

export const lbdRooms = [
  { icon:"🏠", name:"Standard Room", desc:"Shared play area. Comfortable rest. Daily cleaning.", tags:["Group Play","Shared Rest","Cosy Bed"], price:"₹600", popular:false },
  { icon:"🛏️", name:"Premium Suite", desc:"Private room. Personal outdoor run. Extra enrichment.", tags:["Private Room","Personal Run","Extra Fees"], price:"₹950", popular:true },
  { icon:"👑", name:"VIP Penthouse Suite", desc:"Luxury suite. Spa access. Dedicated attendant.", tags:["VIP Care","Spa Access","Personal Attendant"], price:"₹2,400", popular:false },
];

export const lbdPackages = [
  { icon:"🌴", name:"Weekend Retreat", desc:"2–3 nights for long weekends and short getaways.", priceFrom:"₹1,200", unit:"/trip", features:["Standard or Premium room","Daily photo updates","Play sessions included"], popular:false },
  { icon:"✈️", name:"Holiday Package", desc:"7–14 nights for holidays — same facility, same staff, familiar care.", priceFrom:"₹5,600", unit:"/trip", features:["Twice-daily video updates","Vet health check on arrival","Grooming session included","Detailed stay report"], popular:true },
  { icon:"🏡", name:"Extended Stay", desc:"30+ nights — long-term placement with stability and routine.", priceFrom:"₹11,000", unit:"/month", features:["Dedicated care team","Weekly vet check-in","Monthly progress report","3 grooming sessions incl."], popular:false },
];

export const lbdReviews = [
  { stars:5, text:"We were nervous leaving Bruno for 10 days. The facility sent photos twice a day and a funny video of him playing with a new friend. He was actually sad to come home!", name:"Aditya K.", info:"Labrador · Pune", time:"1 week ago", color:"#3b82f6", initials:"A" },
  { stars:5, text:"My 10-year-old cat has health issues. The facility had a vet check on arrival and kept us updated daily. The personalised care was genuinely extraordinary — beyond all expectations.", name:"Chandini M.", info:"Senior Cat · Bangalore", time:"5 weeks ago", color:"#6366f1", initials:"C" },
  { stars:5, text:"The VIP Suite gave our Franchise a private room with a real bed, toys, and his own outdoor terrace. Better than some hotels I have stayed at. Genuinely five-star experience!", name:"Vijay N.", info:"Maine Coon · Mumbai", time:"3 weeks ago", color:"#0ea5e9", initials:"V" },
];
