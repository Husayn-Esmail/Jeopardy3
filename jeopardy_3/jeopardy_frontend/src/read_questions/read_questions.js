// import the fs module
// const fs = require('fs').promises;
const fs = window.require('fs');
const filename = '../../../2023-24_ISA_Jeopardy_Questions.csv';
const { parse } = require('csv-parse');

function Cat(category, questions) {
  this.category = category;
  this.questions = questions;
}

async function extract_data_from_csv(csv_filename) {
  let categories = [];

  let y = fs
    .createReadStream(csv_filename)
    .pipe(parse({ delimiter: ',', from_line: 1 }))
    .on('data', function (row) {
      let arr = [];
      arr.push(row);
      console.log(`array: ${arr}`);
      categories.push(arr);
      //   categories.push(row[0]);
      //   console.log(row[0]);
      //   arr.push(new Cat(row[0], row.slice(1, row.length)));
      //   categories.push({
      //     category: row[0],
      //     questions: row.slice(1, row.length),
      //   });
      //   categories.push(arr);
      //
      categories.push(row);
    });

  console.log(`category: [${categories}]`);
  //   console.log(y);
  //   y.pipe(parse({ delimiter: ',', from_line: 1 }));
  return y;
}

extract_data_from_csv(filename);
// extract_data_from_csv(filename).then((x) => {
//   console.log(x);
// });
