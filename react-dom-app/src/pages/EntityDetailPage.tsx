import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { data } from "../data";

const EntityDetailPage: React.FC = () => {
    const { name } = useParams<{ name: string }>(); 
    const entity = data.find(el => el.name === name);

    if (!entity) {
        return <Redirect to='/404' />;
    }

    return ( 
        <div>
            <h1>{entity.name}</h1>
            <p>{entity.text}</p>
        </div>
    );
}

export default EntityDetailPage;
