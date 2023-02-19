let target_score = Math.floor(Math.random()*(150-50)+50),your_score = 0,win_count=0,lose_count=0;
$("#target-score").html(target_score);
$(".image-div").on("click",function(){
    var value = $(this).attr("value");
    your_score += parseInt(value);
    $("#your-score").html(your_score);
    if(target_score == your_score){
        win_count += 1;
        $("#win-count").html(win_count);
        target_score = Math.floor(Math.random()*(150-50)+50);
        $("#target-score").html(target_score);
        your_score = 0;
        $("#your-score").html(0);
    }else if(your_score>target_score){
        lose_count+=1;
        $("#lose-count").html(lose_count);
        target_score = Math.floor(Math.random()*(150-50)+50);
        $("#target-score").html(target_score);
        your_score = 0;
        $("#your-score").html(0);
    }
});