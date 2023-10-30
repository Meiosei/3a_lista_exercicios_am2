const mapLessThanTwelveNumbersName = {
  0: 'zero',
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
  11: 'onze',
  12: 'doze',
  13: 'treze',
  14: 'quatorze',
  15: 'quinze',
};

mapLessThanTwelveNumbersName[16] =
  mapLessThanTwelveNumbersName[10] + 'es' + mapLessThanTwelveNumbersName[6];
mapLessThanTwelveNumbersName[17] =
  mapLessThanTwelveNumbersName[10] + 'es' + mapLessThanTwelveNumbersName[7];
mapLessThanTwelveNumbersName[18] =
  mapLessThanTwelveNumbersName[10] + mapLessThanTwelveNumbersName[8];
mapLessThanTwelveNumbersName[19] =
  mapLessThanTwelveNumbersName[10] + 'e' + mapLessThanTwelveNumbersName[9];

const mapDezenesNumbersName = {
  20: 'vinte',
  30: 'trinta',
  40: 'quarenta',
  50: 'cinquenta',
  60: 'sessenta',
  70: 'setenta',
  80: 'oitenta',
  90: 'noventa',
};

const mapCetenesNumbersName = {
  100: 'cento',
  200: 'duzentos',
  300: 'trezentos',
  400: 'quatrocentos',
  500: 'quinhentos',
  600: 'seiscentos',
  700: 'setecentos',
  800: 'oitocentos',
  900: 'novecentos',
};

const sufixs = {
  1: '',
  10: '',
  100: '',
  1000: 'mil',
  1000000: 'milhões',
  1000000000: 'bilhões',
};
