
const express = require('express');
const app = express();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const StorageEngine = {

    db: [
        "Lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "Et",
        "velit",
        "praesentium",
        "et",
        "suscipit",
        "explicabo",
        "sit",
        "officiis",
        "doloremque",
        "est",
        "architecto",
        "repellat",
        "et",
        "voluptas",
        "ratione",
        "dicta",
        "velit",
        "qui",
        "eius",
        "enim",
        "ut",
        "sunt",
        "saepe"
    ],

    getRandomData: async () => {
        await sleep(parseInt(Math.random() * 750) + 100) // Simulate server call ... Do not remove
        return { data: StorageEngine.db[Math.floor(Math.random() * StorageEngine.db.length)] }
    },

    getData: async (id) => {
        await sleep(parseInt(Math.random() * 750) + 100) // Simulate server call ... Do not remove
        return StorageEngine.db[id]
    }

}

/**
 * TODO 
 * 
 * 1. Study the code and find a bug
 * 2. Organize this source code
 * 3. Implement showTenElements function using the StorageEngine (simulates a call to a DBMS)
 * 4. Check bugs, are there any ?
 */


/**
 * Get 10 elements ...
 * @param {*} offset 
 */
function getTenElements(offset = 0) {
    // To implement
}


app.get('/data', async function (req, res) {
    res.send(await getDataSuite(req.query.from, req.query.to));
})

app.get('/data/random', async function (req, res) {
    res.send(await getRandomData());
})

app.get('/', function (req, res) {
    res.send('DarwinX - Job Tech Test');
})

const server = app.listen(8081, function () {

    const host = server.address().address
    const port = server.address().port

    console.log("DarwinX is listening to you - http://%s:%s", host, port)
})

getTenElements()
