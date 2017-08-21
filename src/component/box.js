import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Text = (props) => (
    <div>{props.children}</div>
);
const Label = (props) =>{
    let name = props.show.name.slice(0,25);
    return (
    <Col xs={3} md={3} xsOffset={1} className="well">
        <a href={props.show.url}>
            <Text>{props.show._embedded.show.name}</Text> 
            <img src={props.show._embedded.show.image.medium} />
            <Text>{name}</Text>
            <Text>{props.show.runtime} mins</Text>
           {/*--<div dangerouslySetInnerHTML={{ __html:props.show.summary}}/> */}
        </a>
    </Col>
);}

const Box = (props) => {
    console.log(props.data);
    let i = 0;
    return (
        <Grid>
            <Row>
                {props.data.map(function (item) {
                    return (
                        <Label key={i++} show={item} />
                    )
                })}
            </Row>
        </Grid>
    )
}
export default Box;