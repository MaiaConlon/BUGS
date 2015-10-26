/*
 * Shake It plugin - http://www.soslignes-ecrivain-public.fr/ 
 * v1.0
 * October 1st, 2012
 * Use and abuse!
*/

function ShakeIt (obj,margin,time,cycles,dir) {
speed = time / ((2 * cycles) + 1);
margRat = 1 + (60/(cycles*cycles)); $(obj).stop(1,1);
	for (i = 0; i <= cycles; i++) {
		for (j = -1; j <= 1; j+=2)
		if (dir == 'vert') {$(obj).animate({marginTop: (i!=cycles)*j*margin}, {duration:speed, queue:true});}
		else {$(obj).animate({marginLeft: (i!=cycles)*j*margin}, {duration:speed, queue:true});}
		margin/=margRat;
	};
};