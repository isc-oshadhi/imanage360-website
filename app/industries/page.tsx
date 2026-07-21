"use client";

import { Building2, Truck, Cog, Heart, ShoppingBag, Briefcase } from 'lucide-react';
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
  { label: 'Pricing',    href: '/pricing' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

const industries = [
  {
    icon: Building2,
    title: 'Construction & Engineering',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
    bullets: ['Project cost tracking and budget control', 'Equipment and fleet management', 'Subcontractor and supplier management'],
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    bullets: ['Fleet tracking and maintenance scheduling', 'Driver management and payroll', 'Trip billing and fuel cost control'],
  },
  {
    icon: Cog,
    title: 'Manufacturing',
    gradient: 'linear-gradient(135deg, #1E40AF 0%, #60A5FA 100%)',
    bullets: ['Production planning and scheduling', 'Inventory and raw material control', 'Quality control and compliance'],
  },
  {
    icon: Heart,
    title: 'Healthcare',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #6366F1 100%)',
    bullets: ['Patient billing and insurance management', 'Staff scheduling and payroll', 'Inventory and medical supply tracking'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Distribution',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #818CF8 100%)',
    bullets: ['Multi-location inventory management', 'Point of sale integration', 'Customer loyalty and CRM'],
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    gradient: 'linear-gradient(135deg, #1E40AF 0%, #93C5FD 100%)',
    bullets: ['Project billing and timesheet management', 'Resource allocation and utilization', 'Client invoicing and collections'],
  },
];

const testimonials = [
  {
    quote: 'iManage360 transformed how we manage our fleet operations. We saved 30% in administrative time.',
    name: 'Ahmed Al-Rashidi',
    role: 'Operations Director, LogiTrans Qatar',
  },
  {
    quote: 'The HR and payroll module alone was worth the investment. Our payroll errors dropped to zero.',
    name: 'Sarah Johnson',
    role: 'HR Manager, BuildCo International',
  },
  {
    quote: 'Real-time dashboards give us insights we never had before. Decision making is now data-driven.',
    name: 'Khalid Ibrahim',
    role: 'CEO, RetailMax Group',
  },
];

export default function IndustriesPage() {
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
            <button style={{ padding: '8px 20px', border: `2px solid ${BLUE}`, borderRadius: '8px', color: BLUE, backgroundColor: 'transparent', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Login</button>
            <button style={{ padding: '8px 20px', backgroundColor: BLUE, border: 'none', borderRadius: '8px', color: WHITE, fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Book a Demo</button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: WHITE, color: BLUE, borderRadius: '999px', fontSize: '14px', fontWeight: '600', marginBottom: '20px', boxShadow: '0 2px 8px rgba(37,99,235,0.15)' }}>
            Industries
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Industries We Serve
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: 0 }}>
            iManage360 adapts to the unique workflows and compliance needs of your industry.
          </p>
        </div>
      </div>

      {/* ─── INDUSTRY CARDS ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} style={{ background: ind.gradient, borderRadius: '20px', padding: '36px 32px', color: WHITE, display: 'flex', flexDirection: 'column', gap: '0', boxShadow: '0 8px 32px rgba(37,99,235,0.18)' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Icon size={26} color={WHITE} />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>{ind.title}</div>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {ind.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.5' }}>
                        <span style={{ marginTop: '2px', flexShrink: 0, width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Trusted by Leading Companies</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>Real results from real customers across industries</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ backgroundColor: WHITE, borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ fontSize: '36px', color: BLUE, lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '15px', color: DARK, lineHeight: '1.75', margin: 0, fontStyle: 'italic', flexGrow: 1 }}>
                  {t.quote}
                </p>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: NAVY }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: GRAY, marginTop: '4px' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
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
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginTop: '8px' }}>iManage360 is an all-in-one ERP solution by iTeq Solution Center.</div>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Quick Links</div>
              {['Home', 'Features', 'Modules', 'Pricing', 'About Us', 'Contact'].map((l, i) => (
                <div key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', cursor: 'pointer' }}>{l}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Contact Info</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🌐 iteqsolutioncenter.com</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>📞 +94776206033</div>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Follow Us</div>
              {['LinkedIn', 'Twitter', 'Facebook'].map((l, i) => (
                <div key={i} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', cursor: 'pointer' }}>{l}</div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.15)', padding: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            © 2025 iTeq Solution Center. All rights reserved.
          </div>
        </div>
      </div>

    </div>
  );
}
