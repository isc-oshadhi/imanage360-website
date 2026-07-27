"use client";
import RequestDemoButton from '@/components/RequestDemoButton';

import { useState } from 'react';
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
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



function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', color: DARK }}>
      <CheckCircle size={16} color="#16A34A" style={{ flexShrink: 0 }} />
      <span>{text}</span>
    </div>
  );
}



export default function PricingPage() {
  const pathname = usePathname();

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

      {/* ─── HERO ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: WHITE, color: BLUE, borderRadius: '999px', fontSize: '14px', fontWeight: '600', marginBottom: '20px', boxShadow: '0 2px 8px rgba(37,99,235,0.15)' }}>
            Plans
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Flexible Plans Built Around Your Business
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: '0 0 36px' }}>
            Every business is different, so we don't believe in one-size-fits-all pricing. Tell us what you need, and we'll put together a plan that fits your team size, modules, and budget.
          </p>
        </div>
      </div>

      {/* ─── PRICING CARDS ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}>

          {/* Card 1 — Starter */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: '1px solid #E2E8F0', padding: '36px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: DARK, marginBottom: '12px' }}>Starter</div>
            <div style={{ fontSize: '14px', color: GRAY, marginBottom: '32px' }}>Perfect for small businesses getting started with core operations.</div>
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px', marginBottom: '32px' }}>
              <CheckItem text="Sales & Purchases module" />
              <CheckItem text="Basic Inventory" />
              <CheckItem text="Financial Reports" />
              <CheckItem text="Email support" />
            </div>
          </div>

          {/* Card 2 — Professional (Most Popular) */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: `2px solid ${BLUE}`, padding: '0', boxShadow: '0 12px 40px rgba(37,99,235,0.18)', position: 'relative', overflow: 'hidden' }}>
            {/* Blue header */}
            <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, padding: '36px 32px 24px', position: 'relative' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.25)', color: WHITE, fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '999px', marginBottom: '12px', letterSpacing: '0.5px' }}>
                MOST POPULAR
              </div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: WHITE, marginBottom: '12px' }}>Professional</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>Ideal for growing companies that need more depth across departments.</div>
            </div>
            <div style={{ padding: '32px' }}>
              <div style={{ paddingBottom: '24px', marginBottom: '32px' }}>
                <CheckItem text="All Starter features" />
                <CheckItem text="HR & Payroll module" />
                <CheckItem text="Fleet Management" />
                <CheckItem text="Advanced Reports & Analytics" />
                <CheckItem text="Priority support" />
                <CheckItem text="API access" />
              </div>
            </div>
          </div>

          {/* Card 3 — Enterprise */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: '1px solid #E2E8F0', padding: '36px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: DARK, marginBottom: '12px' }}>Enterprise</div>
            <div style={{ fontSize: '14px', color: GRAY, marginBottom: '32px' }}>For larger organizations with complex, custom needs.</div>
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px', marginBottom: '32px' }}>
              <CheckItem text="All Professional features" />
              <CheckItem text="Custom module development" />
              <CheckItem text="Dedicated account manager" />
              <CheckItem text="On-premise deployment option" />
              <CheckItem text="SLA guarantee" />
              <CheckItem text="24/7 phone support" />
            </div>
          </div>

        </div>
      </div>

      {/* ─── CTA BANNER ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 16px' }}>
            Get a Plan Tailored to You
          </h2>
          <p style={{ fontSize: '18px', color: GRAY, margin: '0 0 32px' }}>
            Reach out to our team for a custom quote based on your company size, modules needed, and deployment preferences.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '14px 32px', backgroundColor: BLUE, color: WHITE, border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}>
              Request a Quote
            </button>
          </Link>
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
