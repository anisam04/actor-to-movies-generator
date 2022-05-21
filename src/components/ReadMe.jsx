import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

class Example extends Component {
    render(){
        return (
            <div>
                <Container>
                    <br/> <br/> <br/>
                <p>Hi, this is Ani😊.</p>
                <p>Welcome to the Actor to Movies Generator app.</p>
                <p>With the power of OpenAI API, now you can simply input your favorite actor or actress's name and get to know what movies
                    they were a part of.</p>
                <p>To make the best use of the App, please remember the following:</p>
                    <ul>
                    <li>Please type in the full and accurate name of the actor/actress. For Example, my favorite actor is Hugh Jackman. So I would type "Hugh Jackman" into the textbox.  </li>
                    <li>The AI has been trained for Hollywood movies, so it's recommended to input Hollywood actors/actresses names. </li>
                    </ul> 
                <p></p>
                <p>If you have any questions, please write to me at anisam.samajpati@gmail.com. Enjoy!</p>

                </Container>
            </div>
        )
    }
}
export default Example