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
                info = "wow, trafiłeś!"
                wishes = "Bezpiecznych znajomych i inspirujących przygód :)";
                photo = "";

            } else if (this.state.name == "Jaconi") {
                info = "trafiłeś!"
                wishes = "Żebyś miał zawsze zluzowane szelki!";


            } else if (this.state.name == "Misiak") {
                info = "trafiłeś!"
                wishes = "";

            } else if (this.state.name == "Luis") {
                info = "trafiłeś!"
                wishes = "Either because of getting older or 'henner', better broth is produced. Molt d'anys from Barcelona!";

            } else if (this.state.name == "Paczos" ) {
                info = "trafiłeś!"
                wishes = "Twardych jaj!";

            } else if (this.state.name == "Duży" ) {
                info = "trafiłeś!"
                wishes = `Ala teraz robi strony, co zaobserwował Johnny.
                'Stałaś się webową wróżką' - czule szepnął jej na uszko.
                React z jQuery na starcie, tylko PeHaP daje tarcie..`;

            } else if (this.state.name == "Mama" || this.state.name == "Tata" ) {
                info = "trafiłeś!"
                wishes = `Niech Ci winko leci z kranu, nim polecisz do Iranu.
                        Tam już winka pić nie trzeba, Allah groźnie patrzy z nieba.
                        Niech Cię tam pilnuje żona - Iran to nie Arizona...
                     Słuchaj przestróg mamy, taty - bo Ci porachują gnaty!!!`;

            } else if (this.state.name == "Kasia Górska" ) {
                 info = "trafiłeś!"
                 wishes = "Żeby zdrowko i humor zawsze dopisywały, żonka byla wiecznie młoda i piękna;), i zeby rodzinka powiekszyla sie niebawem o tylu młodych i silnych gagatkow (płci obojga), że zabraknie dla nich kandydatow na chrzestnych spośrod rodziny i znajomych :)";

            } else if (this.state.name == "Andrzej" ) {
                  info = "trafiłeś!"
                  wishes = "Jasiu, piekną żonę juz masz i wiecej kobiet w swoim wieku nie potrzebujesz ;) Za to, życze ci pięknej córy i spełnienia marzeń, których Twoja głowa jest pełna!";

            } else if (this.state.name == "Kasia Rymuza" ) {
                   info = "trafiłeś!"
                   wishes = "Jasiu, rośnij duży, mądry i bogaty";

            } else if (this.state.name == "Rafał" ) {
                      info = "trafiłeś!"
                      wishes = "Na obiad bitek a nie bitow ;) i żeby żona Ci się nie znerdziła...:)";

             } else if (this.state.name == "Kasia" ) {
                    info = "która?!"
                    wishes = "";

            } else if (this.state.name == "Kasia Prządka" ) {
                       info = "trafiłeś!"
                       wishes = "Podróżniczych przygód, radości każdego dnia i realizacji marzeń!";

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
