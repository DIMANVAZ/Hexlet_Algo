/*  Поиск кратчайшего пути в графе по алгоритму Дейкстры. Сами графы - ниже.
Граф у меня взвешенный, но НЕОРИЕНТИРОВАННЫЙ.
Суть моего подхода:
 1. Представить граф в виде объекта graph = {A:{nearby:{'B':5,'C':3}}, B:{nearby:{'A':5,'C':4}}} и т.д.
 2. Выбираем стартовую точку (СТ). Ей ставим цену 0, остальным - бесконечность.
 3. Создаём очередь [] из одной пока СТ.
 4. Вынимая по одному узлу (У) из начала очереди, обрабатываем его функцией-handler:
  - отмечаем У посещённым
  - получаем всех его соседей. Для каждого соседа (С):
    - [опционально:] если С не посещался и в очереди его нет, то добавляем его в очередь;
    - нынешняя цена соседа С - это price;
    - считаем цену "altPrice" от предка (У) до С. Если оказалось, что altPrice < price, то
        переназначаем price = altPrice, а выгодного предка У записываем в {previous}
5. Повторять, пока очередь не опустеет.
6. Далее разматываем цепочку от КонечнойТочки (КТ), используя {previous}
7. В качестве цены пути берём актуальную стоимость КТ.          */

function dijkstra(graph, startNode, endNode, visited = {}, queue = [startNode], previous = {}){
    if(!graph[startNode] || !graph[endNode]){
        throw new Error("Проверьте названия вершин");
    }

    // устанавливаем стартовые цены узлов (мутируем граф!)
    Object.keys(graph).forEach(key => graph[key].price = Infinity);
    graph[startNode].price = 0;

    // окучиваем ноду: отмечаем посещённой, берём соседей, суём непосещённых в очередь, переоцениваем их цену, назначаем "предыдущего".
    function handleNode(node){
        visited[node] = 1;
        const neibaz = Object.keys(graph[node].nearby);
        neibaz.forEach(neiba => {
            if(queue.indexOf(neiba) < 0 && !visited[neiba]){
               queue.push(neiba);
            }
            const altPrice = graph[node].price + graph[node].nearby[neiba];

            if(graph[neiba].price > altPrice){
               graph[neiba].price = altPrice;
               previous[neiba] = node; //отмечаем предыдущего дешёвого предка
            }
        })
        return graph;
    }

    while(queue.length){
        const next = queue.shift();
        handleNode(next);
    }

    // блок построения пути: идём от конечной точки к началу по цепочке {previous}
    const way = [endNode];
    let preNode = previous[endNode];
    while(preNode !== startNode){
        way.unshift(preNode);
        preNode = previous[preNode];
    }
    way.unshift(startNode);

    const price = graph[endNode].price;
    console.log('Кратчайший путь из',startNode,'в',endNode,':',way, ', его стоимость:',price);
    return {graph, way, price};
}

const wGraph = {
    A:{nearby:{'B':5,'C':5,'D':4}},
    B:{nearby:{'A':5,'E':4,'F':9}},
    C:{nearby:{'A':5,'F':2,'H':5,'I':6}},
    D:{nearby:{'A':4,'H':8,'I':3}},
    E:{nearby:{'B':4,'F':3}},
    F:{nearby:{'B':9,'C':2,'E':3,'H':6}},
    G:{nearby:{'H':5}},
    H:{nearby:{'C':5,'D':8,'F':6,'G':5}},
    I:{nearby:{'C':6,'D':3}}
}
const wGraphBig = {
    A:{nearby:{'B':5,'C':3,'D':4}},
    B:{nearby:{'A':5,'E':4,'F':9}},
    C:{nearby:{'A':3,'F':5,'I':6}},
    D:{nearby:{'A':4,'H':4,'I':5}},
    E:{nearby:{'B':4,'F':3,'J':3}},
    F:{nearby:{'G':1,'C':5,'B':9,'E':3,'J':6,'H':8}},
    G:{nearby:{'F':1,'L':2,'N':5,'H':5}},
    H:{nearby:{'D':4,'F':8,'G':5,'N':6,'O':5}},
    I:{nearby:{'D':5,'C':6,'O':7,'P':4}},
    J:{nearby:{'K':4,'F':6,'E':3}},
    K:{nearby:{'J':4,'L':3}},
    L:{nearby:{'M':4,'G':2,'K':3}},
    M:{nearby:{'L':4,'N':3}},
    N:{nearby:{'M':3,'O':5,'H':6,'G':5}},
    O:{nearby:{'N':5,'P':2,'I':7,'H':5}},
    P:{nearby:{'O':2,'I':4}}
}
const airports = {
    'JFK':{nearby:{'LAX':25,'HKG':80}},
    'LAX':{nearby:{'JFK':25,'MEX':15,'GRU':60}},
    'MEX':{nearby:{'LAX':15,'GRU':46,'SYD':80}},
    'HKG':{nearby:{'JFK':80,'GRU':110}},
    'GRU':{nearby:{'LAX':25,'MEX':46,'CDG':60,'DME':730,'HKG':110}},
    'CDG':{nearby:{'SYD':105,'GVA':5,'DME':15,'GRU':60}},
    'SYD':{nearby:{'MEX':80,'GVA':100,'CDG':105}},
    'DME':{nearby:{'GRU':730,'CDG':15,'GVA':5}},
    'GVA':{nearby:{'DME':15,'CDG':5,'SYD':100}}
}

dijkstra(wGraphBig,'A','J');
dijkstra(wGraphBig,'M','P');
dijkstra(wGraphBig,'M','C');
dijkstra(wGraphBig,'A','L');

dijkstra(airports,'JFK','GVA');
