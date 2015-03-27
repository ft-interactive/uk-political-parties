'use strict';

var parties = require('./index.js');

function check(n){
  if(n){
    process.stdout.write('.');
    return 0;
  }else{
    process.stdout.write('X');
    return 1;
  }
}

function report(fails){
  console.log('\n\n:(');
  for(var t in fails){
    if(fails[t]>0){
      console.log(t + '\t\t: ' + fails[t] + ' fail(s)');
    }
  }
}


var tests = [
  {
    name:'Full Names',
    assertions:[
      (parties.fullName('lab') === 'Labour'),
      (parties.fullName('c') === 'Conservatives'),
      (parties.fullName('ukip') === 'Ukip')
    ]
  },
  {
    name:'Colours',
    assertions:[
      (parties.colour('lab') === '#e25050'),
      (parties.colour('c') === '#6da8e1'),
      (parties.colour('pc') === '#99d2d0')
    ]
  },
  {
    name:'Populous To Full Name',
    assertions:[
      (parties.populousToFullName('Tory') === 'Conservatives'),
      (parties.populousToFullName('Labour') === 'Labour'),
      (parties.populousToFullName('UKIP') === 'Ukip')
    ]
  },
  {
    name:'Full Name To Code',
    assertions:[
    (parties.fullNameToCode('Conservatives') === 'c'),
    (parties.fullNameToCode('Labour') === 'lab'),
    (parties.fullNameToCode('Ukip') === 'ukip')
    ]
  },
  {
    name:'Election Forecast To Code',
    assertions:[
    (parties.electionForecastToCode('Conservatives') === 'c'),
    (parties.electionForecastToCode('Labour') === 'lab'),
    (parties.electionForecastToCode('UKIP') === 'ukip')
    ]
  },
  {
    name:'Code to Election Forecast',
    assertions:[
      (parties.electionForecastToCode('c') === 'Conservatives'),
      (parties.electionForecastToCode('lab') === 'Labour'),
      (parties.electionForecastToCode('ukip') === 'UKIP')
    ]
  }
];

var pass = true;
var fails = {};

tests.forEach(function(t){
  console.log('Test : ', t.name);
  fails[t.name] = 0;
  pass = t.assertions.reduce(function(value, n){ fails[t.name] += check(n); return (value && n); }, pass);
  console.log();
});



if(pass){
  console.log('All OK!');
  process.exit(0);
}
report(fails);
process.exit(1);
