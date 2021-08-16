canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img = new Image(); 
	img.onload = uploadimg; 
	img.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}
		else if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("Number key");
		}
		else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed ctrl/esc/alt";
			console.log("special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
		img_image="https://c8.alamy.com/comp/PHW7KC/alphabet-black-keys-from-keyboard-key-letters-PHW7KC.jpg";
	add();
}
function numberkey()
{
	img_image="https://www.webopedia.com/wp-content/uploads/2020/10/numeric-keypad_5f8559df4f5d5-2.gif";
	add();
}
function arrowkey()
{
	img_image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Arrow_keys.svg/1280px-Arrow_keys.svg.png";
	add();
}
function specialkey()
{
	img_image="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/2961a518-0ba1-4e97-8d3f-5b74aa522448?w=200&h=200";
	add();
}
function otherkey()
{
	img_image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Insertpad.svg/400px-Insertpad.svg.png";
	add();
}
	


