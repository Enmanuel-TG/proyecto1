import DB from './firebase/config';
import { documents } from "./mostrar-documentos/baseuser";


const referencia = DB.collection('usuarios');
const usuariosRef = referencia













const nose = document.createElement('button');
nose.innerText = '=>';
document.body.append(nose)


let primero: any = null;
let ultimo: any = null;

nose.addEventListener('click', () => {
    const query = usuariosRef
        .orderBy('nombre')
        .startAfter(ultimo)

    query.limit(1)
        .get()
        .then(snap => {
            primero = snap.docs[0] || null;
            ultimo = snap.docs[snap.docs.length - 1
            ] || null;
            documents(snap);
        })
});
nose.click();



















const repetir = document.createElement('button');
repetir.innerText = '=';
document.body.append(repetir)

repetir.addEventListener('click', () => {
    const query = usuariosRef
        .orderBy('nombre')
        .startAt(ultimo)

    query.limit(1)
        .get()
        .then(snap => {
            ultimo = snap.docs[snap.docs.length - 1
            ] || null;
            documents(snap);
        })
});












const anterior = document.createElement('button');
anterior.innerText = '<=';
document.body.append(anterior)

anterior.addEventListener('click', () => {
    const query = usuariosRef
        .orderBy('nombre')
        .endBefore(primero)


    query.limit(1)
        .get()
        .then(snap => {
            primero = snap.docs[0] || null;
            ultimo = snap.docs[snap.docs.length - 1
            ] || null;


            documents(snap);

        })
});