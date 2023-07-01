import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((data) => new GameSaving(JSON.parse(data)));
  }
}
