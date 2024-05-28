detonation_in = (second_left) => {
    console.log("detonation in..."+second_left+" seconds.")
}
timer = 0;
while(detonation_in < 10){
    detonation_in(timer);
    detonation_in--
}

detonation_in(20)