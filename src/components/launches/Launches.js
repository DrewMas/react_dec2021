import {useEffect, useState} from "react";
import {getLaunchInfo} from "../../services/services";
import Launch from "../launch/Launch";

export default function Launches() {

    let [info, setInfo] = useState([]);

    useEffect(() => {
        getLaunchInfo().then(value => setInfo(value));
    },[]);

    return (
        <div className={`launches`}>
            {
                info.map((value, index) => {
                    if (value.launch_year !== `2020`) {
                        return <Launch key={index} launch={value}/>
                    }
                })
            }
        </div>
    );
}
