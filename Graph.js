// https://proglib.io/p/rasprostranennye-algoritmy-i-struktury-dannyh-v-javascript-grafy-2021-10-20

// Неориентированный граф. Сделан в виде объекта, где ключи - вершины, а значения - массивы из связанных вершин.
class Graph {
    constructor() {
        this.vertices = {}; // список смежности графа
    }

    // добавление новой вершины.
    // Добавив 2 вершины A и B, получим объект вида Graph { vertices: { A: [], B: [] } }
    addVertex(value) {
        if (!this.vertices[value]) {
            this.vertices[value] = [];
        }
    }

    // добавление нового ребра.
    // Добавив ребро между A и B, получим объект вида Graph { vertices: { A: [ 'B' ], B: [ 'A' ] } }

    addEdge(vertex1, vertex2) {
        if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
            throw new Error('В графе нет таких вершин');
        }

        if (!this.vertices[vertex1].includes(vertex2)) {
            this.vertices[vertex1].push(vertex2);
        }
        if (!this.vertices[vertex2].includes(vertex1)) {
            this.vertices[vertex2].push(vertex1);
        }
    }

    // поиск в глубину
    dfs(startVertex, callback) {
        let list = this.vertices; // список смежности
        let stack = [startVertex]; // стек вершин для перебора
        let visited = { [startVertex]: 1 }; // посещенные вершины

        // функция обработки вершины. В т.ч. включает колбяк (что ещё нужно сделать с вершиной)
        function handleVertex(vertex) {
            // вызываем коллбэк для посещенной вершины
            callback(vertex);
                console.log('Обрабатываем вершину ', vertex);

            // получаем список смежных вершин (соседей), реверсим его
            let reversedNeighboursList = [...list[vertex]].reverse();
                console.log(`Реверс-Список смежных вершин вершины ${vertex}: ${reversedNeighboursList}`);

            // прогоняемся по всему списку соседей
            reversedNeighboursList.forEach(neighbour => {
                // добавляем вершину в стек только в том случае, если она не была посещена.
                if (!visited[neighbour]) {
                    // отмечаем вершину как посещенную. Если не отметить, то скоро будет дубликат в стеке!
                    visited[neighbour] = 1;
                    // ...и добавляем в стек
                    stack.push(neighbour);
                console.log(`Добавили ранее не посещённого соседа ${neighbour} в стек. Стек теперь: ${stack}`)
                }
            });
        }

        // перебираем вершины из стека, пока он не опустеет
        while(stack.length) {
                console.log(`Стек: `,stack);
            let activeVertex = stack.pop();
                console.log(`Выпнули верхушку стека для обработки: ${activeVertex}`);
            handleVertex(activeVertex);
        }

        // проверка на изолированные фрагменты: прогоняемся по всем вершинам и ищем непосещённые.
        stack = Object.keys(this.vertices);
            console.log(`Проверка на изолированные фрагменты. Стек = ${stack}`);

        while(stack.length) {
            let activeVertex = stack.pop();
            if (!visited[activeVertex]) {
                    console.log(`А этой вершины среди посещённых не было: ${activeVertex}`)
                visited[activeVertex] = 1;
                handleVertex(activeVertex);
            }
        }
    }

    // поиск в ширину
    bfs(startVertex, callback) {
        let list = this.vertices; // список смежности
        let queue = [startVertex]; // очередь вершин для перебора
        let visited = { [startVertex]: 1 }; // посещенные вершины

        function handleVertex(vertex) {
            // вызываем коллбэк для посещенной вершины
            callback(vertex);

            // получаем список смежных вершин (соседей)
            let neighboursList = list[vertex];

            // прогоняемся по всему списку соседей. Если сосед не посещался - отмечаем посещённым, ставим в очередь
            neighboursList.forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = 1;
                    queue.push(neighbour);
                    console.log(`Добавили соседа`, neighbour, `в очередь. Теперь очередь: `,queue);
                }
            });
        }

        // перебираем вершины из очереди, пока она не опустеет
        while(queue.length) {
                console.log(`Очередь: `,queue);
            let activeVertex = queue.shift();
                console.log(`Выпнули начало очереди для обработки: ${activeVertex}`);
            handleVertex(activeVertex);
        }

        queue = Object.keys(this.vertices);

        // Повторяем цикл для незатронутых вершин
        while(queue.length) {
            let activeVertex = queue.shift();
            if (!visited[activeVertex]) {
                visited[activeVertex] = 1;
                handleVertex(activeVertex);
            }
        }
    }

    // кратчайшие расстояния от узла до остальных + какие узлы будут предшествующими для каждого
    bfs2(startVertex) {
        let list = this.vertices;
        let queue = [startVertex];
        let visited = { [startVertex]: 1 };

        // предыдущая вершина в цепочке
        let previous = { [startVertex]: null };
        // кратчайшее расстояние от стартовой вершины
        let distance = { [startVertex]: 0 };

        console.log(previous, distance);

        function handleVertex(vertex) {
            console.log('Обрабатываем вершину', vertex);
            // получаем список смежных вершин (соседей)
            let neighboursList = list[vertex];
            console.log('Получили список соседей вершины: ', neighboursList);

            // прогоняемся по всему списку соседей. Если сосед не посещался - отмечаем посещённым, ставим в очередь
            neighboursList.forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = 1;
                    queue.push(neighbour);
                    console.log(`Добавили соседа`, neighbour, `в очередь. С ним она: `,queue);
                    // Доп.функции - их не было в простом bfs:
                    // 1) сохраняем вершину vertex как предыдущую для соседа в глобальный список previous
                    previous[neighbour] = vertex;
                    console.log('Previous', previous);
                    // 2) сохраняем расстояние в глобальный список distance - кратчайшие расстояния от стартовой вершины
                    distance[neighbour] = distance[vertex] + 1;
                    console.log('distance', distance);
                }
            });
        }

        // забираем по одной вершины из очереди, пока она не опустеет
        while(queue.length) {
            let activeVertex = queue.shift();
            console.log('Проход по очереди. Вынули её начало ',activeVertex,' для обработки. Очредь теперь:', queue);
            handleVertex(activeVertex);
        }

        return { previous, distance }
    }

    findShortestWay(startVertex, endVertex){
        const {previous, distance} = this.bfs2(startVertex, ()=>{});
        if(!distance[endVertex]){
            console.log('Нет связи между ',startVertex, 'и', endVertex);
            return [null,null];
        }

        const wayArray = []; // путь
        let currentVertex = endVertex; // пойдём с конца. Текущая вершина = конечная вершина
        wayArray.unshift(currentVertex); // добавили в конец пути конечную точку, иначе пропустится.

        while(currentVertex !== startVertex){ // пока текущая вершина не сравняется с начальной
            wayArray.unshift(previous[currentVertex]); // идём по точкам и записываем пройденные
            currentVertex = previous[currentVertex]; // переопределяем точку
        }

        return [wayArray, distance[endVertex]];
    }
}

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');
// graph.addVertex('G');
// graph.addVertex('H');
//
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('A', 'F');
// graph.addEdge('F', 'G');
//
// console.log(graph);
// console.log('--------');
// //graph.dfs('A', x => console.log(x)); // A B C D E F G H
// graph.dfs('A',()=>{});
// console.log('--------');
// //graph.bfs('A', x => console.log(x)); // A B C F D E G H
// graph.bfs('A',()=>{}); // A B C F D E G H
//
// const digGraph = new Graph();
// digGraph.addVertex('1');
// digGraph.addVertex('2');
// digGraph.addVertex('3');
// digGraph.addVertex('4');
// digGraph.addVertex('5');
// digGraph.addVertex('6');
// digGraph.addVertex('7');
// digGraph.addVertex('8');
// digGraph.addVertex('9');
// digGraph.addVertex('10');
// digGraph.addVertex('11');
// digGraph.addVertex('12');
// digGraph.addVertex('13');
//
// digGraph.addEdge('1','2');
// digGraph.addEdge('1','3');
// digGraph.addEdge('1','4');
// digGraph.addEdge('1','5');
// digGraph.addEdge('1','6');
//
// digGraph.addEdge('5','7');
//
// digGraph.addEdge('7','8');
// digGraph.addEdge('7','9');
// digGraph.addEdge('7','10');
// digGraph.addEdge('7','11');
//
// digGraph.addEdge('11','12');
// digGraph.addEdge('11','13');
// console.log(digGraph)
//
// digGraph.bfs('1',()=>{});

console.log('--------------------------------');
const wayGraph = new Graph();
wayGraph.addVertex('A');
wayGraph.addVertex('B');
wayGraph.addVertex('C');
wayGraph.addVertex('D');
wayGraph.addVertex('E');
wayGraph.addVertex('F');
wayGraph.addVertex('G');
wayGraph.addVertex('H');

wayGraph.addEdge('A', 'B');
wayGraph.addEdge('B', 'F');
wayGraph.addEdge('F', 'G');
wayGraph.addEdge('A', 'C');
wayGraph.addEdge('C', 'D');
wayGraph.addEdge('D', 'F');
wayGraph.addEdge('C', 'E');
wayGraph.addEdge('E', 'F');
console.log(wayGraph);

const ways = wayGraph.bfs2('A');
console.log(ways);

const [path,steps] = wayGraph.findShortestWay('A',"G");
const [path2,steps2] = wayGraph.findShortestWay('A',"D");
const [path3,steps3] = wayGraph.findShortestWay('F',"C");
console.log('------------------ \nПуть: ',path, ', шагов: ',steps);
console.log('------------------ \nПуть: ',path2, ', шагов: ',steps2);
console.log('------------------ \nПуть: ',path3, ', шагов: ',steps3);

