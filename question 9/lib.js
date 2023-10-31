function getNumberName(number, iterations = 0) {
  if (iterations === 0 || (iterations === 1 && number < 20)) {
    return mapLessThanTwelveNumbersName[number];
  }

  if (iterations === 1) {
    return mapDezenesNumbersName[number];
  }

  if (iterations === 2) {
    return mapCetenesNumbersName[number];
  }
}

function addSufix(word, cetenesCount) {
  const exponent = cetenesCount * 3;
  const numberSufix = Math.pow(10, exponent);
  const sufix = sufixs[numberSufix];
  word += ` ${sufix}`;
  return word;
}

function addWordWithRemoveOnStart(arr, word) {
  arr.splice(0, 1);
  arr.unshift(word);
}

function addWordOnStart(arr, word) {
  arr.unshift(word);
}

function readNumberPerExtense(number) {
  if (number < 0 || number > 1000000) return null;
  const numberName = [];
  let numberStr = String(number);
  let len = numberStr.length;

  let index = len - 1;
  let i = 0;
  let cetenesCount = 0;

  while (index >= 0) {
    const number = numberStr[index];

    switch (i) {
      case 0: {
        let numberCharName = getNumberName(Number(number), i);
        if (cetenesCount > 0) {
          numberCharName = addSufix(numberCharName, cetenesCount);
        }
        addWordOnStart(numberName, numberCharName);
        i++;
        index--;
        continue;
      }

      case 1: {
        const n = Number(numberStr[index] + numberStr[index + 1]);
        if (n < 20) {
          let numberCharName = getNumberName(Number(n), i);
          if (cetenesCount > 0) {
            numberCharName = addSufix(numberCharName, cetenesCount);
          }
          addWordWithRemoveOnStart(numberName, numberCharName);
          i++;
          index--;
          continue;
        }

        let numberCharName = getNumberName(Number(number) * 10, i);
        addWordOnStart(numberName, numberCharName);
        i++;
        index--;
        continue;
      }

      case 2: {
        const scientistNotation = Math.pow(10, 2);
        const numberCharName = getNumberName(
          Number(number) * scientistNotation,
          i,
        );
        addWordOnStart(numberName, numberCharName);
        i = 0;
        index--;
        cetenesCount++;
        continue;
      }

      default:
        throw new Error('Error: ' + i);
    }
  }

  return numberName.join(' e ');
}

console.log(readNumberPerExtense(211));
console.log(readNumberPerExtense(1_111));
console.log(readNumberPerExtense(11_111));
console.log(readNumberPerExtense(511_711));
console.log(readNumberPerExtense(3_111_111));
console.log(readNumberPerExtense(32_111_101));
console.log(readNumberPerExtense(22_200_200_200));
