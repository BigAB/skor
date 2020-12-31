import Skor from 'skor';

const skor = new Skor();
const cleanup = skor.subscribe();

skor.otherProp.push({ one: 1 }, { two: 2 });

console.log('Skor', skor);

cleanup();
