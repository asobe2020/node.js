const franc = require('franc');

const args = process.argv.slice(2).join(' ')
const languageCode = franc(args)

if(languageCode === 'und'){
    console.log('識別できませんでした'.red)
}else if(languageCode === 'ban'){
    console.log('不正な文字列です')
}else{
    console.log(`${languageCode} でしょうか？`)
}