//playground.js

import './playground.html';
import './playground.css';
//import './playground2.html';
//import './playground2.css';
import { Template } from 'meteor/templating';
import '../api/musicMachine.js';
import '../api/maxim.js';
import { _ } from 'meteor/underscore'

// it replaces
// Original line - pg_context = new webkitAudioContext() || new AudioContext;
// Replaced by below try except block

try {
    pg_context = new webkitAudioContext();
    } catch (e){
    if (e instanceof ReferenceError) {
      pg_context = new AudioContext;
    }
} // catch

//Now we can create an instance of our waveform generator and play it.

// waveform = new Synth(pg_context);

// Add instruments
tom = new Maxim();
bugs = new Maxim();
chipndale = new Maxim();
donald = new Maxim();
mickey = new Maxim();
pink = new Maxim();
popeye = new Maxim();
runner = new Maxim();
simpsons = new Maxim();
woody = new Maxim();
snoopy = new Maxim();
bubo = new Maxim();
frakk = new Maxim();
hoho = new Maxim();
maci = new Maxim();
mezsga = new Maxim();
pompom = new Maxim();
pumukli = new Maxim();
susu = new Maxim();
vili = new Maxim();
vuk = new Maxim();

// Load instruments
tomPlayer = tom.loadFile("/tom.wav");
tomPlayer.loop
bugsPlayer = bugs.loadFile("/bugs.wav");
bugsPlayer.loop
chipndalePlayer = chipndale.loadFile("/chipndale.wav");
chipndalePlayer.loop
donaldPlayer = donald.loadFile("/donald.wav");
donaldPlayer.loop
mickeyPlayer = mickey.loadFile("/mickey.wav");
mickeyPlayer.loop
pinkPlayer = pink.loadFile("/pink.wav");
pinkPlayer.loop
popeyePlayer = popeye.loadFile("/popeye.wav");
popeyePlayer.loop
runnerPlayer = runner.loadFile("/runner.wav");
runnerPlayer.loop
simpsonsPlayer = simpsons.loadFile("/simpsons.wav");
simpsonsPlayer.loop
woodyPlayer = woody.loadFile("/woody.wav");
woodyPlayer.loop
snoopyPlayer = snoopy.loadFile("/snoopy.wav");
snoopyPlayer.loop
buboPlayer = bubo.loadFile("/bubo.wav");
buboPlayer.loop
frakkPlayer = frakk.loadFile("/frakk.wav");
frakkPlayer.loop
hohoPlayer = hoho.loadFile("/hoho.wav");
hohoPlayer.loop
maciPlayer = maci.loadFile("/maci.wav");
maciPlayer.loop
mezsgaPlayer = mezsga.loadFile("/mezsga.wav");
mezsgaPlayer.loop
pompomPlayer = pompom.loadFile("/pompom.wav");
pompomPlayer.loop
pumukliPlayer = pumukli.loadFile("/pumukli.wav");
pumukliPlayer.loop
susuPlayer = susu.loadFile("/susu.wav");
susuPlayer.loop
viliPlayer = vili.loadFile("/vili.wav");
viliPlayer.loop
vukPlayer = vuk.loadFile("/vuk.wav");
vukPlayer.loop

// Play and stop functions
stopOrPlayTom = function(volume) {
  tomPlayer.volume(volume);
}

stopOrPlayBugs = function(volume) {
  bugsPlayer.volume(volume)
}

stopOrPlayChipndale = function(volume) {
  chipndalePlayer.volume(volume)
}

stopOrPlayDonald = function(volume) {
  donaldPlayer.volume(volume)
}


stopOrPlayMickey = function(volume) {
  mickeyPlayer.volume(volume)
}

stopOrPlayPink = function(volume) {
  pinkPlayer.volume(volume)
}

stopOrPlayPopeye = function(volume) {
  popeyePlayer.volume(volume)
}

stopOrPlayRunner = function(volume) {
  runnerPlayer.volume(volume)
}

stopOrPlaySimpsons = function(volume) {
  simpsonsPlayer.volume(volume)
}

stopOrPlayWoody = function(volume) {
  woodyPlayer.volume(volume)
}

stopOrPlaySnoopy = function(volume) {
  snoopyPlayer.volume(volume)
}
//bubo
stopOrPlayBubo = function(volume) {
  buboPlayer.volume(volume)
}

//frakk
stopOrPlayFrakk = function(volume) {
  frakkPlayer.volume(volume)
}

//hoho
stopOrPlayHoho = function(volume) {
  hohoPlayer.volume(volume)
}

//maci
stopOrPlayMaci = function(volume) {
  maciPlayer.volume(volume)
}

//mezsga
stopOrPlayMezsga = function(volume) {
  mezsgaPlayer.volume(volume)
}

//pompom
stopOrPlayPompom = function(volume) {
  pompomPlayer.volume(volume)
}

//pumukli
stopOrPlayPumukli = function(volume) {
  pumukliPlayer.volume(volume)
}

//susu
stopOrPlaySusu = function(volume) {
  susuPlayer.volume(volume)
}

//vili
stopOrPlayVili = function(volume) {
  viliPlayer.volume(volume)
}

//vuk
stopOrPlayVuk = function(volume) {
  vukPlayer.volume(volume)
}

playAll = function() {
  tomPlayer.play();
  bugsPlayer.play();
  chipndalePlayer.play();
  donaldPlayer.play();
  mickeyPlayer.play();
  pinkPlayer.play();
  popeyePlayer.play();
  runnerPlayer.play();
  simpsonsPlayer.play();
  woodyPlayer.play();
  snoopyPlayer.play();
  buboPlayer.play();
  frakkPlayer.play();
  hohoPlayer.play();
  maciPlayer.play();
  mezsgaPlayer.play();
  pompomPlayer.play();
  pumukliPlayer.play();
  susuPlayer.play();
  viliPlayer.play();
  vukPlayer.play();
}


stopAll = function() {
  tomPlayer.stop();
  bugsPlayer.stop();
  chipndalePlayer.stop();
  cdonaldPlayer.stop();
  mickeyPlayer.stop();
  pinkPlayer.stop();
  popeyePlayer.stop();
  runnerPlayer.stop();
  simpsonsPlayer.stop();
  woodyPlayer.stop();
  snoopyPlayer.stop();
  buboPlayer.stop();
  frakkPlayer.stop();
  hohoPlayer.stop();
  maciPlayer.stop();
  mezsgaPlayer.stop();
  pompomPlayer.stop();
  pumukliPlayer.stop();
  susuPlayer.stop();
  viliPlayer.stop();
  vukPlayer.stop();
}


setSpeed = function(speed) {
  tomPlayer.speed(speed);
  bugsPlayer.speed(speed);
  chipndalePlayer.speed(speed);
  donaldPlayer.speed(speed);
  mickeyPlayer.speed(speed);
  popeyePlayer.speed(speed);
  runnerPlayer.speed(speed);
  simpsonsPlayer.speed(speed);
  woodyPlayer.speed(speed);
  snoopyPlayer.speed(speed);
  buboPlayer.speed(speed);
  pinkPlayer.speed(speed);
  frakkPlayer.speed(speed);
  hohoPlayer.speed(speed);
  maciPlayer.speed(speed);
  mezsgaPlayer.speed(speed);
  pompomPlayer.speed(speed);
  pumukliPlayer.speed(speed);
  susuPlayer.speed(speed);
  viliPlayer.speed(speed);
  vukPlayer.speed(speed);
}


Template.playground.helpers({

    "startdac": function () {
      var starter = MusicMachine.findOne();

      if (starter) {
        Session.set('startdac', starter.start)
        if (starter.start==0) {
          playAll();
        }
/*        else if (starter.start==1) {
          stopAll();
        } */
      }
      return Session.get('startdac');
    }, 

    "tom": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('tom', starter.tom)
        stopOrPlayTom(starter.tom)
      }
      return Session.get('tom');
    },

    "bugs": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('bugs', starter.bugs)
        stopOrPlayBugs(starter.bugs)
      }
      return Session.get('bugs');
    },

    "chipndale": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('chipndale', starter.chipndale)
        stopOrPlayChipndale(starter.chipndale)
      }
      return Session.get('chipndale');
  },

    "donald": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('donald', starter.donald)
        stopOrPlayDonald(starter.donald)
      }
      return Session.get('donald');
    },
    
    "mickey" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('mickey', starter.mickey)
        stopOrPlayMickey(starter.mickey)
      }
      return Session.get('mickey')
    },

    "pink" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('pink', starter.pink)
        stopOrPlayPink(starter.pink)
      }
      return Session.get('pink')
    },

    "popeye" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('popeye', starter.popeye)
        stopOrPlayPopeye(starter.popeye)
      }
      return Session.get('popeye')
    },

    "runner" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('runner', starter.runner)
        stopOrPlayRunner(starter.runner)
      }
      return Session.get('runner')
    },

    "simpsons" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('simpsons', starter.simpsons)
        stopOrPlaySimpsons(starter.simpsons)
      }
      return Session.get('simpsons')
    },

    "woody" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('woody', starter.woody)
        stopOrPlayWoody(starter.woody)
      }
      return Session.get('woody')
    },

    "snoopy" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('snoopy', starter.snoopy)
        stopOrPlaySnoopy(starter.snoopy)
      }
      return Session.get('snoopy')
    },

    "bubo" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('bubo', starter.bubo)
        stopOrPlayBubo(starter.bubo)
      }
      return Session.get('bubo')
    },

    "frakk" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('frakk', starter.frakk)
        stopOrPlayFrakk(starter.frakk)
      }
      return Session.get('frakk')
    },

    "hoho" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('hoho', starter.hoho)
        stopOrPlayHoho(starter.hoho)
      }
      return Session.get('hoho')
    },

    "maci" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('maci', starter.maci)
        stopOrPlayMaci(starter.maci)
      }
      return Session.get('maci')
    },

    "mezsga" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('mezsga', starter.mezsga)
        stopOrPlayMezsga(starter.mezsga)
      }
      return Session.get('mezsga')
    },

    "pompom" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('pompom', starter.pompom)
        stopOrPlayPompom(starter.pompom)
      }
      return Session.get('pompom')
    },

    "pumukli" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('pumukli', starter.pumukli)
        stopOrPlayPumukli(starter.pumukli)
      }
      return Session.get('pumukli')
    },

    "susu" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('susu', starter.susu)
        stopOrPlaySusu(starter.susu)
      }
      return Session.get('susu')
    },

    "vili" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('vili', starter.vili)
        stopOrPlayVili(starter.vili)
      }
      return Session.get('vili')
    },

    "vuk" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('vuk', starter.vuk)
        stopOrPlayVuk(starter.vuk)
      }
      return Session.get('vuk')
    },

    "sliderValue":  function() { 
      var slider = MusicMachine.findOne();
      if (slider) { 
        Template.instance().$('#slider').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
        }
    },
});

Template.playground.events({
  //switched of 'stardac' working on click (tracks are playing without On button)
    "click .js-masterButton": function () {
        var c = Session.get('startdac')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('startdac', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {start: 1}});
        } else {
            Session.set('startdac', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {start: 0}});
        }
    }, 

    "click .js-controlTom": function () {
        var c = Session.get('tom');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('tom', 1);
            MusicMachine.update({_id:mach._id}, {$set: {tom: 1}});
        } else {
            Session.set('tom', 0);
            MusicMachine.update({_id:mach._id}, {$set: {tom: 0}});
        }
    },

    "click .js-stopTom": function() {
      var c = Session.get('tom');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('tom', 0);
      MusicMachine.update({_id:mach._id}, {$set: {tom: 0}});
      } else {} 
    },

    "click .js-controlBugs": function () {
        var c = Session.get('bugs');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('bugs', 1);
            MusicMachine.update({_id:mach._id}, {$set: {bugs: 1}});
        } else {
            Session.set('bugs', 0);
            MusicMachine.update({_id:mach._id}, {$set: {bugs: 0}});
        }
    },

    "click .js-stopBugs": function() {
      var c = Session.get('bugs');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('bugs', 0);
      MusicMachine.update({_id:mach._id}, {$set: {bugs: 0}});
      } else {} 
    },

    "click .js-controlChipndale": function () {
        var c = Session.get('chipndale');
        var mach = MusicMachine.findOne({});

        if (c === 0){
          Session.set('chipndale', 1);
          MusicMachine.update({_id:mach._id}, {$set: {chipndale: 1}});
        } else {
          Session.set('chipndale', 0);
          MusicMachine.update({_id:mach._id}, {$set: {chipndale: 0}});
        }
    },

    "click .js-stopChipndale": function() {
      var c = Session.get('chipndale');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('chipndale', 0);
      MusicMachine.update({_id:mach._id}, {$set: {chipndale: 0}});
      } else {} 
    },

    "click .js-controlDonald": function () {
        var c = Session.get('donald');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('donald', 1);
            MusicMachine.update({_id:mach._id}, {$set: {donald: 1}});
        } else {
            Session.set('donald', 0);
            MusicMachine.update({_id:mach._id}, {$set: {donald: 0}});
        }
    },

    "click .js-stopDonald": function() {
      var c = Session.get('donald');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('donald', 0);
      MusicMachine.update({_id:mach._id}, {$set: {donald: 0}});
      } else {} 
    },

    "click .js-controlMickey": function () {
        var c = Session.get('mickey');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('mickey', 1);
            MusicMachine.update({_id:mach._id}, {$set: {mickey: 1}});
        } else {
            Session.set('mickey', 0);
            MusicMachine.update({_id:mach._id}, {$set: {mickey: 0}});
        }
    },

    "click .js-controlPink": function () {
        var c = Session.get('pink');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('pink', 1);
            MusicMachine.update({_id:mach._id}, {$set: {pink: 1}});
        } else {
            Session.set('pink', 0);
            MusicMachine.update({_id:mach._id}, {$set: {pink: 0}});
        }
    },

    "click .js-stopPink": function() {
      var c = Session.get('pink');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('pink', 0);
      MusicMachine.update({_id:mach._id}, {$set: {pink: 0}});
      } else {} 
    },

    "click .js-controlPopeye": function () {
        var c = Session.get('popeye');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('popeye', 1);
            MusicMachine.update({_id:mach._id}, {$set: {popeye: 1}});
        } else {
            Session.set('popeye', 0);
            MusicMachine.update({_id:mach._id}, {$set: {popeye: 0}});
        }
    },

    "click .js-stopPopeye": function() {
      var c = Session.get('popeye');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('popeye', 0);
      MusicMachine.update({_id:mach._id}, {$set: {popeye: 0}});
      } else {} 
    },

    "click .js-controlSimpsons": function () {
        var c = Session.get('simpsons');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('simpsons', 1);
            MusicMachine.update({_id:mach._id}, {$set: {simpsons: 1}});
        } else {
            Session.set('simpsons', 0);
            MusicMachine.update({_id:mach._id}, {$set: {simpsons: 0}});
        }
    },

    "click .js-stopSimpsons": function() {
      var c = Session.get('simpsons');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('simpsons', 0);
      MusicMachine.update({_id:mach._id}, {$set: {simpsons: 0}});
      } else {} 
    },

    "click .js-controlWoody": function () {
        var c = Session.get('woody');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('woody', 1);
            MusicMachine.update({_id:mach._id}, {$set: {woody: 1}});
        } else {
            Session.set('woody', 0);
            MusicMachine.update({_id:mach._id}, {$set: {woody: 0}});
        }
    },

    "click .js-stopWoody": function() {
      var c = Session.get('woody');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('woody', 0);
      MusicMachine.update({_id:mach._id}, {$set: {woody: 0}});
      } else {} 
    },

    "click .js-controlSnoopy": function () {
        var c = Session.get('snoopy');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('snoopy', 1);
            MusicMachine.update({_id:mach._id}, {$set: {snoopy: 1}});
        } else {
            Session.set('snoopy', 0);
            MusicMachine.update({_id:mach._id}, {$set: {snoopy: 0}});
        }
    },

    "click .js-stopSnoopy": function() {
      var c = Session.get('snoopy');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('snoopy', 0);
      MusicMachine.update({_id:mach._id}, {$set: {snoopy: 0}});
      } else {} 
    },

    "click .js-controlBubo": function () {
        var c = Session.get('bubo');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('bubo', 1);
            MusicMachine.update({_id:mach._id}, {$set: {bubo: 1}});
        } else {
            Session.set('bubo', 0);
            MusicMachine.update({_id:mach._id}, {$set: {bubo: 0}});
        }
    },

    "click .js-controlPopeye": function () {
        var c = Session.get('popeye');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('popeye', 1);
            MusicMachine.update({_id:mach._id}, {$set: {popeye: 1}});
        } else {
            Session.set('popeye', 0);
            MusicMachine.update({_id:mach._id}, {$set: {popeye: 0}});
        }
    },

    "click .js-stopPopeye": function() {
      var c = Session.get('popeye');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('popeye', 0);
      MusicMachine.update({_id:mach._id}, {$set: {popeye: 0}});
      } else {} 
    },

    "click .js-stopBubo": function() {
      var c = Session.get('bubo');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('bubo', 0);
      MusicMachine.update({_id:mach._id}, {$set: {bubo: 0}});
      } else {} 
    },

    "click .js-controlFrakk": function () {
        var c = Session.get('frakk');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('frakk', 1);
            MusicMachine.update({_id:mach._id}, {$set: {frakk: 1}});
        } else {
            Session.set('frakk', 0);
            MusicMachine.update({_id:mach._id}, {$set: {frakk: 0}});
        }
    },

    "click .js-stopFrakk": function() {
      var c = Session.get('frakk');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('frakk', 0);
      MusicMachine.update({_id:mach._id}, {$set: {frakk: 0}});
      } else {} 
    },

    "click .js-controlHoho": function () {
        var c = Session.get('hoho');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('hoho', 1);
            MusicMachine.update({_id:mach._id}, {$set: {hoho: 1}});
        } else {
            Session.set('hoho', 0);
            MusicMachine.update({_id:mach._id}, {$set: {hoho: 0}});
        }
    },

    "click .js-stopHoho": function() {
      var c = Session.get('hoho');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('hoho', 0);
      MusicMachine.update({_id:mach._id}, {$set: {hoho: 0}});
      } else {} 
    },

    "click .js-controlMaci": function () {
        var c = Session.get('maci');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('maci', 1);
            MusicMachine.update({_id:mach._id}, {$set: {maci: 1}});
        } else {
            Session.set('maci', 0);
            MusicMachine.update({_id:mach._id}, {$set: {maci: 0}});
        }
    },

    "click .js-stopMaci": function() {
      var c = Session.get('maci');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('maci', 0);
      MusicMachine.update({_id:mach._id}, {$set: {maci: 0}});
      } else {} 
    },

    "click .js-controlMezsga": function () {
        var c = Session.get('mezsga');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('mezsga', 1);
            MusicMachine.update({_id:mach._id}, {$set: {mezsga: 1}});
        } else {
            Session.set('mezsga', 0);
            MusicMachine.update({_id:mach._id}, {$set: {mezsga: 0}});
        }
    },

    "click .js-stopMezsga": function() {
      var c = Session.get('mezsga');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('mezsga', 0);
      MusicMachine.update({_id:mach._id}, {$set: {mezsga: 0}});
      } else {} 
    },

    "click .js-controlPompom": function () {
        var c = Session.get('pompom');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('pompom', 1);
            MusicMachine.update({_id:mach._id}, {$set: {pompom: 1}});
        } else {
            Session.set('pompom', 0);
            MusicMachine.update({_id:mach._id}, {$set: {pompom: 0}});
        }
    },

    "click .js-stopPompom": function() {
      var c = Session.get('pompom');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('pompom', 0);
      MusicMachine.update({_id:mach._id}, {$set: {pompom: 0}});
      } else {} 
    },

    "click .js-controlPumukli": function () {
        var c = Session.get('pumukli');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('pumukli', 1);
            MusicMachine.update({_id:mach._id}, {$set: {pumukli: 1}});
        } else {
            Session.set('pumukli', 0);
            MusicMachine.update({_id:mach._id}, {$set: {pumukli: 0}});
        }
    },

    "click .js-stopPumukli": function() {
      var c = Session.get('pumukli');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('pumukli', 0);
      MusicMachine.update({_id:mach._id}, {$set: {pumukli: 0}});
      } else {} 
    },

    "click .js-controlSusu": function () {
        var c = Session.get('susu');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('susu', 1);
            MusicMachine.update({_id:mach._id}, {$set: {susu: 1}});
        } else {
            Session.set('susu', 0);
            MusicMachine.update({_id:mach._id}, {$set: {susu: 0}});
        }
    },

    "click .js-stopSusu": function() {
      var c = Session.get('susu');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('susu', 0);
      MusicMachine.update({_id:mach._id}, {$set: {susu: 0}});
      } else {} 
    },

    "click .js-controlVili": function () {
        var c = Session.get('vili');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('vili', 1);
            MusicMachine.update({_id:mach._id}, {$set: {vili: 1}});
        } else {
            Session.set('vili', 0);
            MusicMachine.update({_id:mach._id}, {$set: {vili: 0}});
        }
    },

    "click .js-stopVili": function() {
      var c = Session.get('vili');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('vili', 0);
      MusicMachine.update({_id:mach._id}, {$set: {vili: 0}});
      } else {} 
    },

    "click .js-controlVuk": function () {
        var c = Session.get('vuk');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('vuk', 1);
            MusicMachine.update({_id:mach._id}, {$set: {vuk: 1}});
        } else {
            Session.set('vuk', 0);
            MusicMachine.update({_id:mach._id}, {$set: {vuk: 0}});
        }
    },

    "click .js-stopVuk": function() {
      var c = Session.get('vuk');
      var mach = MusicMachine.findOne({});
      if (c === 1) {
      Session.set('vuk', 0);
      MusicMachine.update({_id:mach._id}, {$set: {vuk: 0}});
      } else {} 
    },

 });

 Template.playground.onRendered(function() {
//  $('startdac').hide();
	$('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
	}, 50, { leading: false });
	
    
    if (!this.$('#slider').data('uiSlider')) {
        $("#slider").slider({
            slide: handler,
            min: 0,
            max: 50
        });
    }
});


