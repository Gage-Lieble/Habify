import Day from "./Day"
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../context/user-context"

const Calendar = () => {
    const user = useContext(UserContext)
    const [days, setDays] = useState([])
    useEffect(() => {
        axios.get('api/log/').then(res => {
            for(let day of res.data){
                if (day.user === user){
                    setDays((prev) => { return [day, ...prev]})
                } 
            }
        })

    }, [setDays])
    return (
        <>
        {days.map(days => <Day user={days.user} date={days.date} result={days.result} notes={days.notes}/>)}
        </>
    )
}

export default Calendar