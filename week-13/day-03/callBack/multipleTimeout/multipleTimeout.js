function printFruits() {
  setTimeout(() => {
    console.log('apple');
  });
  setTimeout(() => {
    console.log('pear');
  }, 1000);
  setTimeout(() => {
    console.log('melon');
  }, 2000);  setTimeout(() => {
    console.log('grapes');
  }, 3000);
}

printFruits();