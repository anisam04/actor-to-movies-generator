import React, {Component} from 'react';
import {Container, Form, Button, Card, Col, CardGroup} from 'react-bootstrap';
import {createMovieGeneratorPrompt} from '../utils/promptGenerator';

const {Configuration, OpenAIApi} = require("openai");

class ActorToMoviesGenerator extends Component {
       state = {
            heading: 'The response from AI will show here',
            response: '......waiting for response',
            responseshistory:[''],
            headinghistory: ['']

        }

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
        temperature: 0.2,
        max_tokens: 200,
        frequency_penalty: 1,
        presence_penalty: 1,
    })
    .then((response) => {
        this.setState({
            heading:`Prompt:${formDataObj.actorName}`,
            response: `Response:${response.data.choices[0].text}`,
            responseshistory: [
                `${formDataObj.actorName}`, 
                ...this.state.headinghistory,
                `${response.data.choices[0].text}`, 
                ...this.state.responseshistory, 
                 ]
        })
    })
    }
    render(){

        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control
                            type="text"
                            name="actorName"
                            placeholder="Enter Actor/Actress Name" />
                            <Form.Text className="text-muted">
                                Enter the full actor name and initials capitalised (eg.: Tom Hanks).
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-dark" size="lg" type="submit">
                            Generate Movie Names
                        </Button>
                    </Form>
                    <br />
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title><h4>{this.state.heading}</h4></Card.Title>
                            <hr />
                            <br />
                            <Card.Text>
                                <p>{this.state.response}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                <Container>
                <h3>History</h3>
                    {/* {this.props.header} */}
            <CardGroup>
            <Card>
              {/* <Card.Title>Response</Card.Title> */}
        {this.state.responseshistory.map((hItem, index) => (
            <Col 
            key={`hist${index}`}>{hItem} </Col>
          ))}
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