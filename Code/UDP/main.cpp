#include <iostream>
#include <string>
#include <vector>

#include <SFML/Audio.hpp>

#include <winsock2.h>
#include <ws2tcpip.h>

#pragma comment(lib, "ws2_32.lib")

using namespace std; 


void StartServer(int port){


}

void StartClient(int port){
    
}


int main() {
    int puerto=0 ; 
    cout<<"Ingrese el puerto"<<endl ; 
    cin>>puerto ; 


    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "Error al iniciar Winsock" << std::endl;
        return -1;
    }

    cout<<"Ingrese 1 para iniciar el servidor o 2 para iniciar el cliente"<<endl ;
    int opcion=0 ;
    cin>>opcion ;
    while(opcion!=1 && opcion!=2){
        cout<<"Opcion no valida, ingrese 1 para iniciar el servidor o 2 para iniciar el cliente"<<endl ;
        cin>>opcion ;
    }

    if(opcion==1){
        StartServer(puerto);
    }else{
        StartClient(puerto);
    }

    WSACleanup(); 
    return 0;
}
