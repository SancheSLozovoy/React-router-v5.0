import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const EntityPage: React.FC = () => {
    return ( 
        <div>
            {data.map(value => (
                <div key={value.name}>
                    <Link to={`entity/${value.name}`}><h2>{value.name}</h2></Link>
                    <p>{value.text}</p>
                </div>
            ))}
        </div>
    );
}
 
export default EntityPage;
