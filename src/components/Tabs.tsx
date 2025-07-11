"use client";
import React, { useState, Children, ReactElement } from "react";

export default function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const tabs = Children.toArray(children) as ReactElement<{ label: string }>[];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.props.label}
            onClick={() => setActive(idx)}
            style={{
              padding: "8px 16px",
              border: "none",
              borderBottom: active === idx ? "2px solid #ffb86c" : "2px solid transparent",
              background: "none",
              color: active === idx ? "#ffb86c" : "#f8f8f2",
              fontWeight: active === idx ? "bold" : "normal",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]}</div>
    </div>
  );
} 