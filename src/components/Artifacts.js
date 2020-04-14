import React from 'react';
import '../App.css';

export default () => {

    const gotolinkedin = () => {
        return window.open('https://www.linkedin.com/in/zd2019/', '_blank')
    }

    const gotogithub = () => {
        return window.open('https://github.com/zzzddd', '_blank')
    }

    const gototwitter = () => {
        return window.open('https://twitter.com/DemaZeleke', '_blank')
    }

    return(
        <div className="links-bar">
            <div className="linkedin" onClick={gotolinkedin}/>
            <div className="github" onClick={gotogithub}/>
            <div className="twitter" onClick={gototwitter}/>
        </div>
    )
}