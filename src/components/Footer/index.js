import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row flex-start">

                    <div className="col col-9">
                        <div className="row bg">
                            <div className="col">
                                <div className="icon yellow">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <a href='#!'>
                                    Required
                                    <h6>Format guide</h6>
                                </a>
                            </div>
                            <div className="col">
                                <div className="icon blue">
                                    <i className="fa fa-volume-up" aria-hidden="true"></i>
                                </div>
                                <a href='#!'>
                                    Dubbed playback
                                    <h6>Volume adjustment</h6>
                                </a>
                            </div>
                            <div className="col">
                                <div className="icon green">
                                    <i className="fa fa-film" aria-hidden="true"></i>
                                </div>
                                <a href='#!'>
                                    Required
                                    <h6>Formats guide</h6>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col col-3 col-right">
                        <div className="social-icon instagram">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            Instagram
                        </div>
                        <div className="social-icon telegram">
                            <i className="fa fa-telegram" aria-hidden="true"></i>
                            Telegram
                        </div>
                    </div>

                </div>

            </div>

            <div className="copyright">
                © 2021 All rights reserved
            </div>

        </footer>
    )
}

export default Footer
