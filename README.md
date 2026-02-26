# isw-233-jgbu

## Introduccion

Programación de redes en C++: Implementación de un walkie-talkie UDP y un juego de Batalla Naval TCP. Uso de sockets, manejo de audio con SFML, y diseño de protocolos personalizados.

## Estructura del proyecto

```
Code/
├── UDP/
│   └── main.cpp          # Assignment 1 — UDP Walkie-Talkie
└── UTP/
    ├── main.cpp          # Assignment 2 — Battleship over TCP (entry point)
    └── class/
        ├── statescelda.h      # Enum CeldaState
        ├── staterespuesta.h   # Enum RespuestaState
        ├── Seabattlefield.cpp # SeabattleField class
        └── Seabattleagent.cpp # SeabattleAgent class
```

---

## Assignment 1 — UDP Walkie-Talkie

### ¿Qué hace?

Permite grabar audio en una máquina (cliente), enviarlo como un datagrama UDP y reproducirlo en otra máquina (servidor). Funciona como un walkie-talkie de un solo sentido.

### ¿Cómo s se hace?

- El cliente graba audio en formato 16-bit, lo convierte a 8-bit y lo envía por UDP.
- El servidor recibe los datagramas, los convierte de 8-bit a 16-bit y los reproduce usando SFML.


### ¿Por qué se hace así?

- **UDP** es adecuado para audio en tiempo real: baja latencia, sin conexión previa.
- El tamaño máximo de un datagrama UDP (~65 500 bytes) coincide con los ~65 000 frames de audio de 1.5 s en formato 8-bit.
- La conversión 16-bit ↔ 8-bit reduce el tamaño al mínimo funcional para la transmisión y el requerido por la libreria utilizada.


## Assignment 2 — Battleship over TCP

### ¿Qué hace?

Implementa el juego Batalla Naval entre dos jugadores conectados por TCP. Uno actúa como servidor y el otro como cliente. El cliente siempre dispara primero. El juego termina cuando todos los barcos de un jugador son destruidos.



### ¿Cómo se hace? (flujo detallado)

   - El servidor espera una conexión TCP en el puerto especificado.
   - El cliente se conecta al servidor usando su IP y puerto.
   - Ambos jugadores generan un tablero de 8x8 con barcos colocados aleatoriamente usando la semilla proporcionada.

### ¿Por que se hace?
- TCP garantiza la entrega ordenada de mensajes, lo cual es crucial para la lógica del juego.
- Permite una practica real de programación de sockets y diseño de protocolos personalizados.

## ChatIA

[Gemini](https://gemini.google.com/share/a6f8faaf7c1a)