import React from 'react';

import './style.css';

const Banner  = (props) => {

    return(
        <div className="mainBanner">
            {props.title}
        </div>
    );

}

export default Banner;