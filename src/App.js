import React from 'react';
// import logo from '.src/logo.svg';
import './App.css';

import BaiTapOanTuXi from './baiTapReDux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapGlasses from './BaiTapThuKinhStateProps/BaiTapGlasses';

function App() {
  return (
    <div className="App">
      {/* <BaiTapGlasses/> */}
      <BaiTapOanTuXi/>
    </div>
  );
}

export default App;
