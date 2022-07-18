module.exports = function toReadable (number) {
  
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                'eighteen', 'nineteen'];

    let decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let ranks = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];

    let getHundredReadable = function (n){
        if (n < 20){
            return numbers[n];
        }
        if (n < 100){
            return decades[Math.floor(n / 10)] + 
            ((n % 10 === 0) ? '' : ' ' + getHundredReadable(n % 10));
        }
        return numbers[Math.floor(n / 100)] + ' ' + ranks[0] + 
            ((n % 100 === 0) ? '' : ' ' + getHundredReadable(n % 100));
    }

    let getReadable = function (n){
        let rank = Math.floor((n.toString().length - 1) / 3);
        if (rank < 1){
            return getHundredReadable(n);
        }
        return getHundredReadable(Math.floor(n / Math.pow(1000, rank))) + ' ' + ranks[rank] + ' ' +
        getReadable(n % Math.pow(1000, rank));

    }

    return getReadable(number);
}
