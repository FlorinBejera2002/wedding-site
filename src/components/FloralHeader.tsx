export default function FloralHeader() {
  return (
    <svg
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="floral-header"
      aria-hidden="true"
    >
      {/* Center stem */}
      <path d="M200 155 Q200 120 200 90" stroke="#b0c4de" strokeWidth="0.8" opacity="0.5" />

      {/* Left main branch */}
      <path d="M200 110 Q170 95 130 80" stroke="#b0c4de" strokeWidth="0.7" opacity="0.45" />
      <path d="M130 80 Q100 70 70 68" stroke="#b0c4de" strokeWidth="0.6" opacity="0.35" />
      <path d="M200 100 Q175 85 155 70" stroke="#b0c4de" strokeWidth="0.6" opacity="0.4" />

      {/* Right main branch */}
      <path d="M200 110 Q230 95 270 80" stroke="#b0c4de" strokeWidth="0.7" opacity="0.45" />
      <path d="M270 80 Q300 70 330 68" stroke="#b0c4de" strokeWidth="0.6" opacity="0.35" />
      <path d="M200 100 Q225 85 245 70" stroke="#b0c4de" strokeWidth="0.6" opacity="0.4" />

      {/* Left leaves */}
      <ellipse cx="110" cy="78" rx="12" ry="5" transform="rotate(-20 110 78)" fill="#b0c4de" opacity="0.18" />
      <ellipse cx="95" cy="74" rx="10" ry="4" transform="rotate(-15 95 74)" fill="#d4e4f0" opacity="0.22" />
      <ellipse cx="145" cy="82" rx="11" ry="4.5" transform="rotate(-25 145 82)" fill="#b0c4de" opacity="0.2" />
      <ellipse cx="160" cy="72" rx="9" ry="3.5" transform="rotate(-30 160 72)" fill="#d4e4f0" opacity="0.18" />
      <ellipse cx="80" cy="70" rx="10" ry="4" transform="rotate(-10 80 70)" fill="#c8d8ea" opacity="0.16" />

      {/* Right leaves */}
      <ellipse cx="290" cy="78" rx="12" ry="5" transform="rotate(20 290 78)" fill="#b0c4de" opacity="0.18" />
      <ellipse cx="305" cy="74" rx="10" ry="4" transform="rotate(15 305 74)" fill="#d4e4f0" opacity="0.22" />
      <ellipse cx="255" cy="82" rx="11" ry="4.5" transform="rotate(25 255 82)" fill="#b0c4de" opacity="0.2" />
      <ellipse cx="240" cy="72" rx="9" ry="3.5" transform="rotate(30 240 72)" fill="#d4e4f0" opacity="0.18" />
      <ellipse cx="320" cy="70" rx="10" ry="4" transform="rotate(10 320 70)" fill="#c8d8ea" opacity="0.16" />

      {/* Center top flower — large white/blue */}
      <circle cx="200" cy="65" r="10" fill="white" opacity="0.6" />
      <circle cx="200" cy="65" r="7" fill="#e8f0fa" opacity="0.7" />
      <ellipse cx="193" cy="60" rx="6" ry="4" transform="rotate(-30 193 60)" fill="white" opacity="0.55" />
      <ellipse cx="207" cy="60" rx="6" ry="4" transform="rotate(30 207 60)" fill="white" opacity="0.55" />
      <ellipse cx="195" cy="71" rx="5.5" ry="3.5" transform="rotate(20 195 71)" fill="#f0f5ff" opacity="0.5" />
      <ellipse cx="205" cy="71" rx="5.5" ry="3.5" transform="rotate(-20 205 71)" fill="#f0f5ff" opacity="0.5" />
      <circle cx="200" cy="65" r="3" fill="#c8d8ea" opacity="0.5" />

      {/* Left flower 1 — blue */}
      <circle cx="130" cy="72" r="7" fill="#d4e4f0" opacity="0.5" />
      <ellipse cx="125" cy="68" rx="5" ry="3" transform="rotate(-20 125 68)" fill="white" opacity="0.45" />
      <ellipse cx="135" cy="68" rx="5" ry="3" transform="rotate(20 135 68)" fill="#e0ecf7" opacity="0.45" />
      <ellipse cx="128" cy="76" rx="4.5" ry="2.8" transform="rotate(15 128 76)" fill="white" opacity="0.4" />
      <circle cx="130" cy="72" r="2.5" fill="#b0c4de" opacity="0.4" />

      {/* Left flower 2 — small white */}
      <circle cx="85" cy="65" r="5" fill="white" opacity="0.45" />
      <ellipse cx="81" cy="62" rx="4" ry="2.5" transform="rotate(-15 81 62)" fill="#f0f5ff" opacity="0.4" />
      <ellipse cx="89" cy="62" rx="4" ry="2.5" transform="rotate(15 89 62)" fill="white" opacity="0.4" />
      <circle cx="85" cy="65" r="2" fill="#c8d8ea" opacity="0.35" />

      {/* Right flower 1 — blue */}
      <circle cx="270" cy="72" r="7" fill="#d4e4f0" opacity="0.5" />
      <ellipse cx="265" cy="68" rx="5" ry="3" transform="rotate(-20 265 68)" fill="#e0ecf7" opacity="0.45" />
      <ellipse cx="275" cy="68" rx="5" ry="3" transform="rotate(20 275 68)" fill="white" opacity="0.45" />
      <ellipse cx="272" cy="76" rx="4.5" ry="2.8" transform="rotate(-15 272 76)" fill="white" opacity="0.4" />
      <circle cx="270" cy="72" r="2.5" fill="#b0c4de" opacity="0.4" />

      {/* Right flower 2 — small white */}
      <circle cx="315" cy="65" r="5" fill="white" opacity="0.45" />
      <ellipse cx="311" cy="62" rx="4" ry="2.5" transform="rotate(-15 311 62)" fill="white" opacity="0.4" />
      <ellipse cx="319" cy="62" rx="4" ry="2.5" transform="rotate(15 319 62)" fill="#f0f5ff" opacity="0.4" />
      <circle cx="315" cy="65" r="2" fill="#c8d8ea" opacity="0.35" />

      {/* Small buds along branches */}
      <circle cx="170" cy="78" r="3" fill="white" opacity="0.4" />
      <circle cx="155" cy="68" r="2.5" fill="#d4e4f0" opacity="0.35" />
      <circle cx="230" cy="78" r="3" fill="white" opacity="0.4" />
      <circle cx="245" cy="68" r="2.5" fill="#d4e4f0" opacity="0.35" />

      {/* Tiny accent dots */}
      <circle cx="100" cy="80" r="1.2" fill="#b0c4de" opacity="0.3" />
      <circle cx="180" cy="86" r="1" fill="#d4e4f0" opacity="0.25" />
      <circle cx="220" cy="86" r="1" fill="#d4e4f0" opacity="0.25" />
      <circle cx="300" cy="80" r="1.2" fill="#b0c4de" opacity="0.3" />
      <circle cx="115" cy="85" r="0.8" fill="white" opacity="0.3" />
      <circle cx="285" cy="85" r="0.8" fill="white" opacity="0.3" />
    </svg>
  )
}
