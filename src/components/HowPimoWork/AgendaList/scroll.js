import React from "react";
import classNames from "classnames";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/HowPimoWorkPage/agendaListStyle";
import componentsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles1 = makeStyles(componentsStyle);
//import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/agendaListStyle";
const agendaTitle =
    [{ name: "Tổng quan", value: "#General" },
    { name: "Người mẫu", value: "#Model" },
    { name: "Nhãn hàng", value: "#Brand" }];
const agendaGeneral = [{ name: "Tổng quan về Pimo", value: "#Overview" },
{ name: "Bảo mật thông tin", value: "#Security" }];
const agendaModel = [{ name: "Làm việc với nhãn hàng", value: "#Working_with_Brands" },
{ name: "Ứng tuyển vào sự kiện của nhãn hàng", value: "#Apply_To_An_Event" },
{ name: "Tải xuống ứng dụng Pimo", value: "#Download_Pimo_App" },
{ name: "Thanh toán", value: "#Payments_model" }];
const agendaBrand = [{ name: "Làm việc với người mẫu", value: "#Working_with_Model" },
{ name: "Tạo sự kiện và casting", value: "#Booking_Model" },
{ name: "Thanh toán", value: "#Payments_brand" }];

export default function VI(props) {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  };
  const scrollTo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start + document.getElementById("main-panel").offsetTop,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes1 = useStyles1();
  const classes = useStyles();
    return (
      <>
          <div
        className={classNames(classes.main, classes.mainRaised)}
        id="main-panel"
      >
        <div
          className={classNames(
            classes.section,
            classes.sectionGray,
            "cd-section"
          )}
          id="footers"
        >
          
          <p>2</p>
          <p>3</p>
          <a href={agendaBrand[2].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[2].name}</p>
                </a>
        </div>
      </div>
        <div className={classes.agendaTree}>
        
            <a href={agendaTitle[0].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[0].name}</p>
            </a>
            <a href={agendaGeneral[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaGeneral[0].name}</p>
                </a>
            <a href={agendaGeneral[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaGeneral[1].name}</p>
                </a>
                
            <a href={agendaTitle[1].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[1].name}</p>
                </a>
            <a href={agendaModel[2].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[2].name}</p>
                </a>
            <a href={agendaModel[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[0].name}</p>
                </a>
            <a href={agendaModel[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[1].name}</p>
                </a>
            <a href={agendaModel[3].value} className={classes.a} >
                <p className={classes.agendaTitleContent}>{agendaModel[3].name}</p>
                </a>
                
            <a href={agendaTitle[2].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[2].name}</p>
                </a>
            <a href={agendaBrand[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[0].name}</p>
                </a>
            <a href={agendaBrand[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[1].name}</p>
                </a>
            
        </div>
    
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#Payments_brand"
              data-number="1"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("Payments_brand");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Basic Elements</span>
            </a>
          </li>
          <li>
            <a
              href="#vi"
              data-number="2"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("vi");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Navigation</span>
            </a>
          </li>
          <li>
            <a
              href="#notifications"
              data-number="3"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("notifications");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="#footers"
              data-number="4"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("footers");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Footers</span>
            </a>
          </li>
          <li>
            <a
              href="#typography"
              data-number="5"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("typography");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Typography</span>
            </a>
          </li>
          <li>
            <a
              href="#contentAreas"
              data-number="6"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("contentAreas");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Content Areas</span>
            </a>
          </li>
          <li>
            <a
              href="#cards"
              data-number="7"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("cards");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Cards</span>
            </a>
          </li>
          <li>
            <a
              href="#morphingCards"
              data-number="8"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("morphingCards");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Morphing Cards</span>
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              data-number="9"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("javascriptComponents");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Javascript</span>
            </a>
          </li>
        </ul>
      </nav>
      </>
    );

}