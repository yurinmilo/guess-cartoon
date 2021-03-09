import '../imports/api/musicMachine.js';

 MusicMachine.remove({});
if (MusicMachine.find().count() === 0) {
  MusicMachine.insert({ startdac: 0, bubo: 0, frakk: 0, hoho:0, maci: 0, mezsga: 0, pompom: 0, pumukli: 0, susu: 0, vili: 0, vuk: 0, tom: 0, bugs: 0, chipndale: 0, donald: 0, mickey: 0, pink: 0, popeye: 0, runner: 0, simpsons: 0, woody: 0, snoopy: 0,});
}
