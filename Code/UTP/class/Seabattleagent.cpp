#pragma once 
#include <vector>
#include <iostream>
#include "statescelda.h"
#include "Seabattlefield.cpp"

class SeabattleAgent{
    private:
        SeabattleField mitablero;
        SeabattleField oponentetablero;
    public:
        void init(const SeabattleField &tablero){
            mitablero = tablero;
            oponentetablero = SeabattleField(mitablero.size());
        }

        void star_game(){
            // bucle principal del juego, alternando turnos entre el jugador y el oponente, procesando disparos y actualizando los tableros
        }

        pair<int, int> parse_move(string move){
            //logica para convertir un string de movimiento en coordenadas x,y

        }

        string move_to_string(int x, int y){
            //logica para convertir coordenadas x,y en un string de movimiento
        }

        bool is_game_ended(){
            //verifica si el juego ha terminado
        }


    
};