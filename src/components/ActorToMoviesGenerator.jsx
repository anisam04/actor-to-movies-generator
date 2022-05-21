import React, {Component} from 'react';
import {Container, Form, Button, Card, Row, Col, CardGroup, Stack} from 'react-bootstrap';
// require('dotenv').config();
// import logo from '../logo.png'
import {createMovieGeneratorPrompt} from '../utils/promptGenerator';

const {Configuration, OpenAIApi} = require("openai");

class ActorToMoviesGenerator extends Component {
    // constructor(){
    //     super()
       state = {
            heading: 'The response from AI will show here',
            response: '......waiting for response',
            responseshistory:[''],
            headinghistory: ['']

        }
    //  }

    onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(formData)
        const formDataObj = Object.fromEntries(formData.entries())
        // console.log(formDataObj.actorName)

    const configuration = new Configuration({
            apiKey: process.env.REACT_APP_SECRET_NAME,
        });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
        prompt: createMovieGeneratorPrompt(formDataObj.actorName) ,
        temperature: 0.8,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    .then((response) => {
        this.setState({
            heading:`Prompt:${formDataObj.actorName}`,
            response: `${response.data.choices[0].text}`,
            responseshistory: [`${response.data.choices[0].text}`, ...this.state.responseshistory ],
            headinghistory:[ `${formDataObj.actorName}`, ...this.state.headinghistory ]
        })
        // console.log(response)
    })
    }
    render(){

        return (
            <div>
                {/* <h1> This is the Home Page</h1> */}
                <Container>
                    <br />
                    <br />
                    {/* <h1>Generate Movie Names</h1> */}
                    <br />
                    {/* <h4>Generate movies. </h4> */}
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            {/* <Form.Label>lorem ipsum</Form.Label> */}
                            <Form.Control
                            type="text"
                            name="actorName"
                            placeholder="Enter Actor Name" />
                            <Form.Text className="text-muted">
                                Enter the full actor name and initials capitalised(eg.: Tom Hanks).
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit">
                            Generate Movie Names
                        </Button>
                    </Form>
                    <br />
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                            <hr />
                            <br />
                            <Card.Text>
                                <h4>{this.state.response}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                <Container>
                <h2>Prompt History</h2>
                    {/* {this.props.header} */}
            <CardGroup>
                <Card>
                    <Card.Title>Prompt</Card.Title>
        {this.state.headinghistory.map((hItem, index) => (
            <Col className="border"
            key={`hist${index}`}> {hItem} </Col>
          ))}
          </Card>
          <Card>
              <Card.Title>Response</Card.Title>
        {this.state.responseshistory.map((hItem, index) => (
            <Col className="border"
            key={`hist${index}`}> {hItem} </Col>
          )).sort((a, b) => b - a)}
          </Card>
         </CardGroup>
                </Container>
                {/* <br />
                <br />
                <br />
                <br /> */}
                </Container>
            </div>
        )
    }
}
export default ActorToMoviesGenerator