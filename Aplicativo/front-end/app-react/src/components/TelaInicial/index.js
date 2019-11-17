import React, { Fragment } from "react";
import './telaInicial.css'

export default () => (
    <Fragment>
        <div class="jumbotron vertical-center">
        <div className="container">
        <div className="row justify-content-md-center" id = "row" > 
            <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5"> </button> 
            <button id="button2" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            <button id="button3" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            <button id="button4" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            <button id="button5" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            </div>

            <div className="row mt-3 justify-content-md-center" id= "row" > 
            <button id="button1" class="btn btn-primary btn-circle btn-xl mr-5">
            </button> 

            <button id="button2" class="btn btn-primary btn-circle btn-xl mr-5">
            </button> 

            <button id="button3" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            <button id="button4" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            <button id="button5" class="btn btn-primary btn-circle btn-xl mr-5"></button> 
            </div>
            </div>
            </div>
     </Fragment>



);
