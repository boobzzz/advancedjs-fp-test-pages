// TODO:
export class CardPH {
  getCardHolder() {
    return this.#createCardHolder();
  }

  #createCardHolder() {
    const item = document.createElement('div');
    item.classList.add('card-ph');

    // Top stripe
    const top = document.createElement('div');
    const topLeft = document.createElement('div');
    const topRight = document.createElement('div');
    top.classList.add('card-ph__top');
    topLeft.classList.add('card-ph__stripe', 'card-ph__top-left');
    topRight.classList.add('card-ph__stripe', 'card-ph__top-right');
    top.append(topLeft, topRight);

    // Middle stripe
    const middle = document.createElement('div');
    middle.classList.add('card-ph__stripe', 'card-ph__middle');

    // Bottom stripe
    const bottom = document.createElement('div');
    const bottomLeft = document.createElement('div');
    const bottomMiddle = document.createElement('div');
    const bottomRight = document.createElement('div');
    bottom.classList.add('card-ph__bottom');
    bottomLeft.classList.add('card-ph__stripe', 'card-ph__bottom-left');
    bottomMiddle.classList.add('card-ph__stripe', 'card-ph__bottom-middle');
    bottomRight.classList.add('card-ph__stripe', 'card-ph__bottom-right');
    bottom.append(bottomLeft, bottomMiddle, bottomRight);

    item.append(top, middle, bottom);
    return item;
  }
}
