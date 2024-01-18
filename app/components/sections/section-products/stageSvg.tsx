import * as React from "react";

function Stage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={430}
      height={135}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx={215}
        cy={67.5}
        rx={214.5}
        ry={67.5}
        fill="url(#prefix__paint0_radial_1457_756)"
      />
      <path
        d="M427.5 67.5c0 8.394-5.409 16.752-16.05 24.67-10.605 7.889-26.077 15.079-45.376 21.152C327.5 125.461 274.087 133 215 133c-59.087 0-112.5-7.539-151.074-19.678-19.299-6.073-34.771-13.263-45.376-21.153C7.91 84.252 2.5 75.894 2.5 67.5c0-8.394 5.409-16.752 16.05-24.67 10.605-7.89 26.077-15.079 45.376-21.152C102.5 9.54 155.913 2 215 2c59.087 0 112.5 7.54 151.074 19.678 19.299 6.073 34.771 13.263 45.376 21.153 10.641 7.917 16.05 16.275 16.05 24.669z"
        stroke="#fff"
        strokeOpacity={0.2}
        strokeWidth={4}
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_1457_756"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 67.5 -214.5 0 215 67.5)"
        >
          <stop stopColor="#fff" stopOpacity={0.2} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Stage;