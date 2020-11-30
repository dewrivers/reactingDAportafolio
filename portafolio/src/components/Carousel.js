import React from 'react';

import Card from '../components/Card';

import fitness from '../assets/img/fitness.png';
import RRB from '../assets/img/rrb.PNG';
import codingQuiz from '../assets/img/codingQuiz.JPG';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Fitness Tracker',
                    subTitle: 'Tracker with dashboard',
                    imgSrc: fitness,
                    link: 'https://serene-hollows-70183.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Rocio',
                    subTitle: '',
                    imgSrc: RRB,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Quiz Game',
                    subTitle: 'A codding quiz game',
                    imgSrc: codingQuiz,
                    link: ' https://dewrivers.github.io/quiz-challenge/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card 
                    item={item} 
                   click={(e => this.handleCardClick(item.id, e))} 
                     key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;