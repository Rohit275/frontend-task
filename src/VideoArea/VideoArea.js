import React from 'react';
import ReactPlayer from 'react-player';
import logo from './youtube-dark.png'

export default function VideoArea () {
    return (
        <div className="videoArea">
            <div className="videos">
                <div className="video">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=CjFWbEOcq-Y"
                        height="170px"
                        width="280px"
                        controls
                    />
                    <br />
                    <div className="image">
                        <img src={logo} alt="react" style={{
                            height:"40px",
                            width:"40px",
                            borderRadius: '50%'
                        }}/>
                        <div>React & Material UI #21</div>
                    </div>
                    <br/>
                    <div className="view">
                        24,788 views•Jun 7, 2020
                    </div>
                </div>

                <div className="video">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=CjFWbEOcq-Y"
                        height="170px"
                        width="280px"
                        controls
                    />
                    <br />
                    <div className="image">
                        <img src={logo} alt="react" style={{
                            height:"40px",
                            width:"40px",
                            borderRadius: '50%'
                        }}/>
                        <div>React & Material UI #21</div>
                    </div>
                    <br/>
                    <div className="view">
                        24,788 views•Jun 7, 2020
                    </div>
                </div>
                <div className="video">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=CjFWbEOcq-Y"
                        height="170px"
                        width="280px"
                        controls
                    />
                    <br />
                    <div className="image">
                        <img src={logo} alt="react" style={{
                            height:"40px",
                            width:"40px",
                            borderRadius: '50%'
                        }}/>
                        <div>React & Material UI #21</div>
                    </div>
                    <br/>
                    <div className="view">
                        24,788 views•Jun 7, 2020
                    </div>
                </div>
            </div>
        </div>
    );
}