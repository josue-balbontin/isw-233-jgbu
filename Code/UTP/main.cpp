#include <iostream>
#include <string>
#include <vector>
#include <cstring>

#include "class/Seabattlefield.cpp"

#include <winsock2.h>
#include <ws2tcpip.h>

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

        char buffer[256];

        while(true){
            memset(buffer, 0, sizeof(buffer));

            int bytesReceived = recv(clientSocket, buffer , sizeof(buffer), 0);

            if(bytesReceived > 0){
                cout<<"Mensaje recibido: "<<buffer<<endl ;
            }

        }
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


    string mensaje;

    while(true) {
        cout << "Escribe mensaje (o 'salir'): ";
        cin >> mensaje;
        
        if (mensaje == "salir") break;

        int bytesEnviados = send(clientSocket, mensaje.c_str(), mensaje.size(), 0);
        
        if (bytesEnviados == SOCKET_ERROR) {
            cout << "Error al enviar." << endl;
        }
    }

    closesocket(clientSocket);
  



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
        string ip ;
        cout<<"Ingrese la direccion IP del servidor"<<endl ;
        cin>>ip ;

        StartClient(puerto, ip);
    }

    WSACleanup(); 
    return 0;
}
