import React from "react";
import {Link} from 'react-router-dom';

const Carousel = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-2" data-slide-to="1"></li>
              <li data-target="#carousel-example-2" data-slide-to="2"></li>
              <li data-target="#carousel-example-2" data-slide-to="3"></li>
              <li data-target="#carousel-example-2" data-slide-to="4"></li>
              <li data-target="#carousel-example-2" data-slide-to="5"></li>
              <li data-target="#carousel-example-2" data-slide-to="6"></li>
            </ol>

            <div class="carousel-inner" role="listbox" >

              <div class="carousel-item active">
                <div class="view" >
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"></img>
                  <div class="mask rgba-black-light" ></div>
                </div>
                
                <div class="carousel-caption">
                  <Link to="/body-picker" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Pick Your Body Part</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"></img>
                  <div class="mask rgba-black-strong"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/searchworkouts" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Search Workouts</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Third slide"></img>
                  <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/createworkouts" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Create Workouts</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Fourth slide"></img>
                  <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/workout-plans" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Workout Plans</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Fifth slide"></img>
                  <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/meal-planner" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Meal Planner</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Sixth slide"></img>
                  <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/calculator" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Calorie Calculator</Link>
                </div>
              </div>

              <div class="carousel-item">
                <div class="view">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Seventh slide"></img>
                  <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                  <Link to="/weight-loss" type="button" class="btn btn-primary"  style={{marginTop: '1em', marginBottom: '1em'}}>Weight Loss</Link>
                </div>
              </div>

            </div>

            <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Carousel;