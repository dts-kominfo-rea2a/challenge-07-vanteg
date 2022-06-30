const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// const fs = require('fs/promise');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const gabungKata = (kataYangInginDigabung) => {
return new Promise((resolve,reject) => {
  if (kataYangInginDigabung === null) {
    reject('maaf, kata yang dimasukan null')
  }
  else{
    resolve(kataYangInginDigabung);
  }
})
}

var x,txt = ""

const promiseOutput = async (expression) => {
  let hasilMarah = 0;
  let hasilTidakMarah = 0;
  const penontonIXX = await promiseTheaterIXX()
  const penontonVGC = await promiseTheaterVGC()
  for (let index = 0; index < penontonIXX.length; index++) {
    if(penontonIXX[index].hasil == 'marah') {
      hasilMarah += 1
    } else {
      hasilTidakMarah += 1;
    }
  }

  for (let index = 0; index < penontonVGC.length; index++) {
    if(penontonVGC[index].hasil == 'marah') {
      hasilMarah += 1;
    } else {
      hasilTidakMarah += 1;
    }
  }

  if(expression === 'marah') {
   return hasilMarah; 
  } else {
    return hasilTidakMarah
  }

  

  // console.log('penonton cgv: ', penontonVGC)
};


module.exports = {
  promiseOutput,
};
