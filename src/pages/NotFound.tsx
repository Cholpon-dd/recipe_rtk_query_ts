import React from 'react';
import not from '../assets/image/404.jpg'

const NotFound = () => {
    return (
        <div className="not__found">
            <p className="page__title">Page Not Found</p>
            <img src={not} alt="" className="page__img"/>
        </div>
    );
};

export default NotFound;