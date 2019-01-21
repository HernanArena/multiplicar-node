//requires
const fs = require('fs');
const colors = require('colors');
let listarTabla = (base,limite = 10) => {
  return new Promise((resolve,reject)=>{
    if(!Number(limite)){
      reject(`El valor ${limite} no es un número`);
      return
    }
    if(!Number(base)){
      reject(`El valor ${base} no es un número`);
      return
    }
  console.log('======================================'.green);
  console.log(`          Tabla de ${base} `.green);
  console.log('======================================'.green);
    let listado = '';
      listado += crearTabla(base,limite);
    resolve(listado);
  });
}
let crearArchivo = (base,limite)=>{
  return new Promise((resolve,reject)=>{
    if(!Number(base)){
      reject(`El valor ${base} no es un número`);
      return
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, crearTabla(base,limite), (err) => {
      if (err)
        reject(err);
      else
        resolve(`tablas/tabla-${base}.txt`);
    });
  });
}
let crearTabla = (base,limite) =>{
  let data = '';

  for(let i=1;i<=limite;i++){
    data+=`${base} * ${i} = ${base*i} \n`;
  }
  return data;
}
module.exports = {
  crearArchivo,
  listarTabla
}
