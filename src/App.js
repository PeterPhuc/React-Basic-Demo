// Import React
import React from 'react';

import './css/css.css';

import DemoJSX from './components/tongquanJSX/DemoJSX';

import MyComponent from './components/tongquanComponent/Function-component/DemoComponent';
import ClassComponents from './components/tongquanComponent/Class-component/DemoComponent';

import { DmoState_1, DmoState } from './components/State-Props/DemoState';
import DmoProps from './components/State-Props/DemoProps';
import Clothes from './components/State-Props/Clothes';

import DemoEvent from './components/xulysukien/demo-event';

import Parent from './components/vongdoicomponent/parent-component';

import DemoForm from './components/form/demo-form';

import DemoContext from './components/context/demo-context';

import CodeSplitting from './components/codeSplitting/Muc1/demoCodeSplitting';
import DemoLazyload from './components/codeSplitting/Muc3/demoCodeSplitting';
import SuspenseLazyLoad from './components/codeSplitting/Muc4/SuspenseLazyLoad';
import Routing from './components/codeSplitting/Muc5/Routing';

import DemoHook from './components/hooks/demo-hook';

import DemoBrowserRouter from './components/Demo-router/Browser-router/demo-browser-rt';
import DemoHashRouter from './components/Demo-router/Hash-router/demo-hash-rt';
import DemoRoute from './components/Demo-router/Route/demo-route';
import RouteParams from './components/Demo-router/RouteParams/DemoRouter';
import NestedRoute from './components/Demo-router/NestedRoute/DemoRouter';
import Link_Navlink from './components/Demo-router/Link-NavLink/DemoLink_Navlink';
import RedirectPage from './components/Demo-router/Redirect/redirect';

import ExampleComponent from './components/style/demostyle';
import StyledComponent from './components/style/demostyle';
import DynamicComponent from './components/style/demostyle';
import ListComponent from './components/style/demostyle';
import DemoStyleSheet from './components/style/stylesheet';
import ModuleStyleDemo from './components/style/ModuleStyleDemo';
import StyledComponentDemo from './components/style/styleComponent';


// Định nghĩa functional component App
function App() {
  return (
    <>
      {/* ///////////////_****_/////////////// */}
      {/* truong */}
      <div className="App">

        {/* phần 4 :tổng quan về component*/}
        {/* <MyComponent name="Alice" message="Welcome to React!" /> */}
        {/* <ClassComponents />    */}

        {/* phần 5 */}
        {/* <DmoState_1 /> */}
        {/* <DmoState /> */}
        {/* <DmoProps /> */}

        {/* phần 8:làm việc với form */}
        {/* <DemoForm / */}

        {/* phần 10 : code-splitting trong react */}
        {/* <CodeSplitting /> */}
        {/* <DemoLazyload /> */}


        {/* phần 12: routing với react router */}
        {/* Viết ở cách khác */}
        {/* <Routing /> */}

        {/* <RouteParams /> */}
        {/* <NestedRoute /> */}
        {/* <Link_Navlink /> */}

        {/* phần 13: Style trong react */}
        {/* <StyledComponent/> */}
        {/* <ExampleComponent /> */}
        {/* <DynamicComponent /> */}
        {/* <ListComponent /> */}

      </div>


      {/* ///////////////_****_/////////////// */}
      {/* Nguyên */}
      <div className="App">

        {/* phần 12: routing với react router */}
        {/* <DemoBrowserRouter /> */}
        {/* <DemoHashRouter /> */}
        {/* <DemoRoute /> */}

        {/* phần 6:sử lý sự kiện */}
        {/* <DemoEvent /> */}

        {/* phần 7 : vòng đời component */}
        <Parent />

        {/* phần 13: Style trong react */}
        {/* <DemoStyleSheet /> */}
        

      </div>


      {/* ///////////////_****_/////////////// */}
      {/* Tín */}
      <div className="App">
        {/* phần 3:tổng quan jsx */}
        {/* <DemoJSX /> */}

        {/* phần 5: state và props */}
        {/* <React.Fragment>
              <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L" remaining={100}>Clothes 1</Clothes>
              <Clothes name="Áo" type="Vest" color ="Trắng" size = "M" >Clothes 2</Clothes>
            </React.Fragment> */}

        {/* phần 9 : context trong react */}
        {/* <DemoContext /> */}

        {/* phần 10 : code-splitting trong react */}
        {/* <SuspenseLazyLoad /> */}

        {/* phần 11: hook */}
        {/* <DemoHook />  */}


        {/* phần 12: routing với react router */}
        {/* <RedirectPage /> */}

        {/* phần 13: Style trong react */}
        {/* <ModuleStyleDemo /> */}
        {/* <StyledComponentDemo /> */}

      </div>

    </>
  );
}

export default App;      //Xuất App component

