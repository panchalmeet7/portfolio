import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sharda Mandir School, Nadiad
          </h3>
          <p> S.S.C </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            V. M. Bhagat & S. C. Sonawala High School, Nadiad.
          </h3>

          <h4 className="vertical-timeline-element-subtitle"></h4>

          <p> H.S.C</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - expected in 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Birla Vishvakarma Mahavidyalaya (BVM), Vallabh Vidyanagar, Anand
          </h3>
          <p> Bachelor of Technology in Electronics </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - July 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CETPA InfoTech, Noida, UP
          </h4>
          <p>
            Planed website development, converting mockups into usable web
            presence with HTML, CSS, Bootstrap and Javascript.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            React Js Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Groovy Web LLP, Nadiad
          </h4>
          <p>
            Created interactive websites with software development department
            using React, MaterialUI, Redux, React router dom and different react
            animation libraries.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
