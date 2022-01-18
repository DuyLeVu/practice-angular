import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listWord: Word [] = [
    {
      id: "1",
      word: "dog",
      mean: "chó"
    },
    {
      id: "2",
      word: "cat",
      mean: "mèo"
    },
    {
      id: "3",
      word: "bird",
      mean: "chym"
    }
  ]

  constructor() {
  }

  findWordById(id: string | null) {
    return this.listWord.find(item => item.id === id);
  }
}
