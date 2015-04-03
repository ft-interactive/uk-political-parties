'use strict';

var data = {
  'lab':{
    short:'Lab',
    full:'Labour',
    class:'labour',
    populous:'Labour',
    colour:'#e25050',
    electionForecast:'Labour',
    secondaryColour:'#bf1f1f'
  },
  'c':{
    short:'Con',
    full:'Conservatives',
    class:'conservative',
    populous:'Tory',
    colour:'#6da8e1',
    electionForecast:'Conservatives',
    secondaryColour:'#1369bf'
  },
  'ld':{
    short:'LD',
    full:'Liberal Democrats',
    class:'lib-dem',
    populous:'Lib Dem',
    colour:'#ffc660',
    electionForecast:'Liberal Democrats',
    secondaryColour:'#dba436'
  },
  'green':{
    short:'Grn',
    full:'Greens',
    class:'green',
    populous:'Green',
    colour:'#65a68c',
    electionForecast:'Greens',
    secondaryColour:'#008066'
  },
  'ukip':{
    short:'Ukip',
    full:'Ukip',
    class:'ukip',
    populous:'UKIP',
    colour:'#ca6dbf',
    electionForecast:'UKIP',
    secondaryColour:'#b3009d'
  },
  'snp':{
    short:'SNP',
    full:'SNP',
    class:'snp',
    populous:'SNP',
    colour:'#9E9E9E',
    electionForecast:'SNP',
    secondaryColour:'#787878'
  },
  'dup':{
    short:'DUP',
    full:'DUP',
    class:'dup',
    populous:'DUP',
    colour:'#827996',
    electionForecast:'DUP',
    secondaryColour:'#443e71'
  },
  'sf':{
    short:'SF',
    full:'Sinn Fein',
    class:'sf',
    populous:'SF',
    colour:'#99bf70',
    electionForecast:'SF',
    secondaryColour:'#6a8d32'
  },
  'pc':{
    short:'PC',
    full:'Plaid Cymru',
    class:'pc',
    populous:'PC',
    colour:'#99d2d0',
    electionForecast:'Plaid Cymru',
    secondaryColour:'#54a19c'
  },
  'alliance':{
    short:'A',
    full:'Alliance',
    class:'alliance',
    populous:'Alliance',
    colour:'#ffc660',
    electionForecast:'Alliance',
    secondaryColour:'#dba436'
  },
  'other':{
    short:'Oth',
    full:'Other',
    populous:'Other',
    class:'other-party',
    colour:'#CEC6B9',
    electionForecast:'Other',
    secondaryColour:'#a7a59b'
  },
  'sdlp':{
    short:'SDLP',
    full:'SDLP',
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
    fullName:converter('full'),
    shortName:converter('short'),
    className:converter('class'),
    electionForecastName:converter('electionForecast'),
    colour:converter('colour'),
    secondaryColour:converter('secondaryColour'),
    populousToFullName:converter('full','populous'),
    fullNameToCode:converter('code','full'),
    electionForecastToCode:converter('code','electionForecast'),
    converter:converter
  };
}(data));
