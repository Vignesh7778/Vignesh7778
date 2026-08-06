const fs = require('fs');
const path = require('path');

function generatePortraitSVG() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 350" width="100%" height="100%">
  <defs>
    <linearGradient id="termBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
    <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00FF66"/>
      <stop offset="100%" stop-color="#00D2FF"/>
    </linearGradient>
  </defs>
  <style>
    .term-border { stroke: url(#glowLine); stroke-width: 1.5; fill: url(#termBg); filter: drop-shadow(0 0 6px rgba(0,255,102,0.3)); }
    .header-text { font-family: 'JetBrains Mono', monospace; font-size: 12px; fill: #8B949E; }
    
    /* ASCII Line Staggered Typing Animations */
    .ascii-line { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: #00FF66; opacity: 0; animation: fadeInLine 0.5s ease-forward forwards; }
    .line-1 { animation-delay: 0.2s; }
    .line-2 { animation-delay: 0.4s; }
    .line-3 { animation-delay: 0.6s; }
    .line-4 { animation-delay: 0.8s; }
    .line-5 { animation-delay: 1.0s; }
    .line-6 { animation-delay: 1.2s; }
    
    .info-line { font-family: monospace; font-size: 11px; opacity: 0; animation: fadeInLine 0.5s ease-forward forwards; }
    .info-1 { animation-delay: 1.5s; fill: #00D2FF; }
    .info-2 { animation-delay: 1.7s; fill: #FFFFFF; }
    .info-3 { animation-delay: 1.9s; fill: #FFFFFF; }
    .info-4 { animation-delay: 2.1s; fill: #FFFFFF; }
    .info-5 { animation-delay: 2.3s; fill: #00D2FF; }
    .info-6 { animation-delay: 2.5s; fill: #00FF66; }

    @keyframes fadeInLine {
      0% { opacity: 0; transform: translateY(4px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Scanline Animation */
    .scanline {
      stroke: #00FF66; stroke-width: 1; stroke-opacity: 0.25;
      animation: scan 4s linear infinite;
    }
    @keyframes scan {
      0% { transform: translateY(0px); }
      100% { transform: translateY(330px); }
    }

    /* Blinking Cursor */
    .blinker { fill: #00FF66; animation: blink 1s step-start infinite; }
    @keyframes blink { 50% { opacity: 0; } }
  </style>

  <!-- Terminal Window Frame -->
  <rect x="5" y="5" width="440" height="340" rx="10" class="term-border"/>
  
  <!-- Terminal Top Bar -->
  <rect x="5" y="5" width="440" height="30" rx="10" fill="#21262D"/>
  <circle cx="22" cy="20" r="5" fill="#FF5F56"/>
  <circle cx="38" cy="20" r="5" fill="#FFBD2E"/>
  <circle cx="54" cy="20" r="5" fill="#27C93F"/>
  <text x="72" y="24" class="header-text">vicky@github: ~$ ./portrait.sh --ascii</text>

  <!-- Moving Scanline Effect -->
  <line x1="5" y1="35" x2="445" y2="35" class="scanline"/>

  <!-- Animated ASCII Wordmark for VICKY -->
  <g transform="translate(15, 20)">
    <text x="35" y="65" class="ascii-line line-1">  ██╗   ██╗██╗ ██████╗██╗  ██╗██╗   ██╗</text>
    <text x="35" y="80" class="ascii-line line-2">  ██║   ██║██║██╔════╝██║  ██║╚██╗ ██╔╝</text>
    <text x="35" y="95" class="ascii-line line-3">  ██║   ██║██║██║     ███████║ ╚████╔╝ </text>
    <text x="35" y="110" class="ascii-line line-4">  ╚██╗ ██╔╝██║██║     ██╔══██║  ╚██╔╝  </text>
    <text x="35" y="125" class="ascii-line line-5">   ╚████╔╝ ██║╚██████╗██║  ██║   ██║   </text>
    <text x="35" y="140" class="ascii-line line-6">    ╚═══╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   </text>

    <!-- Developer Specs Output -->
    <text x="20" y="175" class="info-line info-1">===================================================</text>
    <text x="20" y="195" class="info-line info-2"> USER        : Vicky (@Vignesh7778)</text>
    <text x="20" y="215" class="info-line info-3"> ROLE        : Full Stack Developer</text>
    <text x="20" y="235" class="info-line info-4"> SPECS       : Java, Spring Boot, React, Angular</text>
    <text x="20" y="255" class="info-line info-5">===================================================</text>
    <text x="20" y="280" class="info-line info-6">&gt; STATUS     : ACTIVE &amp; READY TO CODE <tspan class="blinker">█</tspan></text>
  </g>
</svg>`;

  const outputPath = path.join(__dirname, '../assets/portrait.svg');
  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`[+] Generated animated portrait.svg successfully at ${outputPath}`);
}

generatePortraitSVG();
