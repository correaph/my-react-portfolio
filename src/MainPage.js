import React from 'react';

function MainPage() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row">
          <div className="col-6">
            <img src="assets/img/PHC_Peru.jpg" className="img-fluid" alt="Sightseeing in Peru"></img>
          </div>
          <div class="col-sm-0  lg-6">
            <h1 className="display-4 text-center">Hello, world!</h1>
            <p className="lead">Welcome to my home page! This is me doing what I enjoy the most, visiting new places around the globe!</p>
            <hr className="my-4"></hr>
            <p>I am also very passionate about computer technology, specially software development.</p>
            <p>In my
                    <a href="portfolio.html">portfolio</a> you can see more details about the projects I worked on.</p>
            <p>My latest investment were in a full-stack web development course at the University of Toronto.
            In this course I learned a lot about web development, frontend and backend, and I
            continue with my studies by doing various courses at Udemy.com. As I am also concerned about my language
            skills I manage to take courses in the three languages I currently speak, Portuguese, English and French,
            and I enjoy that!
                </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
