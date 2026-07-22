"use client";
import RequestDemoButton from '@/components/RequestDemoButton';

import { Target, Eye, Zap, Shield, Heart, Users } from 'lucide-react';
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

const stats = [
  { value: '2018', label: 'Founded' },
  { value: '200+', label: 'Clients' },
  { value: '50+',  label: 'Team Members' },
  { value: '5+',   label: 'Countries' },
];

const values = [
  { icon: Zap,    title: 'Innovation',    desc: 'We constantly push boundaries to deliver solutions that solve real business problems.' },
  { icon: Shield, title: 'Integrity',     desc: 'We operate with full transparency and honesty in everything we do.' },
  { icon: Heart,  title: 'Customer First',desc: "Our clients' success is our success. We go beyond to deliver excellence." },
  { icon: Users,  title: 'Collaboration', desc: 'We believe in the power of teamwork — internally and with our clients.' },
];

const team = [
  { initials: 'AK', name: 'Ahmed Khalil',   role: 'CEO & Founder' },
  { initials: 'SR', name: 'Sarah Rahman',   role: 'CTO' },
  { initials: 'MH', name: 'Mohammed Hassan',role: 'Head of Sales' },
  { initials: 'FN', name: 'Fatima Nasser',  role: 'Head of Customer Success' },
];

const services = [
  { icon: '</>', label: 'IT Solutions' },
  { icon: '☁',  label: 'Cloud Services' },
  { icon: '🔒', label: 'Cyber Security' },
  { icon: '⚙',  label: 'System Integration' },
  { icon: '📈', label: 'IT Consulting' },
];

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
  );
}

export default function AboutPage() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: WHITE }}>
      <Navbar />

      {/* ─── SECTION 1: HERO ─── */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1D4ED8 100%)`, paddingTop: '140px', paddingBottom: '100px', textAlign: 'center', color: WHITE }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(255,255,255,0.15)', color: WHITE, borderRadius: '999px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
            About Us
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', lineHeight: '1.15', margin: '0 0 20px', color: WHITE }}>
            About iTeq Solution Center
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.7', margin: 0 }}>
            Empowering businesses with innovative technology and reliable solutions since 2018.
          </p>
        </div>
      </div>

      {/* ─── SECTION 2: OUR STORY ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left: text */}
          <div style={{ flex: '1 1 480px' }}>
            <span style={{ display: 'inline-block', padding: '4px 14px', backgroundColor: LIGHT_BLUE, color: BLUE, borderRadius: '999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>Our Story</span>
            <h2 style={{ fontSize: '38px', fontWeight: '800', color: DARK, lineHeight: '1.2', margin: '0 0 20px' }}>Who We Are</h2>
            <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.8', margin: '0 0 20px' }}>
              iTeq Solution Center is a leading technology company headquartered in Qatar, specializing in enterprise resource planning, digital transformation, and IT consulting services. Founded in 2018, we have helped 200+ companies across the GCC region streamline their operations and achieve sustainable growth through technology.
            </p>
            <p style={{ fontSize: '16px', color: GRAY, lineHeight: '1.8', margin: 0 }}>
              Our flagship product, iManage360, is a next-generation all-in-one ERP system designed specifically for the operational complexity of businesses in logistics, construction, healthcare, and professional services.
            </p>
          </div>
          {/* Right: stats 2×2 */}
          <div style={{ flex: '1 1 320px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BLUE, borderRadius: '16px', padding: '32px 24px', textAlign: 'center', border: '1px solid #DBEAFE' }}>
                <div style={{ fontSize: '44px', fontWeight: '800', color: NAVY, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: GRAY, marginTop: '8px', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: MISSION & VISION ─── */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Mission & Vision</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>What drives us every day</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
            {/* Mission card */}
            <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E40AF 100%)`, borderRadius: '20px', padding: '48px 40px', color: WHITE, boxShadow: '0 8px 32px rgba(30,58,138,0.25)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Target size={28} color={WHITE} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Our Mission</div>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.92)', lineHeight: '1.8', margin: 0 }}>
                To empower businesses of all sizes with intelligent, integrated software solutions that simplify complexity, improve efficiency, and drive measurable business results.
              </p>
            </div>
            {/* Vision card */}
            <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #3B82F6 100%)`, borderRadius: '20px', padding: '48px 40px', color: WHITE, boxShadow: '0 8px 32px rgba(37,99,235,0.25)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Eye size={28} color={WHITE} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Our Vision</div>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.92)', lineHeight: '1.8', margin: 0 }}>
                To become the most trusted ERP provider in the Middle East, recognized for innovation, reliability, and exceptional customer success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: CORE VALUES ─── */}
      <div style={{ backgroundColor: LIGHT_BLUE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Our Core Values</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>The principles that guide how we work and serve our clients</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} style={{ backgroundColor: WHITE, borderRadius: '16px', padding: '32px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #E0EDFF', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: LIGHT_BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid #BFDBFE' }}>
                    <Icon size={24} color={BLUE} />
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: DARK, marginBottom: '10px' }}>{v.title}</div>
                  <div style={{ fontSize: '14px', color: GRAY, lineHeight: '1.7' }}>{v.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── SECTION 5: TEAM ─── */}
      <div style={{ backgroundColor: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: DARK, margin: '0 0 12px' }}>Meet Our Leadership</h2>
            <p style={{ fontSize: '16px', color: GRAY, margin: 0 }}>The people behind iManage360</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
            {team.map((member, i) => (
              <div key={i} style={{ backgroundColor: WHITE, borderRadius: '20px', padding: '36px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #F1F5F9', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '22px', fontWeight: '800', color: WHITE, letterSpacing: '1px' }}>
                  {member.initials}
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: DARK, marginBottom: '6px' }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: GRAY, marginBottom: '16px' }}>{member.role}</div>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', backgroundColor: LIGHT_BLUE, color: BLUE, borderRadius: '999px', fontSize: '12px', fontWeight: '600', textDecoration: 'none' }}>
                  in LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 6: COMPANY INFO BANNER ─── */}
      <div style={{ display: 'flex', minHeight: '280px' }}>
        {/* Left: white */}
        <div style={{ flex: 1, backgroundColor: WHITE, padding: '60px 40px 60px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px' }}>
          <div style={{ fontSize: '20px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>What We Offer</div>
          {services.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '16px', color: DARK, fontWeight: '500' }}>
              <span style={{ fontSize: '20px', width: '28px', textAlign: 'center' }}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
        {/* Right: dark navy */}
        <div style={{ flex: 1, background: `linear-gradient(135deg, ${NAVY} 0%, #0F2669 100%)`, padding: '60px 80px 60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: WHITE }}>
          <div style={{ fontSize: '28px', fontWeight: '800', lineHeight: '1.3', marginBottom: '16px' }}>
            Smart Solutions for a Digital Future
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.75', marginBottom: '24px' }}>
            Empowering businesses with innovative technology and reliable solutions.
          </p>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '2' }}>
            <div>🌐 iteqsolutioncenter.com</div>
            <div>📞 +94776206033</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
