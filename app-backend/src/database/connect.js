import neo4j from 'neo4j-driver'

const driver = neo4j.driver('bolt://localhost:7687')

export default ()=>driver.session()