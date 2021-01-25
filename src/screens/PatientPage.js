import React, { Component } from 'react';
import { Background, BackButton, Textform, TextAge , Msg , Topbar , Dropdown as dd , Dropdown2 as dd2 , Subheader} from '../components/common'
import { form , Subinput , NextButton , Codi } from '../components/common';
import { codiseasedata , genderdata , welfaredata , predictdata } from '../components/data';
import { ScrollView } from 'react-native';
import { auth } from '../services';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                    ผู้ป่วยใหม่
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
                            data={ genderdata }
                            dropdownOffset={{ top: 10 }}
                            value={this.state.gender}
                            onChangeText={gender => this.setState({ gender })}
                            containerStyle={dd.dropdown}
                        />
                    </Subinput>

                    
                        
                    <Msg> สิทธิการรักษา * </Msg>
                    <Dropdown 
                        data={ welfaredata }
                        dropdownOffset={{ top: 10 }}
                        value={this.state.welfare}
                        onChangeText={welfare => this.setState({ welfare })}
                        containerStyle={dd2.dropdown}
                    />

                    <Msg> การวินิจฉัยโรค * </Msg>
                    <Dropdown 
                        data={ predictdata }
                        dropdownOffset={{ top: 10 }}
                        value={this.state.predict}
                        onChangeText={predict => this.setState({ predict })}
                        containerStyle={dd2.dropdown}
                    />

                    <Msg> โรคร่วม (Co mobility) * </Msg>
                    <SectionedMultiSelect
                        items={ codiseasedata }
                        IconRenderer={Icon}
                        uniqueKey="name"
                        selectText="ระบุ..."
                        subKey="problem"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={codisease => this.setState({codisease})}
                        // selectedItems={this.cor.value}
                        expandDropDowns={true}
                        searchPlaceholderText="Search"
                        colors={{ subText: '#000000' }}
                        styles={ Codi }
                    />
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