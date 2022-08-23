
// const userFullName = ({ firstName, lastName }) => `Hi! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = ( callback ) => {
//   const user = {
//     firstName: 'Erick',
//     lastName: 'Brito',
//     nationality: 'Brazilian',
//   };
//   return callback(user)
// };

// console.log(getUser(userFullName)); 
//console.log(getUser(userNationality)); 

// callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback ) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };    
    
    console.log(callback(user));
  }, delay());
};

//getUser(userFullName);
//getUser(userNationality);

// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);


const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
     return callback(errorMessage)
    }
  }, delay());
};
//getCountry(countryName, printErrorMessage);

//getCountry(countryCurrency, printErrorMessage);

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

//console.log(planetDistanceFromSun(mars)); // A
//setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
//setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C


const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000);
  };
  
  //getPlanet(); // Imprime Marte depois de 4 segundos

  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function marsTemperature() {
    const currentTemp = getMarsTemperature()
    setTimeout(() => console.log(`A temperatura de marte é ${currentTemp} graus celsius`) , messageDelay())
}

//marsTemperature(); 

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);


function sendMarsTemperature(sucess, error) {
    const massageSucces = Math.random() <=0.6;
    setTimeout(() => {
        if(massageSucces) {
           return sucess(getMarsTemperature)
        } else error ('Robot is tired')           
    }, messageDelay())  
}

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);
  
// sendMarsTemperature(temperatureInFahrenheit);
// sendMarsTemperature(greet);
// sendMarsTemperature(temperatureInFahrenheit, handleError);
// sendMarsTemperature(greet, handleError);


const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  module.exports = uppercase

  const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grama',
      ability: 'Raio Solar',
    },
    {
      name: 'Charmander',
      type: 'Fogo',
      ability: 'Lança Chamas',
    },
    {
      name: 'Squirtle',
      type: 'Água',
      ability: 'Jato de Água',
    },
  ];
  
  function getPokemonDetails(selectedPokemon, callback) {
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);
  
    setTimeout(() => {
      if (foundPokemon === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
  
      const { name, type, ability } = foundPokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  const handlePokemonSearch = (error, message) => {
    if(error) {
        console.log(error)
    }else{
        console.log(message)
    }
  };
  
//   getPokemonDetails('Charmander', handlePokemonSearch); 
//   getPokemonDetails('Miau', handlePokemonSearch);

module.exports = {uppercase, getPokemonDetails}