import React, { Component } from 'react';
import { Col, Row } from '../components/Grid';
import SpotCard from '../components/SpotCard';
import taylor from '../images/taylor_sequin_hoodie.png';

class Spotlight extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Col size="12">
                        <SpotCard image={ taylor } title="Taylor Swift-Endgame" />
                        <SpotCard image={ taylor } title="Taylor Swift-Endgame" />
                        <SpotCard image={ taylor } title="Taylor Swift-Endgame" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Spotlight;