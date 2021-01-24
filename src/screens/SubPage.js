import React, { Component } from 'react';
import { Header, Button, Background, BackButton, Textform, TextAge , Msg , Topbar , Dropdown as dd , Dropdown2 as dd2 , Subheader} from '../components/common'
import { form , Subinput , Textform2 , NextButton , Textform3 , Textform4} from '../components/common';
// import { Button as bt, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { auth } from '../services';
import { Dropdown } from 'react-native-material-dropdown';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

class PatientPage extends Component{
    state = {
        drug: '',
        mg: '',
        ml: '',
        mll: '',
        predict: '',
        codisease: '',
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

    drugs = [
        {
            name: 'Hyperosmolar agents',
            id: 'Hyperosmolar agents',
            problem: [
                { name: '5.5% calcium gluconate', id: '5.5% calcium gluconate', },
                { name: '10% calcium gluconate', id: '10% calcium gluconate', },
                { name: '20% lipid', id: '20% lipid', },
                { name: '50% MgSo4', id: '50% MgSo4', },
                { name: 'Contrast media', id: 'Contrast media', },
                { name: 'Dextrose (>10%)', id: 'Dextrose (>10%)', },
                { name: 'KCl (> 40 mmol/L)', id: 'KCl (> 40 mmol/L)', },
                { name: 'Mannitol', id: 'Mannitol', },
                { name: 'NSS (>3-10%)', id: 'NSS (>3-10%)', },
                { name: 'PPN/ TPN', id: 'PPN/ TPN', },
                { name: 'Phenytoin', id: 'Phenytoin', },
                { name: 'Others', id: 'OthersHyperosmolar', },
            ],
        }, {
            name: 'Chemotherapy',
            id: 'Chemotherapy',
            problem: [
                { name: 'Bleomycin C', id: 'Bleomycin', },
                { name: 'Cisplatin', id: 'Cisplatin', },
                { name: 'Carmustine Cetuximab', id: 'Carmustine Cetuximab', },
                { name: 'Cyclophosphamide', id: 'Cyclophosphamide', },
                { name: 'Dacarbazine Etoposide', id: 'Dacarbazine Etoposide', },
                { name: 'Dactinomycin', id: 'Dactinomycin', },
                { name: 'Doxorubicin', id: 'Doxorubicin', },
                { name: 'Docetaxel', id: 'Docetaxel', },
                { name: 'Epirubicin', id: 'Epirubicin', },
                { name: 'Gemtalabine Teniposide', id: 'Gemtalabine Teniposide', },
                { name: 'Idarubicin', id: 'Idarubicin', },
                { name: 'Mitomycin C', id: 'Mitomycin C', },
                { name: 'Oxaliplatin', id: 'Oxaliplatin', },
                { name: 'Paclitaxel', id: 'Paclitaxel', },
                { name: 'Vinblastine Vincristine', id: 'Vinblastine Vincristine', },
                { name: 'Vindesine Vinorelbine', id: 'Vindesine Vinorelbine', },
                { name: 'Others', id: 'OthersChemotherapy', },
            ],
        }, {
            name: 'Vascular regulators',
            id: 'Vascular regulators',
            problem: [
                { name: 'Adrenaline', id: 'Adrenaline', },
                { name: 'Dobutamine', id: 'Dobutamine', },
                { name: 'Dopamine', id: 'Dopamine', },
                { name: 'Norepinephrine', id: 'Norepinephrine', },
                { name: 'Others', id: 'OthersVascular', },
            ],
        }, {
            name: 'Antibiotic (Acid) & (alkaline)',
            id: 'Antibiotic (Acid) & (alkaline)',
            problem: [
                { name: 'Acyclovir', id: 'Acyclovir', },
                { name: 'Aminophylline', id: 'Aminophylline', },
                { name: 'Amphotericin B', id: 'Amphotericin B', },
                { name: 'Cefotaxime', id: 'Cefotaxime', },
                { name: 'Ceftriaxone', id: 'Ceftriaxone', },
                { name: 'Co trimoxazole', id: 'Co trimoxazole', },
                { name: 'Erythromycin', id: 'Erythromycin', },
                { name: 'Ganciclovir', id: 'Ganciclovir', },
                { name: 'Liposomal Amphotericin B', id: 'Liposomal Amphotericin B', },
                { name: 'Penicillin', id: 'Penicillin', },
                { name: 'Vancomycin', id: 'Vancomycin', },
                { name: 'Others', id: 'OthersAntibiotic', },
            ],
        }, {
            name: 'Sedative drugs & Anticonvulsant',
            id: 'Sedative drugs & Anticonvulsant',
            problem: [
                { name: 'Diazepam', id: 'Diazepam', },
                { name: 'Phenobarbital', id: 'Phenobarbital', },
                { name: 'Thiopental', id: 'Thiopental', },
                { name: 'Others', id: 'OthersSedative', },
            ],
        }, {
            name: 'Arrythmia drugs & vasopressor',
            id: 'Arrythmia drugs & vasopressor',
            problem: [
                { name: 'Amiodarone', id: 'Amiodarone', },
                { name: 'Digoxin', id: 'Digoxin', },
                { name: 'Vasopressin', id: 'Vasopressin', },
                { name: 'Others', id: 'OthersArrythmia', },
            ],
        }, {
            name: 'Others',
            id: 'Others',
            problem: [
                { name: 'Others', id: 'Others', },
            ],
        }
    ];


    confirmClick(){
        this.props.navigation.navigate('position');
    }

    render(){
        return (
            <Background>
                
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('patient')}
                    />
                </Topbar>
                <ScrollView style={form.form}>

                    <Msg> ยา * </Msg>
                    <Textform 
                        label="ยา"
                        placeholder="โปรดระบุ..."
                        returnKeyType="next"
                        value={this.state.drug}
                        onChangeText={drug => this.setState({ drug })}
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
                        value={this.state.ml}
                        onChangeText={ml => this.setState({ ml })}
                    />
                    <Msg> เวลาที่เริ่มใช้ยา * </Msg>
                    <Msg> เวลาที่เกิด extravasation * </Msg>
                    <Msg> แจ้งเตือนสำหรับการถ่ายครั้งต่อไป * </Msg>

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