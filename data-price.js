// 价格表（积分制：1积分 = 0.05美元）
// 以后改价格只改这个文件
const priceMap = {
  nz_8: 0.93, nz_20: 0.80, nz_5: 0.51, nz_6: 0.03, nz_15: 0.0006,
  nz_37: 1.71, nz_14: 0.01, nz_4: 0.13, nz_23: 0.03, nz_21: 1.09,
  nz_66: 0.81, nz_38: 10.86, nz_45: 2.29, nz_44: 0.51, nz_40: 7.43,
  nz_60: 5.71, nz_53: 0.86, nz_51: 0.69, nz_52: 0.69, nz_62: 1.71,
  nz_34: 10.29, nz_29: 17.14, nz_2: 2.46, nz_7: 2.57, nz_11: 0.24,
  nz_31: 17.14, nz_41: 10.29, nz_39: 7.43, nz_42: 6.29,
  nz_1: 0.14, nz_36: 0.19, nz_16: 0.10, nz_49: 0.05, nz_50: 0.07,
  nz_12: 0.01, nz_13: 0.01, nz_61: 0.02, nz_56: 0.01, nz_58: 0.01,
  nz_43: 0.01, nz_54: 0.01, nz_46: 0.0017, nz_3: 0.02,
  nz_9: 0, nz_10: 0, nz_17: 0, nz_18: 0, nz_19: 0, nz_33: 0, nz_55: 0
};

// 自动给 allApis 每个接口加上 price 字段
function applyPrice() {
  if (typeof allApis === 'undefined') return;
  for (const cat in allApis) {
    allApis[cat].forEach(api => {
      if (priceMap.hasOwnProperty(api.id)) {
        api.price = priceMap[api.id];
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', applyPrice);