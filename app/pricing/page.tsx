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
  { label: 'Pricing',    href: '/pricing' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 14-day free trial with full access to the Professional plan. No credit card required.',
  },
  {
    q: 'Do you offer discounts for NGOs or educational institutions?',
    a: 'Yes, we offer special pricing for non-profits, NGOs, and educational institutions. Contact us for details.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, credit cards, and corporate purchase orders for annual plans.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. iManage360 uses industry-standard encryption, regular backups, and role-based access controls to keep your data safe.',
  },
  {
    q: 'Can I get a custom quote?',
    a: 'Absolutely. Contact our sales team for a tailored proposal that fits your exact requirements.',
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', color: DARK }}>
      <CheckCircle size={16} color="#16A34A" style={{ flexShrink: 0 }} />
      <span>{text}</span>
    </div>
  );
}

function CrossItem({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', color: '#94A3B8' }}>
      <XCircle size={16} color="#CBD5E1" style={{ flexShrink: 0 }} />
      <span>{text}</span>
    </div>
  );
}

export default function PricingPage() {
  const pathname = usePathname();
  const [annual, setAnnual] = useState(false);
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

      {/* ─── HERO ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: WHITE, color: BLUE, borderRadius: '999px', fontSize: '14px', fontWeight: '600', marginBottom: '20px', boxShadow: '0 2px 8px rgba(37,99,235,0.15)' }}>
            Pricing
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', margin: '0 0 36px' }}>
            Choose the plan that fits your business size and needs. No hidden fees. Cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', backgroundColor: WHITE, borderRadius: '10px', padding: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => setAnnual(false)}
              style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600', backgroundColor: !annual ? BLUE : 'transparent', color: !annual ? WHITE : GRAY, transition: 'all 0.2s' }}
            >Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600', backgroundColor: annual ? BLUE : 'transparent', color: annual ? WHITE : GRAY, transition: 'all 0.2s' }}
            >Annual <span style={{ fontSize: '12px', color: annual ? 'rgba(255,255,255,0.85)' : '#16A34A', fontWeight: '700' }}>(Save 20%)</span></button>
          </div>
        </div>
      </div>

      {/* ─── PRICING CARDS ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}>

          {/* Card 1 — Starter */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: '1px solid #E2E8F0', padding: '36px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: GRAY, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Starter</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '6px' }}>
              <span style={{ fontSize: '48px', fontWeight: '800', color: DARK, lineHeight: 1 }}>QAR {annual ? '239' : '299'}</span>
              <span style={{ fontSize: '16px', color: GRAY, marginBottom: '8px' }}>/month</span>
            </div>
            <div style={{ fontSize: '14px', color: GRAY, marginBottom: '32px' }}>Perfect for small businesses</div>
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px', marginBottom: '32px' }}>
              <CheckItem text="Up to 5 users" />
              <CheckItem text="Sales & Purchases module" />
              <CheckItem text="Basic Inventory" />
              <CheckItem text="Financial Reports" />
              <CheckItem text="Email support" />
              <CrossItem text="HR & Payroll module" />
              <CrossItem text="Fleet Management" />
              <CrossItem text="Custom integrations" />
            </div>
            <button style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', border: `2px solid ${BLUE}`, borderRadius: '10px', color: BLUE, fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>
              Get Started
            </button>
          </div>

          {/* Card 2 — Professional (Most Popular) */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: `2px solid ${BLUE}`, padding: '0', boxShadow: '0 12px 40px rgba(37,99,235,0.18)', position: 'relative', overflow: 'hidden' }}>
            {/* Blue header */}
            <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, padding: '28px 32px 24px', position: 'relative' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.25)', color: WHITE, fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '999px', marginBottom: '12px', letterSpacing: '0.5px' }}>
                MOST POPULAR
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Professional</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '6px' }}>
                <span style={{ fontSize: '48px', fontWeight: '800', color: WHITE, lineHeight: 1 }}>QAR {annual ? '559' : '699'}</span>
                <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>/month</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>Ideal for growing companies</div>
            </div>
            <div style={{ padding: '32px' }}>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '24px', marginBottom: '32px' }}>
                <CheckItem text="Up to 25 users" />
                <CheckItem text="All Starter features" />
                <CheckItem text="HR & Payroll module" />
                <CheckItem text="Fleet Management" />
                <CheckItem text="Advanced Reports & Analytics" />
                <CheckItem text="Priority support" />
                <CheckItem text="API access" />
              </div>
              <button style={{ width: '100%', padding: '14px', backgroundColor: BLUE, border: 'none', borderRadius: '10px', color: WHITE, fontSize: '15px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.35)' }}>
                Get Started
              </button>
            </div>
          </div>

          {/* Card 3 — Enterprise */}
          <div style={{ backgroundColor: WHITE, borderRadius: '20px', border: '1px solid #E2E8F0', padding: '36px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: GRAY, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Enterprise</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '6px' }}>
              <span style={{ fontSize: '36px', fontWeight: '800', color: DARK, lineHeight: 1.1 }}>Custom Pricing</span>
            </div>
            <div style={{ fontSize: '14px', color: GRAY, marginBottom: '32px' }}>For large organizations</div>
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px', marginBottom: '32px' }}>
              <CheckItem text="Unlimited users" />
              <CheckItem text="All Professional features" />
              <CheckItem text="Custom module development" />
              <CheckItem text="Dedicated account manager" />
              <CheckItem text="On-premise deployment option" />
              <CheckItem text="SLA guarantee" />
              <CheckItem text="24/7 phone support" />
            </div>
            <button style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', border: `2px solid ${BLUE}`, borderRadius: '10px', color: BLUE, fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>
              Contact Sales
            </button>
          </div>

        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>Everything you need to know before getting started</p>
          </div>
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
