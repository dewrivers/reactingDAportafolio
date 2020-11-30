import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Rocio. I'm a full stack Web Developer  with experience in Express JS, Node JS, MongoDB, and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, the marche , is a little e-comerce. You can check it out <a href="https://github.com/dewrivers/Project_2" target="_blank" rel="noopener noreferrer">here</a>. It is built with mysql2, sequelize, Express JS, express-handlebars and Node JS. However, I will be rebuilding it using React in the coming months</p>

            </Content>
        </div>
    );

}

export default AboutPage;