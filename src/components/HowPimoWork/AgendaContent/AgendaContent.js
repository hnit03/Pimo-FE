import React, { useState, useEffect } from "react";
import Accordions from "../Accordion/Accordion";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/agendaContentStyle";
import UseWindowPosition from "../Accordion/scroll";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import componentsStyle from "../../../assets/jss/material-kit-pro-react/views/componentsStyle.js";
import DowloadPimoApp from "../Accordion/DownloadPimo";
const useStyles1 = makeStyles(componentsStyle);
var listOverview =
  [{ name: "WHAT IS PIMO?", value: "Pimo is a booking platform for the model industry in Viet Nam. We can help you hire a wide and diverse range of models by creating attractive events, campaigns to attract models to apply for ." },
  { name: "WHO GETS ONTO PIMO?", value: "Pimo gives priority to brands in the fashion industry in Vietnam. We're also actively looking for new talent for each of our categories, whether it's hot new face models. We always try to verify and provide brands and models with the most relevant and reliable information before they join the pimo platform." },
  { name: "WHAT'S NEXT FOR PIMO?", value: "Swipecast’s goal is to become the preeminent platform where fashion brands come to view each others’ work, communicate and find new opportunities." },];

var listSecurity =
  [{ name: "WHAT SYSTEM-LEVEL SECURITY MEASURES DOES SWIPECAST PROVIDE?", value: "Pimo has multiple layers of state-of-the-art technology in place to protect sensitive information. From SSL encryption, to authorization tokens in HTTP requests, we make sure that your privacy is protected. Payment transactions are compliant with top-level security standards thanks to Stripe." },
  { name: "WHAT DO I DO IN CASE OF EMERGENCIES?", value: "If you are in immediate threat, call 113. Otherwise, contact us at pimo.studio@gmail.com or  091.3333.999." },
  { name: "HOW DO I PROTECT THE SECURITY OF MY PIMO ACCOUNT?", value: " Never share your google account and beware of phishing attempts. Pimo will never ask for your password. We also recommend that you change your password every 90 days. If you log in from a friend's device, remember to log out after use." },
  { name: "WHY SHOULDN'T I GET PAID DIRECTLY?", value: "Whenever you get booked for a job, Pimo ensures that you get paid 100% of the time after the job is complete, within 2-3 business days. We do this to protect all the parties involved. Any payments performed outside of the app violate our Terms & Conditions and would lead to account suspension." },
  { name: "REPORT SUSPECTED VULNERABILITIES?", value: "If you have concerns, please flag them with us at pimo.studio@gmail.com." },
  { name: "CAN I BLOCK A USER?", value: "You can block a user using the flag icon on the person's profile, or in an existing chat using the 'Chat Options'. This will alert us to inappropriate activity. We will then review the communications and either supsend or delete the user's account if it is deemed appropriate." }];

var listWorkingWithBrands =
  [{ name: "HOW DO I VIEW BRANDS ON THE APP?", value: "You can find brands on our network page. You can select the specific type of brands you would like to work with on the search brands page or we can recommend a few brands that suit your style." },
  { name: "HOW DO I CONNECT WITH A BRAND?", value: "To connect with a brand, you need to send them an application request. If they approve your request, we will send you a notification and you can get the details of the casting. In order to send them an application request, please download our app from CHPlay or AppStore, then you can head over to brand's profile, and click on the Apply button." },
  { name: "WHO CAN CONTACT ME?", value: "Under your account settings, you can decide if you want to be contacted by everyone, only by verified clients or only by clients you have liked. You always have the ability to accept or reject incoming message requests and jobs." },
  { name: "WHAT ARE THE RATES AND TERMS?", value: "Job postings either have an hourly or day rate. We encourage you to accept jobs that are aligned with your rate." },
  { name: "WHAT DO I DO IF THE BRAND CANCELS LAST MINUTE?", value: "If you are unable to get in touch with a brand, please contact us at pimo.studio@gmail.com or 091.3333.999." },
  { name: "WHAT IF THERE IS A DISPUTE WITH THE CLIENT?", value: "If there is a dispute with a client, please contact us at pimo.studio@gmail.com. We will work directly with all of the parties to resolve the dispute. In extreme cases, if we believe that the brand misrepresented a booking, we will serve as your advocate to ensure that the usage conforms to what was agreed between you and the client and our Terms and Conditions." },];

var listApplyToAnEvent =
  [{ name: "HOW DO I SEE WHAT JOBS ARE AVAILABLE?", value: "By going to our events page." },
  { name: "WHAT DO I DO WHEN THE JOB IS COMPLETED?", value: "Post your profile on Pimo and tell users a little about yourself.  If you’re a model, what runway shows have you walked?, What is your style? As a model, you should include updated digitals taken within the last month, so that clients can see what you look like today." },
  { name: "CAN I CANCEL A JOB?", value: "Congratulations! No further action is required. With Pimo, the payment will automatically be deposited into your account after 3 business days. Don't forget to share your experience with your friends on Instagram with #CastMePimo" },
  { name: "WHAT DO I DO WHEN THE JOB IS COMPLETED?", value: "We strongly recommend that you do not cancel any jobs unless you know you are unable to attend. Canceling jobs will lower your rating, which could prevent you from booking future jobs." },];

var listPaymentsModel =
  [{ name: "HOW DO I GET PAID?", value: "For those looking to get paid, simply add your bank account number, your bank routing number, and the last 4 digits of your social security number. This information is securely stored by Stripe, our payment processing partner. Once your information has been entered, you can then be hired and paid for upcoming projects." },
  { name: "WHEN WILL I GET PAID?", value: "Pimo allows you to get paid as quickly as the day after your shoot. In other cases, a client may take as many as 7 business days to pay." },
  { name: "HOW CAN I VIEW MY ACCOUNTING STATUS?", value: "Under my jobs section, you will find a summary of how much payment you have received and how much you should expect to receive." },
  { name: "WHAT PERCENTAGE DOES PIMO TAKE?", value: "Pimo charges a flat 15% fee on transactions. This fee may change if the talent is signed with an agency and decides to manage the booking with their agent." },];

var listDownloadPimoApp =
  [{ name: "HOW TO DOWNLOAD PIMO APP?", value: "helllo" },];

var listWorkingWithModel =
  [{ name: "HOW DO I VIEW MODEL ON THE APP?", value: "You can find talents on our network page. You can select the specific type of model (search by style, search by sex, search by tattoo,...) you would like to work with on the sidebar." },
  { name: "HOW DO I CONNECT WITH A MODEL?", value: "Your job is simply to register in our system, then create an event with detailed information about your event. We will filter and recommend models that match your requirements. If a model sends you an application request, we will notify you and you have the right to directly accept or decline the model's request by click on the button accept or decline." },
  { name: "WHO CAN CONTACT ME?", value: "Under your account settings, you can decide if you want to be contacted by everyone, only by verified clients or only by clients you have liked. You always have the ability to accept or reject incoming message requests and jobs." },
  { name: "WHAT ARE THE RATES AND TERMS?", value: "When you create a job, you have the option to specify either a day rate or an hourly payment. Please view our full terms and conditions to ensure your job listing meets our requirements." },
  { name: "WHAT DO I DO IF THE MODEL DOES NOT SHOW UP AT THE SCHEDULED TIME?", value: "If you are unable to get in touch with the talent, please contact us at pimo.studio@gmail.com or 091.3333.999." },
  { name: "HOW DO I SEND THE MODEL HIS OR HER CALL SHEET?", value: "To email a call sheet to the model, you can use the email address we provided in the 'job accepted' email." },
  { name: "WHAT IF THERE IS A DISPUTE WITH THE MODEL?", value: "If you have a dispute with a talent booking, simply email us at pimo.info@gmail.com, explaining the issue. We will aim to resolve the issue as quickly as possible. Under extreme circumstances where a talent fails to perform the services contracted in your agreement, a partial or full refund may be possible. Please see our Terms and Conditions." },
  { name: "HOW IS USAGE MANAGED?", value: "The standard usage on Pimo is 6 months across social media, the Internet, and point of sale (POS) within the country where the photoshoot took place. Our standard user does not include outdoor advertising such as billboards. If you wish to expand the usage beyond the terms above, please contact us at pimo.studio@gmail.com to negotiate an agreement." }];

var listBookingModel =
  [{ name: "HOW DO I POST AN EVENT?", value: "Once your profile on Pimo is complete, you'll be able to create and post events under the Events tab. Click on the Create Event button on the Event section and input the details of the job such as job type and whether it is paid work or unpaid. Specify what kind of talent you are seeking, a project name, a day rate or hourly rate, the dates you would like to book the talent, enter a start time, a location address and upload a picture for your project. You'll have the chance to review your job details before posting them." },
  { name: "HOW DO I BOOK A MODEL DIRECTLY?", value: "If you come across a model who is right for your job, feel free to connect with the talent directly. By clicking sending them a connect request on their profile." },
  { name: "HOW DO I EDIT OR CANCEL MY JOB?", value: "After you have posted a job, you will have the ability to make any necessary edits to the event details. Should you have to cancel a job, please note that doing so less than 72 hours in advance might involve a penalty fee, up to the total rate of the project." },
  { name: "HOW DO I BOOK THE MODEL TALENT?", value: "There are multiple ways to find talent on PIMO. Use our filters to discover models based on specific criteria such as height, sex, style, city,..... Additionally, if you create a job listing, we will help you to identify models appropriate for your event. Our best candidates wait for clients to reach out to them and seek opportunities with complete job details and offer competitive rates." },
  { name: "HOW DO I INVITE A MODEL TO MY CASTINGS?", value: "Navigate the profiles of talent of your choice, connect with them and send them a direct message to invite them to your casting." },
  { name: "WHAT CAN I DO IF I RUN INTO BOOKING ISSUES?", value: "Contact us anytime by emailing pimo.studio@gmai.com. We will get to your question as soon as possible." }];

var listPaymentsBrand =
  [{ name: "WHAT ARE THE AVAILABLE BILLING METHODS?", value: "We accept Visa, Mastercard and American Express. We also accept ACH. The payment has to be made by the person posting the job or by a third party. Either way, the booking needs to be paid in full before a booking is confirmed." },
  { name: "HOW CAN I VIEW MY ACCOUNTING STATUS?", value: "Go to the My Events section to view the total payment due and your booking history. For each booking, you will be able to see a breakdown of the status, date, location, amount, fees & taxes, and notes." },
  ];
const HookDoSomething = () => {
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
}
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



const titleGenaralQuestion = ["Overview", "Security"];
const titleModel = ["Working with Brands", "Apply to an event", "Download Pimo App", "Payments"];
const titleBrand = ["Working with Model", "Booking Model", "Payments"];
export default function AgendaContent(props) {
  const classes = useStyles();
  // const classes = useStyles1();
  return (
    <div className={classes.agendaContentTree} >
      <div className={classes.forceOverflow}>
        <p className={classes.generalQuestion} id="General"><a>GENERAL QUESTIONS</a></p>
        <div className={classes.genaralLine}></div>
        <p></p>

        <div id="Overview">
          <Accordions list={listOverview} title={titleGenaralQuestion[0]} />
        </div>
        <div id="Security">
          <Accordions list={listSecurity} title={titleGenaralQuestion[1]} />
        </div>

        <p className={classes.generalQuestion} id="Model">MODEL</p>
        <div className={classes.genaralLine}></div>
        <p></p>
        <div className={classNames(classes.main, classes.mainRaised)}
          id="main-panel">
          <div
            className={classNames(
              classes.section,
              classes.sectionGray,
              "cd-section"
            )}
            id="footers"
          ><div id="Working_with_Brands">
              <Accordions list={listWorkingWithBrands} title={titleModel[0]} />
            </div></div></div>

        <div id="Apply_To_An_Event">
          <Accordions list={listApplyToAnEvent} title={titleModel[1]} />
        </div>
        <div id="Download_Pimo_App">
          <DowloadPimoApp />
        </div>
        <div id="Payments_model">
          <Accordions list={listPaymentsModel} title={titleModel[3]} />
        </div>

        <p className={classes.generalQuestion} id="Brand">BRAND</p>
        <div className={classes.genaralLine}></div>
        <p></p>
        <div id="Working_with_Model"><Accordions list={listWorkingWithModel} title={titleBrand[0]} /></div>
        <div id="Booking_Model"><Accordions list={listBookingModel} title={titleBrand[1]} /></div>
        <div id="Payments_brand"><Accordions list={listPaymentsBrand} title={titleBrand[2]} /></div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                href="#Working_with_Brands"
                data-number="1"
                className=""
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("Working_with_Brands");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Basic Elements</span>
              </a>
            </li>
            <li>
              <a
                href="#navigation"
                data-number="2"
                className=""
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("navigation");
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


      </div>

    </div>
  );

}
