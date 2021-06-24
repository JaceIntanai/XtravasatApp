import React, { Component } from 'react';
import { Background, BackButton, Msg , Topbar , Dropdown3 as dd3 } from '../components/common'
import { form , Subinput , Textform2 , NextButton , Textform3 , Textform4 , Codi , Calendar} from '../components/common';
// import { Button as bt, Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon as ic } from 'react-native-elements';
import { drugdata , alertdata } from '../components/data';
import { ScrollView } from 'react-native';
import { auth, db } from '../services';
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import DateTimePicker from "react-native-modal-datetime-picker";

class PatientPage extends Component{

    state = {
        uid: this.props.navigation.state.params.uID,
        drug: '',
        mg: '',
        ml: '',
        mll: '',
        time: '',
        fPickerVisible: false,
    }

    handleDate = e => {
        // console.log(e)
        months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        date = e.substring(0, 2) * 1
        index = m.indexOf(e.substring(3, 6))
        year = 543 + (e.substring(7, 11) * 1)
        month = months[index]
        time = e.substring(12, e.length)
        day = `${date} ${month} ${year} ${time}`
        return day;
    };


    confirmClick(){
        db.setData(this.state.uid, this.props.navigation.state.params.Pn)
        db.updateData(this.state.uid, this.props.navigation.state.params.Pn,
            this.props.navigation.state.params.Pn,
            this.props.navigation.state.params.Pa,
            this.props.navigation.state.params.Pg,
            this.props.navigation.state.params.Pw,
            this.props.navigation.state.params.Pp,
            this.props.navigation.state.params.Pc,
            this.state.drug,
            this.state.mg,
            this.state.ml,
            this.state.mll,
            this.state.time)
        this.props.navigation.navigate('position', {
            uID: this.state.uid,
            number: this.props.navigation.state.params.Pn,        
        });
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('patient')}
                    />
                    ผู้ป่วยใหม่
                </Topbar>
                <ScrollView >

                    <Msg> ยา * </Msg>
                    <SectionedMultiSelect
                        items={ drugdata }
                        IconRenderer={Icon}
                        uniqueKey="name"
                        selectText="ระบุ..."
                        subKey="problem"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={drugs => this.setState({drugs})}
                        selectedItems={this.state.drugs}
                        expandDropDowns={true}
                        searchPlaceholderText="Search"
                        colors={{ subText: '#000000' }}
                        styles={ Codi }
                    />

                    <Msg> Dose (mg/ml) * </Msg>
                    <Subinput>
                        <Textform2 
                            label="mg"
                            placeholder="mg"
                            returnKeyType="next"
                            value={this.state.mg}
                            onChangeText={mg => this.setState({ mg })}
                        />
                        /
                        <Textform3
                        label="ml"
                        placeholder="ml"
                        returnKeyType="next"
                        value={this.state.ml}
                        onChangeText={ml => this.setState({ ml })}
                        />
                    </Subinput>

                    <Msg> ปริมาณที่ได้รับ (ml) </Msg>
                    <Textform4
                        label="mll"
                        placeholder="ml"
                        returnKeyType="next"
                        value={this.state.mll}
                        onChangeText={mll => this.setState({ mll })}
                    />
                    <Msg> เวลาที่เริ่มใช้ยา * </Msg>
                    <DateTimePicker
                        isVisible={this.state.fPickerVisible}
                        onConfirm={(e) => {
                            e = moment(e).format('DD MMM YYYY HH:mm');
                            handleChange('timeUsing', e)
                            this.setState({ fPickerVisible: false })
                        }}
                        onCancel={() => { this.setState({ fPickerVisible: false }) }}
                        mode={'datetime'}
                        maximumDate={new Date()}
                    />
                    <Calendar
                            icon={
                                <ic
                                    name='calendar'
                                    type='font-awesome'
                                    color='#165d5a'
                                />
                            }
                            // title={this.handleDate(values.timeUsing)}
                            type="outline"
                            onPress={() => this.setState({ fPickerVisible: true })}
                            titleStyle={{ color: 'red', paddingLeft: 10 }}
                    >
                    </Calendar>
                    <Msg> เวลาที่เกิด extravasation * </Msg>
                    <DateTimePicker
                        isVisible={this.state.fPickerVisible}
                        onConfirm={(e) => {
                            e = moment(e).format('DD MMM YYYY HH:mm');
                            handleChange('timeUsing', e)
                            this.setState({ fPickerVisible: false })
                        }}
                        onCancel={() => { this.setState({ fPickerVisible: false }) }}
                        mode={'datetime'}
                        maximumDate={new Date()}
                    />
                    <Calendar
                            icon={
                                <ic
                                    name='calendar'
                                    type='font-awesome'
                                    color='#165d5a'
                                />
                            }
                            // title={this.handleDate(values.timeUsing)}
                            type="outline"
                            onPress={() => this.setState({ fPickerVisible: true })}
                            titleStyle={{ color: 'red', paddingLeft: 10 }}
                    >
                    </Calendar>
                    <Msg> แจ้งเตือนสำหรับการถ่ายครั้งต่อไป * </Msg>
                    <Dropdown 
                        data={ alertdata }
                        underlineColor="transparent"
                        label={'โปรดระบุ...'}
                        dropdownOffset={{ top: 10 }}
                        value={this.state.time}
                        onChangeText={time => this.setState({ time })}
                        // containerStyle={dd3.dropdown}
                        style={dd3.dropdown}
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