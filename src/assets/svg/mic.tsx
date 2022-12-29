import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={504}
    height={223}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      transform="rotate(33.17 193.032 0)"
      fill="url(#a)"
      d="M193.032 0h370.765v352.804H193.032z"
    />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00058 0 0 .0006 -.214 0)" />
      </pattern>
      <image
        id="b"
        width={2480}
        height={1653}
      />
    </defs>
  </svg>
)
export default SvgComponent