import React, { useEffect, useState } from 'react';
import imgBurger from './assets/img/Burger.png';
import imgRecipeHelper from './assets/img/RecipeHelper.png';
import imgWeatherDashboard from './assets/img/WeatherDashboard.png';
import imgDayPlanner from './assets/img/DayPlanner.png';
import imgPasswordGenerator from './assets/img/PasswordGenerator.png';
import imgRecipeHelper2 from './assets/img/RecipeHelper2.png';
import imgEmployee_directory from './assets/img/employee-directory.png';
import imgFitness_tracker from './assets/img/fitness-tracker.png';
import imgBudget_tracker from './assets/img/budget-tracker.png';
import imgQuiz from './assets/img/quiz.png';

const projects = [
  {
    name: "Employee Directory (React, MongoDB)",
    sourceCode: "https://github.com/correaph/employee-directory.git",
    deployedAt: "https://correaph.github.io/employee-directory"
  },
  {
    name: "Fitness Tracker (NodeJs, Exppress, MongoDB)",
    sourceCode: "https://github.com/correaph/fitness-tracker.git",
    deployedAt: "https://vast-brook-22587.herokuapp.com"
  },
  {
    name: "Budget Tracker (NodeJs, Exppress, MongoDB, IndexedDD, Service Worker)",
    sourceCode: "https://github.com/correaph/on-offline-budget-trackers.git",
    deployedAt: "https://arcane-shore-66778.herokuapp.com"
  },
  {
    name: "Burger (Node Express Handlebars, MySQL, MVC)",
    sourceCode: "https://github.com/correaph/burger.git",
    deployedAt: "https://burger-correaph.herokuapp.com"
  },
  {
    name: "Recipe Helper (JQuery, Ajax, Third-Party API's)",
    sourceCode: "https://github.com/salnation/RecipeHelper.git",
    deployedAt: "https://salnation.github.io/RecipeHelper"
  },
  {
    name: "Employee Summary (Node.js, MYSQL)",
    sourceCode: "https://github.com/correaph/EmployeeSummary.git",
    deployedAt: "https://github.com/correaph/EmployeeSummary.git"
  },
  {
    name: "Weather Dashboard (JQuery, Ajax, Bootstrap)",
    sourceCode: "https://github.com/correaph/WeatherDashboard.git",
    deployedAt: "https://correaph.github.io/WeatherDashboard"
  }
];

function Portfolio() {
  const [imgSrc, setImgSrc] = useState();
  useEffect(() => {
    const images =
      [
        imgBurger, imgRecipeHelper, imgWeatherDashboard, imgDayPlanner, imgPasswordGenerator, imgRecipeHelper2,
        imgEmployee_directory, imgFitness_tracker, imgBudget_tracker, imgQuiz
      ];
    setImgSrc(images[0]);
    const interval = setInterval(() => {
      var nrImg = Math.floor(Math.random() * images.length);
      setImgSrc(images[nrImg]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row">
          <div className="col-6">
            <img src={imgSrc} className="img-fluid" id="img_portfolio" alt="Project screen"></img>
          </div>
          <div className="col-sm-0 lg-6">
            <h1 className="display-4 text-center">Latest Projects</h1>
            <hr className="my-4"></hr>
            <ul>
              {projects.map((project, idx) => {
                return (
                  <li key={idx}>{project.name}
                    <ul>
                      <li>Source Code: <a target="_blank" rel="noreferrer" href={project.sourceCode}>{project.sourceCode}</a></li>
                      <li>Deployed at: <a target="_blank" rel="noreferrer" href={project.deployedAt}>{project.deployedAt}</a></li>
                    </ul>
                  </li>
                )
              })}
              <hr className="my-4"></hr>
              <li>My github profile:<a target="_blank" rel="noreferrer" href="https://github.com/correaph">https://github.com/correaph</a>
              </li>
              <hr className="my-4"></hr>
              <li>My Resume:<a target="_blank" rel="noreferrer" href="assets/pdf/MyResume.pdf">MyResume.pdf</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
