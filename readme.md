(La simulación se correrá en Node.Js)
Se tiene un procesador multitarea que recibe y atiende los procesos dedicando un ciclo de procesamiento a cada tarea que esta en la lista de ejecución.
Cada nuevo proceso se guarda en una estructura tipo LISTA CIRCULAR, y ahí permanece mientras esta siendo atendido, hasta que su contador de ciclos se termina y entonces es eliminado de la estructura.

El Procesador en cada ciclo atiende una petición del proceso en turno y cambia al siguiente procesos para atenderlo en el siguiente ciclo.

Se van a simular 300 ciclos con las siguientes condiciones.
En cada ciclo, existe un 39% de probabilidad de que llegue un nuevo proceso. (aleatorio)
Cada proceso nuevo requiere entre 4 y 14 ciclos para ser atendido (totalmente aleatorio)
***Cada ciclo ira decrementando uno de los ciclos requeridos de la tarea activa
Al final de los 300 ciclos simulados la información que se requiere conocer. (Mostrar en la consola)
Cuantos ciclos estuvo vacía la lista de proceso (el procesador no tenia procesos por atender)
Al final de los ciclos cuantos procesos quedaron pendientes y cuanto sumaban sus ciclos pendientes.
Cuantos procesos fueron atendidos en su totalidad
