# Neo4J how to work

### Technologies
    - Linux
    - Nodejs
    - Docker
    - DockerCompose
    - Neo4J

### Resources
    - https://nodejs.org/en/download/
    - https://docs.docker.com/engine/install/
    - https://docs.docker.com/compose/install/

### Install and run
    - Go to root project, build and install
        - sudo
        - docker-compose build && docker-compose up
    - http://localhost:3001/
        - Open site to create one range of fake data on neo4j database
    - http://0.0.0.0:7474/browser/
        - Enter on cpanel of neo4j to simulate commands
        - Click on connect to open terminal

### Tricks
    - If you open the ulr(generator) data many times, your graphDatabase are connect him self, using your own relations

    - The data generated are saved on files of project: /database/data, if your like of the data, comment on file .gitignore to leave data on folder, to you use on future

    - try, try one more little, if error, erase all and build one new data mass fake and try all again

### Observations

    - the propouse of project are to learn and test a new skill with a database type different, with your particularies

    - The motivation no are on clean code or best pratics of programations, and yes keep to project simple, to read and know the minimium proccess using neo4j + nodejs

### Author
    - One simples engineer of software who like whats do


### Simple commands

    Execute all command in "http://localhost:7474/browser/" after clicked on connect

Get all nodes
```js
    MATCH (p) RETURN *
```

Get all nodes with label "Person"
```js
    MATCH (p:Person) RETURN *
```

Get all nodes PERSON and nodes PET relations

```js
    MATCH (p:Person)-[r]->(pet:Pet) RETURN *
``````

Get all nodes PERSON and nodes MUSIC relations

```js
    MATCH (p:Person)-[r]->(m:Music) RETURN *
```

Get all nodes PERSON "Alessandra" and nodes MUSIC relations
```js
    MATCH (p:Person {name: "Alessandra Moraes Jr."})-[r]->(m:Music) RETURN *
```
Get all node relation start at: Person Alessandra with limit length of connections 5 on path
```js
    MATCH (p:Person {name: "Alessandra Moraes Jr."})-[r*0..5]-(m) RETURN *

```

Get short path between node "shortesPath is a algorithm internal" 
```js
    MATCH (p1:Person {name: "Isabel Xavier Jr."})
    MATCH (p2:Person {name: "Sra. Antonella Pereira"})
    MATCH path = shortestPath((p1)-[*]-(p2))
    RETURN *
```

Update a node value

```js
    MATCH (p1:Person {name: "Isabel Xavier Jr."})
    SET p1.age = 25
    RETURN *
```

Delete node and relations by conditions 
```js
    MATCH (p:Pet {name:"Elísio",specie:"insect"})
    DETACH DELETE p
```

### See more on  https://neo4j.com/developer/cypher/

    This is a small example of NEO4J,you can use GDS(Graph Data Science), ML( Machine Learning), or APOC(Awesome Procedures On Cypher) to easy your life when write with neo4j


