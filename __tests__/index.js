// const frogJumps = require('../_lib/frog-jumps.js');

// describe('frogJumps', () => {
//   describe('when start is equal to end', () => {
//     it('should return 0', () => {
//       const result = frogJumps(10, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
// });
// describe('frogJumps', () => {
//     describe('when start is greater to end', () => {
//       it('should return 0', () => {
//         const result = frogJumps(100, 10, 5);
//         expect(result).toEqual(0);
//       });
//     });
//   });

//   describe('frogJumps', () => {
//     describe('when start is less than end', () => {
//       it('should return   the number of jumps, rounded up', () => {
//         const result = frogJumps(1, 10, 5);
//         expect(result).toEqual(2);
//       });
//     });
//   });

//   describe('frogJumps', () => {
//     describe('when length is 0', () => {
//       it('should return 0', () => {
//         const result = frogJumps(1, 10, 0);
//         expect(result).toEqual('error');
//       });
//     });
//   });

//   describe('frogJumps', () => {
//     describe('when jump lentgh is less than 0', () => {
//       it('should return 0', () => {
//         const result = frogJumps(1, 10, -5);
//         expect(result).toEqual(0);
//       });
//     });
//   });
//   describe('frogJumps', () => {
//     describe('should return   the number of jumps, rounded up', () => {
//       it('should return 0', () => {
//         const result = frogJumps(1, 10, -5);
//         expect(result).toEqual(1);
//       });
//     });
//   });