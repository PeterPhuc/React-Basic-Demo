// Import React
import React from 'react';

import './css/css.css';

import DemoJSX from './components/tongquanJSX/DemoJSX';

import MyComponent from './components/tongquanComponent/Function-component/DemoComponent';
import ClassComponents from './components/tongquanComponent/Class-component/DemoComponent';

import {DmoState_1, DmoState} from './components/State-Props/DemoState';
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
      {/* <DemoJSX />
      
      <div className="App">
          <MyComponent name="Alice" message="Welcome to React!" />
      </div>
      <div className="App">    
          <ClassComponents />   
      </div>                   

      <div className="App">
          <DmoState_1 /> 
      </div> 

      <div className="App"> 
          <DmoState />
      </div>  */}

      {/* <div className="App"> 
        <DmoProps /> 
      </div> */}

      
      {/* <React.Fragment>
          <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L" remaining={100}>Clothes 1</Clothes>
          <Clothes name="Áo" type="Vest" color ="Trắng" size = "M" >Clothes 2</Clothes>
      </React.Fragment>

      <DemoEvent />

      <Parent /> */}

      {/* <div className="App"> 
          <DemoForm />      
      </div>                */}

      {/* <DemoContext />

      <div className="App">
          <CodeSplitting />
          <DemoLazyload />
          <SuspenseLazyLoad />
          <Routing />
      </div>

      <DemoHook /> */}

      {/* <DemoBrowserRouter />
      <DemoHashRouter />
    <DemoRoute /> */}

          {/* <div className="App">
            <RouteParams />
          </div>

          <div className="App">
              <NestedRoute />
          </div>


          <div className="App">
              <Link_Navlink />
          </div> */}

          {/* <RedirectPage /> */}

      {/* <div className="App">  */}
          {/* <ExampleComponent/> */}
          {/* <StyledComponent/> */}
          {/* <DynamicComponent/> */}
          {/* <ListComponent /> */}
      {/* </div>  */}
      {/* <DemoStyleSheet /> */}
      {/* <ModuleStyleDemo /> */}
      <StyledComponentDemo />
    </>
  );
}

// const cssApp = {         //Tạo đối tượng css
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   textAlign: 'center',
//   background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
//   backgroundSize: '400% 400%',
//   height: '100vh'
// };

export default App;      //Xuất App component














