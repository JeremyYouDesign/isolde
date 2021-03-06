import React, { Component } from 'react';
import { Parallax, Collapsible, CollapsibleItem } from 'react-materialize';
import { Col, Row } from '../components/Grid';
import background from '../images/trendBackground.jpg';

class Trend extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col size="12">
                        <Parallax imageSrc={ background } />

                        <div className="section-white">
                            <h4 className="section-title">TREND</h4>
                            <Collapsible>
                                <CollapsibleItem header="SPRING/SUMMER 2019">
                                DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="RESORT 2019">
                                DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="FALL/WINTER 2019">
                                DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="HOLIDAY 2019">
                                DARK MAGIC
                                </CollapsibleItem> 
                            </Collapsible>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Trend;