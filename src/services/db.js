import { db } from "./firebase";
import moment from "moment";

export const setData = (uID, patientId) => {
    db.ref('user/' + uID + '/patients/' + patientId)
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
        time_start: '',
        time_found: '',
        time: '',
        image: '',
        position: '',
        result: '',
        status: true,
    });
    // console.log(valueobject1)
}

export const updateData = (uID, patientId, valueobject1, valueobject2, valueobject3, valueobject4, valueobject5, valueobject6,
    valueobject7, valueobject8, valueobject9, valueobject10, valueobject11, valueobject12, valueobject13) => {
    db.ref('user/' + uID + '/patients/' + patientId)
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
        time_start: valueobject12,
        time_found: valueobject13

    });
    // console.log(valueobject1)
}

export const updateStatus = (uID, patientId) => {
    db.ref('user/' + uID + '/patients/' + patientId)
    .update({
        status: false
    });
}

export const setImage = (uID, patientId) => {
    const time_now = moment().format('DD-MMM-YYYY-HH-mm');
    console.log(time_now)
    db.ref('user/' + uID + '/patients/' + patientId + '/images/' + time_now)
    .set({
        image: '',
        result: ''
    })
}

export const updatePicture = (uID, patientId, positionImage, image) => {
    db.ref('user/' + uID + '/patients/' + patientId)
    .update({
        position: positionImage,
        image: image,
    });
} 

export const dataInfo = (uID, patientId) => {
    db.ref('user/' + uID + '/patients/' + patientId).on('value', (snapshot) => {
        const image = snapshot.val().image;
        const position = snapshot.val().position;
        console.log(image, position)
        return position, image
      });
}

