import React from 'react';
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
            <p><a href="#">Get the look</a></p>
        </div>
    </div>
);

export default SpotCard;