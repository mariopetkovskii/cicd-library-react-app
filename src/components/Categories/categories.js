import React from "react";

const categories = (props) => {

    return (
        <ul className={"list-group"}>
            {props.categories.map((term)=>{
                return(
                        <li className={"list-group-item"}> {term}</li>
                );
            })}
        </ul>
    )
}

export default categories;