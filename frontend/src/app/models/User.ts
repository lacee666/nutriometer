import {Diary} from './Diary';
import {Recipe} from './Recipe';
export class User{
    username: String;
    email: String;
    password: String;
    diary: Array<Diary>;
    recipes: Array<Recipe>;
    role: String;
}