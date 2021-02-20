import React from 'react';
// import logo from '.src/logo.svg';
import './App.css';
import BaiTapBookingTicket from './baiTapReDux/BaiTapBookingTicket/BaiTapBookingTicket';

import BaiTapOanTuXi from './baiTapReDux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapGlasses from './BaiTapThuKinhStateProps/BaiTapGlasses';

function App() {
  return (
    <div className="App">
      {/* <BaiTapGlasses/> */}
      {/* <BaiTapOanTuXi/> */}
      <BaiTapBookingTicket/>
    </div>
  );
}

export default App;
