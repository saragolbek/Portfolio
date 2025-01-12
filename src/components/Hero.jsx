import React from 'react';
import Image from 'next/image';

const Hero = () => (
    <div className="row" id="home">
        <Image
            src="/images/heroImg.jpg"
            alt="Hero Background"
            layout="responsive"
            width={1920}
            height={1080}
            className="img-fluid w-100"/>
    </div>
);

export default Hero;
