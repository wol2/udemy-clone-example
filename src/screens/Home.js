import React, { useState } from "react";
import Course1 from "../img/course-1.png";
import Course2 from "../img/course-2.jpg";

function HomePage() {
  const [popularCourse, setpopularCourse] = useState([
    {
      ID: 1,
      title:
        "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
      tutor: {
        ID: 1,
        name: "Sally",
        username: "sally",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "82 min",
      poster: Course1,
    },
    {
      ID: 2,
      title:
        "Creating a beautiful Portrait Illustration. Learning new Technis and Tricks.",
      tutor: {
        ID: 2,
        name: "Chris",
        username: "Chris",
        dp: "https://placeimg.com/100/100/people?tutor-" + 2,
      },
      duration: "1hr 13 min",
      poster: Course2,
    },
  ]);

  // Live Tutors List
  var tutorList = [];
  for (let i = 0; i < 8; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img
          src={"https://placeimg.com/100/100/people" + i}
          className="bl"
          alt="peopleImage"
        />
      </button>
    );
  }

  //   courseList
  var courseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#" className="course rel" key={"popular-course-" + i}>
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center",
          }}
        >
          <div className="user abs aic flex">
            <div className="pic">
              <img src={popularCourse[i].tutor.dp} className="bl" alt="" />
            </div>
            <div className="meta rel">
              <h2 className="s15 name fontb cfff">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s15 uname fontn cfff">
                @{popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="home-page rel">
      {/* Tutors Live Now */}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming<span className="fontn"> Now</span>
        </h2>

        <div className="tutors rel flex">{tutorList}</div>
      </div>

      {/* Popular Courses */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular<span className="fontn"> This week</span>
        </h2>

        <div className="courses rel flex">{courseList}</div>
      </div>

      {/* Top Tutors */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Top<span className="fontn"> Tutors</span>
        </h2>

        <div className="courses rel flex">{courseList}</div>
      </div>
    </div>
  );
}

export default HomePage;
