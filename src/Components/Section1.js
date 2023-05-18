import React, { useEffect, useRef, useState } from "react";

function Section1() {
  const [children, setChildren] = useState([]);
  const [offset, setOffset] = useState(0);

  let containerRef = useRef(null);

  useEffect(() => {
    setChildren(containerRef.current.children);
  }, []);

  //

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    // console.log(offset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (children) {
      var i = 0;
      for (i = 0; i < offset / 100 && i < 40; i++) {
        containerRef.current.children[i].style.opacity = "1";
      }
      for (i; i < 40; i++) {
        containerRef.current.children[i].style.opacity = "0.1";
      }
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, children]);
  return (
    <div className="section1" id="a">
      <div className="p-display">
        <p ref={containerRef}>
          <span>In</span> <span>Chronicle</span> <span>everything</span>{" "}
          <span>is</span> <span>made</span> <span>with</span>{" "}
          <span>Blocks</span> <span>that</span> <span>come</span>{" "}
          <span>with</span> <span>pixel</span> <span>perfect</span>{" "}
          <span>design,</span> <span>interactivity</span> <span>and</span>{" "}
          <span>motion</span> <span>out</span> <span>of</span> <span>the</span>{" "}
          <span>box.</span> <span>Instead</span> <span>of</span>{" "}
          <span>designing</span> <span>from</span> <span>scratch,</span>{" "}
          <span>simply</span> <span>choose</span> <span>the</span>{" "}
          <span>right</span> <span>one</span> <span>from</span> <span>our</span>{" "}
          <span>library</span> <span>of</span> <span>blocks</span>{" "}
          <span>and</span> <span>see</span> <span>the</span> <span>magic</span>{" "}
          <span>unfold.</span>
        </p>
      </div>
    </div>
  );
}

export default Section1;
