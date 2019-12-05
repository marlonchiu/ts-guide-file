// this
// let deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function () {
//     // !注意：使用箭头函数
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52)
//       let pickedSuit = Math.floor(pickedCard / 13)
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: 函数现在显式指定其被调用方必须是 deck 类型
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
