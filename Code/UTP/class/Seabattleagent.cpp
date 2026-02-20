#ifndef SEABATTLEAGENT_CPP_INCLUDED
#define SEABATTLEAGENT_CPP_INCLUDED

#include <vector>
#include <iostream>
#include <string>
#include <utility>
#include <ws2tcpip.h>

#include "statescelda.h"
#include "Seabattlefield.cpp"

class SeabattleAgent{
    private:
        SeabattleField mitablero;
        SeabattleField oponentetablero;
        SOCKET socket;
    public:
        SeabattleAgent() : mitablero(8), oponentetablero(8), socket(INVALID_SOCKET) {}

        void init(const SeabattleField &tablero ,const  SOCKET &socket){
            mitablero = tablero;
            oponentetablero = SeabattleField(mitablero.size());
            this->socket = socket;
        }
 

        void star_game(bool iniciador){
            // bucle principal del juego, alternando turnos entre el jugador y el oponente, procesando disparos y actualizando los tableros
            while(!is_game_ended()){
                if(iniciador){
                    // turno del jugador
                    // 1. Leer movimiento del jugador
                    // 2. Enviar movimiento al oponente
                    // 3. Leer resultado del movimiento
                    // 4. Actualizar tablero del oponente con el resultado
                }else{
                    // turno del oponente
                    // 1. Leer movimiento del oponente
                    // 2. Procesar disparo en el tablero propio
                    // 3. Enviar resultado al oponente
                    // 4. Actualizar tablero propio con el resultado
                }
                iniciador = !iniciador; // alternar turnos
            }
        
        }

        std::pair<int, int> parse_move(std::string move){
            //logica para convertir un string de movimiento en coordenadas x,y
            (void)move;
            return {0, 0};
        }

        std::string move_to_string(int x, int y){
            //logica para convertir coordenadas x,y en un string de movimiento
            return std::to_string(x) + "," + std::to_string(y);
        }

        bool is_game_ended(){
            //verifica si el juego ha terminado
            return mitablero.is_loser() || oponentetablero.is_loser();
        }

        void ReadMove(){
            // recibir movimiento del oponente 
        }

        void ReadResult(){
            // recibir resultado del movimiento 
        }

        void SendMove(int x, int y){
            // enviar movimiento al oponente 
        }

        void SendResult(std::string result){
            // enviar resultado del movimiento al oponente 
        }

        void print_fields(){
            std::cout<<"Tablero propio:" ;
            std::cout<<"A B C D E F G H"<<std::endl ;
            for(int i = 0; i < mitablero.size(); i++){
                std::cout<<i<<" ";
                for(int j = 0; j < mitablero.size(); j++){
                    std::cout<<static_cast<char>(mitablero.get_celda(i,j))<<" ";
                }
                std::cout<<std::endl;
            }
            std::cout<<"Tablero del oponente:" <<std::endl ;
            std::cout<<"A B C D E F G H"<<std::endl ;
            for(int i = 0; i < oponentetablero.size(); i++){
                std::cout<<i<<" ";
                for(int j = 0; j < oponentetablero.size(); j++){
                    std::cout<<static_cast<char>(oponentetablero.get_celda(i,j))<<" ";
                }
                std::cout<<std::endl;
            }
        }


    
};

#endif