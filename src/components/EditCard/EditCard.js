import React from 'react';

const EditCard = () => (
    <Card className='small editCard'
        header={<CardTitle image={ props.image }>Card Title</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>
);

export default EditCard;