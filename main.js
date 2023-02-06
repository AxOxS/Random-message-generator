var randMessages = {
    zodiacSigns: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpius'],
    typeOfDay: ['an amazing luck', 'a normal day', 'a bad day', 'a terrible day', 'a worst possible day ever'],
    advice: ['eat a cupcake', 'get some sleep', 'just die', 'get naked and be one with nature', 'quit your job', 'get married']
}

//Empty array for storing random zodiac info
let todaysZodiac =[]

//Get a random number from 0 to num
function randNum(num) {
    return Math.floor(Math.random() * num)
}

//iterate over the arrays object
for(var key in randMessages){
    let rand = randNum(randMessages[key].length)

    switch(key) {
        case 'zodiacSigns':
            todaysZodiac.push(`Your sign is: ${randMessages[key][rand]}.`)
            break
        case 'typeOfDay':
            todaysZodiac.push(`You are having ${randMessages[key][rand]}.`)
            break
        case 'advice':
            todaysZodiac.push(`You should ${randMessages[key][rand]}.`)
            break
        default:
            todaysZodiac.push('Need more info')

    }
}

function format(zodiac) {
    const formZodiac = todaysZodiac.join('\n')
    console.log(formZodiac)
}

format(todaysZodiac);