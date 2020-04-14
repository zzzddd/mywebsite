import React from 'react';
import '../App.css';

export default () => {
    return(
        <div className="footer">
            Photos by <a className='artist-a' href="https://unsplash.com/@lians?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Lians Jadan"><span className="artist-span"><svg xmlns="http://www.w3.org/2000/svg" className="artist-svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span className="artist-span">Lians Jadan</span></a> on Unsplash
        </div>
    )
}