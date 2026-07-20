"use client";

import {
  ShoppingCart, Truck, Package, DollarSign, Users, Briefcase,
  MessageSquare, Car, Building, FileText, BarChart3, Settings, CheckCircle
} from 'lucide-react';
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

const modules = [
  { icon: ShoppingCart, name: 'Sales Management',      desc: 'Quotes, orders, invoicing, CRM and customer management.' },
  { icon: Truck,        name: 'Purchase Management',   desc: 'Supplier management, PO creation, and procurement workflows.' },
  { icon: Package,      name: 'Inventory Management',  desc: 'Multi-warehouse stock tracking, transfers, and valuations.' },
  { icon: DollarSign,   name: 'Finance & Accounting',  desc: 'GL, AP, AR, bank reconciliation, and financial reporting.' },
  { icon: Users,        name: 'HR & Payroll',          desc: 'Employee records, payroll, leave, attendance, and recruitment.' },
  { icon: Briefcase,    name: 'Project Management',    desc: 'Task tracking, milestones, resource allocation, and timelines.' },
  { icon: MessageSquare,name: 'CRM',                   desc: 'Lead management, pipeline tracking, and customer 360° view.' },
  { icon: Car,          name: 'Fleet Management',      desc: 'Vehicle tracking, maintenance, fuel, and driver management.' },
  { icon: Building,     name: 'Fixed Assets',          desc: 'Asset registration, depreciation, transfers, and disposals.' },
  { icon: FileText,     name: 'Bill & Payroll',        desc: 'Billing records, payroll drafts, verification, and approvals.' },
  { icon: BarChart3,    name: 'Reports & Analytics',   desc: 'Real-time dashboards, custom reports, and Excel/PDF exports.' },
  { icon: Settings,     name: 'System Settings',       desc: 'User roles, permissions, integrations, and configurations.' },
];

export default function ModulesPage() {
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
            Modules
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Explore Our Modules
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: '0 0 32px' }}>
            A complete suite of modules designed to cover every aspect of your business operations.
          </p>
        </div>
      </div>

      {/* ─── MODULES GRID ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div key={i} style={{ backgroundColor: WHITE, borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: LIGHT_BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', flexShrink: 0 }}>
                    <Icon size={24} color={BLUE} />
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: DARK, marginBottom: '10px' }}>{mod.name}</div>
                  <div style={{ fontSize: '14px', color: GRAY, lineHeight: '1.6', flexGrow: 1, marginBottom: '20px' }}>{mod.desc}</div>
                  <a href="#" style={{ color: BLUE, fontWeight: '600', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Learn More →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── CTA BANNER ─── */}
      <div style={{ backgroundColor: NAVY, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: WHITE, margin: '0 0 16px' }}>
            Need a Custom Module?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px' }}>
            Contact us for enterprise solutions tailored to your exact business needs.
          </p>
          <button style={{ padding: '14px 32px', backgroundColor: WHITE, color: NAVY, border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}>
            Contact Sales
          </button>
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
