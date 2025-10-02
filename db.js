const pgp=require('pg-promise')()
const dbURI=process.env.POSTGRES_URI

const db = pgp(dbURI)

db.one('SELECT $1 AS value', 123)
  .then(data => 
    console.log('DATA:', data.value)
  )
  .catch(error => 
    console.log('ERROR:', error)
  )

module.exports=db