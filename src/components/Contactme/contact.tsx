import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

/** Strict-enough email: local@domain.tld */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const isValidEmail = (value: string) => {
  const email = value.trim();
  if (!email) return false;
  if (email.length > 254) return false;
  if (!EMAIL_REGEX.test(email)) return false;
  const [local, domain] = email.split('@');
  if (!local || !domain) return false;
  if (local.length > 64) return false;
  if (!domain.includes('.')) return false;
  const tld = domain.split('.').pop() || '';
  if (tld.length < 2) return false;
  return true;
};

type FieldErrors = { name?: string; email?: string; message?: string };

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorDetail, setErrorDetail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    if (submitStatus) setSubmitStatus(null);
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) errors.name = 'Name is required.';
    else if (name.length < 2) errors.name = 'Please enter your full name.';

    if (!email) errors.email = 'Email is required.';
    else if (!isValidEmail(email)) errors.email = 'Enter a valid email (e.g. name@gmail.com).';

    if (!message) errors.message = 'Message is required.';
    else if (message.length < 10) errors.message = 'Message should be at least 10 characters.';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorDetail('');

    if (!validate()) return;

    setIsSubmitting(true);

    const publicKey = import.meta.env.VITE_EMAILJS_USER_ID?.trim();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();

    if (!publicKey || !serviceID || !templateID) {
      setSubmitStatus('error');
      setErrorDetail('Email config missing. Restart dev server after editing .env.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      message: formData.message.trim(),
    };

    try {
      const sendPromise = emailjs.send(serviceID, templateID, templateParams, {
        publicKey,
      });

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out. Check EmailJS IDs and template.')), 15000);
      });

      await Promise.race([sendPromise, timeoutPromise]);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
      const msg =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : 'Failed to send. Check EmailJS service/template setup.';
      setErrorDetail(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: 'https://www.facebook.com/utsav.simpleguy', icon: <FaFacebook />, name: 'Facebook' },
    { href: 'https://github.com/UtsavNepal', icon: <FaGithub />, name: 'GitHub' },
    { href: 'https://www.instagram.com/mr.utsavnepal__/', icon: <FaInstagram />, name: 'Instagram' },
    { href: 'https://www.linkedin.com/in/utsav-npl-153409289/', icon: <FaLinkedin />, name: 'LinkedIn' },
  ];

  const fieldBase =
    'w-full px-4 py-3 bg-night border text-cream placeholder-cream-mute/50 focus:outline-none transition-colors';
  const fieldOk = `${fieldBase} border-night-line focus:border-gold/50`;
  const fieldBad = `${fieldBase} border-red-500/70 focus:border-red-400`;

  return (
    <section className="py-4 px-1 sm:px-2 bg-night">
      <div className="max-w-5xl mx-auto">
        <p className="section-kicker text-center">Say hello</p>
        <h2 className="font-display text-3xl sm:text-4xl text-cream text-center mb-8">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-4 border border-night-line p-5 sm:p-7 bg-night-raised">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-cream-mute mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className={fieldErrors.name ? fieldBad : fieldOk}
                placeholder="Your name"
              />
              {fieldErrors.name && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-cream-mute mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={fieldErrors.email ? fieldBad : fieldOk}
                placeholder="name@example.com"
              />
              {fieldErrors.email && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-cream-mute mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={fieldErrors.message ? fieldBad : fieldOk}
                placeholder="How can I help?"
              />
              {fieldErrors.message && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.message}</p>}
            </div>
            <div className="flex flex-col gap-2 pt-1">
              {submitStatus === 'success' && <p className="text-gold text-sm">Message sent.</p>}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">
                  Failed to send{errorDetail ? `: ${errorDetail}` : '.'}
                </p>
              )}
              <button type="submit" disabled={isSubmitting} className="btn-primary self-end disabled:opacity-50">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>

          <div className="border border-night-line p-5 sm:p-7 bg-night-raised flex flex-col">
            <h3 className="font-display text-2xl text-cream mb-6">Direct</h3>
            <div className="space-y-5 flex-1">
              <div className="flex gap-3">
                <IoMail className="text-gold mt-1" />
                <div>
                  <p className="text-xs text-cream-mute uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:utsavnepal021@gmail.com" className="text-cream hover:text-gold transition-colors">
                    utsavnepal021@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <IoCall className="text-gold mt-1" />
                <div>
                  <p className="text-xs text-cream-mute uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+9779821818139" className="text-cream hover:text-gold transition-colors">
                    +977 9821818139
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <IoLocationSharp className="text-gold mt-1" />
                <div>
                  <p className="text-xs text-cream-mute uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-cream">Hetauda, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-night-line">
              <div className="flex gap-3 mb-4">
                {socialLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.name}
                    className="text-cream-mute hover:text-gold transition-colors text-lg"
                  >
                    {l.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-cream-mute leading-relaxed">
                Open to freelance work and focused full-time roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
