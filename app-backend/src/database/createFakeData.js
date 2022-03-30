import { faker } from '@faker-js/faker'

import execute from './execute.js'

faker.locale = 'pt_BR'

export default async ()=>{
    const data ={
        countryName:faker.address.county(),
        stateName:faker.address.state(),
        cityName:faker.address.cityName(),
        streetName:faker.address.streetAddress(),
        petName:faker.name.firstName(),
        petSpecie:faker.animal.type(),
        companyName:faker.company.companyName(),
        personName:faker.name.findName(),
        personPhone:faker.phone.phoneNumber(),
        vehicleModel: faker.vehicle.vehicle(),
        musicGenre:faker.music.genre(),
        avatarUrl:faker.image.avatar()
    }

    data.streetZip =faker.address.zipCodeByState(data.stateName)
    data.personEmail =faker.internet.email(data.personName)

    await execute("MERGE (country:Country { name:$countryName})",{
        countryName:data.countryName
    })

    await execute("MERGE (state:State { name:$stateName})",{
        stateName:data.stateName})

    await execute("MERGE (city:City { name:$cityName })",{
        cityName:data.cityName })

    await execute("MERGE (street:Street { name:$streetName ,zip:$streetZip })",{
        streetName:data.streetName,
        streetZip:data.streetZip
    })

    await execute("MERGE (pet:Pet { name:$petName, specie:$petSpecie })",{
        petName:data.petName,
        petSpecie: data.petSpecie
    })

    await execute("MERGE (company:Company { name:$companyName })",{
        companyName:data.companyName
    })

    await execute("MERGE (person:Person { name: $personName, email:$personEmail, phone:$personPhone })",{
        personName:data.personName,
        personEmail:data.personEmail,
        personPhone:data.personPhone
    })

    await execute("MERGE (vehicle:Vehicle { model:$vehicleModel })",{
        vehicleModel: data.vehicleModel
    })

    await execute("MERGE (music:Music { type:$musicGenre })",{
        musicGenre:data.musicGenre
    })

    await execute("MERGE (avatar:Avatar { url: $avatarUrl})",{
        avatarUrl:data.avatarUrl
    })

    // //Relations
    await execute(`
    MATCH (c:Country {name:$countryName})
    MATCH (s:State {name:$stateName})
    MERGE (c)-[:HAS_STATE]->(s)`,{
        countryName:data.countryName,
        stateName:data.stateName
    })

    await execute(`
    MATCH (country:Country {name:$countryName}) 
    MATCH (state:State {name:$stateName}) 
    MERGE (country)-[:HAS_STATE]->(state)`,{
        countryName:data.countryName,
        stateName:data.stateName
    })

    await execute(`
    MATCH (state:State {name:$stateName}) 
    MATCH (city:City {name:$cityName}) 
    MERGE (state)-[:HAS_CITY]->(city)`,{
        stateName:data.stateName,
        cityName: data.cityName
    })
    await execute(`
    MATCH (city:City {name:$cityName}) 
    MATCH (street:Street {name:$streetName}) 
    MERGE (city)-[:HAS_STREET]->(street)`,{
        cityName:data.cityName,
        streetName:data.streetName
    })

    await execute(`
    MATCH (person:Person {name:$personName})
    MATCH (street:Street {name:$streetName})
    MERGE (person)-[:LIVE_ON]->(street)`,{
        personName:data.personName,
        streetName:data.streetName
    })
    await execute(`
    MATCH (person:Person {name:$personName}) 
    MATCH (pet:Pet {name:$petName})
    MERGE (person)-[:HAS_PET]->(pet)`,{
        personName:data.personName,
        petName:data.petName
    })
    await execute(`
    MATCH (person:Person {name:$personName}) 
    MATCH (music:Music {type:$musicGenre})
    MERGE (person)-[:LIKE_SONG_TYPE]->(music)`,{
        personName:data.personName,
        musicGenre:data.musicGenre
    })
    await execute(`
    MATCH (person:Person {name:$personName}) 
    MATCH (avatar:Avatar {url:$avatarUrl})
    MERGE (person)-[:AVATAR]->(avatar)`,{
        personName:data.personName,
        avatarUrl:data.avatarUrl
    })

    await execute(`
    MATCH (person:Person {name:$personName})
    MATCH (vehicle:Vehicle {model:$vehicleModel})
    MERGE (person)-[:HAS_VEHICLE]->(vehicle)`,{
        personName:data.personName,
        vehicleModel:data.vehicleModel
    })

    await execute(`
    MATCH (person:Person {name:$personName})
    MATCH (company:Company {name:$companyName})
    MERGE (person)-[:WORK_ON]->(company)`,{
        personName:data.personName,
        companyName:data.companyName
    })

    /* Friend  beetwen person who like same song type*/
    await execute(`
    MATCH (p:Person)-[:LIKE_SONG_TYPE]->(m:Music)
    WITH {type: m.type, persons: COLLECT(p.name)} AS data 
    UNWIND data AS undata
    MATCH (pf:Person)-[r:LIKE_SONG_TYPE]->(mf:Music {type:undata.type})<-[:LIKE_SONG_TYPE]-(pf2:Person)
    WHERE pf.name <> pf2.name
    MERGE (pf)-[:FRIENDS_MUSIC]->(pf2)
    `,{
        personName:data.personName,
        cityName:data.cityName
    })

    return await execute(`
    match (p)
    with count(p) AS nodes, p
    match (p2)-[r]->()
    with collect(DISTINCT labels(p)) AS label, nodes, r
    with collect(DISTINCT TYPE(r)) AS relations, label, nodes
    return  relations, nodes, label`)

}