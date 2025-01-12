import React from 'react';

const Resume = () => (
    <div id="resume">
        <h2 className="content-header">Resume</h2>
        <hr/>

        {/* Education */}
        <div className="row">
            <div className="col-4 ">
                <h5>Education</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <p><b>BS Computer Science</b><br/>Westerns Governors University<br/>July - December 2024</p>
            </div>
            <div className="col-4">
                <p><b>BA Liberal Studies with Multiple Subjects Credential</b><br/>Cal Poly Humboldt<br/>2012-2017</p>
            </div>
            <div className="col-4">
                <p><b>Full-Stack Bootcamp</b><br/>AltAcademy<br/>2023-2024</p>
            </div>
        </div>
        <hr/>

        {/* Certificates */}
        <div className="row">
            <div className="col-4 ">
                <h5>Certificates</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <p><b>Linux Essentials</b><br/>July 2024</p>
            </div>
            <div className="col-4">
                <p><b>ITIL 4 Service Management</b><br/>November 2024</p>
            </div>
        </div>
        <hr/>

        {/* Experience */}
        <div className="row">
            <div className="col-4">
                <h5>Professional Experience</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                <p><b>Elementary Teacher</b><br/>Warm Springs, Fremont CA<br/>August 2024-present</p>
                <ul className="pl-4">
                    <li>Integrated district-approved learning apps such as i-Ready and IXL to support differentiated
                        instruction.
                    </li>
                    <li>Developed enrichment opportunities and advanced lessons to challenge high-achieving students.
                    </li>
                    <li>Monitored student progress using data-driven insights to tailor instruction and enhance
                        achievement.
                    </li>
                    <li>Built strong relationships with students and families to support academic and social-emotional
                        growth.
                    </li>
                </ul>
            </div>
            <div className=" col-12 col-md-4">
                <p><b>Elementary Teacher</b><br/>Lowell Elementary, San Jose CA<br/>January 2021- June 2024</p>
                <ul className="pl-4">
                    <li>Designed and implemented technology-centered lessons to enhance engagement and learning
                        outcomes.
                    </li>
                    <li>Served on the school leadership team to analyze data and drive evidence-based improvements.</li>
                    <li>Adapted teaching strategies to support students from diverse and challenging socioeconomic
                        backgrounds.
                    </li>
                    <li>Fostered a positive learning environment, focusing on social-emotional growth alongside academic
                        success.
                    </li>
                    <li>Collaborated with colleagues to develop and implement school-wide initiatives for Title 1
                        schools.
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-4">
                <p><b>Instructional Assistant</b><br/>Irvine Unified, Irvine CA<br/>2017-2021</p>
                <ul className="pl-4">
                    <li>Collected, analyzed, and recorded data to track progress and inform individualized plans.</li>
                    <li>Designed and developed tailored learning materials to meet diverse student needs.</li>
                    <li>Collaborated with staff to address challenges and implement effective strategies.</li>
                    <li>Led small group instruction and intervention programs using approved curricula, achieving
                        measurable results.
                    </li>
                    <li>Adapted to diverse environments and needs, applying problem-solving and communication skills
                        to support positive outcomes.
                    </li>
                </ul>
            </div>
        </div>
        <hr/>

        {/* References */}
        <h5>References</h5>
        <div className="row">
            <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                    <li><b>Katherine Powell</b></li>
                    <li>Principal</li>
                    <li>San Jose Unified</li>
                    <li>kpowell@sjusd.org</li>
                </ul>
            </div>
            <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                    <li><b>Ramon Sanchez</b></li>
                    <li>Program Manager</li>
                    <li>San Jose Unified</li>
                    <li>rsanchez@sjusd.org</li>
                </ul>
            </div>
            <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                    <li><b>Carol Vandergrift</b></li>
                    <li>Educational Coach</li>
                    <li>San Jose Unified</li>
                    <li>cvandergrift@sjusd.org</li>
                </ul>
            </div>
            <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                    <li><b>David Yang</b></li>
                    <li>Instructor</li>
                    <li>Altcademy</li>
                    <li>hellodavidyoung@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Resume;
