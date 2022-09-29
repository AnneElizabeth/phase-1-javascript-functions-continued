function saturdayFun (activity = 'roller-skate') {
    return ('This Saturday, I want to ' + activity + '!');
}

const mondayWork = function (activity = 'go to the office') {
    return ('This Monday, I will ' + activity + '.');
}

function wrapAdjective (stringFlair = '*') {
    return (function (someAdjective = 'special') {
        return ('You are ' +  stringFlair + someAdjective + stringFlair + '!');
    });
};


/* function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange */