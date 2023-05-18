import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Section2() {
  const [offset, setOffset] = useState(0);
  const [time, setTime] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [isAnimated, setIsAnimated] = useState(0);
  const bar = useRef(10);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    console.log(window.pageYOffset);
    if (window.pageYOffset < 6700) {
      if (isAnimated !== 6700) {
        setAnimation(true);
        setTimeout(() => {
          setAnimation(false);
        }, 2000);
        setIsAnimated(6700);
      }
    } else if (window.pageYOffset < 8300) {
      if (isAnimated !== 8300) {
        setAnimation(true);
        setTimeout(() => {
          setAnimation(false);
        }, 2000);
        setIsAnimated(8300);
      }
    } else {
      if (isAnimated !== 9200) {
        setAnimation(true);
        setTimeout(() => {
          setAnimation(false);
        }, 2000);
        setIsAnimated(9200);
      }
    }
    const divheight = (offset - 9300) / 41;
    bar.current.style.height = `${100 - -divheight}%`;
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, isAnimated]);

  useEffect(() => {
    const interval = setInterval(() => setTime((time + 1) % 3), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  // styles

  //second transitions

  const second_transition1 = (
    <div className="transition-tab-1 second-transition1">
      <div className="arrow-abs">
        <div className="arrow-img-div"></div>
      </div>
      <div className="expenses-main">
        <div className="expenses_div1">
          Expenses
          <ul>
            <li>Office food</li>
            <li>Beverages</li>
            <li>Staff travel</li>
            <li>
              <span style={{ color: "#7054fe" }}> |</span>
            </li>
          </ul>
        </div>
        <div className="expenses_div2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1251/1251800.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  const second_transition2 = (
    <div className="transition-tab-1 second-transition2">
      <div className="arrow-abs">
        <div className="arrow-img-div"></div>
      </div>
      <div className="office-tiles">
        <div className="office-food">
          <div className="food-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2083/2083647.png "
              alt=""
            />
          </div>
          <div className="food-title">Office Food</div>
          <div className="food-info">
            <p>
              This covers all snacks, dinners etc that our stuff have in the
              office
            </p>
          </div>
        </div>
        <div className="office-bev">
          <div className="food-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10799/10799516.png "
              alt=""
            />
          </div>
          <div className="food-title">Beverages</div>
          <div className="food-info">
            <p>
              This covers both office and external event beverages manager
              expenses
            </p>
          </div>
        </div>
        <div className="newtravel">
          <div className="food-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6717/6717767.png"
              alt=""
            />
          </div>
          <div className="food-title">Staff travel</div>
          <div className="food-info">
            <p>
              This covers all international and domestic flights staff make for
              work
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const second_transition3 = (
    <div className="transition-tab-1 second-transition3">
      <div className="arrow-abs">
        <div className="arrow-img-div"></div>
      </div>
      <div className="expenses-details"></div>
    </div>
  );

  var currenttransition;
  var currenttranspage;
  if (offset < 6700) {
    var firstbutton = (
      <>
        <div className="pie-wrap-shift">
          <button className="shift">
            <span>Shift</span>
          </button>
        </div>
        <div className="pie-wrap-t">
          <button className="command">
            <img
              src="https://static.thenounproject.com/png/145437-200.png"
              alt=""
            />
          </button>
        </div>
        <div className="pie-wrap-t">
          <button className="t">T</button>
        </div>
      </>
    );
    currenttranspage = <div>01</div>;

    var secondbutton = (
      <>
        <div class="pie-wrap-t">
          <button className="command">
            <img
              src="https://static.thenounproject.com/png/145437-200.png"
              alt=""
            />
          </button>
        </div>
        <div className="pie-wrap-t">
          <button>1</button>
        </div>
        <div className="pie-wrap-t">
          <button>2</button>
        </div>
        <div className="pie-wrap-t">
          <button>3</button>
        </div>
      </>
    );

    var thirdbutton = (
      <>
        <div className="pie-wrap-t">
          <button>/</button>
        </div>
      </>
    );
    if (time === 0) {
      currenttransition = (
        <div className="transition-tab-1">
          <div className="btn-abs">Tidy up and organise all blocks</div>
          {firstbutton}
        </div>
      );
    } else if (time === 1) {
      currenttransition = (
        <div className="transition-tab-1">
          <div className="btn-abs">Select your blocks</div>
          {secondbutton}
        </div>
      );
    } else {
      currenttransition = (
        <div className="transition-tab-1">
          <div className="btn-abs">Create a new block</div>
          {thirdbutton}
        </div>
      );
    }
  } else if (offset < 8300) {
    currenttranspage = <div>02</div>;

    if (time === 0) {
      currenttransition = second_transition1;
    } else if (time === 1) {
      currenttransition = second_transition2;
    } else {
      currenttransition = second_transition3;
    }
  } else {
    currenttranspage = <div>03</div>;

    currenttransition = (
      <div className="transition-tab-1 third-transition cursor">
        <div>
          <input
            type="text"
            name=""
            placeholder="Type a commend or search"
            disabled
            autoFocus
          />
          <i></i>
          <div style={{ backgroundColor: "#2c2c2c" }}>
            <button style={{ backgroundColor: "#d5d5d1", color: "#1a1a1a" }}>
              T
            </button>{" "}
            Heading
          </div>
          <div>
            <button>Aa</button> Subheading{" "}
          </div>
          <div>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/739/739198.png "
                alt=""
              />
            </button>
            Image
          </div>
          <div>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8097/8097775.png "
                alt=""
              />
            </button>
            Media Card
          </div>
        </div>
      </div>
    );
  }
  let transitiontab = (
    <div
      className={
        animation ? "transition-tab transition-tab-animation" : "transition-tab"
      }
    >
      {currenttransition}

      {offset < 6700 ? (
        <>
          <div className="transition-tab-2 transition-tab-2_1">
            <p> A Keyboard first experience.</p>
          </div>
          <div className="transition-tab-3 first-transition-p-tag">
            <p>
              {" "}
              Powerful shortcuts and a keyboard-first workflow means you will
              get to know finish line in no time!
            </p>
          </div>
        </>
      ) : offset < 8300 ? (
        <>
          <div className="transition-tab-2 transition-tab-2_2">
            <p> Bullets to visuals in a click.</p>
          </div>
          <div className="transition-tab-3">
            <p>
              {" "}
              Transform any block to any other and try different options without
              any design hassle
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="transition-tab-2 transition-tab-2_3">
            <p> A powerfull assistant just a click away</p>
          </div>
          <div className="transition-tab-3 ">
            <p>
              {" "}
              Insert blocks, perform powerful actions and leverage the limitless
              power of AI-all without leaving your keyboard
            </p>
          </div>
        </>
      )}
    </div>
  );
  return (
    <div className="section2" id="b">
      <div className="section2-main">
        <div className="workflow-tab">
          <div className="workflow-1">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8804/8804808.png"
              alt=""
              className="workflow-img"
            />
            Workflow
          </div>
          <div className="workflow-2">Create at the speed of thought.</div>
          <div className="workflow-3">
            Focus on your getting your thoughts out and crafting the best
            message while Chronicle does the heavy lifting for you
          </div>
        </div>
        {transitiontab}
        <div className="level-tab">
          {currenttranspage}

          <div className="fill-in">
            <div className="fill-in-bar" ref={bar}></div>
          </div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
