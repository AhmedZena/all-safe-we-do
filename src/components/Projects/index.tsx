import React, { useEffect } from "react";
import "./Projects.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const waveStart =
      "polygon(0 8%, 7% 6%, 14% 5%, 21% 5%, 28% 6%, 34% 8%, 40% 12%, 46% 17%, 50% 20%, 54% 23%, 60% 25%, 66% 26%, 70% 26%, 77% 25%, 83% 23%, 89% 21%, 95% 19%, 100% 17%, 100% 100%, 0% 100%)";
    const waveMid =
      "polygon(0 15%, 9% 21%, 14% 23%, 18% 25%, 21% 26%, 30% 28%, 32% 28%, 40% 27%, 46% 26%, 52% 23%, 57% 19%, 62% 15%, 68% 11%, 73% 8%, 79% 6%, 86% 5%, 93% 5%, 100% 6%, 100% 100%, 0% 100%)";

    gsap.set(".work_photo-item", {
      clipPath: "inset(0px 0px 0px 0px)",
    });

    const animation = gsap.to(".work_photo-item:not(:last-child)", {
      clipPath: waveStart,
      stagger: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".work",
        start: "top ",
        end: "bottom ",
        scrub: true,
      },
    });

    const workPhotoItems = gsap.utils.toArray(".work_photo-item");
    workPhotoItems.forEach((item: any, index) => {
      item.style.zIndex = workPhotoItems.length - index;

      ScrollTrigger.create({
        trigger: item,
        start: "top ",
        end: "bottom ",
        onEnter: () => updateBackgroundColor(item),
        onEnterBack: () => updateBackgroundColor(item),
      });
    });

    function updateBackgroundColor(item: any) {
      const projectDiv: any = document.querySelector(".projects");
      // Assign a different color based on the item's title
      switch (item.getAttribute("title")) {
        case "1":
          projectDiv.style.backgroundColor = "green"; // Replace with desired color
          break;
        case "2":
          projectDiv.style.backgroundColor = "red"; // Replace with desired color
          break;
        case "3":
          projectDiv.style.backgroundColor = "blue"; // Replace with desired color
          break;
        default:
          projectDiv.style.backgroundColor = "initial";
      }
    }

    return () => {
      animation.kill();
      workPhotoItems.forEach((item: any) =>
        ScrollTrigger.getById(item.id)?.kill()
      );
    };
  }, []);

  return (
    <div className="projects">
      <div className="wrapp">
        <div className="spacer"></div>
        <div className="work">
          <div className="work_left">
            <div className="work_text">
              <div className="work_info">
                <div className="work_left_bi">
                  <span className="work_num">01</span>
                  <h2 className="title">
                    image animated <span className="stroke">on gsap</span>
                  </h2>
                  <a href="#" className="work_link">
                    view project
                  </a>
                </div>
              </div>
              <div className="work_info">
                <div className="work_left_bi">
                  <span className="work_num">02</span>
                  <h2 className="title">
                    image animated <span className="stroke">on gsap 2</span>
                  </h2>
                  <a href="#" className="work_link">
                    view project 2
                  </a>
                </div>
              </div>
              <div className="work_info">
                <div className="work_left_bi">
                  <span className="work_num">03</span>
                  <h2 className="title">
                    3 image animated <span className="stroke">on gsap</span>
                  </h2>
                  <a href="#" className="work_link">
                    view project 3
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="work_right">
            <div className="work_right-bl">
              <div className="work_photo">
                <div className="work_photo-item" title="1">
                  <img src="../../../public/assets/imgs/pro1.jpeg" alt="" />
                </div>
                <div className="work_photo-item" title="2">
                  <img src="../../../public/assets/imgs/pro2.jpg" alt="" />
                </div>
                <div className="work_photo-item" title="3">
                  <img src="../../../public/assets/imgs/pro3.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default Projects;
