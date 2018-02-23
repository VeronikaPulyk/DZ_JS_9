$(document).ready(function(){
	$('#sum').on('click', summa);
	$('#age').on('click', f2);
	$('#btn3').on('click', f3);
	$('#btn5').on('click', f5);

});


// Задание 1
function summa(event){
	$.post(
		'a1.php',
		{
			'num1': 7,
			'num2': 9
		},
		function(data){
			console.log(data)
		}
		);
}

// Задание 2
function f2(event){
	$.post(
		'a2.php',
		{
			'year': 1992,
		},
		function(data){
			console.log(data)
		}
		);
}

// Задание 3     4
function f3(event){
	event.preventDefault();
	var a = $('input[name=inp]:checked').val();
	var b = $('input[name=height]').val();
	$.post(
		'a3.php',
		{
			'sex': a,
			'height': b
		},
		function(data){
			console.log(data)
		}
		);
}

// Задание 5
function f5(event){
	event.preventDefault();
	var a = $('input[name=fio]:checked').val();
	var b = $('input[name=mail]').val();
	var c = $('input[name=phone]').val();

	$.post(
		'mail.php',
		{
			'fio': a,
			'e-mail': b,
			'phone': c
		},
		function(data){
			console.log(data)
		}
		);
}