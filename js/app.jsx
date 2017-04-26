import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Birthday extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                name: "",

            }
        }

        handleTextChange = (event) => {
            this.setState({
                name: event.target.value,
            });

        }

        render() {
            var wishes;
            var info;
            var photo;

            if (this.state.name == "Ala") {
                info = "trafiłeś!"
                wishes = "";
                photo = "../chat-bubble.png";

            } else if (this.state.name == "Jaconi") {
                info = "trafiłeś!"
                wishes = "Żebyś miał zawsze zluzowane szelki";


            } else if (this.state.name == "Kacper") {
                info = "trafiłeś!"
                wishes = "";

            } else if (this.state.name == "Wojtuś") {
                info = "trafiłeś!"
                wishes = "";

            } else if (this.state.name == "Moni" ) {
                info = "trafiłeś!"
                wishes = "";

            } else if (this.state.name == "Mama" || this.state.name == "Tata" ) {
                info = "trafiłeś!"
                wishes = `Niech Ci winko leci z kranu, nim polecisz do Iranu.
                        Tam już winka pić nie trzeba, Allah groźnie patrzy z nieba.
                        Niech Cię tam pilnuje żona - Iran to nie Arizona...
                     Słuchaj przestróg mamy, taty - bo Ci porachują gnaty!!!`;

            } else {
                info = "jeszcze nie trafiłeś!";
            }

            return <div className="container">

                        <div className="center">
                            <span> {info}</span>
                            <input type="text" value={this.state.name} placeholder="wpisz imię" onChange={this.handleTextChange}/>
                        </div>

                        <div id="cloud">
                            <p> <h1>{wishes} </h1></p>
                        </div>

                        <div>
                            <img src={photo}></img><span>?</span>
                        </div>
                    </div>;
        }
    }


    ReactDOM.render(
        <Birthday/>,
        document.getElementById('app')
    );
});
