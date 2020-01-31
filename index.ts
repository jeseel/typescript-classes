// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


export interface IHuman extends IHero{  
  sex:string;
  age:number;
  health:number;
}

export interface Itransformer extends IHero{  
  wings:number;
  wheels:number;
  clan:string;
}

export interface IHero{
  Id: string;
  name;string;
  photo?:string;
}