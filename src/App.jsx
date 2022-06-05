import { useEffect, useState } from "react";
import "./styles/styles.scss";
import Home from "./components/Home";
import Presenation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
function App() {
  const [heightScreen, setHeightScreen] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [activeScroll, setActiveScroll] = useState(true);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener("resize", () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const page = [
    {
      className: "section1",
      component: <Home />,
    },
    {
      className: "section2",
      component: <Presenation />,
    },
    {
      className: "section3",
      component: <Skills />,
    },
    {
      className: "section4",
      component: <Projects />,
    },
    {
      className: "section5",
      component: <Contact />,
    },
  ];

  const scroll = (valueScroll, index) => {
    if (scrollValue >= 0 && window.innerWidth > 800) {
      if (valueScroll > 0 && index < page.length - 1) {
        setScrollValue(index + 1);
        setActiveScroll(false);
      } else {
        if (scrollValue > 0) {
          setScrollValue(index - 1);
          setActiveScroll(false);
        }
      }
      setTimeout(() => {
        setActiveScroll(true);
      }, 1000);
    }
  };

  return (
    <div className="app" style={{ height: `${heightScreen}px` }}>
      <Navbar setScrollValue={setScrollValue} />
      {page.map((el, index) => (
        <div
          key={index}
          className={el.className}
          style={{
            height: `${heightScreen}px`,
            transform: `translateY(-${heightScreen * scrollValue}px)`,
          }}
          onWheel={(e) => activeScroll && scroll(e.deltaY, index)}>
          {el.component}
        </div>
      ))}
    </div>
  );
}

export default App;
