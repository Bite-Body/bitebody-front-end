import React from 'react'

const Card = props =>{
    return(
        <div className="row">
        <div className="col-md-1">
        </div>

        <div className="col-md-10" >
            <div className="card" style={{width: '100%'}}>

                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Calorie Calculator Results</h3>
                </div>

                <div className="card-body" style={{marginLeft: '3em', marginRight: '3em'}}>
                    <center>
                        <strong>Total Recommended Calories:</strong> {props.calories}<br/>
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