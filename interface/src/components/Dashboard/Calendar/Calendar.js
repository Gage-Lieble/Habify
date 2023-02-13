
import axios from "axios"
import { useEffect, useState, useContext, useRef } from "react"
import UserContext from "../../../context/user-context"
import { ActivityCalendar } from 'activity-calendar-react'
import DayActivityForm from "../Forms/DayActivityForm"
const Calendar = () => {

    const user = useContext(UserContext)

    // Api
    const [days, setDays] = useState([])
    useEffect(() => {
        axios.get('api/log/').then(res => {
            for(let day of res.data){
                if (day.user === user.user){
                    setDays((prev) => { return [day, ...prev]})
                } 
            }

        })
    }, [user])

    // Calendar package
    const didMount = useRef(false)
    const [actCal, setActCal] = useState()
    useEffect(() => {
        const colorCustomization = {
            activity0: '#dadada',
            activity1: '#ED2939',
            activity2: '#006d32',
            activity3: '#26a641',
            activity4: '#50C878',
          }
          if(didMount.current){
            setActCal(<ActivityCalendar id="calendar" sampleData={days} showMonth={true} colorCustomization={colorCustomization} />)
            
          }else{
            didMount.current = true
          }
        },[days])
        
        
        
        return (
          <>
        <div id="calendar-wrap">
            {actCal}
        </div>
        <DayActivityForm />
        
        </>
    )
}

export default Calendar
          // let testdata = [{
          //   day: "2023-01-01",
          //   activity: 5
          // },{
          //   day: "2023-02-01",
          //   activity: 5
          // },{
          //   day: "2023-03-01",
          //   activity: 5
          // },{
          //   day: "2023-04-01",
          //   activity: 5
          // },{
          //   day: "2023-05-01",
          //   activity: 5
          // },{
          //   day: "2023-06-01",
          //   activity: 5
          // },{
          //   day: "2023-07-01",
          //   activity: 5
          // },{
          //   day: "2023-08-01",
          //   activity: 5
          // },{
          //   day: "2023-09-01",
          //   activity: 5
          // },{
          //   day: "2023-10-01",
          //   activity: 5
          // },{
          //   day: "2023-11-01",
          //   activity: 5
          // },{
          //   day: "2023-12-01",
          //   activity: 5
          // },]