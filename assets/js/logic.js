function cachipunCat () {
    let seleccion = ["piedra", "papel", "tijeras"];
    let rondas = parseInt (prompt ("¿cuantas rondas jugaras?"));

    let victory = 0;
    let victoryBender = 0;
    let draw = 0;

    for (let i=0; i<rondas; i++){
        let eligeOpcionUsuario = prompt (" Elige piedra, papel o tijeras ");
        let eligeBender = seleccion [ Math.floor (Math.random() *3)];

        alert (" Tu elegiste : " + eligeOpcionUsuario );
        alert (" bender eligio : " + eligeBender );

        if (eligeOpcionUsuario === eligeBender ){
            alert ("Han empatado");
            draw++;
        }
        else if (
            ( eligeOpcionUsuario === "piedra" && eligeBender === "tijera" ) ||
            ( eligeOpcionUsuario === "tijera" && eligeBender === "papel") ||
            ( eligeOpcionUsuario === "papel" && eligeBender === "piedra")
        ){

            alert ("Has ganado Carlita lechuga");
            victory++;
        }
        else {
            alert ( "Lo sentimos pero has perdido" );
            victoryBender++;
        }
        }

        alert ("Veces ganadas" + victory + "\nVeces empatadas" + draw + "\nVeces que perdiste" + victoryBender) 
    }


cachipunCat();

