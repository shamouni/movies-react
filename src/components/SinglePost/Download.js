import React from 'react'

const Download = () => {
    return (
        <div className="download">
            <div className="container">
                <div className="row">
                    <div className="col col-auto">
                        <span>quality: 1080p, size: 1.86 gb</span>
                        <span>quality: 720p, size: 915 mb</span>
                    </div>
                    <div className="col col-auto">
                        <a href="#!" className="btn btn-green">Download 1080p</a>
                        <a href="#!" className="btn btn-green">Download 720p</a>
                        <a href="#!" className="btn btn-yellow">Watch Online</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
