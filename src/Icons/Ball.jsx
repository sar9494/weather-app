import * as React from "react";
export const Ball = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    fill="none"
    {...props}
  >
    <circle cx={64} cy={64} r={64} fill={"green"} />
    <circle
      cx={64}
      cy={64}
      r={64}
      fill="url(#a)"
      fillOpacity={0.35}
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 64 -64 0 64 64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
