#pragma once
#include <vector>
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
        //logica para generar un campo de batalla aleatorio usando la semilla
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