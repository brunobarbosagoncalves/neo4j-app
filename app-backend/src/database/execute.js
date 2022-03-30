
import session from './connect.js'

export default async (query, params={})=>{

    const sessionOpen = await session()

    try {

    return await sessionOpen.run(query, params)

    }catch(err){
        console.log({
            local:'[neo4j][execute]', 
            message:err.message,
            err
        })
        return false
    }finally {
        await sessionOpen.close()
    }

}

    
