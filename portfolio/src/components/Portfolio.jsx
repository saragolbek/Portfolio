import React from 'react';
import Image from 'next/image';
import projects from '@/data/projects.json';


const Portfolio = () => (
    <section>
        <div className="row" id="portfolio">
            <div className="col-12">
                <h2 className="content-header">Portfolio</h2>
                <hr />
            </div>
        </div>
        <div className="row flex-nowrap scrollableRow">
            {projects.map((project) => (
                <div className="col-8 col-md-5 text-center" key={project.id}>
                    <div className="sample-website">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                className="website-img"
                                src={project.image}
                                alt={project.alt}
                                width={500}
                                height={300}
                            />
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <h6 className="pl-4 pr-4 pt-4">{project.name}</h6>
                        </a>
                        <p className="pl-4 pr-4">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i></a>
                             {project.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Portfolio;
