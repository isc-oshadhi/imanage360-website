import os
import re

APP_DIR = r"d:\Oshadhi\ITEQ\imanage360-website\app"

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update navLinks
    content = re.sub(
        r"\{\s*label:\s*'Pricing',\s*href:\s*'/pricing'\s*\}",
        r"{ label: 'Plans',      href: '/pricing' }",
        content
    )

    # 2. Update Footer description
    content = re.sub(
        r"iManage360 is an all-in-one ERP solution by iTeq Solution Center\.",
        r"iManage360 is an all-in-one, fully customizable ERP solution developed by iTeq Solution Center — built to serve businesses across any country and industry.",
        content
    )

    # 3. Update Footer Quick Links array
    content = re.sub(
        r"\['Home',\s*'Features',\s*'Modules',\s*'Pricing',\s*'About Us',\s*'Contact'\]",
        r"['Home', 'Features', 'Modules', 'Industries', 'Plans', 'About Us', 'Contact']",
        content
    )

    # 4. Update Contact Info block
    # We will look for the Contact Info section and replace its contents.
    # It starts with `<div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Contact Info</div>`
    # and ends before `<div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Follow Us</div>`
    
    contact_info_pattern = r"(<div[^>]*>Contact Info</div>\s*)(.*?)(\s*<div[^>]*>Follow Us</div>)"
    
    new_contact_info = r"""
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>Website: iteqsolutioncenter.com</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇱🇰 Sri Lanka (WhatsApp): [insert number]</div>
            </div>
            <div>
    """
    # Wait, the structure is:
    # <div>
    #   <div>Contact Info</div>
    #   ...
    # </div>
    # <div>
    #   <div>Follow Us</div>
    
    # Let's just do a simpler replacement if the regex is too brittle.
    # The current contact info usually has two lines:
    # 🌐 iteqsolutioncenter.com
    # 📞 +94776206033
    
    def contact_replacer(match):
        prefix = match.group(1)
        suffix = match.group(3)
        # We need to format the new lines based on whether it's the inline style (app/pricing/page.tsx)
        # or the block style (app/page.tsx). 
        # But actually, providing simple divs works for both.
        replacement = """
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>Website: iteqsolutioncenter.com</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇱🇰 Sri Lanka (WhatsApp): [insert number]</div>
            </div>
            <div>"""
        return prefix + replacement + suffix

    # Actually, the closing </div> of Contact Info and opening <div> of Follow Us is between them.
    # Let's just match the Contact Info header to the Follow Us header.
    contact_info_pattern = r"(<div[^>]*>\s*Contact Info\s*</div>)(.*?)(</div>\s*<div>\s*<div[^>]*>\s*Follow Us\s*</div>)"
    
    def replacer2(m):
        prefix = m.group(1)
        suffix = m.group(3)
        lines = """
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>Website: iteqsolutioncenter.com</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇱🇰 Sri Lanka (WhatsApp): [insert number]</div>
"""
        return prefix + lines + suffix
        
    content = re.sub(contact_info_pattern, replacer2, content, flags=re.DOTALL)

    # 5. Update Copyright year
    content = re.sub(
        r"© 2025 iTeq Solution Center",
        r"© 2026 iTeq Solution Center",
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


for root, dirs, files in os.walk(APP_DIR):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            update_file(filepath)
            print(f"Updated {filepath}")
