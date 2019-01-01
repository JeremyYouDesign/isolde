import React from 'react';
import { Modal } from 'react-materialize';
import { Row, Col } from '../Grid';
import './spotCard.css';

const SpotCard = (props) => (
    <div className="card spotCard">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={props.image} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.title}<i class="tiny material-icons right">dehaze</i></span>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
            <span class="grey-text text-darken-4">{props.title}</span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            <Modal
                header={props.title}
                fixedFooter
                trigger={ <p><a href="#">Get the look</a></p> }>
                <Row>
                    <Col size="6">
                        <img className="modal-image" src={ props.image } alt="look" />
                    </Col>
                    <Col size="6">
                        <h5>Where to shop</h5>
                        <hr />
                    </Col>
                </Row>
            </Modal>
        </div>
    </div>
);

export default SpotCard;