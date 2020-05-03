import React from 'react'
import "../../static/css/Card-style.css"

const Card = props =>{
    return(
        <>
        <div className="card text-center shadow">
            <div className="overflow">
                <br/>
                <img src = {props.imgsrc} alt ={props.name} height="180px" className ="g-tocard-imp"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"><b>{props.name}</b></h4>
                <p style={{color: 'gray'}}>{props.level} | {props.goal}</p>
                <p style={{color: 'gray'}}>{props.type} | {props.time}</p>
                <br/>
                <a href={props.pdf} >
                <button className="card-text text-secondary">
                    Workout (PDF)
                </button>
                </a>
            </div>
        </div>
        <br/>
        </>
    );

}

export default Card;