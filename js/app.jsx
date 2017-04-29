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
                info = "wow, trafiłeś!";
                wishes = "Jaś, po pierwsze to dziękuję Ci za Twoją motywację i wiarę we mnie. Jesteś moją lepszą połówką:) Życzę i Tobie, i sobie, kolejnych wesołych lat razem, z dziećmi lub bez, odważnie spełniając marzenia. nnwjbck";
                photo = "./images/alajas.png";

            } else if (this.state.name == "Jaconi") {
                info = "trafiłeś!";
                wishes = "Żebyś miał zawsze zluzowane szelki!";
                photo = "./images/jaco.png";


            } else if (this.state.name == "Misiak") {
                info = "trafiłeś!";
                wishes = "Żeby na koniec jego 27 roku Twoja żona zawstydzała Cię umiejętnościami zawodowymi i żeby bardziej opłacało się Tobie niż jej pójść na urlop macierzyński";
                photo = "./images/michalgosia.png"

            } else if (this.state.name == "Luis") {
                info = "trafiłeś!";
                wishes = "Either because of getting older or 'henner', better broth is produced. Molt d'anys from Barcelona!";

            } else if (this.state.name == "Paczos" ) {
                info = "trafiłeś!";
                wishes = "Twardych jaj!";
                photo = "./images/paczosy.png"

            } else if (this.state.name == "Duży" ) {
                info = "trafiłeś!";
                wishes = `Ala teraz robi strony, co zaobserwował Johnny.
                'Stałaś się webową wróżką' - czule szepnął jej na uszko.
                React z jQuery na starcie, tylko PeHaP daje tarcie..`;
                photo = "./images/duzy.png"

            } else if (this.state.name == "Mama" || this.state.name == "Tata" ) {
                info = "trafiłeś!";
                wishes = `Niech Ci winko leci z kranu, nim polecisz do Iranu.
                Tam już winka pić nie trzeba, Allah groźnie patrzy z nieba.
                Niech Cię tam pilnuje żona - Iran to nie Arizona...
                Słuchaj przestróg mamy, taty - bo Ci porachują gnaty!!!`;
                photo = "./images/mamatata.png"

            } else if (this.state.name == "Kasia Górska" ) {
                info = "trafiłeś!";
                wishes = "Żeby zdrowko i humor zawsze dopisywały, żonka byla wiecznie młoda i piękna;), i zeby rodzinka powiekszyla sie niebawem o tylu młodych i silnych gagatkow (płci obojga), że zabraknie dla nich kandydatow na chrzestnych spośrod rodziny i znajomych :)";
                photo = "./images/kachu.png";

            } else if (this.state.name == "Andrzej" ) {
                info = "trafiłeś!"
                wishes = "Jasiu, piekną żonę juz masz i wiecej kobiet w swoim wieku nie potrzebujesz ;) Za to, życze ci pięknej córy i spełnienia marzeń, których Twoja głowa jest pełna!";
                photo = "./images/andrzej.png"

            } else if (this.state.name == "Kasia Rymuza" ) {
                info = "trafiłeś!";
                wishes = "Jasiu, rośnij duży, mądry i bogaty";
                photo = "./images/kasiafranek.png"

            } else if (this.state.name == "Rafał" ) {
                info = "trafiłeś!";
                wishes = "Na obiad bitek a nie bitow ;) i żeby żona Ci się nie     znerdziła...:)";
                photo = "./images/otty.png";

             } else if (this.state.name == "Kasia" ) {
                 info = "która?!";
                 wishes = "";

            } else if (this.state.name == "Kasia Prządka" ) {
                info = "trafiłeś!";
                wishes = "Podróżniczych przygód, radości każdego dnia i realizacji marzeń!";
                photo = "./images/kasia.png";

            } else if (this.state.name == "Ania" ) {
                info = "trafiłeś!";
                wishes = "Zero policyjnych przygód w Iranie:)";
                photo = "./images/ania.png";

            } else if (this.state.name == "Maro" ) {
                info = "trafiłeś!";
                wishes = "Z okazji urodzin życzymy Ci gromadki dzieciaków, w kieszeni miedziaków, przyjaciół od groma, kilku szalików  i koncertów bez liku! Sto Lat:) Ania i Marek";
                photo = "./images/aniamaro.png";

            } else if (this.state.name == "Wojtuś" ) {
                info = "trafiłeś!";
                wishes = "Jasiek! Chciałbym Ci życzyć, abyś dalej szerzył wszędzie uśmiech i radość, i wydobywał z ludzi to, co naprawdę piekne i cenne (niekoniecznie po dobroci). Aby nigdy nie brakowało Ci optymizmu, a drobne trudności nie były w stanie zgasić Twojego zapału. Właściwie, to żebyś wcale się nie zmieniał, bo jesteś naprawdę wspaniały i mogę tylko podziękować Ci za Twoja obecność w moim życiu";
                photo = "./images/wojtek.png";

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
                            <img id="photo" src={photo}></img>
                        </div>
                    </div>;
        }
    }


    ReactDOM.render(
        <Birthday/>,
        document.getElementById('app')
    );
});
