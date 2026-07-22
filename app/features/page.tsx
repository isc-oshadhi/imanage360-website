"use client";
import RequestDemoButton from '@/components/RequestDemoButton';

import { LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Shield, CheckCircle, ChevronRight } from 'lucide-react';
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

export default function FeaturesPage() {
  const pathname = usePathname();
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Smart Dashboard',
      desc: 'Get a real-time overview of your entire business with customizable dashboards and KPI widgets.',
    },
    {
      icon: ShoppingCart,
      title: 'Sales Management',
      desc: 'Manage quotes, orders, invoicing, and customer relationships from one unified interface.',
    },
    {
      icon: Package,
      title: 'Inventory Control',
      desc: 'Track stock levels, movements, and valuations in real time across multiple warehouses.',
    },
    {
      icon: Users,
      title: 'HR & Payroll',
      desc: 'Automate payroll calculations, manage employee records, leaves, and attendance with ease.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Reports',
      desc: 'Generate detailed financial, operational, and HR reports with export to Excel and PDF.',
    },
    {
      icon: Shield,
      title: 'Role-based Security',
      desc: 'Control who sees what with granular permission settings per user, role, and module.',
    },
  ];

  const checkItem = (text: string) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: DARK }}>
      <CheckCircle size={18} color="#16A34A" />
      <span>{text}</span>
    </div>
  );

  const badgePill = (text: string) => (
    <div style={{
      display: 'inline-block', padding: '4px 14px',
      backgroundColor: LIGHT_BLUE, color: BLUE,
      borderRadius: '999px', fontSize: '13px',
      fontWeight: '600', marginBottom: '16px',
    }}>{text}</div>
  );

  const mockupCard = (children: React.ReactNode) => (
    <div style={{
      flex: 1,
      backgroundColor: WHITE,
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
      border: '1px solid #E2E8F0',
    }}>
      {children}
    </div>
  );

  const mockupHeader = (title: string, badgeText: string, badgeBg: string, badgeColor: string) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <span style={{ fontSize: '14px', fontWeight: '700', color: DARK }}>{title}</span>
      <span style={{
        backgroundColor: badgeBg, color: badgeColor,
        fontSize: '11px', padding: '2px 8px', borderRadius: '999px', fontWeight: '600',
      }}>{badgeText}</span>
    </div>
  );

  const progressBar = (pct: number, color: string) => (
    <div style={{ height: '4px', borderRadius: '2px', backgroundColor: '#E2E8F0', width: '80px', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${pct}%`, backgroundColor: color, borderRadius: '2px' }} />
    </div>
  );

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: WHITE }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: WHITE,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        height: '64px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              backgroundColor: WHITE, borderRadius: '50%', padding: '2px',
              display: 'inline-flex', flexShrink: 0,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}>
              <img src="/logo.png" alt="iTeq Solution Center"
                style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>iTeq</span>
              <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>Solution</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: BLUE, letterSpacing: '1px' }}>— Center —</span>
            </div>
          </a>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '32px' }}>
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  style={{
                    color: isActive ? BLUE : DARK,
                    fontWeight: isActive ? '700' : '500',
                    textDecoration: 'none',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderBottom: isActive ? `2px solid ${BLUE}` : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                >{link.label}</Link>
              );
            })}
          </div>

          {/* Right Buttons */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <RequestDemoButton />
          </div>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <div style={{
        backgroundColor: LIGHT_BLUE,
        paddingTop: '120px', paddingBottom: '80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px',
            backgroundColor: WHITE, color: BLUE,
            borderRadius: '999px', fontSize: '14px',
            fontWeight: '600', marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(37,99,235,0.15)',
          }}>Features</div>

          <h1 style={{
            fontSize: '52px', fontWeight: '800', color: DARK,
            lineHeight: '1.2', marginBottom: '20px', margin: '0 0 20px',
          }}>Powerful Features Built for Modern Business</h1>

          <p style={{
            fontSize: '18px', color: GRAY,
            lineHeight: '1.7', marginBottom: '32px',
          }}>
            Everything your team needs to manage operations, finances, HR, and more — all in one platform.
          </p>

          <button style={{
            padding: '14px 32px', backgroundColor: BLUE,
            color: WHITE, border: 'none', borderRadius: '8px',
            fontSize: '16px', fontWeight: '600', cursor: 'pointer',
          }}>Book a Demo →</button>
        </div>
      </div>

      {/* ─── SECTION 2: CORE FEATURES GRID ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Core Features</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>Built to handle every aspect of your business operations</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} style={{
                  backgroundColor: WHITE,
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #F1F5F9',
                  transition: 'transform 0.2s',
                }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '12px',
                    backgroundColor: LIGHT_BLUE, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={24} color={BLUE} />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: DARK, marginBottom: '12px' }}>{f.title}</div>
                  <div style={{ fontSize: '15px', color: GRAY, lineHeight: '1.7' }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: FEATURE HIGHLIGHTS ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>

          {/* ROW 1 — image left, text right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Sales Mockup */}
            {mockupCard(
              <>
                {mockupHeader('Sales Pipeline', 'Live', '#DCFCE7', '#16A34A')}

                {/* Pipeline rows */}
                {[
                  { stage: 'Leads', count: '24 contacts', pct: 80, color: BLUE },
                  { stage: 'Qualified', count: '18 contacts', pct: 60, color: BLUE },
                  { stage: 'Closed Won', count: '12 contacts', pct: 40, color: '#16A34A' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 12px', backgroundColor: '#F8FAFC', borderRadius: '8px',
                    marginBottom: '8px', fontSize: '13px', color: DARK,
                  }}>
                    <span style={{ fontWeight: '600', width: '90px' }}>{row.stage}</span>
                    <span style={{ color: GRAY, flex: 1 }}>{row.count}</span>
                    {progressBar(row.pct, row.color)}
                  </div>
                ))}

                {/* Bottom stats */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                  {[
                    { val: 'QAR 2.4M', label: 'Revenue' },
                    { val: '89%', label: 'Win Rate' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      flex: 1, backgroundColor: LIGHT_BLUE,
                      borderRadius: '8px', padding: '12px', textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: NAVY }}>{s.val}</div>
                      <div style={{ fontSize: '12px', color: GRAY, marginTop: '2px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Text */}
            <div style={{ flex: 1 }}>
              {badgePill('Sales & CRM')}
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, lineHeight: '1.2', marginBottom: '16px', margin: '0 0 16px' }}>
                Close Deals Faster With Smarter Sales Tools
              </h2>
              <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.7', marginBottom: '24px' }}>
                From lead tracking to invoice generation, iManage360's Sales module streamlines every stage of your pipeline.
              </p>
              {checkItem('Automated quote-to-cash workflow')}
              {checkItem('Customer 360° view')}
              {checkItem('Real-time sales analytics')}
            </div>
          </div>

          {/* ROW 2 — text left, image right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexDirection: 'row' }}>
            {/* Text */}
            <div style={{ flex: 1 }}>
              {badgePill('Finance & Accounting')}
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 16px' }}>
                Full Financial Visibility and Control
              </h2>
              <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.7', marginBottom: '24px' }}>
                Manage accounts payable, receivable, general ledger, and financial reporting in one place.
              </p>
              {checkItem('Automated bank reconciliation')}
              {checkItem('Multi-currency support')}
              {checkItem('Audit-ready financial reports')}
            </div>

            {/* Finance Mockup */}
            {mockupCard(
              <>
                {mockupHeader('Financial Overview', 'This Month', '#DBEAFE', '#1D4ED8')}

                {/* Metric rows */}
                {[
                  { label: 'Total Revenue',       val: 'QAR 845,000', valColor: '#16A34A', sub: '+12.3%' },
                  { label: 'Accounts Payable',    val: 'QAR 234,000', valColor: '#DC2626', sub: '' },
                  { label: 'Accounts Receivable', val: 'QAR 456,000', valColor: BLUE, sub: '' },
                  { label: 'Net Profit',          val: 'QAR 189,000', valColor: '#16A34A', sub: '+8.7%' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: '1px solid #F1F5F9', fontSize: '13px',
                  }}>
                    <span style={{ color: GRAY }}>{row.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: '700', color: row.valColor }}>{row.val}</span>
                      {row.sub && <span style={{ fontSize: '11px', color: row.valColor, marginLeft: '6px' }}>{row.sub}</span>}
                    </div>
                  </div>
                ))}

                {/* Chart bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px', marginTop: '16px' }}>
                  {[40, 65, 50, 80, 60, 90].map((h, i) => (
                    <div key={i} style={{
                      flex: 1, height: `${h}%`,
                      backgroundColor: BLUE, opacity: 0.7,
                      borderRadius: '2px 2px 0 0',
                    }} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ROW 3 — image left, text right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* HR Mockup */}
            {mockupCard(
              <>
                {mockupHeader('Employee Overview', 'Active', '#DCFCE7', '#16A34A')}

                {/* Employee rows */}
                {[
                  { initials: 'AK', name: 'Ahmed K.',       role: 'HR Manager',  status: 'Active',   statusBg: '#DCFCE7', statusColor: '#16A34A' },
                  { initials: 'SR', name: 'Sarah R.',        role: 'Developer',   status: 'Active',   statusBg: '#DCFCE7', statusColor: '#16A34A' },
                  { initials: 'MH', name: 'Mohammed H.',     role: 'Finance',     status: 'On Leave', statusBg: '#FEF9C3', statusColor: '#CA8A04' },
                ].map((emp, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 0', borderBottom: '1px solid #F1F5F9',
                  }}>
                    <div style={{
                      width: '32px', height: '32px', backgroundColor: LIGHT_BLUE,
                      borderRadius: '50%', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '12px', color: BLUE, fontWeight: 'bold',
                      flexShrink: 0,
                    }}>{emp.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: DARK }}>{emp.name}</div>
                      <div style={{ fontSize: '11px', color: GRAY }}>{emp.role}</div>
                    </div>
                    <span style={{
                      backgroundColor: emp.statusBg, color: emp.statusColor,
                      fontSize: '11px', padding: '2px 8px', borderRadius: '999px', fontWeight: '600',
                    }}>{emp.status}</span>
                  </div>
                ))}

                {/* Stats pills */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                  {[
                    { val: '120', label: 'Employees' },
                    { val: '98%', label: 'Attendance' },
                    { val: 'QAR 0', label: 'Pending Pay' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      flex: 1, textAlign: 'center',
                      backgroundColor: LIGHT_BLUE, borderRadius: '8px', padding: '8px',
                    }}>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: NAVY }}>{s.val}</div>
                      <div style={{ fontSize: '11px', color: GRAY, marginTop: '2px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Text */}
            <div style={{ flex: 1 }}>
              {badgePill('HR & Payroll')}
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 16px' }}>
                Manage Your Workforce With Confidence
              </h2>
              <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.7', marginBottom: '24px' }}>
                Handle recruitment, onboarding, attendance, leave, and payroll from a single module.
              </p>
              {checkItem('Automated payroll processing')}
              {checkItem('Leave and attendance tracking')}
              {checkItem('Employee self-service portal')}
            </div>
          </div>

        </div>
      </div>

      {/* ─── SECTION 4: CTA BANNER ─── */}
      <div style={{ backgroundColor: NAVY, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: WHITE, marginBottom: '16px', margin: '0 0 16px' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>
            Join 200+ companies already using iManage360.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button style={{
              padding: '14px 28px', backgroundColor: WHITE,
              color: NAVY, border: 'none', borderRadius: '8px',
              fontSize: '16px', fontWeight: '700', cursor: 'pointer',
            }}>Get Started Free</button>
            <button style={{
              padding: '14px 28px', backgroundColor: 'transparent',
              color: WHITE, border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: '8px', fontSize: '16px',
              fontWeight: '600', cursor: 'pointer',
            }}>Schedule a Demo</button>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div id="contact" style={{ position: 'relative' }}>
        {/* Wave into footer */}
        <div style={{ lineHeight: 0, backgroundColor: WHITE }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,20 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill={NAVY} />
          </svg>
        </div>

        <div style={{ backgroundColor: NAVY, color: WHITE, padding: '40px 24px 0' }}>
          <div style={{
            maxWidth: '1280px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px',
          }}>
            {/* Col 1 */}
            <div>
              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ backgroundColor: WHITE, borderRadius: '50%', padding: '2px', display: 'inline-flex', flexShrink: 0 }}>
                  <img src="/logo.png" alt="iTeq Solution Center"
                    style={{ height: '44px', width: '44px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <span style={{ fontSize: '18px', fontWeight: '800', color: WHITE }}>iManage360</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Innovate. Integrate. Elevate.
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginTop: '8px' }}>
                iManage360 is an all-in-one ERP solution by iTeq Solution Center.
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Quick Links</div>
              {['Home', 'Features', 'Modules', 'Pricing', 'About Us', 'Contact'].map((l, i) => (
                <div key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', cursor: 'pointer' }}>{l}</div>
              ))}
            </div>

            {/* Col 3 */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Contact Info</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                🌐 iteqsolutioncenter.com
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                📞 +94776206033
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Follow Us</div>
              {['LinkedIn', 'Twitter', 'Facebook'].map((l, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '8px', alignItems: 'center',
                  color: 'rgba(255,255,255,0.7)', marginBottom: '10px',
                  fontSize: '14px', cursor: 'pointer',
                }}>{l}</div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.15)',
            padding: '24px', textAlign: 'center',
            fontSize: '13px', color: 'rgba(255,255,255,0.5)',
          }}>
            © 2025 iTeq Solution Center. All rights reserved.
          </div>
        </div>
      </div>

    </div>
  );
}
