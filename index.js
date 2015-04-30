'use strict';

var data = {
  'lab':{
    id: 'lab',
    short:'Lab',
    full:'Labour',
    pa: 'Lab',
    class:'labour',
    populous:'Labour',
    colour:'#e25050',
    electionForecast:'Labour',
    secondaryColour:'#bf1f1f'
  },
  'c':{
    id: 'c',
    short:'Con',
    full:'Conservatives',
    pa: 'C',
    class:'conservative',
    populous:'Tory',
    colour:'#6da8e1',
    electionForecast:'Conservatives',
    secondaryColour:'#1369bf'
  },
  'ld':{
    id: 'ld',
    short:'LD',
    full:'Liberal Democrats',
    pa: 'LD',
    class:'lib-dem',
    populous:'Lib Dem',
    colour:'#ffc660',
    electionForecast:'Liberal Democrats',
    secondaryColour:'#dba436'
  },
  'green':{
    id: 'green',
    short:'Grn',
    full:'Greens',
    pa: 'Green',
    class:'green',
    populous:'Green',
    colour:'#65a68c',
    electionForecast:'Greens',
    secondaryColour:'#008066'
  },
  'ukip':{
    id: 'ukip',
    short:'Ukip',
    full:'Ukip',
    pa: 'UKIP',
    class:'ukip',
    populous:'UKIP',
    colour:'#ca6dbf',
    electionForecast:'UKIP',
    secondaryColour:'#b3009d'
  },
  'snp':{
    id: 'snp',
    short:'SNP',
    full:'SNP',
    pa: 'SNP',
    class:'snp',
    populous:'SNP',
    colour:'#9E9E9E',
    electionForecast:'SNP',
    secondaryColour:'#787878'
  },
  'dup':{
    id: 'dup',
    short:'DUP',
    full:'DUP',
    pa: 'DUP',
    class:'dup',
    populous:'DUP',
    colour:'#827996',
    electionForecast:'DUP',
    secondaryColour:'#443e71'
  },
  'sf':{
    id: 'sf',
    short:'SF',
    full:'Sinn Fein',
    pa: 'SF',
    class:'sf',
    populous:'SF',
    colour:'#99bf70',
    electionForecast:'SF',
    secondaryColour:'#6a8d32'
  },
  'pc':{
    id: 'pc',
    short:'PC',
    full:'Plaid Cymru',
    pa: 'PC',
    class:'pc',
    populous:'PC',
    colour:'#99d2d0',
    electionForecast:'Plaid Cymru',
    secondaryColour:'#54a19c'
  },
  'alliance':{
    id: 'alliance',
    short:'A',
    full:'Alliance',
    pa:'Alliance',
    class:'alliance',
    populous:'Alliance',
    colour:'#ffc660',
    electionForecast:'Alliance',
    secondaryColour:'#dba436'
  },
  'other':{
    id: 'other',
    short:'Oth',
    full:'Other',
    pa:'Others',
    populous:'Other',
    class:'other-party',
    colour:'#CEC6B9',
    electionForecast:'Other',
    secondaryColour:'#a7a59b'
  },
  'sdlp':{
    id: 'sdlp',
    short:'SDLP',
    full:'SDLP',
    pa:'SDLP',
    class:'sdlp',
    populous:'SDLP',
    colour:'#bed676',
    electionForecast:'SDLP',
    secondaryColour:'#9cb157'
  },
  'uup':{
    short:'UUP',
    full:'UUP',
    class:'uup',
    populous:'UUP',
    colour:'#6da8e1',
    electionForecast:'UUP',
    secondaryColour:'#1369bf'
  }
};

function converter(to,from){
  if(!from){
    return function(str){
      if(data[str]){ return data[str][to]; }
      return undefined;
    };
  }

  return function(str){
    for(var item in data){
      if(data[item][from] === str){
        if(to === 'code'){ return item; }
        return data[item][to];
      }
    }
    return undefined;
  };
}


module.exports = (function(){
  return {
    data: data,
    isKnownParty: function(code) {
      return data.hasOwnProperty(code);
    },
    fullName:converter('full'),
    shortName:converter('short'),
    className:converter('class'),
    electionForecastName:converter('electionForecast'),
    colour:converter('colour'),
    secondaryColour:converter('secondaryColour'),
    populousToFullName:converter('full','populous'),
    fullNameToCode:converter('code','full'),
    electionForecastToCode:converter('code','electionForecast'),
    paToCode:converter('code','pa'),
    converter:converter
  };
}(data));
