const Proceso = require('./proceso').default

 class Procesador {
    cuantosProcesos = 0
    ciclos = 0
    sinAtender = 0
    atendidos = 0
    inicio = null

    agregar(nuevo) {
      if (this.inicio === null) {
          this.inicio = nuevo
          nuevo.siguiente = this.inicio
      } else {
        let aux = this.inicio
        while (aux.siguiente !== this.inicio) {
            aux = aux.siguiente
        }
        aux.siguiente = nuevo
        nuevo.siguiente = this.inicio
      }
      this.cuantosProcesos++
      this.sinAtender++
    }

    eliminar(eliminar) {
      if (this.cuantosProcesos === 1) {
          this.inicio = null
      }
      else if (this.inicio.nombre === eliminar.nombre) {
        this.inicio = this.inicio.siguiente
        let aux = this.inicio
        while (aux.siguiente.nombre !== eliminar.nombre) {
            aux = aux.siguiente
        }
        aux.siguiente = this.inicio
      }
      else {
        let aux = this.inicio
        while (aux.siguiente.nombre !== eliminar.nombre) {
            aux = aux.siguiente
        }
        aux.siguiente = aux.siguiente.siguiente
      }
      this.sinAtender--
      this.atendidos++
      return true
    }

    crearProceso() {
      let probabilidad = Math.ceil(Math.random() * 100)
      if (probabilidad < 40) {
        let P1 = new Proceso(('proceso' + this.cuantosProcesos))
        this.agregar(P1)
        return true
      } else return false
    }

    decrementar() {
      if (this.cuantosProcesos > 0) {
        let probabilidad = Math.ceil(Math.random() * this.cuantosProcesos)
        let aux = this.inicio, i = 0
        while (i != probabilidad) {
            aux = aux.siguiente
            i++
        }
        aux.tareas--
        if (aux.tareas === 0) {
            this.eliminar(aux)
        }
      } else return false
    }

    iniciarCiclos() {
      if (this.ciclos === 300) {
        return 'procesos sin atender: ' + this.sinAtender + ' procesos atendidos: ' + this.atendidos
      }
      else {
          this.crearProceso()
          this.decrementar()
          this.iniciarCiclos()
          this.ciclos++
      }
    }
}

exports.default = new Procesador()
