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
    default:
      return state;
  }
};
