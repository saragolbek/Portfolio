import React from 'react';
import Image from 'next/image';

const About = () => (
    <div className="row" id="about">
        <div className="col-12">
            <h2 className="content-header">About Me</h2>
            <hr className="pb-2"/>

            {/* About Section */}
            <Image className="about-pic float-end ms-4" src="/images/profilepic.jpg" alt="profilepic" />
            <p>
                Hello! I'm a passionate and dedicated software engineer with a strong background in education and
                technology integration. My journey began as a teacher, where I honed my <b>problem-solving</b> skills by
                troubleshooting classroom technology and supporting student learning. Now, I'm channeling that same
                drive into creating <b>innovative software solutions.</b>
            </p>
            <p>
                Recently, I completed my <b>second degree in computer science</b>, where I combined my love for technology
                and problem-solving to create meaningful projects that make an impact.
                My portfolio showcases a range of technical skills and creativity through projects such as:
            </p>
            <ul>
                <li><b>A social media website</b> designed to foster meaningful connections.</li>
                <li><b>A chatbot app</b> leveraging AI to guide users in exploring IT careers.</li>
                <li><b>A currency exchange website app</b> built with React JS, enabling intuitive, real-time currency
                    comparisons.</li>
                <li><b>A machine learning model</b> to predict retail sales trends and optimize inventory management.</li>
            </ul>
            <p>I thrive in environments that challenge me to think critically and design <b>user-friendly applications</b>.
                Whether it's <b>collaborating</b> on a team project, optimizing <b>back-end</b> systems, or crafting engaging
                 <b>front-end</b> experiences, I bring enthusiasm and a problem-solving mindset to every task.</p>
            <p>Balancing full-time teaching with earning my computer science degree taught me the value of
                 <b>adaptability, dedication, and lifelong learning—qualities</b> I bring to every aspect of my work. Outside
                of coding, I enjoy spending time with my family, hiking, painting, and exploring the creative art
                of embroidery. These hobbies fuel my creativity and provide a balanced perspective that I bring to my
                professional life.</p>

            {/* Skills Section */}

            <h2 className="content-header">Skills</h2>
            <hr className="pb-2"/>
            <div className="row mt-3">
                <div className="col-4">
                    <ul className="list-unstyled">
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> HTML</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> CSS</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> JavaScript</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul className="list-unstyled">
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> React JSX</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> Node.Js</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> Python</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul className="list-unstyled">
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> Java</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> Ruby on Rails</li>
                        <li className="pb-md-3"><i className="fa-solid fa-check"></i> Git</li>
                    </ul>
                </div>
            </div>
            <p className="mt-3">Teaching and software engineering may appear to be very different fields, but they
                share many transferable skills and qualities. The experience and abilities I developed as a
                teacher—such as <b>problem-solving, adaptability, communication, and a dedication to learning</b>—have
                prepared me to excel as a software engineer. I am confident that these strengths will bring value
                and a fresh perspective to my new role in software engineering.</p>
        </div>
    </div>
);

export default About;
