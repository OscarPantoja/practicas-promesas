
function build(wall, callback) {
    console.log('I am building')
    wall.isBuilt = true
    const error = !wall.isBuilt
    callback(error, wall)
}

function planish(wall, callback) {
    console.log('I am planishing')
    wall.isPlanished = true
    const error = !wall.isPlanished
    callback(error, wall)
}

function paint(wall, callback) {
    console.log('I am painting')
    wall.isPainted = true
    const error = !wall.isPainted
    callback(error, wall)
}

function buildPromise(wall) {
    return new Promise((resolve, reject) => {
        build(wall, (error, wallBuilt) => {
            if (error) return reject(error)
            resolve(wallBuilt)
        })
    })
}








