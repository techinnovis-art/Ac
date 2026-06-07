'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { site, serviceTypes } from '@/lib/site';

const field =
  'w-full rounded-xl border border-border/20 bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition-colors focus:border-electric/60 focus:ring-2 focus:ring-electric/20';
const labelCls = 'mb-1.5 block text-sm font-medium text-fg';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    serviceType: '',
    brand: '',
    area: '',
    address: '',
    landmark: '',
    date: '',
    issue: '',
  });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ---------------------------------------------------------------------------
  // SUBMIT HANDLER
  // Right now this opens WhatsApp with a pre-filled booking message — no backend
  // needed. To instead email/store bookings, POST `form` to your API route here
  // (e.g. /api/booking) and keep or remove the WhatsApp open as you prefer.
  // ---------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*New Booking Request — Service Hub*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Service:* ${form.serviceType}%0A` +
      `*Brand:* ${form.brand || '-'}%0A` +
      `*Area:* ${form.area}%0A` +
      `*Exact Address:* ${form.address}%0A` +
      `*Nearest Landmark:* ${form.landmark || '-'}%0A` +
      `*Preferred Date:* ${form.date || '-'}%0A` +
      `*Issue:* ${form.issue || '-'}`;
    window.open(`https://wa.me/${site.whatsappNumber}?text=${msg}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 text-center"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Booking Sent!</h3>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          Your details are ready in WhatsApp. Just hit send and {site.contactPerson} will
          confirm your slot shortly.
        </p>
        <button onClick={() => setSent(false)} className="btn-ghost mt-6">
          Make Another Booking
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="b-name" className={labelCls}>Full Name *</label>
          <input id="b-name" name="name" required value={form.name} onChange={update} placeholder="e.g. Ali Ahmed" className={field} />
        </div>
        <div>
          <label htmlFor="b-phone" className={labelCls}>Phone Number *</label>
          <input id="b-phone" name="phone" required type="tel" value={form.phone} onChange={update} placeholder="03XX XXXXXXX" className={field} />
        </div>
        <div>
          <label htmlFor="b-service" className={labelCls}>Service Type *</label>
          <select id="b-service" name="serviceType" required value={form.serviceType} onChange={update} className={field}>
            <option value="" disabled>Select a service</option>
            {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="b-brand" className={labelCls}>AC / Geyser Brand</label>
          <input id="b-brand" name="brand" value={form.brand} onChange={update} placeholder="e.g. Dawlance, Gree, Haier" className={field} />
        </div>
        <div>
          <label htmlFor="b-area" className={labelCls}>Area in Lahore *</label>
          <select id="b-area" name="area" required value={form.area} onChange={update} className={field}>
            <option value="" disabled>Select your area</option>
            {site.areas.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
  <label htmlFor="b-address" className={labelCls}>Exact Address / Location *</label>
  <input
    id="b-address"
    name="address"
    required
    value={form.address}
    onChange={update}
    placeholder="House, street, block, town"
    className={field}
  />
</div>

<div>
  <label htmlFor="b-landmark" className={labelCls}>Nearest Landmark</label>
  <input
    id="b-landmark"
    name="landmark"
    value={form.landmark}
    onChange={update}
    placeholder="e.g. Near Emporium Mall"
    className={field}
  />
</div>
        <div>
          <label htmlFor="b-date" className={labelCls}>Preferred Date</label>
          <input id="b-date" name="date" type="date" value={form.date} onChange={update} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="b-issue" className={labelCls}>Issue Description</label>
          <textarea id="b-issue" name="issue" rows={4} value={form.issue} onChange={update} placeholder="Briefly describe the problem (e.g. AC not cooling, water leaking, geyser won’t ignite)…" className={field} />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        <CalendarCheck className="h-5 w-5" />
        Submit Booking
        <MessageCircle className="h-4 w-4 opacity-80" />
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Submitting opens WhatsApp with your details pre-filled. You can also share live location on WhatsApp.
      </p>
    </form>
  );
}
