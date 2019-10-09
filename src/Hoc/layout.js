import React from 'react';
import "./layout.css";

const layout = (props) => {
    console.log(props);
    return (
        <div>
            hi this is from the layout
            {props.children}
            this is footer
        </div>
    );
};

export default layout;