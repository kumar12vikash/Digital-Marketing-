'use client';

import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email.';
    }
    if (!values.message.trim()) next.message = 'Please enter a message.';
    return next;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    // Simulated submit — wire this up to your own API route, Formspree or EmailJS later.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 900);
  }

  return (
    <section id="contact" className="px-6 py-24 bg-forest text-paper">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-sand mb-3">
          Get in touch
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          Have a project in mind? Let&apos;s talk.
        </h2>
        <p className="mt-4 text-paper/70 max-w-md">
          Tell us a little about what you&apos;re building and we&apos;ll get
          back to you within two business days.
        </p>

        {submitted ? (
          <div className="mt-10 p-6 rounded-2xl bg-amber/20 border border-amber/40">
            <p className="font-display text-xl font-semibold text-amber">
              Thanks — message sent!
            </p>
            <p className="mt-1 text-paper/80 text-sm">
              We&apos;ve received your message and will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-paper/10 border border-paper/20 placeholder:text-paper/40 focus:outline-none focus:border-amber transition-colors"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-amber">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-paper/10 border border-paper/20 placeholder:text-paper/40 focus:outline-none focus:border-amber transition-colors"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-amber">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-paper/10 border border-paper/20 placeholder:text-paper/40 focus:outline-none focus:border-amber transition-colors resize-none"
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-amber">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="justify-self-start px-6 py-3 rounded-full bg-amber text-ink font-medium hover:bg-paper transition-colors disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
