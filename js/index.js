$(document).ready(function(){
	
	//���� �޴� ȣ��
	$("nav li").hover(function(){
		$(this).children("nav").stop().slideDown();
	}, function(){
		$(this).children("nav").stop().slideUp();
	});
	
	
	//���̽� �����̵� �ڵ�
	const x=setInterval(y,2800);
	let i = 3;
	function y(){
		i--;
		if(i==0){
			$("#slide a").fadeIn();
			i=3;
		}else {
			$("#slide a").eq(i).fadeOut();
		}
	}

	$(".pop").click(function(){
		$("#popup").fadeIn();
		$("#popup button").focus();
	});
	
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	const a =["apple","banana","kiwi","painapple","orange"];
	console.log(a[2]);
	
	});
