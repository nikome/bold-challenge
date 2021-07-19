import moment from 'moment';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    transaccion: Math.floor(Math.random() * 10) > 7? 'Cobro exitoso': 'Cobro no realizado',
    date: moment().format('YYYY/MM/D hh:mm'),
    metodo: '*** *** *** 7711',
    idBold: Math.floor(Math.random() * 100000),
    monto: '$' + Math.floor(Math.random() * 100) + '.000'
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
