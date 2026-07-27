"use client";
import RequestDemoButton from '@/components/RequestDemoButton';
// Force rebuild
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {

  Shield, BarChart2, Users, Zap, Cloud,
  Menu, X, Moon, Home as HomeIcon, ShoppingCart, Box, DollarSign, 
  Briefcase, FileText, Settings, Headphones, Search, Bell, 
  TrendingUp, ShoppingBag, Activity, ChevronDown, CheckCircle, Clock
} from 'lucide-react';

const NAVY = '#1E3A8A';
const BLUE = '#2563EB';
const LIGHT_BLUE = '#EFF6FF';
const WHITE = '#FFFFFF';
const DARK = '#0F172A';
const GRAY = '#64748B';
const LIGHT_GRAY = '#F8FAFC';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1280);
  const pathname = usePathname();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mockupScale = Math.min(1, (windowWidth - 48) / 680);

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

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: WHITE }}>
      
      {/* SECTION 1 — NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: WHITE,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        height: '64px'
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              backgroundColor: WHITE,
              borderRadius: '50%',
              padding: '2px',
              display: 'inline-flex',
              flexShrink: 0,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
            }}>
              <img
                src="/logo.png"
                alt="iTeq Solution Center"
                style={{
                  height: '48px',
                  width: '48px',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>iTeq</span>
              <span style={{ fontSize: '17px', fontWeight: '800', color: NAVY, letterSpacing: '-0.3px' }}>Solution</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: BLUE, letterSpacing: '1px' }}>— Center —</span>
            </div>
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
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

      {/* SECTION 2 — HERO */}
      <div id="home" style={{ 
        paddingTop: '64px', 
        backgroundColor: WHITE,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-50px', left: '-50px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0
        }}></div>

        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 80px',
          display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap',
          position: 'relative', zIndex: 1
        }}>
          {/* LEFT COLUMN */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '320px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px',
              backgroundColor: LIGHT_BLUE, color: BLUE,
              borderRadius: '999px', fontSize: '14px', fontWeight: '500',
              width: 'fit-content'
            }}>All-in-One ERP Solution</div>
            
            <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', margin: 0, color: NAVY }}>
              One Platform.<br />
              <span style={{ color: BLUE }}>Every Department.</span><br />
              Total Control.
            </h1>
            
            <p style={{
              fontSize: '18px', color: GRAY, lineHeight: '1.7',
              maxWidth: '480px', margin: 0
            }}>
              iManage360 brings HR, Finance, Sales, Inventory, Assets, Fleet, and Procurement together in a single, fully customizable ERP — built for businesses of any size, in any country.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 28px', backgroundColor: BLUE, color: WHITE,
                  border: 'none', borderRadius: '8px', fontSize: '16px',
                  fontWeight: '600', cursor: 'pointer'
                }}>Book a Demo →</button>
              </Link>
              <Link href="/modules" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 28px', backgroundColor: 'transparent',
                  color: BLUE, border: `2px solid ${BLUE}`,
                  borderRadius: '8px', fontSize: '16px',
                  fontWeight: '600', cursor: 'pointer'
                }}>Explore Modules</button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flex: '1 1 500px', paddingBottom: '60px', minWidth: '320px', height: `${530 * mockupScale}px` }}>

            {/* SCALED WRAPPER */}
            <div style={{
              transform: `scale(${mockupScale})`,
              transformOrigin: 'top center',
              position: 'absolute', top: 0,
              width: '680px',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              {/* LAPTOP FRAME */}
              <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
              {/* Screen Bezel */}
              <div style={{
                position: 'relative',
                background: '#0F172A',
                borderRadius: '16px 16px 0 0',
                padding: '12px 12px 16px 12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '100%'
              }}>
                {/* Camera notch */}
                <div style={{
                  position: 'absolute', top: '6px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '4px',
                  borderRadius: '50%', backgroundColor: '#4B5563',
                  zIndex: 10
                }}></div>

                {/* Screen Content */}
                <div style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#F8FAFC',
                }}>
                  <div style={{ display: 'flex', height: '440px' }}>
                    {/* SIDEBAR */}
                    <div style={{
                      width: '140px', backgroundColor: NAVY,
                      display: 'flex', flexDirection: 'column', flexShrink: 0
                    }}>
                      <div style={{
                        padding: '16px 14px 20px',
                        display: 'flex', alignItems: 'center', gap: '8px'
                      }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: BLUE, fontSize: '12px', fontWeight: 'bold' }}>9</span>
                        </div>
                        <span style={{ color: WHITE, fontSize: '13px', fontWeight: '700', letterSpacing: '-0.3px' }}>iManage360</span>
                      </div>

                      <div style={{ flex: 1 }}>
                        {[
                          { label: 'Dashboard', icon: HomeIcon, active: true },
                          { label: 'Sales CRM', icon: ShoppingBag, active: false },
                          { label: 'Procurement', icon: ShoppingCart, active: false },
                          { label: 'Inventory', icon: Box, active: false },
                          { label: 'Finance', icon: DollarSign, active: false },
                          { label: 'HR Mgmt', icon: Users, active: false },
                          { label: 'Invoicing', icon: FileText, active: false },
                          { label: 'Fleet Mgmt', icon: Briefcase, active: false },
                          { label: 'Fixed Assets', icon: FileText, active: false },
                          { label: 'Settings', icon: Settings, active: false },
                        ].map((item, i) => (
                          <div key={i} style={{
                            padding: '8px 14px', fontSize: '10px', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '10px',
                            color: item.active ? WHITE : 'rgba(255,255,255,0.7)',
                            backgroundColor: item.active ? BLUE : 'transparent',
                            borderRadius: item.active ? '6px' : '0',
                            margin: item.active ? '0 8px 4px 8px' : '0 0 4px 0',
                            fontWeight: item.active ? '600' : '400',
                          }}>
                            <item.icon size={12} strokeWidth={item.active ? 2.5 : 2} />
                            {item.label}
                          </div>
                        ))}
                      </div>

                      {/* Need Help? */}
                      <div style={{ padding: '12px', margin: '12px', backgroundColor: BLUE, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ color: WHITE, fontSize: '9px', fontWeight: '600' }}>Need Help?</div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '7px' }}>Contact Support</div>
                        </div>
                        <Headphones color={WHITE} size={14} />
                      </div>
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#F8FAFC' }}>
                      
                      {/* TOP BAR */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: DARK }}>Dashboard</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            padding: '4px 12px', backgroundColor: WHITE,
                            border: '1px solid #E2E8F0', borderRadius: '16px',
                          }}>
                            <Search size={10} color={GRAY} />
                            <span style={{ fontSize: '9px', color: GRAY }}>Search anything...</span>
                          </div>
                          <Bell size={12} color={GRAY} />
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#CBD5E1', overflow: 'hidden' }}>
                              <img src="https://i.pravatar.cc/100?img=11" alt="Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '9px', fontWeight: '700', color: DARK, lineHeight: 1.1 }}>Admin</div>
                              <div style={{ fontSize: '7px', color: GRAY }}>Administrator</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STAT CARDS ROW */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '14px' }}>
                        {[
                          { l: 'Total Sales', a: 'QAR 245,000', c: '+12.5% vs last month', cc: '#16a34a', ic: TrendingUp, bg: '#EFF6FF', icColor: BLUE },
                          { l: 'Total Purchases', a: 'QAR 165,000', c: '+8.3% vs last month', cc: '#16a34a', ic: ShoppingCart, bg: '#F0FDF4', icColor: '#16a34a' },
                          { l: 'Total Profit', a: 'QAR 80,000', c: '+15.7% vs last month', cc: '#16a34a', ic: DollarSign, bg: '#F0FDF4', icColor: '#16a34a' },
                          { l: 'Total Expenses', a: 'QAR 42,000', c: '-3.2% vs last month', cc: '#dc2626', ic: Activity, bg: '#FEF2F2', icColor: '#dc2626' },
                        ].map((s, idx) => (
                          <div key={idx} style={{
                            backgroundColor: WHITE, borderRadius: '8px', padding: '10px',
                            border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                              <div style={{ width: '18px', height: '18px', borderRadius: '4px', backgroundColor: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <s.ic size={10} color={s.icColor} />
                              </div>
                              <div style={{ fontSize: '8px', color: GRAY, fontWeight: '500' }}>{s.l}</div>
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: '800', color: DARK, marginBottom: '4px' }}>{s.a}</div>
                            <div style={{ fontSize: '7px', color: s.cc, fontWeight: '500' }}>
                              {s.c}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ROW 2 & 3 CONTAINER */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '10px', flex: 1, minHeight: 0 }}>
                        
                        {/* LEFT COLUMN: Chart + Recent Activities */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0 }}>
                          
                          {/* LINE CHART CARD */}
                          <div style={{ flex: 1, backgroundColor: WHITE, borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '10px', fontWeight: '700', color: DARK }}>Sales Overview</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 6px', fontSize: '8px', color: GRAY }}>
                                This Year <ChevronDown size={8} />
                              </div>
                            </div>
                            {/* Simple inline SVG line chart mockup */}
                            <div style={{ flex: 1, position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '16px' }}>
                              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                                <defs>
                                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor={BLUE} stopOpacity="0.2" />
                                    <stop offset="100%" stopColor={BLUE} stopOpacity="0.0" />
                                  </linearGradient>
                                </defs>
                                {/* Grid lines */}
                                <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                                <line x1="0" y1="40" x2="100" y2="40" stroke="#f1f5f9" strokeWidth="0.5" />
                                <line x1="0" y1="60" x2="100" y2="60" stroke="#f1f5f9" strokeWidth="0.5" />
                                <line x1="0" y1="80" x2="100" y2="80" stroke="#f1f5f9" strokeWidth="0.5" />
                                
                                <path d="M 0,75 C 4,75 5,55 9,55 C 13,55 14,75 18,75 C 22,75 23,50 27,50 C 31,50 32,60 36,60 C 40,60 41,30 45,30 C 50,30 50,60 55,60 C 59,60 60,45 64,45 C 68,45 69,55 73,55 C 77,55 78,40 82,40 C 86,40 87,55 91,55 C 95,55 96,30 100,30 L 100,100 L 0,100 Z" fill="url(#chartGradient)" />
                                <path d="M 0,75 C 4,75 5,55 9,55 C 13,55 14,75 18,75 C 22,75 23,50 27,50 C 31,50 32,60 36,60 C 40,60 41,30 45,30 C 50,30 50,60 55,60 C 59,60 60,45 64,45 C 68,45 69,55 73,55 C 77,55 78,40 82,40 C 86,40 87,55 91,55 C 95,55 96,30 100,30" fill="none" stroke={BLUE} strokeWidth="1.5" />
                                {/* Data points */}
                                <circle cx="0" cy="75" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="9" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="18" cy="75" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="27" cy="50" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="36" cy="60" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="45" cy="30" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="55" cy="60" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="64" cy="45" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="73" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="82" cy="40" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="91" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                                <circle cx="100" cy="30" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                              </svg>
                              {/* X-axis labels */}
                              <div style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: GRAY }}>
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                              </div>
                            </div>
                          </div>

                          {/* RECENT ACTIVITIES */}
                          <div style={{ height: '90px', backgroundColor: WHITE, borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0' }}>
                            <div style={{ fontSize: '10px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Recent Activities</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { t: 'Sales Order #SO-1055', d: 'created by Admin', time: '10 min ago', c: BLUE, bg: '#EFF6FF' },
                                { t: 'Purchase Bill #PB-2054', d: 'created by User', time: '25 min ago', c: '#f97316', bg: '#fff7ed' },
                                { t: 'Payment Received', d: 'from Al-Balad Trading', time: '1 hour ago', c: '#16a34a', bg: '#F0FDF4' },
                              ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.c, fontSize: '8px', fontWeight: 'bold' }}>{item.t.charAt(0)}</div>
                                    <div>
                                      <div style={{ fontSize: '8px', fontWeight: '600', color: DARK }}>{item.t}</div>
                                      <div style={{ fontSize: '6px', color: GRAY }}>{item.d}</div>
                                    </div>
                                  </div>
                                  <div style={{ fontSize: '6px', color: GRAY }}>{item.time}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Top Products + Cash Flow */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0 }}>
                          
                          {/* TOP PRODUCTS */}
                          <div style={{ flex: 1, backgroundColor: WHITE, borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                              <div style={{ fontSize: '10px', fontWeight: '700', color: DARK }}>Top Products</div>
                              <div style={{ fontSize: '7px', color: GRAY }}>This Year <ChevronDown size={6} /></div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { n: 'Product Name', v: 'QAR 45,000', c: BLUE, bg: '#EFF6FF' },
                                { n: 'Product Name', v: 'QAR 30,000', c: '#16a34a', bg: '#F0FDF4' },
                                { n: 'Product Name', v: 'QAR 25,000', c: '#f97316', bg: '#fff7ed' },
                                { n: 'Product Name', v: 'QAR 18,000', c: '#a855f7', bg: '#faf5ff' },
                                { n: 'Product Name', v: 'QAR 12,000', c: '#3b82f6', bg: '#eff6ff' },
                              ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 0' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      <Box size={8} color={item.c} />
                                    </div>
                                    <span style={{ fontSize: '8px', color: DARK, fontWeight: '500' }}>{item.n}</span>
                                  </div>
                                  <span style={{ fontSize: '8px', color: DARK, fontWeight: '700' }}>{item.v}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CASH FLOW OVERVIEW */}
                          <div style={{ height: '90px', backgroundColor: WHITE, borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0' }}>
                            <div style={{ fontSize: '10px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Cash Flow Overview</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {[
                                  { l: 'Inflow', v: 'QAR 300,000', c: '#16a34a' },
                                  { l: 'Outflow', v: 'QAR 220,000', c: '#ef4444' },
                                  { l: 'Net Cash Flow', v: 'QAR 80,000', c: BLUE },
                                ].map((item, idx) => (
                                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.c }}></div>
                                      <span style={{ fontSize: '7px', color: idx === 2 ? BLUE : GRAY, fontWeight: idx === 2 ? '600' : '400' }}>{item.l}</span>
                                    </div>
                                    <span style={{ fontSize: '7px', color: DARK, fontWeight: '600' }}>{item.v}</span>
                                  </div>
                                ))}
                              </div>
                              {/* Simple CSS donut chart */}
                              <div style={{ 
                                width: '40px', height: '40px', borderRadius: '50%', 
                                background: `conic-gradient(#16a34a 0% 60%, #ef4444 60% 100%)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                              }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: WHITE, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                  <span style={{ fontSize: '8px', fontWeight: '800', color: DARK, lineHeight: 1 }}>80K</span>
                                  <span style={{ fontSize: '5px', color: GRAY }}>Net</span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Silver Base */}
              <div style={{
                height: '12px',
                width: '115%',
                background: 'linear-gradient(to bottom, #E2E8F0, #94A3B8)',
                borderRadius: '0 0 16px 16px',
                position: 'relative',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
                display: 'flex', justifyContent: 'center'
              }}>
                <div style={{ width: '80px', height: '3px', backgroundColor: '#CBD5E1', borderRadius: '0 0 4px 4px', marginTop: '0' }}></div>
              </div>
              
              {/* MOBILE PHONE MOCKUP — overlapping right side */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-60px',
                width: '140px',
                height: '290px',
                borderRadius: '24px',
                border: '6px solid #1a202c',
                backgroundColor: WHITE,
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(0,0,0,0.32)',
                zIndex: 20,
                display: 'flex', flexDirection: 'column'
              }}>
                {/* Phone header */}
                <div style={{ backgroundColor: WHITE, padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: WHITE, fontSize: '8px', fontWeight: 'bold' }}>9</span>
                    </div>
                    <span style={{ color: DARK, fontSize: '9px', fontWeight: '700' }}>iManage360</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <Search size={10} color={DARK} />
                    <Menu size={10} color={DARK} />
                  </div>
                </div>

                {/* Phone body */}
                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#F8FAFC', flex: 1, overflow: 'hidden' }}>
                  
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: DARK }}>Dashboard</div>
                    <div style={{ fontSize: '7px', color: GRAY, display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Search size={6} /> May 01 - May 31, 2024
                    </div>
                  </div>

                  {/* Mobile Stat Card + Chart */}
                  <div style={{ backgroundColor: WHITE, borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ fontSize: '8px', color: GRAY }}>Total Sales</div>
                      <ChevronDown size={8} color={GRAY} />
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: DARK }}>QAR 245,000</div>
                    <div style={{ fontSize: '7px', color: '#16a34a', fontWeight: '500', marginBottom: '8px' }}>+12.5% vs last month</div>
                    
                    {/* Mobile Line Chart SVG */}
                    <div style={{ position: 'relative', width: '100%', height: '40px', display: 'flex', alignItems: 'flex-end' }}>
                      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                        <defs>
                          <linearGradient id="mobileChartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor={BLUE} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={BLUE} stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0,75 C 4,75 5,55 9,55 C 13,55 14,75 18,75 C 22,75 23,50 27,50 C 31,50 32,60 36,60 C 40,60 41,30 45,30 C 50,30 50,60 55,60 C 59,60 60,45 64,45 C 68,45 69,55 73,55 C 77,55 78,40 82,40 C 86,40 87,55 91,55 C 95,55 96,30 100,30 L 100,100 L 0,100 Z" fill="url(#mobileChartGradient)" />
                        <path d="M 0,75 C 4,75 5,55 9,55 C 13,55 14,75 18,75 C 22,75 23,50 27,50 C 31,50 32,60 36,60 C 40,60 41,30 45,30 C 50,30 50,60 55,60 C 59,60 60,45 64,45 C 68,45 69,55 73,55 C 77,55 78,40 82,40 C 86,40 87,55 91,55 C 95,55 96,30 100,30" fill="none" stroke={BLUE} strokeWidth="2.5" />
                        {/* Data points */}
                        <circle cx="0" cy="75" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="9" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="18" cy="75" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="27" cy="50" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="36" cy="60" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="45" cy="30" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="55" cy="60" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="64" cy="45" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="73" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="82" cy="40" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="91" cy="55" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                        <circle cx="100" cy="30" r="1.5" fill={WHITE} stroke={BLUE} strokeWidth="1" />
                      </svg>
                    </div>
                  </div>

                  {/* Modules Grid */}
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: DARK, marginBottom: '6px' }}>Modules</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px' }}>
                      {[
                        { l: 'Sales CRM', ic: ShoppingBag, c: BLUE, bg: '#EFF6FF' },
                        { l: 'Procurement', ic: ShoppingCart, c: '#f97316', bg: '#fff7ed' },
                        { l: 'Inventory', ic: Box, c: '#16a34a', bg: '#F0FDF4' },
                        { l: 'Finance', ic: DollarSign, c: '#a855f7', bg: '#faf5ff' },
                        { l: 'HR Mgmt', ic: Users, c: '#ef4444', bg: '#FEF2F2' },
                        { l: 'Invoicing', ic: FileText, c: '#0891b2', bg: '#ecfeff' },
                      ].map((item, idx) => (
                        <div key={idx} style={{ backgroundColor: WHITE, borderRadius: '6px', padding: '6px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <item.ic size={12} color={item.c} />
                          </div>
                          <span style={{ fontSize: '7px', fontWeight: '500', color: DARK, textAlign: 'center' }}>{item.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: DARK, marginBottom: '6px' }}>Recent Activities</div>
                    <div style={{ backgroundColor: WHITE, borderRadius: '6px', padding: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, fontSize: '7px', fontWeight: 'bold' }}>S</div>
                          <div>
                            <div style={{ fontSize: '7px', fontWeight: '700', color: DARK }}>Sales Order #SO-1055</div>
                            <div style={{ fontSize: '6px', color: GRAY }}>created by Admin</div>
                          </div>
                        </div>
                        <div style={{ fontSize: '6px', color: GRAY }}>10 min ago</div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316', fontSize: '7px', fontWeight: 'bold' }}>P</div>
                          <div>
                            <div style={{ fontSize: '7px', fontWeight: '700', color: DARK }}>Purchase Bill #PB-2054</div>
                            <div style={{ fontSize: '6px', color: GRAY }}>created by User</div>
                          </div>
                        </div>
                        <div style={{ fontSize: '6px', color: GRAY }}>25 min ago</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* END SCALED WRAPPER */}
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3 — VALUE PROPOSITION */}
      <div id="features" style={{ backgroundColor: LIGHT_BLUE, padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: NAVY, marginBottom: '24px' }}>Built for the Way You Work</h2>
          <p style={{ fontSize: '18px', color: GRAY, lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
            Every business runs differently — iManage360 is designed to adapt, not the other way around. Choose the modules you need, configure them to match your workflows, and scale up as your business grows. No rigid templates, no unnecessary complexity.
          </p>
        </div>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'
        }}>
          {[
            { i: Settings, t: "Fully Customizable", d: "Turn modules on or off based on what your business actually needs" },
            { i: Briefcase, t: "Built for Any Industry", d: "From retail to logistics, healthcare to professional services" },
            { i: Cloud, t: "Cloud-Based Access", d: "Manage your business from anywhere, on any device" },
            { i: Shield, t: "Secure & Role-Based", d: "Granular permissions keep your data protected" },
            { i: Zap, t: "Local Support, Global Reach", d: "Backed by a team that understands businesses across regions" }
          ].map((f, i) => (
            <div key={i} style={{
              backgroundColor: WHITE, borderRadius: '12px', padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              display: 'flex', alignItems: 'flex-start', gap: '16px',
              textAlign: 'left'
            }}>
              <div style={{
                flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%',
                backgroundColor: LIGHT_BLUE,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <f.i color={BLUE} size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>{f.t}</div>
                <div style={{ fontSize: '14px', color: GRAY, lineHeight: '1.6', margin: 0 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4 — CLOSING CTA */}
      <div style={{ backgroundColor: WHITE, position: 'relative', paddingBottom: '0' }}>
        {/* Wave SVG transitioning from LIGHT_BLUE to WHITE */}
        <div style={{ lineHeight: 0, backgroundColor: LIGHT_BLUE }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={WHITE} />
          </svg>
        </div>

        {/* CTA Card */}
        <div style={{ padding: '0 24px 64px' }}>
          <div style={{
            maxWidth: '1000px', margin: '0 auto',
            backgroundColor: WHITE,
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '1px solid #E2E8F0',
            padding: '48px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: NAVY, marginBottom: '16px' }}>Ready to Simplify How You Run Your Business?</h2>
            <p style={{ fontSize: '18px', color: GRAY, marginBottom: '32px' }}>
              Talk to our team and see how iManage360 can be tailored to your operations.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 28px', backgroundColor: BLUE, color: WHITE,
                  border: 'none', borderRadius: '8px', fontSize: '16px',
                  fontWeight: '600', cursor: 'pointer'
                }}>Book a Demo</button>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 28px', backgroundColor: 'transparent',
                  color: BLUE, border: `2px solid ${BLUE}`,
                  borderRadius: '8px', fontSize: '16px',
                  fontWeight: '600', cursor: 'pointer'
                }}>Contact Sales</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 — FOOTER with wave */}
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
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px'
          }}>
            {/* Col 1 */}
            <div>
              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  backgroundColor: WHITE,
                  borderRadius: '50%',
                  padding: '2px',
                  display: 'inline-flex',
                  flexShrink: 0
                }}>
                  <img
                    src="/logo.png"
                    alt="iTeq Solution Center"
                    style={{
                      height: '44px',
                      width: '44px',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <span style={{ fontSize: '18px', fontWeight: '800', color: WHITE }}>iManage360</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Innovate. Integrate. Elevate.
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginTop: '8px' }}>
                iManage360 is an all-in-one, fully customizable ERP solution developed by iTeq Solution Center — built to serve businesses across any country and industry.
              </div>
            </div>

            {/* Col 2 */}
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

            {/* Col 3 */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Contact Info</div>
              <a href="https://iteqsolutioncenter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>Website: iteqsolutioncenter.com</a>
              <a href="https://wa.me/97450761751" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</a>
              <a href="https://wa.me/94776206033" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textDecoration: 'none' }}>🇱🇰 Sri Lanka (WhatsApp): +94 776 206 033</a>
            </div>

            {/* Col 4 */}
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Follow Us</div>
              {/* FLAG: Real social URLs not yet provided — placeholder links below */}
              <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '14px', textDecoration: 'none' }}>Facebook</a>
            </div>
          </div>

          <div style={{
            marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.15)',
            padding: '24px', textAlign: 'center',
            fontSize: '13px', color: 'rgba(255,255,255,0.5)'
          }}>
            © 2026 iTeq Solution Center. All rights reserved.
          </div>
        </div>
      </div>

    </div>
  );
}
