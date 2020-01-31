
const kodemia = {
    interview: false,
    inscription: false,
    attendClass: false
}

function goToInterview(assist, callback) {
    console.log('Attendind interview')
    assist.interview = true
    const error = !assist.interview
    callback(error, assist)
}

function payInscription(pay, callback) {
    console.log('Paying inscription')
    pay.inscription = true
    const error = !pay.inscription
    callback(error, pay)
}

function goToClass(assistClass, callback) {
    console.log('Going to class')
    assistClass.attendClass = true
    const error = !assistClass.attendClass
    callback(error, assistClass)
}

goToInterview(kodemia, (error, attended) => {
    if (error) {
        console.log('I did not attend interview')
        return
    }
    payInscription(attended, (error, paid) => {
        if (error) {
            console.log('No money')
            return
        }
        goToClass(paid, (error, assisted) => {
            if (error) {
                console.log('No assisted')
                return
            }
            console.log('Done!')
            console.log(assisted)
        })
    })
})