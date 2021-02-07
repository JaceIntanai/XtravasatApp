import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    LoginPage,
    HomePage,
    PatientPage,
    PositionPage,
    CameraPage,
    ConfirmPage,
    LoadingPage,
    DetailPage,
    LoadingScreen,
    SubPage,
    HistoryPage,
    SuccessPage,
    TracePage,
    SelectPage,
    RecommentPage,
} from './screens';

const Router = createStackNavigator(
  {
    login: LoginPage,
    home: HomePage,
    patient: PatientPage,
    position: PositionPage,
    cameraP: CameraPage,
    confirm: ConfirmPage,
    loading: LoadingPage,
    detail: DetailPage,
    start: LoadingScreen,
    sub: SubPage,
    history: HistoryPage,
    success: SuccessPage,
    trace: TracePage,
    select: SelectPage,
    recom: RecommentPage,
  },
  {
    initialRouteName: 'start',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
