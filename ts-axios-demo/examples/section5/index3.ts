// this
// let deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function () {
//     // !注意：使用箭头函数
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52)
//       let pickedSuit = Math.floor(pickedCard / 13)

//       return {
//         suit: this.suits[pickedSuit],
//         card: pickedCard % 13
//       }
//     }
//   }
// }

// let cardPicker = deck.createCardPicker()
// let pickedCard = cardPicker()

// console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

// 重构
// interface Card {
//   suit: string
//   card: number
// }

// interface Deck {
//   suits: string[]
//   cards: number[]

//   createCardPicker(this: Deck): () => Card
// }

// let deck: Deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function (this: Deck) {
//     // NOTE: 函数现在显式指定其被调用方必须是 deck 类型
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52)
//       let pickedSuit = Math.floor(pickedCard / 13)

//       return {
//         suit: this.suits[pickedSuit],
//         card: pickedCard % 13
//       }
//     }
//   }
// }

// let cardPicker = deck.createCardPicker()
// let pickedCard = cardPicker()

// console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)


// this 参数在回调函数里
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string

  onClickBad = (e: Event) => {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement: UIElement = {
  addClickListener() {
  }
}

uiElement.addClickListener(h.onClickBad) // error!
