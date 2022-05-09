export const sortJsonArray = (array, key, isDescOrder) => {
  // if (isDescOrder) {
  //   return array.sort(function (a, b) {
  //     if (a[key] < b[key]) {
  //       return 1;
  //     }
  //     if (a[key] > b[key]) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // } else {
  //   return array.sort(function (a, b) {
  //     if (a[key] < b[key]) {
  //       return -1;
  //     }
  //     if (a[key] > b[key]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  // return array.sort(function (a, b) {
  //   return a[key].localeCompare(b[key], undefined, {
  //     numeric: true,
  //     sensitivity: 'base',
  //   });
  // });

  return array.sort(function (a, b) {
    return a[key].localeCompare(b[key], undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
};
