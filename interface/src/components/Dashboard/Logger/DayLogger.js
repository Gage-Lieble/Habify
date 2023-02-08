import axios from "axios"
import { useEffect, useState } from "react"
const DayLogger = (props) => {

    const [days, setDays] = useState([])
    useEffect(() => {
        axios.get('api/log/').then(res => {
            for(let day of res.data){
                console.log(day)
                console.log(props.user)
                if (day.user === props.user){
                    console.log('match')
                    setDays((prev) => { return [day, ...prev]})
                } 
            }
        })

    }, [setDays])
    return (
        <>
        {days.map(days => <div>{days.user}, {days.date}, {days.result.toString()}, {days.notes}</div>)}
        </>
    )
}

export default DayLogger