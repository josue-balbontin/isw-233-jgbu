#pragma once
#include <vector>
#include "statescelda.h"

using namespace std;

class SeabattleField{
private:
    vector<vector<CeldaState>> tablero;

   
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

    void shoot(int x, int y){
        //procesa un disparo entrante
    }

    void mark_miss(int x, int y){
        //marca un disparo como fallo en el oponente
    }

    void mark_hit(int x, int y){
        //marca un disparo como acierto en el oponente
    }

    void mark_kill(int x, int y){
        //marca un disparo como hundimiento en el oponente
    }

    void is_loser(){
        //verifica si el jugador ha perdido
    }



};