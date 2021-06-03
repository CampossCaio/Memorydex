import pikachuImage from './assets/pikachu.png';
import charizardImage from './assets/charizard.png';
import pidgeotImage from './assets/pidgeot.png';
import rattataImage from './assets/rattata.png';
import bulbasaurImage from './assets/bulbasaur.png';
import { shuffleArray } from './utils/shuffleArray';

export const cards = shuffleArray([
    {
      id: 1,
      value: "pikachu",
      image: pikachuImage
    },
    {
      id: 2,
      value: "bulbasaur",
      image: bulbasaurImage
    },
    {
      id: 3,
      value: "pikachu",
      image: pikachuImage
    },
    {
      id: 4,
      value: "bulbasaur",
      image: bulbasaurImage
    },
    {
      id: 5,
      value: "charizard",
      image: charizardImage
    },
    {
      id: 6,
      value: "pidgeout",
      image: pidgeotImage
    },
    {
      id: 7,
      value: "charizard",
      image:charizardImage
    },
    {
      id: 8,
      value: "pidgeout",
      image: pidgeotImage
    }, 
    {
      id: 9,
      value: "rattata",
      image: rattataImage
    },
    {
      id: 10,
      value: "rattata",
      image: rattataImage
    },
]);

