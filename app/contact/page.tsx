"use client";
import RequestDemoButton from '@/components/RequestDemoButton';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';


const NAVY = '#1E3A8A';
const BLUE = '#2563EB';
const LIGHT_BLUE = '#EFF6FF';
const WHITE = '#FFFFFF';
const DARK = '#0F172A';
const GRAY = '#64748B';

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Features',   href: '/features' },
  { label: 'Modules',    href: '/modules' },
  { label: 'Industries', href: '/industries' },
  { label: 'Plans',      href: '/pricing' },
  { label: 'FAQ',        href: '/faq' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: ['iTeq Solution Center', 'Doha, Qatar', 'Building 12, Street 45, Zone C6'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+974 4444 5555 (Qatar Office)', '+94 776 206 033 (Sri Lanka Office)'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@iteqsolutioncenter.com', 'support@iteqsolutioncenter.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Sunday – Thursday: 8:00 AM – 6:00 PM', 'Friday – Saturday: Closed'],
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid #E2E8F0',
  borderRadius: '8px',
  fontSize: '14px',
  color: DARK,
  backgroundColor: WHITE,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: DARK,
  marginBottom: '6px',
};

function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: WHITE, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: '64px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: WHITE, borderRadius: '50%', padding: '2px', display: 'inline-flex', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <img src="/logo.png" alt="iTeq Solution Center" style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>iTeq</span>
            <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>Solution</span>
            <span style={{ fontSize: '11px', fontWeight: '600', color: BLUE, letterSpacing: '1px' }}>— Center —</span>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link key={idx} href={link.href} style={{ color: isActive ? BLUE : DARK, fontWeight: isActive ? '700' : '500', textDecoration: 'none', fontSize: '14px', cursor: 'pointer', borderBottom: isActive ? `2px solid ${BLUE}` : '2px solid transparent', paddingBottom: '2px' }}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <RequestDemoButton />
          </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ lineHeight: 0, backgroundColor: WHITE }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,20 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill={NAVY} />
        </svg>
      </div>
      <div style={{ backgroundColor: NAVY, color: WHITE, padding: '40px 24px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px' }}>
          <div>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ backgroundColor: WHITE, borderRadius: '50%', padding: '2px', display: 'inline-flex', flexShrink: 0 }}>
                <img src="/logo.png" alt="iTeq" style={{ height: '44px', width: '44px', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <span style={{ fontSize: '18px', fontWeight: '800', color: WHITE }}>iManage360</span>
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Innovate. Integrate. Elevate.</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginTop: '8px' }}>iManage360 is an all-in-one, fully customizable ERP solution developed by iTeq Solution Center — built to serve businesses across any country and industry.</div>
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Quick Links</div>
            {[
              { label: 'Home', href: '/' },
              { label: 'Features', href: '/features' },
              { label: 'Modules', href: '/modules' },
              { label: 'Industries', href: '/industries' },
              { label: 'Plans', href: '/pricing' },
              { label: 'FAQ', href: '/faq' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>{link.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Contact Info</div>
            <a href="https://iteqsolutioncenter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>Website: iteqsolutioncenter.com</a>
            <a href="https://wa.me/97450761751" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</a>
            <a href="https://wa.me/94776206033" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>🇱🇰 Sri Lanka (WhatsApp): +94 776 206 033</a>
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Follow Us</div>
            {/* FLAG: Real social URLs not yet provided — placeholder links below */}
            <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>Facebook</a>
          </div>
        </div>
        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.15)', padding: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
          © 2026 iTeq Solution Center. All rights reserved.
        </div>
      </div>
    </div>
  );
}

const MODULE_LABELS: Record<string, string> = {
  'sales-crm':              'Sales & CRM',
  'procurement':            'Procurement',
  'inventory-management':   'Inventory Management',
  'accounts-finance':       'Accounts & Finance',
  'hr-payroll':             'HR & Payroll',
  'invoicing':              'Invoicing',
  'fixed-assets':           'Fixed Assets',
  'fleet-management':       'Fleet Management',
  'reports-analytics':      'Reports & Analytics',
  'system-settings':        'System Settings',
};

export default function ContactPage() {
  const searchParams = useSearchParams();
  const moduleParam = searchParams.get('module') ?? '';
  const moduleLabel = MODULE_LABELS[moduleParam] ?? '';

  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', subject: '',
    message: moduleLabel ? `I'd like to learn more about the ${moduleLabel} module.` : '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync prefill if user arrives via direct URL with module param
  useEffect(() => {
    if (moduleLabel) {
      setForm(prev => ({
        ...prev,
        message: prev.message || `I'd like to learn more about the ${moduleLabel} module.`,
      }));
    }
  }, [moduleLabel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: WHITE }}>
      <Navbar />

      {/* ─── SECTION 1: HERO ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: WHITE, color: BLUE, borderRadius: '999px', fontSize: '14px', fontWeight: '600', marginBottom: '20px', boxShadow: '0 2px 8px rgba(37,99,235,0.15)' }}>
            Contact
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: 0 }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* ─── SECTION 2: FORM + INFO ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left: Form */}
          <div style={{ flex: '1 1 520px', backgroundColor: WHITE, borderRadius: '20px', padding: '48px 40px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: DARK, margin: '0 0 24px' }}>Send Us a Message</h2>

            {/* Module pre-fill banner */}
            {moduleLabel && (
              <div style={{
                backgroundColor: LIGHT_BLUE, border: `1.5px solid ${BLUE}`,
                borderRadius: '10px', padding: '12px 16px',
                marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ fontSize: '18px' }}>📦</span>
                <span style={{ fontSize: '14px', color: BLUE, fontWeight: '600' }}>
                  Inquiry about: {moduleLabel}
                </span>
              </div>
            )}

            {submitted ? (
              <div style={{ backgroundColor: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#15803D', marginBottom: '8px' }}>Message Sent!</div>
                <p style={{ fontSize: '15px', color: '#16A34A', margin: 0, lineHeight: '1.6' }}>
                  Thank you! Your message has been sent. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Row: Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input name="name" type="text" placeholder="Enter your full name" value={form.name} onChange={handleChange} required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required style={inputStyle} />
                  </div>
                </div>
                {/* Row: Company + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input name="company" type="text" placeholder="Your company name" value={form.company} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+974 XXXX XXXX" value={form.phone} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label style={labelStyle}>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required style={{ ...inputStyle, backgroundColor: WHITE, cursor: 'pointer' }}>
                    <option value="" disabled>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Request a Demo</option>
                    <option>Pricing Information</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} />
                </div>
                {/* Submit */}
                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: BLUE, color: WHITE, border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.30)' }}>
                  Send Message →
                </button>
                <div style={{ fontSize: '13px', color: GRAY, textAlign: 'center', marginTop: '-8px' }}>
                  We typically respond within 1 business day.
                </div>
              </form>
            )}
          </div>

          {/* Right: Info cards */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} style={{ backgroundColor: WHITE, borderRadius: '16px', padding: '28px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: LIGHT_BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={BLUE} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>{info.title}</div>
                    {info.lines.map((line, j) => (
                      <div key={j} style={{ fontSize: '14px', color: GRAY, lineHeight: '1.7' }}>{line}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ─── SECTION 3: MAP ─── */}
      <div style={{ backgroundColor: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#F1F5F9', borderRadius: '20px', height: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', border: '1px solid #E2E8F0', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #E2E8F0 40px, #E2E8F0 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #E2E8F0 40px, #E2E8F0 41px)' }}>
            <div style={{ fontSize: '48px' }}>📍</div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: DARK }}>Located in Doha, Qatar</div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ padding: '12px 28px', backgroundColor: BLUE, color: WHITE, borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: CTA BANNER ─── */}
      <div style={{ backgroundColor: NAVY, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: WHITE, margin: '0 0 16px' }}>
            Ready to See iManage360 in Action?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px' }}>
            Book a personalized demo with our team today.
          </p>
          <button style={{ padding: '14px 36px', backgroundColor: WHITE, color: NAVY, border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
            Book a Demo Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
