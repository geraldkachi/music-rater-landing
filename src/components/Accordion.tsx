import {MutableRefObject, ReactNode, useRef, useState} from "react";

import PlusIcon from "../assets/svg/PlusIcon";
import CollapseIcon from "../assets/svg/CollapseIcon";

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function Accordion({
  heading,
  showHeader = true,
  open = false,
  children,
  activeClass = "",
  otherClasses,
}: AccordionProps) {
  const [openAccordion, setopenAccordion] = useState(false);

  const toggleAccordion = () => {
    setopenAccordion(!openAccordion);
  };
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`relative bg-white rounded-lg max-w-3xl mb-4 ${
        openAccordion ? activeClass : ""
      } ${otherClasses || ""}`}
    >
      {showHeader && (
        <div
          className={`w-full rounded-lg px-5 ${
            open || openAccordion
              ? ""
              : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
          }`}
        >
          <div
            onClick={toggleAccordion}
            className={`flex cursor-pointer items-center justify-between py-2 space-x-3 `}
          >
            <span style={{flexGrow: 2}} className="font-medium text-left">
              {heading}{" "}
            </span>
            <button type="button">
              {open || openAccordion ? (
                <CollapseIcon color="#4D55BC" />
              ) : (
                <PlusIcon color="#4D55BC" />
              )}
            </button>
          </div>
        </div>
      )}
      <div
        ref={ref}
        style={{
          maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
        }}
        className={`relative transition-all
        } overflow-hidden transition-all duration-[0.7rem]`}
      >
        <div className="px-5">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
