#include <iostream>
#include <string>
#include <vector>
#include <cstring>

#include <winsock2.h>
#include <ws2tcpip.h>

#include "class/Seabattlefield.cpp"
#include "class/Seabattleagent.cpp"

#pragma comment(lib, "ws2_32.lib")

using namespace std; 



void StartServer(int port){
    

    SOCKET misocket = socket(AF_INET, SOCK_STREAM, 0);

    sockaddr_in direccionpropia;

    memset(&direccionpropia, 0, sizeof(direccionpropia));

    direccionpropia.sin_family = AF_INET;
    direccionpropia.sin_port = htons(port);
    direccionpropia.sin_addr.s_addr = INADDR_ANY;

    if(bind(misocket , (sockaddr*)&direccionpropia, sizeof(direccionpropia)) == SOCKET_ERROR){
        cerr<<"Error al bindear el socket"<<endl ;
        return ;
    }

    if(listen(misocket, 1) == SOCKET_ERROR){
        cerr<<"Error al escuchar en el socket"<<endl ;
        return ;
    }
    else{
        cout<<"Servidor iniciado, esperando mensajes en el puerto "<<port<<endl ;

        SOCKET clientSocket = accept(misocket, nullptr, nullptr);


        SeabattleField mitablero(8);
        mitablero.get_random_field(12345);
         SeabattleAgent miagente;
        miagente.init(mitablero, clientSocket);

        miagente.star_game(false);

    }

  

}

void StartClient(int port , string ip){
    sockaddr_in direccion; 
    SOCKET clientSocket = socket(AF_INET, SOCK_STREAM, 0);
    

    memset(&direccion, 0, sizeof(direccion));
    
    direccion.sin_family = AF_INET;
    direccion.sin_port = htons(port);
    direccion.sin_addr.s_addr = inet_addr(ip.c_str());

    if(connect(clientSocket, (sockaddr*)&direccion, sizeof(direccion)) == SOCKET_ERROR){
        cerr<<"Error al conectar con el servidor"<<endl ;
        return ;
    }
    else{
        cout<<"Conectado al servidor en "<<ip<<":"<<port<<endl ;
    }


    SeabattleField mitablero(8);
    mitablero.get_random_field(12345);
    SeabattleAgent miagente;
    miagente.init(mitablero, clientSocket);
    
    miagente.star_game(true);



    closesocket(clientSocket);
  



}


int main() {
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "Error al iniciar Winsock" << std::endl;
        return -1;
    }


    SeabattleField mitablero(8);
    mitablero.get_random_field(12345);

    SeabattleAgent miagente;

    miagente.init(mitablero, INVALID_SOCKET);
    
    miagente.print_fields();



    WSACleanup(); 
    return 0;
}
