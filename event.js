const argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Орел или решка?');

rl.on('line', line => {
  //console.log('Typed %s', line);

  const res = Math.floor(Math.random() * 2);
  if (line == 'орел' || line == 'решко') {
    if (line == 'орел' && res) {
      console.log('Орел!');
      rl.close();
    } else {
      console.log('Решко!');
      rl.close();
    }
  } else {
    console.log('Введи орел или решко!!!');
  }
});
