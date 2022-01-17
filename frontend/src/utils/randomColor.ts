// const colors = [
//     { id: 0, color: '#BA1F33' },
//     { id: 1, color: '#04724D' },
//     { id: 2, color: '#7E2E84' },
//     { id: 3, color: '#312F2F' },
//     { id: 4, color: '#EDD83D' },
//     { id: 5, color: '#D8829D' },
//     { id: 6, color: '#225560' },
//     { id: 7, color: '#E26D5A' },
//     { id: 8, color: '#17B890' },
//     { id: 9, color: '#1982C4' },
//     { id: 10, color: '#8AC926' },
//     { id: 11, color: '#FFCB47' },
//     { id: 12, color: '#677DB7' },
//     { id: 13, color: '#E54B4B' },
//     { id: 14, color: '#7CE577' },
//     { id: 15, color: '#0D1B2A' },
//     { id: 16, color: '#2E86AB' },
//     { id: 17, color: '#F24236' },
//     { id: 18, color: '#BA324F' },
//     { id: 19, color: '#DA4167' },
//     { id: 20, color: '#D74E09' },
// ]

var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};

export default function randomColor () {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ')';
    // const color = colors.find(i => i.id === randomColorFactor());
    // if (color)
    //     return color.color;
    // else
    //     return '#BA1F33';
    // console.log(randomColorFactor());
};
