function star(){
    pelnum = document.getElementById("peoples").value;
    var showContent = document.getElementById("text1");
    showContent.value=null;
    function randomsort(a,b) {
        return Math.random()>.5 ? -1 : 1;}
    function printPlayerId(){
        var playerId;

        for(k=0;k<=pelnum-1;k++){
            if(playerIds[k]==0){playerId="杀手"}
            else {playerId="平民"}
            showContent.value=showContent.value+(k+1)+"号玩家身份是"+playerId+"\r\n";}
    }
    switch (true ) {
        case pelnum < 5:
            showContent.value ="人数不能小于6";
            break;
        case pelnum>=6 && pelnum<=8:
            var playerIdentity=[0];
            for(i=0;i<pelnum-1;i++)
            {playerIdentity.push("1");}
            var playerIds =playerIdentity.sort(randomsort);
            printPlayerId();
            break;
        case pelnum>=9 && pelnum<=11:
            var playerIdentity=[0,0];
            for(i=0;i<pelnum-2;i++)
            {playerIdentity.push(1);}
            var playerIds =playerIdentity.sort(randomsort);
            printPlayerId();
            break;
        case pelnum>=12 && pelnum<=15:
            var playerIdentity=[0,0,0];
            for(i=0;i<pelnum-3;i++)
            {playerIdentity.push(1);}
            var playerIds =playerIdentity.sort(randomsort);
            printPlayerId();
            break;
        case pelnum>=16 &&pelnum<=18:
            var playerIdentity=[0,0,0,0];
            for(i=0;i<pelnum-4;i++)
            {playerIdentity.push(1);}
            var playerIds =playerIdentity.sort(randomsort);
            printPlayerId();
            break;
    }

}
