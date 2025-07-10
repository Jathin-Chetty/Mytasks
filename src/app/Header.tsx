import React from 'react';

export default function Header() {
  const userDetails = {
    name: 'Jathin Chetty',
    reg: '12221556',
    roll: '57',
    section: '06',
  };
  return (
    <header
      style={{
        width: '100%',
        background: 'var(--retro-card)',
        color: 'var(--retro-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.2em 2em',
        fontFamily: 'var(--retro-font)',
        boxShadow: '0 2px 16px #0004',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        flexWrap: 'wrap',
        gap: '1em',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '2em', letterSpacing: '0.03em' }}>
        My Practicals
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          fontSize: '1em',
          lineHeight: 1.4,
        }}
      >
        <span><b>Name:</b> {userDetails.name}</span>
        <span><b>Reg:</b> {userDetails.reg}</span>
        <span><b>Roll:</b> {userDetails.roll}</span>
        <span><b>Section:</b> {userDetails.section}</span>
      </div>
    </header>
  );
} 