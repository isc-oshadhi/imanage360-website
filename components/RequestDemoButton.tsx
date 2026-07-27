"use client";

import { useState } from 'react';

const BLUE = '#2563EB';
const WHITE = '#FFFFFF';
const DARK = '#0F172A';
const GRAY = '#64748B';

export default function RequestDemoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    country: '',
    email: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    const subject = encodeURIComponent("Demo Request - iManage360");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Country: ${formData.country}\n` +
      `Company: ${formData.company}`
    );
    window.location.href = `mailto:info@iteqsolutioncenter.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFormData({ name: '', mobile: '', country: '', email: '', company: '' });
    }, 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    border: '1.5px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '14px',
    color: DARK,
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '8px 20px', backgroundColor: BLUE,
          border: 'none', borderRadius: '8px', color: WHITE,
          fontWeight: '600', cursor: 'pointer', fontSize: '14px'
        }}
      >
        Request a Demo
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: WHITE, borderRadius: '16px', padding: '32px',
            width: '100%', maxWidth: '500px', position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'none', border: 'none', fontSize: '24px',
                cursor: 'pointer', color: GRAY
              }}
            >
              &times;
            </button>

            <h2 style={{ margin: '0 0 24px', color: DARK, fontSize: '24px', fontWeight: '800' }}>
              Request a Demo
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#16a34a', margin: '0 0 8px' }}>Request Received!</h3>
                <p style={{ color: GRAY, margin: 0 }}>We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: DARK }}>Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="John Doe" />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: DARK }}>Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="john@company.com" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: DARK }}>Mobile Number</label>
                    <input required name="mobile" value={formData.mobile} onChange={handleChange} style={inputStyle} placeholder="+1 234 567 890" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: DARK }}>Country</label>
                    <input required name="country" value={formData.country} onChange={handleChange} style={inputStyle} placeholder="e.g. United States" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: DARK }}>Company Name</label>
                  <input required name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Company Ltd." />
                </div>

                <button 
                  type="submit"
                  style={{
                    width: '100%', padding: '12px', marginTop: '8px',
                    backgroundColor: BLUE, color: WHITE, border: 'none',
                    borderRadius: '8px', fontSize: '16px', fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
