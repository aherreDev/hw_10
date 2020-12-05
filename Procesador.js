const Task = require('./Task').default

let Procesador = () => {
    let first = null;
    let last = null
    let size = 0;
    let done = 0;
    let empty = 0;

    const create = (newTask) => {
        if (first == null) {
            first = newTask;
            last = newTask;
            first.next = newTask
        } else {
            newTask.next = first;
            last.next = newTask;
            last = newTask;
        }
    }

    const begin = () => {
        let numTask = 1;
        for (let i = 0; i < 300; i++) {
            let probability = Math.floor(Math.random() * (100-1)+1)
            if (first == null) {
                empty ++;
            }
            if (probability < 39) {
                let newTask = new Task(numTask);
                create(newTask);
                numTask++;
                size++;
            }
            var aux = first;
            if (aux != null) {
                if (aux.numCiclos == 0) {
                    eliminar(aux);
                    size--;
                    done++;
                }
                aux.numCiclos--;
                aux = aux.next;
            }
            print()
        }
    }

    const search = (aux) => {
        let actual = first;
        if (actual == aux) {
            return last
        } else {
            while (actual.next != aux && last != aux) {
                actual = first.next;
            }
            return actual;
        }
    }

    const eliminar = (aux) => {
        let previus = search(aux);
        if (aux == first && aux == last) {
            first = null;
            last = null;
        } else if (aux == first){
            first = aux.next;
            last.next = first;
        } else if (aux == last){
            previus.next = first;
            last = previus;
        } else
            previus.next = aux.next
    }

    const print = () => {
        console.log(
            `
            - cicles empty ${empty},
            - process done ${done},
            - process pending ${size}
            `
        );
    }

    return {begin:begin, print:print}
}



exports.default = Procesador;
