const fs = require('fs');
const path = require('path');

const APP_DIR = path.join('d:', 'Oshadhi', 'ITEQ', 'imanage360-website', 'app');

function updateFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');

    // 1. Update navLinks
    content = content.replace(
        /\{\s*label:\s*'Pricing',\s*href:\s*'\/pricing'\s*\}/g,
        "{ label: 'Plans',      href: '/pricing' }"
    );

    // 2. Update Footer description
    content = content.replace(
        /iManage360 is an all-in-one ERP solution by iTeq Solution Center\./g,
        "iManage360 is an all-in-one, fully customizable ERP solution developed by iTeq Solution Center — built to serve businesses across any country and industry."
    );

    // 3. Update Footer Quick Links array
    content = content.replace(
        /\['Home',\s*'Features',\s*'Modules',\s*'Pricing',\s*'About Us',\s*'Contact'\]/g,
        "['Home', 'Features', 'Modules', 'Industries', 'Plans', 'About Us', 'Contact']"
    );

    // 4. Update Contact Info block
    const contactInfoPattern = /(<div[^>]*>\s*Contact Info\s*<\/div>)(.*?)(<\/div>\s*<div>\s*<div[^>]*>\s*Follow Us\s*<\/div>)/s;
    const replacement = `
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>Website: iteqsolutioncenter.com</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇶🇦 Qatar (WhatsApp): +974 5076 1751</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>🇱🇰 Sri Lanka (WhatsApp): [insert number]</div>
`;
    content = content.replace(contactInfoPattern, (match, p1, p2, p3) => {
        return p1 + replacement + p3;
    });

    // 5. Update Copyright year
    content = content.replace(/© 2025 iTeq Solution Center/g, "© 2026 iTeq Solution Center");

    fs.writeFileSync(filepath, content, 'utf-8');
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat && stat.isDirectory()) {
            walk(filepath);
        } else if (file.endsWith('.tsx')) {
            updateFile(filepath);
            console.log(`Updated ${filepath}`);
        }
    }
}

walk(APP_DIR);
