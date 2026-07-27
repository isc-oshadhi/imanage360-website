"use client";
import RequestDemoButton from '@/components/RequestDemoButton';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. As your business grows, you can add or remove modules and adjust your plan at any time — there\'s no lock-in.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a guided demo so you can see iManage360 in action before committing. Reach out to our team to schedule one.',
  },
  {
    q: 'Do you offer discounts for NGOs or educational institutions?',
    a: 'Yes, we offer special pricing for qualifying non-profit and educational organizations. Contact our sales team for details.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We support bank transfers and major payment methods depending on your region. Contact us to confirm what\'s available for your country.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. iManage360 uses role-based access control, encrypted data storage, and secure hosting to keep your business data protected.',
  },
  {
    q: 'Can I get a custom quote?',
    a: 'Absolutely. Every business has different needs — contact our sales team and we\'ll put together a plan and quote specific to your company.',
  },
];

export default function FAQPage() {
  const pathname = usePathname();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: WHITE }}>

      {/* ─── NAVBAR ─── */}
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

      {/* ─── HERO & FAQ ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: '0 0 36px' }}>
            Everything you need to know before getting started.
          </p>
        </div>
      </div>

      {/* ─── FAQ LIST ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ backgroundColor: WHITE, borderRadius: '12px', border: `1px solid ${isOpen ? BLUE : '#E2E8F0'}`, overflow: 'hidden', boxShadow: isOpen ? '0 4px 16px rgba(37,99,235,0.10)' : '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: '600', color: isOpen ? BLUE : DARK }}>{faq.q}</span>
                    {isOpen
                      ? <ChevronUp size={20} color={BLUE} />
                      : <ChevronDown size={20} color={GRAY} />
                    }
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', fontSize: '15px', color: GRAY, lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div style={{ position: 'relative' }}>
        <div style={{ lineHeight: 0, backgroundColor: '#F8FAFC' }}>
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

    </div>
  );
}
