#pragma once
#include <vector>
#include <random>
#include "statescelda.h"
#include "staterespuesta.h"

using namespace std;

class SeabattleField{
private:
    vector<vector<CeldaState>> tablero;


    bool validarkill(int x , int y){
        int n = size();
        if(x < 0 || y < 0 || x >= n || y >= n) return false;

        for(int i = x - 1; i >= 0 && (tablero[i][y] == HIT || tablero[i][y] == SHIP); --i){
            if(tablero[i][y] == SHIP) return false;
        }
        for(int i = x + 1; i < n && (tablero[i][y] == HIT || tablero[i][y] == SHIP); ++i){
            if(tablero[i][y] == SHIP) return false;
        }
        for(int j = y - 1; j >= 0 && (tablero[x][j] == HIT || tablero[x][j] == SHIP); --j){
            if(tablero[x][j] == SHIP) return false;
        }
        for(int j = y + 1; j < n && (tablero[x][j] == HIT || tablero[x][j] == SHIP); ++j){
            if(tablero[x][j] == SHIP) return false;
        }

        return true;
    }
   


public:
     SeabattleField(int size){
        tablero.resize(size, vector<CeldaState>(size, UNKNOWN));
    }

    int size() {
        return tablero.size();
    }

    void get_random_field(int semilla){
        int n = size();
        if(n <= 0) return;

        std::mt19937 rng(static_cast<unsigned int>(semilla));
        std::uniform_int_distribution<int> pos(0, n - 1);
        std::uniform_int_distribution<int> dir(0, 1); 

        vector<int> barcos = {4, 3, 3, 2, 2, 2, 1, 1, 1, 1};

        while(true){
            for(int i = 0; i < n; ++i){
                for(int j = 0; j < n; ++j){
                    tablero[i][j] = EMPTY;
                }
            }

            bool completo = true;

            for(int b = 0; b < (int)barcos.size(); ++b){
                int largo = barcos[b];
                bool puesto = false;

                for(int intento = 0; intento < 5000 && !puesto; ++intento){
                    int x = pos(rng);
                    int y = pos(rng);
                    int horizontal = dir(rng) == 0;

                    int finX = x + (horizontal ? 0 : largo - 1);
                    int finY = y + (horizontal ? largo - 1 : 0);
                    if(finX >= n || finY >= n) continue;

                    bool ok = true;

                    for(int k = 0; k < largo && ok; ++k){
                        int cx = x + (horizontal ? 0 : k);
                        int cy = y + (horizontal ? k : 0);

                        if(tablero[cx][cy] == SHIP){
                            ok = false;
                            break;
                        }

                        for(int nx = cx - 1; nx <= cx + 1 && ok; ++nx){
                            for(int ny = cy - 1; ny <= cy + 1; ++ny){
                                if(nx >= 0 && ny >= 0 && nx < n && ny < n && tablero[nx][ny] == SHIP){
                                    ok = false;
                                    break;
                                }
                            }
                        }
                    }

                    if(!ok) continue;

                    for(int k = 0; k < largo; ++k){
                        int cx = x + (horizontal ? 0 : k);
                        int cy = y + (horizontal ? k : 0);
                        tablero[cx][cy] = SHIP;
                    }

                    puesto = true;
                }

                if(!puesto){
                    completo = false;
                    break;
                }
            }

            if(completo) return;
        }
    }

    RespuestaState shoot(int x, int y){
        int n = size();
        if(x < 0 || y < 0 || x >= n || y >= n) return RMISS;

        if(tablero[x][y] == SHIP){
            mark_hit(x, y);
            if(validarkill(x,y)){
                mark_kill(x, y);
                return RKILL;
            }
            return RHIT;
        }

        if(tablero[x][y] == EMPTY){
            mark_miss(x, y);
            return RMISS;
        }

        return RMISS;
    }

    void mark_miss(int x, int y){
        tablero[x][y] = EMPTY; 

    }

    void mark_hit(int x, int y){
        tablero[x][y] = HIT;
    }

    void mark_kill(int x, int y){
        int n = size();
        if(x < 0 || y < 0 || x >= n || y >= n) return;

        tablero[x][y] = KILL;

        for(int i = x - 1; i >= 0 && tablero[i][y] == HIT; --i) tablero[i][y] = KILL;
        for(int i = x + 1; i < n && tablero[i][y] == HIT; ++i) tablero[i][y] = KILL;
        for(int j = y - 1; j >= 0 && tablero[x][j] == HIT; --j) tablero[x][j] = KILL;
        for(int j = y + 1; j < n && tablero[x][j] == HIT; ++j) tablero[x][j] = KILL;

      
    }

    bool is_loser(){
        for(int i = 0; i < size(); i++){
            for(int j = 0; j < size(); j++){
                if(tablero[i][j] == SHIP){
                    return false;
                }
            }
        }
        return true;
    }



};