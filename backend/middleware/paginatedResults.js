// const paginatedResults = (model = (res, req, next) => {
//   const page = parseInt(req, query, page);
//   const limit = parseInt(req, query, limit);
//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//
//   const results = {};
//
//   if (endIndex < model.length) {
//     results.next = {
//       page: page + 1,
//       limit: limit,
//     };
//   }
//   if (startIndex > 0) {
//     results.previous = {
//       page: page - 1,
//       limit: limit,
//     };
//   }
//   results.results = model.slice(startIndex, endIndex);
//   res.paginatedResults = results;
//   res.json(results);
//   next();
// });
//
// module.exports = paginatedResults;
//
// // Built pagination in the backend. Decided to
// // build it on the client side instead.
