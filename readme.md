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
    - Go to root project
    - docker-compose build && docker-compose up
        - Build and install all files
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