import React, {useState} from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab= (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?  "qualification__button button--flex" : "qualification__button | button--flex"}  onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__active qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ?  "qualification__button button--flex" : "qualification__button | button--flex"}  onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState ===1 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">San Jose State University</h3>
                            <span className="qualification__subtitle">
                                BS in Computer Science</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2022
                            </div>
                        </div>
                        <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">De Anza College</h3>
                            <span className="qualification__subtitle">
                                AS in Computer Science</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2017-2020
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">EDA Engineer</h3>
                            <span className="qualification__subtitle">
                                Hughes Network. - MD , US</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2023-Recent
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">IT Specialist</h3>
                            <span className="qualification__subtitle">
                                Vibrant - CA, US</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2023-2023
                            </div>

                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">QA Software Engineer</h3>
                            <span className="qualification__subtitle">
                                Netgear inc. - CA , US</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021-2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">IT Specialist</h3>
                            <span className="qualification__subtitle">
                                Interdata - HCM, Vietnam</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2021
                            </div>

                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Food Supply</h3>
                            <span className="qualification__subtitle">
                                De Anza College - CA, US</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification