const stateGameDefault = {
  banChon: true, //true là tài, false là xỉu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    {
      diem: 6,
      img: "./img/gamexucxac/6.png",
    },
    {
      diem: 6,
      img: "./img/gamexucxac/6.png",
    },
    {
      diem: 6,
      img: "./img/gamexucxac/6.png",
    },
  ],
};

export const gameXucXacReducer = (state = stateGameDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      //mỗi lần nhấn play game, tổng số bàn chơi tăng 1
      state.tongSoBanChoi += 1;
      //tạo mảng xúc xắc ngẫu nhiên rỗng
      let arrXucXacNgauNhien = [];

      // sử dụng vòng lặp để tạo số ngẫu nhiên từ 1->6
      for (let i = 1; i <= 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //thay số ngẫu nhiên vào xxnn
        let xxnn = { diem: soNgauNhien, img: `./img/gamexucxac/${soNgauNhien}.png` };
        //push xxnn vào mảng arrxucxacnn
        arrXucXacNgauNhien.push(xxnn);
        console.log(arrXucXacNgauNhien);
      }
      state.mangXucXac = arrXucXacNgauNhien;
      let tongDiem = arrXucXacNgauNhien.reduce((diem, xx, index) => {
        return (diem += xx.diem);
      }, 0);
      if ((tongDiem < 11 && !state.banChon) || (tongDiem >= 11 && state.banChon)) {
        state.soBanThang += 1;
      }

      return { ...state };
    }
    //tính tổng điểm của xúc xắc
    default:
      return state;
  }
};
