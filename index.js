'use strict';

var data = {
  'lab':{
    short:'Lab',
    full:'Labour',
    populous:'Labour',
    colour:'#e25050',
    secondaryColour:'#bf1f1f'
  },
  'c':{
    short:'Con',
    full:'Conservatives',
    populous:'Tory',
    colour:'#6da8e1',
    secondaryColour:'#1369bf'
  },
  'ld':{
    short:'LD',
    full:'Liberal Democrats',
    populous:'Lib Dem',
    colour:'#ffc660',
    secondaryColour:'#dba436'
  },
  'green':{
    short:'Grn',
    full:'Greens',
    populous:'Green',
    colour:'#65a68c',
    secondaryColour:'#008066'
  },
  'ukip':{
    short:'Ukip',
    full:'Ukip',
    populous:'UKIP',
    colour:'#ca6dbf',
    secondaryColour:'#b3009d'
  },
  'snp':{
    short:'SNP',
    full:'SNP',
    populous:'SNP',
    colour:'#777777',
    secondaryColour:'#666666'
  },
  'dup':{
    short:'DUP',
    full:'DUP',
    populous:'DUP',
    colour:'#827996',
    secondaryColour:'#443e71'
  },
  'sf':{
    short:'SF',
    full:'SF',
    populous:'SF',
    colour:'#99bf70',
    secondaryColour:'#9cb157'
  },
  'pc':{
    short:'PC',
    full:'Plaid Cymru',
    populous:'PC',
    colour:'#99d2d0',
    secondaryColour:'#54a19c'
  },
  'alliance':{
    short:'A',
    full:'Alliance',
    populous:'Alliance',
    colour:'#cccccc',
    secondaryColour:'#999999'
  },
  'other':{
    short:'Oth',
    full:'Other',
    populous:'Other',
    colour:'#cccccc',
    secondaryColour:'#999999'
  },
  'sdlp':{
    short:'SDLP',
    full:'SDLP',
    populous:'SDLP',
    colour:'#cccccc',
    secondaryColour:'#999999'
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
    colour:converter('colour'),
    secondaryColour:converter('secondaryColour'),
    populousToFullName:converter('full','populous'),
    fullNameToCode:converter('code','full'),
    converter:converter
  };
}(data));
