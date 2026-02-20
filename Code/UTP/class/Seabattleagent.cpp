#pragma once 
#include <vector>
#include <iostream>
#include "statescelda.h"
#include "Seabattlefield.cpp"

class SeabattleAgent{
    private:
        SeabattleField mitablero;
        SeabattleField oponentetablero;
        int socket;
    public:
        void init(const SeabattleField &tablero){
            mitablero = tablero;
            oponentetablero = SeabattleField(mitablero.size());
        }

        void startClient(){
            //logica para iniciar el cliente, conectarse al servidor y manejar la comunicación 
        }

        void startServer(){
            //logica para iniciar el servidor, esperar conexiones y manejar la comunicación
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

        pair<int, int> parse_move(string move){
            //logica para convertir un string de movimiento en coordenadas x,y

        }

        string move_to_string(int x, int y){
            //logica para convertir coordenadas x,y en un string de movimiento
        }

        bool is_game_ended(){
            //verifica si el juego ha terminado
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

        void SendResult(string result){
            // enviar resultado del movimiento al oponente 
        }




    
};