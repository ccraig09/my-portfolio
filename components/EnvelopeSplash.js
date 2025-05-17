import React, { useState } from "react";

// Elegant EnvelopeSplash Component with subtle animation
export default function EnvelopeSplash({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const [fade, setFade] = useState(false);

  // Handles flap animation and fading out the overlay after opening
  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onOpen) onOpen();
      }, 800); // match fade duration
    }, 900); // match flap animation duration
  };

  return (
    !fade && (
      <>
        <style>{`
          .envelope-overlay {
            position: fixed;
            z-index: 9999;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #fffef8;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.8s ease-in-out;
            opacity: ${fade ? 0 : 1};
          }
          .envelope-outer {
            width: 320px;
            max-width: 94vw;
            cursor: pointer;
            user-select: none;
            transition: box-shadow 0.3s;
            box-shadow: 0 8px 24px 0 rgba(0,0,0,0.16);
            border-radius: 14px;
            perspective: 1200px;
            animation: envelope-wiggle 3.2s infinite;
          }
          .envelope-outer:hover {
            box-shadow: 0 10px 28px 0 rgba(0,0,0,0.2);
          }
          .envelope-outer.opened {
            animation: none;
          }
          @keyframes envelope-wiggle {
            0%, 86% { transform: rotate(0deg);}
            90% { transform: rotate(-3deg);}
            93% { transform: rotate(3deg);}
            96% { transform: rotate(-2deg);}
            100% { transform: rotate(0deg);}
          }
          .flap {
            transform-origin: top center;
            transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
            transform: rotateX(0deg);
            z-index: 3;
          }
          .envelope-outer.opened .flap {
            transform: rotateX(-145deg);
          }
          .envelope-content {
            opacity: 0;
            transition: opacity 0.5s ease-in;
            transition-delay: 0.2s;
          }
          .envelope-outer.opened .envelope-content {
            opacity: 1;
          }
        `}</style>
        <div className="envelope-overlay" aria-modal="true" tabIndex={-1}>
          <div
            className={`envelope-outer${opened ? " opened" : ""}`}
            tabIndex={0}
            role="button"
            aria-label="Open invitation envelope"
            onClick={opened ? undefined : handleOpen}
            onKeyPress={(e) =>
              (e.key === "Enter" || e.key === " ") && handleOpen()
            }
          >
            {/* SVG Envelope */}
            <svg
              viewBox="0 0 320 210"
              width="100%"
              style={{ display: "block" }}
            >
              {/* Envelope body */}
              <rect
                x="10"
                y="10"
                width="300"
                height="170"
                rx="16"
                fill="#111111"
                stroke="#d4af37"
                strokeWidth="1"
                style={{
                  filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))",
                }}
              />
              
              {/* Inner envelope content - visible when opened */}
              <g className="envelope-content">
                <rect
                  x="25" 
                  y="25" 
                  width="270" 
                  height="140"
                  rx="8"
                  fill="#1a1a1a"
                />
                <text
                  x="160"
                  y="105"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', serif"
                  fontWeight="bold"
                  fontSize="24"
                  fill="#d4af37"
                >
                  Invitation
                </text>
              </g>
              
              {/* Flap - stays visible and flips up */}
              <polygon
                className="flap"
                points="10,10 160,90 310,10"
                fill="#111111"
                stroke="#d4af37"
                strokeWidth="1"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
                }}
              />
              
              {/* Subtle gold detail on flap */}
              <path
                className="flap"
                d="M40,20 Q160,30 280,20 Q160,90 40,20"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.5"
              />
              
              {/* Initials */}
              <text
                className="flap"
                x="160"
                y="55"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontWeight="bold"
                fontSize="40"
                fill="#d4af37"
              >
                J &amp; C
              </text>
            </svg>
            
            {/* Click prompt */}
            {!opened && (
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  color: "#b38b58",
                  fontWeight: 600,
                  marginTop: "-8px",
                  fontSize: "1.12rem",
                  letterSpacing: 0.5,
                  opacity: 0.95,
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                Click to open invitation
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
}
