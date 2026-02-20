#ifndef SEABATTLEAGENT_CPP_INCLUDED
#define SEABATTLEAGENT_CPP_INCLUDED

#include <vector>
#include <iostream>
#include <string>
#include <utility>
#include <cctype>
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

                    if(x < 0 || y < 0){
                        std::cout << "Movimiento invalido. Use formato A1..H8." << std::endl;
                        continue;
                    }

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
                    int x = movimiento.first;
                    int y = movimiento.second;

                    if(x < 0 || y < 0){
                        SendResult(RMISS);
                        std::cout << "Movimiento rival invalido." << std::endl;
                    }else{
                        RespuestaState result = mitablero.shoot(x, y);
                        SendResult(result);
                        std::cout << "Movimiento rival: " << move_to_string(x, y) << std::endl;
                    }
                }

                print_fields();
                iniciador = !iniciador; // alternar turnos
            }
        
        }

        std::pair<int, int> parse_move(std::string move){
            if(move.size() < 2) return {-1, -1};

            char col = static_cast<char>(std::toupper(static_cast<unsigned char>(move[0])));
            char row = move[1];

            if(col < 'A' || col > 'H') return {-1, -1};
            if(row < '1' || row > '8') return {-1, -1};

            int x = row - '1';
            int y = col - 'A';
            return {x, y};
        }

        std::string move_to_string(int x, int y){
            if(x < 0 || y < 0 || x > 7 || y > 7) return "??";
            std::string s;
            s.push_back(static_cast<char>('A' + y));
            s.push_back(static_cast<char>('1' + x));
            return s;
        }

        bool is_game_ended(){

            return mitablero.is_loser() || oponentetablero.is_loser();
        }

         std::pair<int, int> ReadMove(){
            char buffer[16] = {0};
            int bytesRecibidos = recv(socket, buffer, sizeof(buffer) - 1, 0);
            if (bytesRecibidos <= 0) return {-1, -1};

            buffer[bytesRecibidos] = '\0';

            std::string move;
            move.push_back(buffer[0]);
            if(bytesRecibidos > 1) move.push_back(buffer[1]);

            return parse_move(move);
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