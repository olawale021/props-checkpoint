import React from 'react';
import { Card } from 'react-bootstrap';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
    <Card style={{ width: "25rem", paddingLeft: "40%" }}>
                <Card.Img style={{width: "25rem"}} variant="top" src={imageUrl} alt={name} />
        <Card.Body>
            <Card.Title style={{fontSize: "20px", color: "blue"}}>{name}</Card.Title>
            <Card.Text style={{fontSize: "20px", color: 'Red'}}>
                Team: {team}<br/>
                Nationality: {nationality}<br />
                Jersey Number: {jerseyNumber}<br />
                Age: {age}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Player;