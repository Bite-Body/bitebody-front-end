import React from 'react'
import "../../static/css/Card-style.css"

const Card = props =>{
    return(
        <>
        <div className="card text-center shadow">
            <div className="overflow">
                <br/>
                <img src ={props.imgsrc} alt ={props.title} height="80px" className ="g-tocard-imp"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"><b>{props.title}</b></h4>
                <h5>{props.muscle}</h5>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
            </div>
        </div>
        <br/>
        </>
    );

}

export default Card;