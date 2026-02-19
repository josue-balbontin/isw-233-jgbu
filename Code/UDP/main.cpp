#include <iostream>
#include <string>
#include <vector>
#include <cstring>
#include <cstdint>

#include <SFML/Audio.hpp>

#include <winsock2.h>
#include <ws2tcpip.h>

#pragma comment(lib, "ws2_32.lib")

using namespace std; 



void StartServer(int port){

    SOCKET misocket = socket(AF_INET, SOCK_DGRAM, 0);

    sockaddr_in direccionpropia;

    memset(&direccionpropia, 0, sizeof(direccionpropia));

    direccionpropia.sin_family = AF_INET;
    direccionpropia.sin_port = htons(port);
    direccionpropia.sin_addr.s_addr = INADDR_ANY;

    if(bind(misocket , (sockaddr*)&direccionpropia, sizeof(direccionpropia)) == SOCKET_ERROR){
        cerr<<"Error al bindear el socket"<<endl ;
        return ;
    }

    cout<<"Servidor iniciado, esperando mensajes en el puerto "<<port<<endl ;

    char buffer[65000];
    sf::Sound sound;

    while(true){
        memset(buffer, 0, sizeof(buffer));

        int bytesReceived = recvfrom(misocket, buffer , sizeof(buffer), 0, NULL, NULL);

        if (bytesReceived > 0) {
            // 2. Reconstruir a 16-bit
            std::vector<sf::Int16> muestras(bytesReceived);
            for(int i=0; i<bytesReceived; i++) {
                muestras[i] = buffer[i] * 256; // Magia: 8bit -> 16bit
            }

            sf::SoundBuffer sb;
            sb.loadFromSamples(muestras.data(), bytesReceived, 1, 44100);
            sound.setBuffer(sb);
            sound.play();
             cout<<"Mensaje recibido: "<<endl ;
        }


    }

}

void StartClient(int port , string ip){
    sockaddr_in direccion; 
    SOCKET clientSocket = socket(AF_INET, SOCK_DGRAM, 0);
    sf::SoundBufferRecorder recorder;
    

    memset(&direccion, 0, sizeof(direccion));
    
    direccion.sin_family = AF_INET;
    direccion.sin_port = htons(port);
    direccion.sin_addr.s_addr = inet_addr(ip.c_str());

    cout<<"Cliente iniciado, enviando mensajes al servidor "<<ip<<" en el puerto "<<port<<endl ;
   
    cin.ignore(); 

    string ent; 
    
    do{
       
        recorder.start(); 

        sf::sleep(sf::milliseconds(1500)); 

        recorder.stop();

        const sf::SoundBuffer& bufferSFML = recorder.getBuffer();
        const sf::Int16* muestras16bit = bufferSFML.getSamples();
        size_t cantidadMuestras = bufferSFML.getSampleCount();

        vector<int8_t> bufferRed;

        for(size_t i = 0; i < cantidadMuestras; i++) {
            bufferRed.push_back(muestras16bit[i] / 256);
        }


        int bytesEnviados = sendto(clientSocket, (char*)bufferRed.data(), bufferRed.size(), 0, (sockaddr*)&direccion, sizeof(direccion));
            
        if (bytesEnviados == SOCKET_ERROR) {
            cout << "Error al enviar." << endl;
        }
        else{
            cout<<"mensaje enviado"<<endl ; 
        }

        cout<<"escriba env para enviar un mensaje..."<<endl ;
        cin>>ent ;


    }while(ent == "env");
    

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
