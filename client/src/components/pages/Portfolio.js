import React from "react";
import EmployeeDirectory from "../images/employee-directory.gif";
import TeamGenerator from "../images/team-generator.gif";
import DeveloperProfil from "../images/developer-profil.gif";
import WeatherDashboard from "../images/weather-dashboard.gif";
import DailyCarpool from "../images/daily-carpool.gif";
import EatBurger from "../images/eat-da-burger.gif";
import linkPark from "../images/link-park.gif";
import googleBooks from "../images/google-books.gif";
import CodeQuiz from "../images/code-quiz.gif";

const Portfolio = () => (
    <main className="container">
            <section className="hTwo">
                <h2> <strong>Make a tour through my web developer work...</strong></h2>
            </section>
        <section className="portfolio row  justify-content-center">

            {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Link-N-Park</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                    <p>A full stack React application that allows users to locate bixi bike stations near a specific position and map a cycling route in Toronto.</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://link-n-park.herokuapp.com/"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/joel-clifford-bootcamp/project3"}>Github repository</a>
                        </li>
                    </ul>
                     <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={linkPark} alt=""/>
                    </div> 
            </div>

             {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Google Books Search</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                    <p>This MERN stack application uses Google Books API. It allows users to search and save books by title.</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://react-google-books-mern-app.herokuapp.com"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/google-books-search-react"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={googleBooks} alt=""/>
                    </div> 
            </div>
            
            
            {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Employee directory</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                    <p>This application built with React allows the user (manager) to search or sort employees by name, role or department. The application's UI is broken down into components with a component state to respond to user events.</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://bboutet1.github.io/employee-directory/"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/employee-directory"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={EmployeeDirectory} alt=""/>
                    </div> 
                </div>
            
            {/* Project */}
                {/* <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Employee template engine</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>A Node CLI team generator that takes in information about employees and generates an HTML webpage.</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <p> Start CL: <strong>node app.js </strong> inside /Develop </p>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/employee-template-engine"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={TeamGenerator} alt=""/>
                    </div> 
                </div> */}
            {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Developer profil generator</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>A command-line application that dynamically generates a README.md file from user's inputs. It also creates a pdf file containing the user's github profile information.</p>
                    </div> 
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <p> Start CL: <strong> node index.js.</strong> Follow README</p>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/developer_profile_generator"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={DeveloperProfil} alt=""/>
                    </div>
                </div>
         {/* Project */}
                {/* <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Weather dashboard</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>This web application retrieves data from the OpenWeather Third-party API to build a weather dashboard that runs in the browser and features dynamically updated HTML and CSS.</p>
                </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://bboutet1.github.io/Weather_Dashboard/"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/Weather_Dashboard"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={WeatherDashboard} alt=""/>
                    </div> 
            </div> */}

            {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Daily commute carpool</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>Under construction and using google maps API, this project aims to match workers that have their daily commute (work) route and time close to share a daily ride.</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://dashboard.heroku.com/apps/daily-commuter-carpool"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/project2_daily-carpool"}>Github repository</a>
                        </li>
                    </ul>
                     <div className="card-body card-footer p-1 pt-2 pb-2">
                         <img className="w-100" src={DailyCarpool} alt=""/>
                    </div> 
                </div>
            
             {/* Project */}
                {/* <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Eat-Da-Burger</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>This web application is a burger logger built with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://eat-that-good-burger.herokuapp.com/"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://github.com/BBoutet1/eat-da-burger"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                        <img className="w-100" src={EatBurger} alt=""/>
                    </div> 
                </div> */}
            
             {/* Project */}
                <div className="card d-inline-block ml-auto mr-auto">
                    <div className="card-header d-flex p-2">
                        <p><strong>Code quiz</strong></p>
                    </div>
                    <div className="summary card-body d-flex p-1">
                        <p>This application is a timed code quiz with multiple-choice questions. It runs in the browser and features a dynamically responsive interface, ensuring adaptability to multiple screen sizes..</p>
                    </div>
                    <ul className="card-footer pt-1 pb-1 mb-1">
                        <li>
                            <a href={"https://github.com/BBoutet1/code_quiz"}>Deployed application</a>
                        </li>
                        <li>
                            <a href={"https://bboutet1.github.io/code_quiz/"}>Github repository</a>
                        </li>
                    </ul>
                    <div className="card-body card-footer p-1 pt-2 pb-2">
                         <img className=" w-100" src={CodeQuiz} alt=""/>
                    </div> 
                </div>
            
            </section>
        </main>
);

export default Portfolio;
