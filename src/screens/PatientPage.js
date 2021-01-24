import React, { Component } from 'react';
import { Header, Button, Background, BackButton, Textform, TextAge , Msg , Topbar , Dropdown as dd , Dropdown2 as dd2 , Subheader} from '../components/common'
import { form , Subinput , NextButton} from '../components/common';
import { ScrollView } from 'react-native';
import { auth } from '../services';
import { Dropdown } from 'react-native-material-dropdown';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
class PatientPage extends Component{
    state = {
        number: '',
        age: '',
        gender: '',
        welfare: '',
        predict: '',
        codisease: '',
    }

    cor = [
        {
            name: 'Co mobility',
            problem: [
                { name: 'DM', id: 'DM', },
                { name: 'HT', id: 'HT', },
                { name: 'CKD/ESRD', id: 'CKD/ESRD', },
                { name: 'CHF', id: 'CHF', },
                { name: 'MI', id: 'MI', },
                { name: 'Others', id: 'Others', },
            ]
        }
    ]

    confirmClick(){
        this.props.navigation.navigate('sub');
    }

    render(){
        return (
            <Background>
                
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                </Topbar>
                <ScrollView style={form.form}>

                    <Msg> หมายเลขอ้างอิง * </Msg>
                    <Textform 
                        label="หมายเลขอ้างอิง"
                        placeholder="หมายเลขอ้างอิง"
                        returnKeyType="next"
                        value={this.state.number}
                        onChangeText={number => this.setState({ number })}
                    />

                    <Subheader />

                    <Subinput>
                        <TextAge 
                        label="อายุ"
                        placeholder="อายุ"
                        maxLength={3}
                        value={this.state.age}
                        onChangeText={age => this.setState({ age })}
                        />
                        ปี 
                        <Dropdown 
                            data={[
                                { label: 'ชาย', value: 'MALE' },
                                { label: 'หญิง', value: 'FEMALE' },
                            ]}
                            dropdownOffset={{ top: 10 }}
                            value={this.state.gender}
                            onChangeText={gender => this.setState({ gender })}
                            containerStyle={dd.dropdown}
                        />
                    </Subinput>

                    
                        
                    <Msg> สิทธิการรักษา * </Msg>
                    <Dropdown 
                        data={[
                            { label: 'ข้าราชการ/เบิกต้นสังกัด', value: 'ข้าราชการ/เบิกต้นสังกัด' },
                            { label: 'ประกันสังคม', value: 'ประกันสังคม' },
                            { label: 'บัตรประกันสุขภาพถ้วนหน้า', value: 'บัตรประกันสุขภาพถ้วนหน้า' },
                            { label: 'ประกันชีวิต', value: 'ประกันชีวิต' },
                            { label: 'เงินสด', value: 'เงินสด' },
                        ]}
                        dropdownOffset={{ top: 10 }}
                        value={this.state.welfare}
                        onChangeText={welfare => this.setState({ welfare })}
                        containerStyle={dd2.dropdown}
                    />

                    <Msg> การวินิจฉัยโรค * </Msg>
                    <Dropdown 
                        data={[
                            { label: 'Septic shock', value: 'Septic shock' },
                            { label: 'Sepsis', value: 'Sepsis' },
                            { label: 'Cardiogenic shock', value: 'Cardiogenic shock' },
                            { label: 'Anaphylaxis shock', value: 'Anaphylaxis shock' },
                            { label: 'Hypovolemic shock', value: 'Hypovolemic shoc' },
                            { label: 'Others', value: 'Others' },
                        ]}
                        dropdownOffset={{ top: 10 }}
                        value={this.state.welfare}
                        onChangeText={welfare => this.setState({ welfare })}
                        containerStyle={dd2.dropdown}
                    />

                    <Msg> โรคร่วม (Co mobility) * </Msg>
                    {/* <SectionedMultiSelect
                        items={this.cor}
                        uniqueKey="name"
                        selectText="ระบุ..."
                        subKey="problem"
                        // showDropDowns={true}
                        // readOnlyHeadings={true}
                        // onSelectedItemsChange={codisease => this.setState({codisease})}
                        // selectedItems={values.cor}
                        // expandDropDowns={true}
                        // searchPlaceholderText="Search"
                        // colors={{ subText: '#000000' }}
                        // styles={{container : {
                        //     backgroundColor: 'white',
                        //     },
                        //     selectToggle : {
                        //     // backgroundColor: '#e2e2e2',
                        //     // backgroundColor: '#f2f2f2',
                        //     borderWidth: 1,
                        //     borderColor: '#6a6e78',
                        //     borderRadius: 10,
                        //     paddingVertical: 10,
                        //     paddingHorizontal: 5,
                        //     marginBottom: 5,
                        //     },
                        //     selectToggleText: {
                        //     // fontWeight: 'bold'
                        //     }
                        // }}
                    /> */}
                    <NextButton 
                        mode="contained" 
                        onPress={() => this.confirmClick()}
                    >
                        ถัดไป
                    </NextButton>
                </ScrollView>
            </Background>
        );
    } 
}

export default PatientPage;