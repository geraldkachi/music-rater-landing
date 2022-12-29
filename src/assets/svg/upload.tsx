import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#FFF0CC" />
    <path
      d="M22.667 36.667a3.333 3.333 0 1 1 6.666 0v4a3.333 3.333 0 1 1-6.666 0v-4ZM34.667 36.667a3.333 3.333 0 1 1 6.666 0v4a3.333 3.333 0 0 1-6.666 0v-4Z"
      fill="#FFC94C"
    />
    <path
      d="M45.333 38.667v-5.334C45.333 25.97 39.363 20 32 20c-7.364 0-13.333 5.97-13.333 13.333v5.334M26 44a3.333 3.333 0 0 1-3.333-3.333v-4a3.333 3.333 0 1 1 6.666 0v4A3.333 3.333 0 0 1 26 44Zm12 0a3.333 3.333 0 0 1-3.333-3.333v-4a3.333 3.333 0 1 1 6.666 0v4A3.333 3.333 0 0 1 38 44Z"
      stroke="#FFC94C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
