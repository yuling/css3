function lightSpotMove(opt){
		oTime = setInterval(function(){
			iLeft += 6;
			if(iLeft == 300){
				iLeft = -150
				clearInterval(oTime);
			}
			oH1.style.backgroundPosition = iLeft+"px";
		},20)
	}
	lightSpotMove();
	setInterval(function(){
		lightSpotMove();
	},3000);
}