var Data=[[]];

var username_list =["Sifat","Shafin",""];

var pass_list=["s123","class-9",""];

var tempUser=localStorage.getItem("tUser");

if (tempUser!=null) {
	username_list[2]=localStorage.getItem("tUser");
	pass_list[2]=localStorage.getItem("tPass");
}


var invt=[["1JANATAMF", "10000", "2381"],["AAMRANET", "10000", "249"],["ABBANK", "10000", "1282"],["ACI", "10000", "37"],["ABBANK", "5000", "641"],["ACMELAB", "5000", "85"],
["ADVENT", "5000", "197"],["AFTABAUTO", "5000", "185"],["AGRANINS", "5500", "199"],["ALIF", "5500", "797"],["AMCL(PRAN)", "5500", "28"],["APEXSPINN", "5500", "52"],
["ARAMIT", "5500", "21"],["ASIAPACINS", "5500", "212"],["AZIZPIPES", "5500", "41"],["BANKASIA", "5500", "284"],["BAYLEASING", "5500", "374"],["BDAUTOCA", "7000","40"],
["BEACHHATCH", "10000", "769"],["BENGALWTL", "1500", "75"],["BGIC", "1500", "63"],["BNICL", "1500", "71"],["BSC", "1500", "32"],["CAPMBDBLMF", "1500", "176"],
["COPPERTECH", "1500", "56"],["CNATEX", "1500", "789"],["DELTASPINN", "1500", "375"],["DELTASPINN", "2100", "525"],["DUTCHBANGL", "1500", "21"],
["EBL1STMF", "15500", "3444"],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],
[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null]];


var newInvt=[[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null],[null,null,null]];


var invest=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

// save(invt);
// save(newInvt);


for (var i = 0; i < invest.length; i++) {
	var temp="invest"+[i];
	var temp2=localStorage.getItem(temp,invest[i]);
	if (temp2!=null) {
		var temp3=temp2.split(',');
		}
	invest[i]=temp3
	}

function save(invest){

	for (var i = 0; i < invest.length; i++) {
	var temp="invest"+[i];
	localStorage.setItem(temp,invest[i]);
	}

}


var Err=document.getElementById('err');




log();




function DisplayOne(Hide,Display){
	var x=document.getElementById(Hide);
	var y=document.getElementById(Display);

	x.style.display='none';
	y.style.display='block';
}



function CheckLog(username,password){

	Err.innerHTML='';
	var user=document.getElementById(username);
	var pass=document.getElementById(password);
	if (user.value=="" || pass.value=="") {
		Err.innerHTML='every field required';
	}else{
		for (var location = username_list.length - 1; location >= 0; location--) {
		
		if(username_list[location].localeCompare(user.value)==0){
			if(pass_list[location].localeCompare(pass.value)==0){
				DisplayOne('logIn','portfolio');
				// document.getElementById('field').innerHTML= '<h1 >Loading ...</h1>';
				getRealData();
				//this function call portfoli
				localStorage.setItem("log","true");
				Err.innerHTML='';
				// remove previous err message

				
				}
			}
		}
	}
	
		if (location <=0) {
		Err.innerHTML='Name & password mismatch';
	}

}



function CheckSignUp(){

	var userN=document.getElementById('username1').value;
	var email=document.getElementById('email').value;
	var gender=document.getElementsByName('gender').value;
	var pass1=document.getElementById('password1').value;
	var pass2=document.getElementById('password2').value;

	var Errs=document.getElementById('errs');


	if (userN!="" && pass1!="" && pass2!="" ) {

		if (pass1.localeCompare(pass2)==0) {

			username_list[2]=userN;
			pass_list[2]=pass1;

			save(newInvt);
			// reset local server

			DisplayOne('signUp','logIn');

			localStorage.setItem("tUser",userN);
			localStorage.setItem("tPass",pass1);

			Err.innerHTML='';
			// remove previous err message

		}else{
			
			Errs.innerHTML='password mismatch';
		}
	}else{

		Errs.innerHTML='every field required';
	}


}





function Portfolio(Data){
	document.getElementById('field').innerHTML = '<tr><td class="btn" colspan="8" align="center"><button onclick="getRealData();">Refresh</button></td></tr><tr class="elements"><td> '+'Name '+' </td><td> '+'Price'+' </td><td> '+'Change'+' </td><td> '+'Change'+'</td><td> '+'Buy'+' </td><td> '+'Present'+' </td><td> '+'Gain'+' </td><td> '+'Gain %'+' </td><td></td></tr><br>';
	for (var i = 0; i < Data.length; i++) {
		var presentPrice=Data[i][1];
		var assetNumber=0;
		var presentValue=0;
		var buyingValue=0;
		var gain=0;
		var percentage=0;
		var invst=null;

			for(var j=0; j < invest.length;j++){
				if (Data[i][0].localeCompare(invest[j][0])==0) {
					assetNumber=invest[j][2];
					presentValue=(presentPrice*assetNumber).toFixed(0);
					buyingValue=invest[j][1];
					gain=(presentValue-buyingValue).toFixed(0);
					percentage=((gain/buyingValue)*100).toFixed(0);
					invst=j;
					
				}
			}

		if (gain==0) {
			var Vcolor = 'style="color:blue"';
		}
		if (gain>0) {
			var Vcolor = 'style="color:green"';
		}
		if(gain<0){
			var Vcolor = 'style="color:red"';
		}

		if (Data[i][2]==0) {
			var color = 'style="color:blue"';
		}
		if (Data[i][2]<0) {
			var color = 'style="color:red"';
		}
		if (Data[i][2]>0) {
			var color = 'style="color:green"';
		}

		
		document.getElementById('field').innerHTML +='<tr class="elements"><td> '+Data[i][0]+' </td><td '+color+'> '+Data[i][1]+' </td><td '+color+'> '+Data[i][2]+' </td><td '+color+'> '+Data[i][3]+' </td><td '+Vcolor+'> '+buyingValue+' </td><td '+Vcolor+'> '+presentValue+' </td><td '+Vcolor+'> '+gain+' </td><td '+Vcolor+'> '+percentage+'%'+'</td><td class="btn" ><button onclick="investments('+i+','+invst+');">invest</button></td></tr><br>';
		save(invest);
	}
	document.getElementById('field').innerHTML +='<tr><td  class="Logbtn" colspan="8" align="center"><input type="button" value="Log out"   onclick="log('+'false'+');"></td></tr>';
	
}




function investments(assetLoc,invst){
	showPopUp(assetLoc, invst);
	var tradeCode=document.getElementById('tradeCode');
	var presentPriceTd=document.getElementById('presentPriceTd');
	var previousInvest=document.getElementById('previousInvest');
	var amountTd=document.getElementById('amount');
	var investBtn=document.getElementById('investBtn');


	if (invst==null ) {
		var previousInvestments=0;
	}else{
		var previousInvestments=invest[invst][1];
	}
	

	tradeCode.innerHTML=Data[assetLoc][0];
	presentPriceTd.innerHTML=Data[assetLoc][1];
	previousInvest.innerHTML=previousInvestments;
	investBtn.innerHTML='<input type="button" name="Invest" value="Confirm" onclick="Confirm('+assetLoc+','+invst+');">';

}






function Confirm(assetLoc,invst){

	var amount=document.getElementById('amount').value;



	if (invst==null ) {
		for (var j = 0; j < invest.length; j++) {
			if (invest[j][0]=="") {
				invest[j][0]=Data[assetLoc][0];
				invest[j][1]=amount;
				invest[j][2]=(amount/Data[assetLoc][1]).toFixed(0);
				hidePopUp();
				getRealData();
				break;
			
				}
				
			}
		}
	else{

			invest[invst][1]= parseInt(amount)+parseInt(invest[invst][1]);
			invest[invst][2]= parseInt((amount/Data[assetLoc][1]))+parseInt(invest[invst][2]);
			hidePopUp();
			getRealData();

	}


}





function showPopUp(assetLoc, invst) {
	let pop = document.querySelector(".pop");
	pop.style.display = 'flex';
}




function hidePopUp() {
	let pop = document.querySelector(".pop");
	pop.style.display = 'none';
}




function getRealData() {
	document.getElementById('field').innerHTML= '<h1 >Loading ...</h1>';
	let realData = [];
	fetch("http://dsebd.herokuapp.com/data")
		.then(response => response.json())
		.then(function(data) {
			loadData(data);
			
			Portfolio(data);
		});
}




function loadData(data){
	Data=data;
}



function log(log){
	if (log==false) {
		DisplayOne('portfolio','logIn');
		localStorage.setItem("log","false");
	}
	var log=localStorage.getItem("log");
	if (log=="true") {
		DisplayOne('logIn','portfolio');
		getRealData();
	}
}





