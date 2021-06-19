import { db } from "./firebase";

export const setData = (patientId) => {
    db.ref('patients/' + patientId)
    .set({
        number: '',
        age: '',
        gender: '',
        welfare: '',
        predict: '',
        codisease: '',
        drug: '',
        doseMg: '',
        doseMl: '',
        volumeMll: '',
        time: '',
    });
    // console.log(valueobject1)
}

export const updateData = (patientId, valueobject1, valueobject2, valueobject3, valueobject4, valueobject5, valueobject6,
    valueobject7, valueobject8, valueobject9, valueobject10, valueobject11) => {
    db.ref('patients/' + patientId)
    .update({
        number: valueobject1,
        age: valueobject2,
        gender: valueobject3,
        welfare: valueobject4,
        predict: valueobject5,
        codisease: valueobject6,
        drug: valueobject7,
        doseMg: valueobject8,
        doseMl: valueobject9,
        volumeMll: valueobject10,
        time: valueobject11,
    });
    // console.log(valueobject1)
}

export const dataInfo = (patientId) => {
    db.ref('patients/' + patientId).on('value', (snapshot) => {
        const number = snapshot.val().number;
        return number
      });
    
}

// export const dataInfo = () => {

// }
