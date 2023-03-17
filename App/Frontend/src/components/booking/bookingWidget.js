import {React,useEffect} from 'react'

function CalendarComponent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://datelist.io/dist/datelist/1.3.6/js/app.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload=()=>{
            window.dlist("e4598e80-79a4-4bf5-a165-2cf36574ac81");
        }
        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return <div>
            <div><div id="dlist"></div></div>
            </div>;
}
export default CalendarComponent