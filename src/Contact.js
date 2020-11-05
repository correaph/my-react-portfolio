import React from 'react'; 
import img from './assets/img/contact.jpg';

function Contact() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row">
          <div className="col-6">
            <img src={img} className="img-fluid" alt="Rainbow mountains in Peru"></img>
            </div>
            <div className="col-sm-0 lg-6">
              <h1 className="display-4 text-center">Contact</h1>
              <hr className="my-4"></hr>
              <ul>
                <li>Skype: correaph </li>
                <li>E-mail: <a target="_blank" rel="noreferrer" href="henriqueph@hotmail.com">henriqueph@hotmail.com</a></li>
                <li>LinkedIn: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/henriqueph">https://www.linkedin.com/in/henriqueph</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  );
}

export default Contact;
