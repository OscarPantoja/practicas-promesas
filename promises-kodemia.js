
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

function interviewPromise(assist) {
  return new Promise((resolve, reject) => {
    goToInterview(assist, (error, assistInterview) => {
      if (error) return reject(error)
      resolve(assistInterview)
    })
  })
}

function inscriptionPromise(pay) {
  return new Promise((resolve, reject) => {
    payInscription(pay, (error, inscriptionPay) => {
      if (error) return reject(error)
      resolve(inscriptionPay)
    })
  })
}

function goToClassPromise(assistClass) {
  return new Promise((resolve, reject) => {
    goToClass(assistClass, (error, kodemiaClass) => {
      if (error) return reject(error)
      resolve(kodemiaClass)
    })
  })
}

// interviewPromise(kodemia)
//   .then(assistInterview => {
//     inscriptionPromise(assistInterview)
//       .then(inscriptionPay => {
//         goToClassPromise(inscriptionPay)
//           .then(kodemiaClass => {
//             console.log('DONE')
//             console.log('kodemiaClass', kodemiaClass)
//           })
//           .catch(error => {
//             console.error('ERROR no class')
//           })
//       })
//       .catch(error => {
//         console.error('ERROR no pay')
//       })
//   })
//   .catch(error => {
//     console.error('ERROR no assist')
//   })

async function main() {

  const interviewAssist = await interviewPromise(kodemia)
  const payInscription = await inscriptionPromise(interviewAssist)
  const goToClass = await goToClassPromise(payInscription)

  console.log('DONE: ', goToClass)
}

main()
  .then(() => {
    console.log('ok')
  })
  .catch(error => {
    console.error(':(')
  })