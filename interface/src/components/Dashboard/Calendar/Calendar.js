
import axios from "axios"
import { useEffect, useState, useContext, useRef } from "react"
import UserContext from "../../../context/user-context"
import { ActivityCalendar } from 'activity-calendar-react'
import DayActivityForm from "../Forms/DayActivityForm"
const Calendar = (props) => {
  
  const user = useContext(UserContext)
  
    // Api
    const [milestones, setMilestones] = useState([])
    const [days, setDays] = useState([])
    useEffect(() => {
      
      axios.get('api/log/').then(res => {
        for(let day of res.data){
          if (day.user === user.user){
            setDays((prev) => { return [day, ...prev]})
          } 
        }
        
        return res
        
      }).then(res => {
       
        let startDate = null
        
        for(let day of res.data){
          if (day.user === user.user){
            startDate = new Date(day.day)
            break
          } 
          }
          
          let week = new Date()
          week.setDate(startDate.getDate() + 7) // days 1 less since it doesnt count first entry
          let month = new Date()
          month.setDate(startDate.getDate() + 28)
          let thrMonth = new Date()
          thrMonth.setDate(startDate.getDate() + 91)
          let sixMonth = new Date()
          sixMonth.setDate(startDate.getDate() + 182)
          let ninMonth = new Date()
          ninMonth.setDate(startDate.getDate() + 273)
          let oneYear = new Date()
          oneYear.setDate(startDate.getDate() + 365)
          // may have to slice date
          let milestonesPoints = [{user: user.user, day:week.toISOString().slice(0,10), activity:3, notes:'week'},{user: user.user, day:month.toISOString().slice(0,10), activity:3, notes:'month'},{user: user.user, day:thrMonth.toISOString().slice(0,10), activity:3, notes:'thrMonth'},{user: user.user, day:sixMonth.toISOString().slice(0,10), activity:3, notes:'sixMonth'},{user: user.user, day:ninMonth.toISOString().slice(0,10), activity:3, notes:'ninMonth'},{user: user.user, day:oneYear.toISOString().slice(0,10), activity:3, notes:'oneYear'},]
          for (let ms of milestonesPoints){
            if (ms.day[3] > milestonesPoints[0].day[3]){
                ms.activity = 2
            }
            setDays((prev) => {return [ms,...prev]})
          }
        })
        
      }, [user])
      
      
      
      
    // Calendar package
    const didMount = useRef(false)
    const [actCal, setActCal] = useState()
    useEffect(() => {
        const colorCustomization = {
            activity0: '#dadada',
            activity1: '#ffffff',
            activity2: '#dadada',
            activity3: '#dadada',
            activity4: '#50C878',
          }
          if(didMount.current){
            setActCal(<ActivityCalendar id="calendar" sampleData={days} showMonth={true} colorCustomization={colorCustomization} />)
            
          }else{
            didMount.current = true
          }
        },[days])
      
        
        return (
          <div id="calendarpg-wrap">
            <h2 className="page-title">Calendar</h2>
            <div id="calendar-wrap">
                {actCal}
            </div>
            <div id="mods-wrap">
              <h4>Streak: {user.streak} days</h4>
              <h4>Multiplyer: x{user.mult}</h4>
            </div>
            <DayActivityForm />
        
        </div>
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