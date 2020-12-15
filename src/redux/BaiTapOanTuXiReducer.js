
const stateDefault = {
    //Tạo mảng lưu trữ phần đặt cược binding trên player Component
    mangDatCuoc: [
        {
            ma:'keo',
            hinhAnh:'./img/gameOanTuTi/keo.png',
            datCuoc:true
        },
        
        {
            ma:'bua',
            hinhAnh:'./img/gameOanTuTi/bua.png',
            datCuoc:false
        },
        
        {
            ma:'bao',
            hinhAnh:'./img/gameOanTuTi/bao.png',
            datCuoc:false
        }
    ],

    ketQua: "I love You Nguyễn Thị Thanh Thúy, I love U 3000",// kiểu chuỗi
    soBanThang:0,
    soBanChoi:0,
    computer:{ma:'keo', hinhAnh:'./img/gameOanTuTi/keo.png'}, // để mặc định
}
// có hai tham số {1: state mặc đinh ban đầu / 2: action}
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    //"action.type" để biết thay đối action nào
   switch (action.type) {
    //    case value:
           
    //        break;
   
       default: return { ...state }
           
   }
}

export default BaiTapOanTuXiReducer;

