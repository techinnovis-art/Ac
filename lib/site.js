// ============================================================================
//  SERVICE HUB — SITE CONFIGURATION
//  ★★★  EDIT EVERYTHING HERE  ★★★
//  This is the ONE file you change to update contact details, prices, and links.
//  Nothing below requires touching the components.
// ============================================================================

export const site = {
  name: 'Service Hub',
  tagline: 'AC Repair & Geyser Services in Lahore',
  contactPerson: 'Salman Naveed',
  city: 'Lahore',
  region: 'Punjab',
  country: 'Pakistan',

  // ---------------------------------------------------------------------------
  // ☎️  CONTACT DETAILS  — replace the placeholder numbers with the real ones
  // ---------------------------------------------------------------------------
  // Phone shown to users (pretty format):
  phoneDisplay: '+92 3456890528',
  // Phone used in tel: links (digits + country code, no spaces):
  phoneTel: '+923456890528',
  // WhatsApp number in international format WITHOUT + or spaces:
  whatsappNumber: '923456890528',
  // Default pre-filled WhatsApp message:
  whatsappMessage:
    "Hello Service Hub! I'd like to book an AC/Geyser service in Lahore.",
  // Contact email (optional — replace or leave as is):
  email: 'alihaider9590572@gmail.com',

  // Production URL (used for SEO metadata / sitemap). Update after Vercel deploy.
  url: 'https://servicehub.vercel.app',

  // Service area note:
  areaNote: 'Serving all areas of Lahore, Punjab',

  // ---------------------------------------------------------------------------
  // 🕒  BUSINESS HOURS
  // ---------------------------------------------------------------------------
  hours: 'Mon – Sun: 8:00 AM – 11:00 PM',

  // Areas of Lahore you cover (used in FAQ + booking dropdown).
  areas: [
    'DHA',
    'Gulberg',
    'Johar Town',
    'Model Town',
    'Bahria Town',
    'Wapda Town',
    'Cantt',
    'Garden Town',
    'Faisal Town',
    'Iqbal Town',
    'Township',
    'Valencia',
    'Askari',
    'Other Areas',
  ],
};

// Helper: builds the WhatsApp click-to-chat link.
export function whatsappLink(message) {
  const text = encodeURIComponent(message || site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

// Helper: builds the tel: link.
export const telLink = `tel:${site.phoneTel}`;

// ---------------------------------------------------------------------------
// 💰  GAS TYPES & ESTIMATED RATES
//  Update the "from" numbers anytime. Prices are intentionally "Starting From".
// ---------------------------------------------------------------------------
export const gasPricing = [
  { type: 'R32 Gas', from: '7,500', unit: 'PKR', note: 'Modern, efficient, eco-friendly' },
  { type: 'R410A Gas', from: '8,500', unit: 'PKR', note: 'Common in inverter ACs' },
  { type: 'R22 Gas', from: '6,000', unit: 'PKR', note: 'For older AC units' },
  { type: 'American Gas', from: '9,000', unit: 'PKR', note: 'Premium imported gas' },
  { type: 'Full Gas Filling', from: '7,000', unit: 'PKR', note: 'Complete recharge' },
  { type: 'Top-up Gas Filling', from: '3,500', unit: 'PKR', note: 'Partial refill' },
  { type: 'Leakage Checking', from: '1,500', unit: 'PKR', note: 'Pressure & leak test' },
];

// ---------------------------------------------------------------------------
// 🛠️  SERVICES  (icon names map to lucide-react icons in components)
// ---------------------------------------------------------------------------
export const services = [
  { title: 'AC Repair', desc: 'Diagnosis and repair for all AC faults.', icon: 'Wrench', group: 'AC' },
  { title: 'AC Gas Filling', desc: 'R32, R410A, R22 & American gas refilling.', icon: 'Gauge', group: 'AC' },
  { title: 'AC Maintenance', desc: 'Deep cleaning, servicing & tune-ups.', icon: 'Sparkles', group: 'AC' },
  { title: 'AC Installation', desc: 'Professional split & window AC fitting.', icon: 'Hammer', group: 'AC' },
  { title: 'AC Shifting', desc: 'Move your AC safely to a new location.', icon: 'Truck', group: 'AC' },
  { title: 'Indoor Unit Issues', desc: 'Fan, blower, sensor & drainage faults.', icon: 'AirVent', group: 'AC' },
  { title: 'Outdoor Unit Issues', desc: 'Condenser, fan motor & coil problems.', icon: 'Fan', group: 'AC' },
  { title: 'AC Kit / PCB Issues', desc: 'Control board & electronic kit repair.', icon: 'CircuitBoard', group: 'AC' },
  { title: 'Cooling Problems', desc: 'AC not cooling? We find the root cause.', icon: 'Snowflake', group: 'AC' },
  { title: 'Compressor Issues', desc: 'Compressor testing, repair & replacement.', icon: 'Cog', group: 'AC' },
  { title: 'Water Leakage', desc: 'Fix dripping, clogged drains & leaks.', icon: 'Droplets', group: 'AC' },
  { title: 'Geyser Repair', desc: 'Gas & electric geyser fault repair.', icon: 'Flame', group: 'Geyser' },
  { title: 'Geyser Installation', desc: 'Safe installation & fitting service.', icon: 'Hammer', group: 'Geyser' },
  { title: 'Gas Geyser Service', desc: 'Ignition, burner & valve servicing.', icon: 'Flame', group: 'Geyser' },
  { title: 'Electric Geyser Service', desc: 'Element, thermostat & wiring service.', icon: 'Zap', group: 'Geyser' },
];

// ---------------------------------------------------------------------------
// ⭐  WHY CHOOSE US
// ---------------------------------------------------------------------------
export const whyChooseUs = [
  { title: 'Experienced Technicians', desc: 'Skilled, vetted professionals.', icon: 'BadgeCheck' },
  { title: 'Same-Day Service', desc: 'Fast response across Lahore.', icon: 'Clock' },
  { title: 'Transparent Pricing', desc: 'No hidden charges, ever.', icon: 'ReceiptText' },
  { title: 'Trusted in Lahore', desc: 'Hundreds of happy customers.', icon: 'Heart' },
  { title: 'All AC Brands Supported', desc: 'Every major brand covered.', icon: 'Layers' },
  { title: 'Professional Tools', desc: 'Proper testing & equipment.', icon: 'Wrench' },
  { title: 'Warranty Available', desc: 'On selected services.', icon: 'ShieldCheck' },
  { title: 'Fast on WhatsApp', desc: 'Quick replies, easy booking.', icon: 'MessageCircle' },
];

// ---------------------------------------------------------------------------
// 🏷️  SUPPORTED BRANDS
// ---------------------------------------------------------------------------
export const brands = [
  'Dawlance', 'Haier', 'Gree', 'Orient', 'Kenwood', 'TCL',
  'PEL', 'Samsung', 'LG', 'Mitsubishi', 'Panasonic', 'Changhong Ruba',
];

// ---------------------------------------------------------------------------
// 🔁  SERVICE PROCESS
// ---------------------------------------------------------------------------
export const processSteps = [
  { step: 1, title: 'Contact Us', desc: 'Reach out via call, WhatsApp, or the booking form.' },
  { step: 2, title: 'Share Your Issue', desc: 'Tell us about your AC or geyser problem.' },
  { step: 3, title: 'Technician Visits', desc: 'Our expert arrives at your location in Lahore.' },
  { step: 4, title: 'Inspection & Quote', desc: 'On-site diagnosis and confirmed pricing.' },
  { step: 5, title: 'We Fix It', desc: 'Repair, maintenance, or installation work done.' },
  { step: 6, title: 'Final Testing', desc: 'Quality check and your satisfaction guaranteed.' },
];

// ---------------------------------------------------------------------------
// 💬  CUSTOMER REVIEWS
// ---------------------------------------------------------------------------
export const reviews = [
  { name: 'Ahmed Raza', area: 'DHA Phase 5', rating: 5, text: 'My AC stopped cooling in peak summer. Salman’s team came the same day, refilled the gas, and it’s working perfectly. Very professional.' },
  { name: 'Fatima Khan', area: 'Johar Town', rating: 5, text: 'Booked through WhatsApp and got a quick reply. The technician fixed our outdoor unit fault at a fair price. Highly recommended.' },
  { name: 'Usman Ali', area: 'Gulberg', rating: 5, text: 'Got our gas geyser serviced before winter. Clean work, on time, and explained everything clearly. Will use again.' },
  { name: 'Sara Iqbal', area: 'Bahria Town', rating: 5, text: 'Shifted our AC to a new house without any damage. Careful, neat, and reasonably priced. Great experience overall.' },
  { name: 'Bilal Ahmed', area: 'Model Town', rating: 5, text: 'Water was leaking from our split AC. They identified the blocked drain quickly and sorted it out. Transparent pricing.' },
  { name: 'Hina Malik', area: 'Wapda Town', rating: 5, text: 'Honest and reliable service. The PCB kit had an issue and they repaired it instead of forcing a replacement. Trustworthy.' },
];

// ---------------------------------------------------------------------------
// ❓  FAQ
// ---------------------------------------------------------------------------
export const faqs = [
  { q: 'My AC is not cooling. What could be the problem?', a: 'Common causes include low refrigerant gas, a dirty filter or coil, a faulty compressor, or a thermostat/PCB issue. Our technician diagnoses the exact cause on-site before any work begins.' },
  { q: 'How much does AC gas filling cost?', a: 'It depends on your AC size, the gas type (R32, R410A, R22, American), and whether it’s a full refill or top-up. Our rates start from the prices listed on the home page, and the final cost is confirmed after inspection.' },
  { q: 'Which AC gas is best for my unit?', a: 'R32 and R410A are modern, efficient, and eco-friendly — ideal for newer and inverter ACs. R22 is used in older units. We recommend the right gas based on your AC model and condition.' },
  { q: 'Why is water leaking from my AC?', a: 'Usually a clogged or misaligned drain pipe, a dirty filter, or low gas causing ice formation that melts. We clear the blockage and fix the root cause, not just the symptom.' },
  { q: 'Can you shift my AC to another house or room?', a: 'Yes. We safely uninstall, transport, and reinstall your AC, including gas top-up and testing if needed. We handle both split and window units.' },
  { q: 'What’s the difference between indoor and outdoor unit problems?', a: 'Indoor unit issues involve the blower, sensors, and drainage. Outdoor unit issues involve the compressor, condenser, and fan motor. We repair both.' },
  { q: 'My gas geyser won’t ignite. Can you fix it?', a: 'Yes. Ignition failures are often caused by a faulty igniter, a clogged burner, a thermocouple problem, or low gas pressure. We service all of these.' },
  { q: 'Do you offer same-day service?', a: 'Yes, same-day service is available across Lahore depending on technician availability and your location. Contact us early in the day for the fastest slot.' },
  { q: 'Do your services come with a warranty?', a: 'Selected services and parts come with a warranty. Your technician will confirm the warranty details for your specific job before work begins.' },
  { q: 'Which areas of Lahore do you cover?', a: 'We serve all major areas of Lahore including DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt, and more. If your area isn’t listed, just ask.' },
];

// Service types for forms (built from services list + a couple of extras).
export const serviceTypes = [
  'AC Repair', 'AC Gas Filling', 'AC Maintenance', 'AC Installation',
  'AC Shifting', 'Indoor Unit Issue', 'Outdoor Unit Issue', 'AC Kit / PCB Issue',
  'Cooling Problem', 'Compressor Issue', 'Water Leakage',
  'Geyser Repair', 'Geyser Installation', 'Gas Geyser Service', 'Electric Geyser Service',
  'Other / Not Sure',
];
