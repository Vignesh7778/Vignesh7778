const fs = require('fs');
const path = require('path');

function generateTerminalSVG() {
  const timestamp = new Date().toISOString().split('T')[0];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320" width="100%" height="100%">
  <defs>
    <linearGradient id="termBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
  </defs>
  <style>
    .term-text { font-family: 'JetBrains Mono', monospace; font-size: 13px; fill: #C9D1D9; }
    .green { fill: #00FF66; font-weight: bold; }
    .cyan { fill: #00D2FF; }
    .yellow { fill: #FFBD2E; }
    .dim { fill: #8B949E; }

    .line-anim { opacity: 0; animation: fadeIn 0.4s ease-forward forwards; }
    .l1 { animation-delay: 0.2s; }
    .l2 { animation-delay: 0.5s; }
    .l3 { animation-delay: 0.8s; }
    .l4 { animation-delay: 1.1s; }
    .l5 { animation-delay: 1.4s; }
    .l6 { animation-delay: 1.7s; }
    .l7 { animation-delay: 2.0s; }
    .l8 { animation-delay: 2.3s; }
    .l9 { animation-delay: 2.6s; }

    @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

    .blinker { fill: #00FF66; animation: blink 1s step-start infinite; }
    @keyframes blink { 50% { opacity: 0; } }
  </style>

  <rect width="900" height="320" rx="10" fill="url(#termBg)" stroke="#30363D" stroke-width="1.5"/>
  <rect x="0" y="0" width="900" height="36" rx="10" fill="#21262D"/>
  <circle cx="20" cy="18" r="6" fill="#FF5F56"/>
  <circle cx="38" cy="18" r="6" fill="#FFBD2E"/>
  <circle cx="56" cy="18" r="6" fill="#27C93F"/>
  <text x="76" y="22" class="dim" font-family="monospace" font-size="12">vicky@ubuntu: ~$ ./system_diagnostics.sh</text>

  <g transform="translate(25, 65)" class="term-text">
    <text y="0" class="green line-anim l1">vicky@ubuntu:~$ systemctl status developer-profile.service</text>
    <text y="24" class="dim line-anim l2">● developer-profile.service - Vicky Profile Daemon</text>
    <text y="44" class="line-anim l3">   Loaded: <tspan class="green">loaded</tspan> (/etc/systemd/system/developer-profile.service; enabled)</text>
    <text y="64" class="line-anim l4">   Active: <tspan class="green">active (running)</tspan> since ${timestamp}</text>
    <text y="84" class="line-anim l5">   Tasks: 42 (limit: 4915)</text>
    <text y="104" class="line-anim l6">   Memory: 128.4M [████████████████████████████████░░░] 88%</text>
    <text y="130" class="cyan line-anim l7">------------------------------------------------------------------------</text>
    <text y="152" class="line-anim l8"><tspan class="green">[✓] KERNEL ROLE</tspan>     : Full Stack Developer &amp; Cybersecurity Specialist</text>
    <text y="174" class="line-anim l8"><tspan class="green">[✓] BACKEND STACK</tspan>   : Java, Spring Boot, REST APIs, Hibernate, MySQL</text>
    <text y="196" class="line-anim l8"><tspan class="green">[✓] FRONTEND STACK</tspan>  : Angular, React, JavaScript (ES6+), HTML5, CSS3</text>
    <text y="218" class="line-anim l8"><tspan class="green">[✓] SECURITY VECTOR</tspan> : Application Hardening, Cryptography, OWASP Audits</text>
    <text y="240" class="yellow line-anim l9">vicky@ubuntu:~$ <tspan class="blinker">█</tspan></text>
  </g>
</svg>`;

  const outputPath = path.join(__dirname, '../assets/terminal.svg');
  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`[+] Generated animated terminal.svg successfully at ${outputPath}`);
}

generateTerminalSVG();
