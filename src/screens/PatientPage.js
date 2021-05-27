import React, { Component } from 'react';
import { Background, BackButton, Textform, TextAge , Msg , Topbar , Dropdown as dd , Dropdown2 as dd2 , Subheader} from '../components/common'
import { form , Subinput , NextButton , Codi } from '../components/common';
import { codiseasedata , genderdata , welfaredata , predictdata } from '../components/data';
import { ScrollView, Picker } from 'react-native';
import { auth } from '../services';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
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

    confirmClick(){
        this.props.navigation.navigate('sub', {
            Pn: this.state.number,
            Pa: this.state.age,
            Pg: this.state.gender,
            Pw: this.state.welfare,
            Pp: this.state.predict,
            Pc: this.state.codisease
        });
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
                        <Picker
                            selectedValue={this.state.gender}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({gender: itemValue})
                            }>
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
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
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>


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