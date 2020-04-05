import axios from 'axios'

export const post_log = async (action) => {
    let url = "https://cors-anywhere.herokuapp.com/https://tfn85zvwe5.execute-api.us-west-1.amazonaws.com/default/logging"
    let date = new Date();
    let formatted_date = date.toISOString().split('T')[0] + ' ' + date.toISOString().split('T')[1].split('Z')[0]
    let source = "Bitebody.xyz FRONT-END"

    const response = await fetch('https://geoip-db.com/json/');
    const client_data = await response.json()

    let log = {
        "log": {
            "source": source,
            "time": formatted_date,
            "action": action,
            "client_data": {
                "country_code": client_data.country_code,
                "country_name": client_data.country_name,
                "city": client_data.city,
                "postal": client_data.postal,
                "latitude": client_data.latitude.toString(),
                "longitude": client_data.longitude.toString(),
                "IPv4": client_data.IPv4,
                "state": client_data.state
            }
        }
    }

    axios.post(url, log)
        .catch(err => {
            console.log(err)
        })


    console.log(url)
    console.log(formatted_date)
    console.log(action)
}