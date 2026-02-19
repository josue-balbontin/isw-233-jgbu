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

    DWORD timeoutMs = 200;
    setsockopt(misocket, SOL_SOCKET, SO_RCVTIMEO, (const char*)&timeoutMs, sizeof(timeoutMs));

    cout<<"Servidor iniciado, esperando mensajes en el puerto "<<port<<endl ;

    char buffer[65000];
    sf::Sound sound;
    sf::SoundBuffer soundBuffer;
    vector<std::int8_t> audioAcumulado;

    while(true){
        memset(buffer, 0, sizeof(buffer));

        int bytesReceived = recvfrom(misocket, buffer , sizeof(buffer), 0, NULL, NULL);

        if (bytesReceived > 0) {

            std::vector<sf::Int16> muestras(bytesReceived);
            for(int i=0; i<bytesReceived; i++) {
                muestras[i] = buffer[i] * 256;
            }

            soundBuffer.loadFromSamples(muestras.data(), bytesReceived, 1, 44100);
            sound.setBuffer(soundBuffer);
            sound.play();
             cout<<"Mensaje recibido: "<<bytesReceived<<" bytes"<<endl ;
        }


    }

}

void StartClient(int port){
    sockaddr_in direccion; 
    SOCKET clientSocket = socket(AF_INET, SOCK_DGRAM, 0);
    sf::SoundBufferRecorder recorder;
    

    memset(&direccion, 0, sizeof(direccion));
    
    direccion.sin_family = AF_INET;
    direccion.sin_port = htons(port);
   

    recorder.setChannelCount(1);


    

    string ip; 
    
    do{
      
        cout<<"Ingrese la direccion IP del servidor al que desea enviar el audio (ejemplo: 127.0.0.1) o exit para salir"<<endl ;
        cin>>ip ;
        direccion.sin_addr.s_addr = inet_addr(ip.c_str());
        
        recorder.start(44100); 

        sf::sleep(sf::milliseconds(1500)); 

        recorder.stop();

        const sf::SoundBuffer& bufferSFML = recorder.getBuffer();
        const sf::Int16* muestras16bit = bufferSFML.getSamples();
        size_t cantidadMuestras = bufferSFML.getSampleCount();

        if (cantidadMuestras > static_cast<size_t>(65000)) {
            cantidadMuestras = 65000;
        }

        vector<int8_t> bufferRed;
        bufferRed.reserve(cantidadMuestras);

        for(size_t i = 0; i < cantidadMuestras; i++) {
            bufferRed.push_back(muestras16bit[i] / 256);
        }


        int bytesEnviados = sendto(clientSocket, (char*)bufferRed.data(), bufferRed.size(), 0, (sockaddr*)&direccion, sizeof(direccion));
            
        if (bytesEnviados == SOCKET_ERROR) {
            cout << "Error al enviar. Codigo: " << WSAGetLastError() << endl;
        }





    }while(ip != "exit");
    

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
        opcion=0 ;
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
