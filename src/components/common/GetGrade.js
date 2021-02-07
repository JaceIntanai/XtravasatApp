// import React, { memo } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity , Dimensions} from 'react-native';
// const GetGrade = ({ children }) => (
//     <View>
//             <Text>{children}{rec_data}</Text>
//     </View>
// );

// var rec_data = [];
// const { toArray } = React.Children;
// for(let i=0; i< toArray(children['MILD']).length ; i++){
//     rec_data.push(
//         <Text style={styles.drugHead}>{children['MILD']}</Text>
//     )
//     // for(let j=0; j< toArray(children['MILD']['step'][i]).length ; j++)
//     //     rec_data.push(
//     //         <Text style={styles.drugHead}>{children['MILD']['step']['label'][]}</Text>
//     //     )
// }

// const styles = StyleSheet.create({
//     drugBarr: {
//         flex: 1,
//         alignSelf: 'center',
//         paddingVertical: 20,
//         paddingHorizontal: 30,
//       },
//     drugHead: {
//         fontWeight: 'bold', 
//         color: '#005daa',
//         fontSize: 16,
//         margin: 5,
//     },
//     drugText: {
//         fontSize: 16,
//         margin: 5,
//       }
// });

// export {GetGrade};
import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Dimensions} from 'react-native';


const GetGrade = ({ children }) => (
    <View>
        <Text>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
});

export {GetGrade};
