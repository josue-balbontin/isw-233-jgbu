#ifndef SEABATTLEAGENT_CPP_INCLUDED
#define SEABATTLEAGENT_CPP_INCLUDED

#include <vector>
#include <iostream>
#include <string>
#include <utility>
#include <ws2tcpip.h>

#include "statescelda.h"
#include "Seabattlefield.cpp"
#include "staterespuesta.h"

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
                      std::cout<<"Ingrese su movimiento (ejemplo: A1): ";
                    std::string move;
                    std::cin >> move;
                    auto [x, y] = parse_move(move);
                    SendMove(x, y);
                    RespuestaState result = ReadResult();
                    if(result == RMISS){
                        oponentetablero.mark_miss(x, y);
                    }else if(result == RHIT){
                        oponentetablero.mark_hit(x, y);
                    }else if(result == RKILL){
                        oponentetablero.mark_kill(x, y);
                    }
                    
                }else{
                    std::pair<int , int > movimiento = ReadMove();

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
            
            return {move[0]-'A', move[1]-'1' -1};
        }

        std::string move_to_string(int x, int y){
           
            return std::to_string(x +65) + "," + std::to_string(y);
        }

        bool is_game_ended(){

            return mitablero.is_loser() || oponentetablero.is_loser();
        }

         std::pair<int, int> ReadMove(){
            char buffer[2];
            int bytesRecibidos = recv(socket, buffer, sizeof(buffer) - 1, 0);
            if (bytesRecibidos > 0) {
                buffer[bytesRecibidos] = '\0';
                
            }
            return parse_move(std::string(buffer));
        }

        RespuestaState ReadResult(){
            char buffer[2];
            int bytesRecibidos = recv(socket, buffer, sizeof(buffer) - 1, 0);
            if (bytesRecibidos > 0) {
                buffer[bytesRecibidos] = '\0';
                std::cout << "Resultado recibido: " << buffer << std::endl;
            }
            return static_cast<RespuestaState>(buffer[0]);
        }

        void SendMove(int x , int y){
         
            std::string moveStr = move_to_string(x, y);
            send(socket, moveStr.c_str(), static_cast<int>(moveStr.size()), 0);
        }

        void SendResult(RespuestaState result){
            char buffer[2];
            buffer[0] = static_cast<char>(result);
            send(socket, buffer, 1, 0);
        }

        void print_fields(){
            std::cout<<"Tablero propio:"<<std::endl ;
            std::cout<<"   A B C D E F G H"<<std::endl ;
            std::cout<<"  ------------------"<<std::endl ;
            for(int i = 0; i < mitablero.size(); i++){
                std::cout<<i+1<<" |";
                for(int j = 0; j < mitablero.size(); j++){
                    std::cout<<static_cast<char>(mitablero.get_celda(i,j))<<" ";
                }
                std::cout<<"|"<<std::endl;
            }
             std::cout<<"  ------------------"<<std::endl ;
            std::cout<<"Tablero del oponente:" <<std::endl ;
            std::cout<<"   A B C D E F G H"<<std::endl ;
            std::cout<<"  ------------------"<<std::endl ;
            for(int i = 0; i < oponentetablero.size(); i++){
                std::cout<<i+1<<" |";
                for(int j = 0; j < oponentetablero.size(); j++){
                    std::cout<<static_cast<char>(oponentetablero.get_celda(i,j))<<" ";
                }
                std::cout<<"|"<<std::endl;
            }
             std::cout<<"  ------------------"<<std::endl ;
        }


    
};

#endif