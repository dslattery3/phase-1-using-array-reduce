// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
  
//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       for (const element of arr) {
//           accum = reducer(accum, element);
//       };
//       return accum;
//   }
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }


//   console.log(couponLocations.reduce(couponCounter, 0))


//   const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, amount){return total + amount}, 0);