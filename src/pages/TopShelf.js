import React, { Component } from 'react';
import { Parallax, Collapsible, CollapsibleItem } from 'react-materialize';
import { Col, Row } from '../components/Grid';
import backgroundOne from '../images/top_shelf_background_1.jpg';
import backgroundTwo from '../images/top_shelf_background_2.jpg';

class TopShelf extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col size="12">
                        <Parallax  imageSrc={ backgroundOne } />

                        <div className="section-white">
                            <h4 className="section-title">EDITORS' PICKS</h4>
                            <Collapsible>
                                <CollapsibleItem header="FASHION">
                                    DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="BEAUTY">
                                    DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="FOOD">
                                    DARK MAGIC
                                </CollapsibleItem> 


                                <CollapsibleItem header="HOME">
                                    DARK MAGIC
                                </CollapsibleItem> 

                                <CollapsibleItem header="TRAVEL">
                                    DARK MAGIC
                                </CollapsibleItem> 
                            </Collapsible>
                        </div>
                        <Parallax imageSrc={ backgroundTwo } />
                    </Col>
                </Row>
            </div>
        )
    }
};

export default TopShelf;