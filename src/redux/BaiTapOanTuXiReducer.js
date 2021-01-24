const stateDefault = {
  //Tạo mảng lưu trữ phần đặt cược binding trên player Component
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/gameOanTuTi/keo.png",
      datCuoc: false,
    },

    {
      ma: "bua",
      hinhAnh: "./img/gameOanTuTi/bua.png",
      datCuoc: true,
    },

    {
      ma: "bao",
      hinhAnh: "./img/gameOanTuTi/bao.png",
      datCuoc: false,
    },
  ],

  ketQua: "We are Who we are to day", // kiểu chuỗi
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuTi/bua.png" }, // để mặc định
};
// có hai tham số {1: state mặc đinh ban đầu / 2: action}
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  //"action.type" để biết thay đối action nào
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
      // map là hàm tạo giá trị mảng mới
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      //set State của mangCuoc => render lại giao diện
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa Nhau";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua Nhé Cưng";
          } else {
            state.soBanThang += 1;
            state.ketQua = "We are Who we are to day";
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "We are Who we are to day";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa Nhau";
          } else {
            state.ketQua = "Thua Nhé Cưng";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua Nhé Cưng";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "We are Who we are to day";
          } else {
            state.ketQua = "Hòa Nhau";
          }
          break;
        default:
          state.ketQua = "We are Who we are to day";
          return { ...state };
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
