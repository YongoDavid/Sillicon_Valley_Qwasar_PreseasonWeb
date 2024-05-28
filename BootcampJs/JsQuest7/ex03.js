function my_average_mark(Average) {
    if (Average.length === 0) {
        return 0.0;
    }
    let amount_all = 0;
    for(let i = 0 ; i < Average.length ; i++){
        amount_all += Average[i]["integer"];
    }
        return (amount_all / Average.length).toFixed(1);
}