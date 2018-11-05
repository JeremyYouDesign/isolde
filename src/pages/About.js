import React, { Component } from 'react';
import { Parallax } from 'react-materialize';
import img from '../images/about1.jpg';
import imgTwo from '../images/about2.jpg';
import { Col, Row } from '../components/Grid';

class About extends Component {

  render() {
    return (
      <div>
          <Row>
              <Col size="12">
                <Parallax imageSrc={ img } />
                <div className="section white">
                    <div className="row container about">
                        <h2 className="header">About</h2>
                        <p className="grey-text text-darken-3 lighten-3">ISOLDE is a trend immersion platform that allows users to stay up to date 
                        on the latest in fashion and beauty trends.  Combining seasonal style capsules and current trend ideas, ISOLDE stays true to 
                        its Arthurian namesake as a coveted source of inspiration.</p>
                        <p className="grey-text text-darken-3 lighten-3">In addition to offering valuable trend ideas, the ISOLDE editors have also 
                        hand-selected their current favorite pieces and products for users to browse through.  And for the most discerning of individuals,
                        TRISTAN+ISOLDE is proud to offer a curated variety of handcrafted pieces that embody the effortless glam spirit of ISOLDE.</p>
                        <p className="grey-text text-darken-3 lighten-3">We at ISOLDE invite you to journey with us and discover your newest loves and 
                        must-haves of the season.</p>
                    </div>
                </div>
                <Parallax imageSrc={ imgTwo } />
            </Col>
        </Row>
    </div>
    );
  }
}

export default About;