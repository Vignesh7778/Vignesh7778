const fs = require('fs');
const path = require('path');

function generateHeroSVG() {
  const timestamp = new Date().toISOString();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 240" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1117"/>
      <stop offset="50%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00FF66"/>
      <stop offset="50%" stop-color="#00D2FF"/>
      <stop offset="100%" stop-color="#00FF66"/>
    </linearGradient>
  </defs>
  <style>
    .prompt { font-family: 'JetBrains Mono', monospace; font-size: 16px; fill: #8B949E; }
    .hero-title { font-family: 'JetBrains Mono', monospace; font-weight: 900; font-size: 48px; fill: url(#textGrad); letter-spacing: 3px; filter: drop-shadow(0 0 10px rgba(0,255,102,0.3)); }
    .sub-role { font-family: monospace; font-size: 18px; fill: #00FF66; opacity: 0; animation: fadeInSub 1s ease-forward forwards 0.8s; }
    .blinker { animation: blink 1s step-start infinite; fill: #00FF66; }
    .scan-bar { stroke: #00FF66; stroke-width: 1; stroke-opacity: 0.2; animation: scan 3s linear infinite; }
    
    @keyframes fadeInSub { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes blink { 50% { opacity: 0; } }
    @keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(240px); } }
  </style>

  <!-- Outer Frame -->
  <rect width="1000" height="240" rx="12" fill="url(#bgGrad)" stroke="#30363D" stroke-width="1.5"/>
  <circle cx="25" cy="25" r="6" fill="#FF5F56"/>
  <circle cx="45" cy="25" r="6" fill="#FFBD2E"/>
  <circle cx="65" cy="25" r="6" fill="#27C93F"/>
  <text x="90" y="29" class="prompt">vicky@ubuntu-terminal:~ (zsh)</text>
  <line x1="0" y1="45" x2="1000" y2="45" stroke="#30363D" stroke-width="1"/>
  
  <line x1="0" y1="45" x2="1000" y2="45" class="scan-bar"/>

  <!-- Content -->
  <text x="50" y="115" class="hero-title">👋 VICKY</text>
  <text x="50" y="160" class="sub-role">&gt; FULL STACK DEVELOPER | CYBERSECURITY ENTHUSIAST | PROBLEM SOLVER</text>
  <text x="50" y="200" font-family="monospace" font-size="14" fill="#8B949E">[System Ready - Last Boot: ${timestamp}]<tspan class="blinker">█</tspan></text>
</svg>`;

  const outputPath = path.join(__dirname, '../assets/hero.svg');
  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`[+] Generated animated hero.svg successfully at ${outputPath}`);
}

generateHeroSVG();
