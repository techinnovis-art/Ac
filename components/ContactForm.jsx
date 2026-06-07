'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { site, serviceTypes } from '@/lib/site';

const field =
  'w-full rounded-xl border border-border/20 bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition-colors focus:border-electric/60 focus:ring-2 focus:ring-electric/20';
const labelCls = 'mb-1.5 block text-sm font-medium text-fg';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    serviceType: '',
    area: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens WhatsApp with the enquiry. Swap for an API POST if you add a backend.
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*New Enquiry — Service Hub*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Service:* ${form.serviceType || '-'}%0A` +
      `*Area:* ${form.area || '-'}%0A` +
      `*Message:* ${form.message || '-'}`;
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
        <h3 className="mt-5 font-display text-2xl font-bold">Message Ready!</h3>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          Your enquiry is open in WhatsApp — press send and we’ll reply shortly.
        </p>
        <button onClick={() => setSent(false)} className="btn-ghost mt-6">
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelCls}>Name *</label>
          <input id="c-name" name="name" required value={form.name} onChange={update} placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="c-phone" className={labelCls}>Phone Number *</label>
          <input id="c-phone" name="phone" required type="tel" value={form.phone} onChange={update} placeholder="03XX XXXXXXX" className={field} />
        </div>
        <div>
          <label htmlFor="c-service" className={labelCls}>Service Type</label>
          <select id="c-service" name="serviceType" value={form.serviceType} onChange={update} className={field}>
            <option value="">Select a service (optional)</option>
            {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="c-area" className={labelCls}>Area</label>
          <select id="c-area" name="area" value={form.area} onChange={update} className={field}>
            <option value="">Select your area (optional)</option>
            {site.areas.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className={labelCls}>Message *</label>
          <textarea id="c-message" name="message" required rows={4} value={form.message} onChange={update} placeholder="How can we help you?" className={field} />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        <Send className="h-5 w-5" />
        Send Message
      </button>
    </form>
  );
}
