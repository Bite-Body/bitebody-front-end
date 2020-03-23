import React from 'react'
import {Link} from 'react-router-dom'
import '../../static/css/Meal-Planner-Result.css'

const Card = props =>{
    let json_result = JSON.parse(props.results)

    return(
        <div className="row">
        <div className="col-md-1">
        </div>

        <div className="col-md-10" >
            <div className="card" style={{width: '100%'}}>

                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Meal Plan</h3>
                </div>

                <div className="card-body" style={{marginLeft: '3em', marginRight: '3em'}}>
                    <center>
                        <strong>Dietary Preference:</strong> {props.diet}<br/>
                        <strong>Calories Desired:</strong> {props.calories}<br/>
                    </center>
                    <hr/>

                    <strong>Breakfast:</strong> <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <Link to={json_result.breakfast.url} rel="noopener noreferrer"><img className="borderImage" src={json_result.breakfast.image} alt="breakfast"></img></Link>
                            </div>

                            <div className="col-md-8 mealPadding">
                                <strong>Item:</strong> <a href={json_result.breakfast.url} rel="noopener noreferrer">{json_result.breakfast.title}</a><br/>
                                <strong>Calories:</strong> {json_result.breakfast.calories}<br/>
                                <strong>Fat:</strong> {json_result.breakfast.fat}g<br/>
                                <strong>Carbs:</strong> {json_result.breakfast.carbs}g<br/>
                                <strong>Protein:</strong> {json_result.breakfast.protein}g<br/>
                                <br/>
                            </div>
                        </div>
                    
                    <strong>Lunch:</strong> <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <Link to={json_result.lunch.url} rel="noopener noreferrer"><img className="borderImage" src={json_result.lunch.image} alt="lunch"></img></Link>
                            </div>

                            <div className="col-md-10 mealPadding">
                            <strong>Item:</strong> <a href={json_result.lunch.url} rel="noopener noreferrer">{json_result.lunch.title}</a><br/>
                                <strong>Calories:</strong> {json_result.lunch.calories}<br/>
                                <strong>Fat:</strong> {json_result.lunch.fat}g<br/>
                                <strong>Carbs:</strong> {json_result.lunch.carbs}g<br/>
                                <strong>Protein:</strong> {json_result.lunch.protein}g<br/>
                                <br/>
                            </div>
                        </div>

                    <strong>Dinner:</strong> <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <Link to={json_result.dinner.url} rel="noopener noreferrer"><img className="borderImage" src={json_result.dinner.image} alt="dinner"></img></Link>
                            </div>

                            <div className="col-md-10 mealPadding">
                            <strong>Item:</strong> <a href={json_result.dinner.url} rel="noopener noreferrer">{json_result.dinner.title}</a><br/>
                                <strong>Calories:</strong> {json_result.dinner.calories}<br/>
                                <strong>Fat:</strong> {json_result.dinner.fat}g<br/>
                                <strong>Carbs:</strong> {json_result.dinner.carbs}g<br/>
                                <strong>Protein:</strong> {json_result.dinner.protein}g<br/>
                                <br/>
                            </div>
                        </div>

                    <strong>Snack:</strong> <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <Link to={json_result.snack.url} rel="noopener noreferrer"><img className="borderImage" src={json_result.snack.image} alt="snack"></img></Link>
                            </div>

                            <div className="col-md-10 mealPadding">
                            <strong>Item:</strong> <a href={json_result.snack.url} rel="noopener noreferrer">{json_result.snack.title}</a><br/>
                                <strong>Calories:</strong> {json_result.snack.calories}<br/>
                                <strong>Fat:</strong> {json_result.snack.fat}g<br/>
                                <strong>Carbs:</strong> {json_result.snack.carbs}g<br/>
                                <strong>Protein:</strong> {json_result.snack.protein}g<br/>
                                <br/>
                            </div>
                        </div>

                        <hr/>
                        <center>
                            <strong>Total Calories:</strong> {json_result.total.calories}<br/>
                            <strong>Total Fat:</strong> {json_result.total.fat}g<br/>
                            <strong>Total Carbs:</strong> {json_result.total.carbs}g<br/>
                            <strong>Total Protein:</strong> {json_result.total.protein}g<br/>
                        </center>

                </div>

            </div>
        </div>

        <div className="col-md-1">
        </div>
    </div>
    );

}

export default Card;