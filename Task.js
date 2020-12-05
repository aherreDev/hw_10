class Task {
  constructor(tarea){
      this.tarea = tarea;
      this.numCiclos = Math.floor(Math.random() * (15 - 3)) + 3
      this.siguiente = null
  }
}

exports.default = Task;
