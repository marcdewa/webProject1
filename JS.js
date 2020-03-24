	function validate()
	{
		var Name = document.getElementById('txtBoxName');
		var Male = document.getElementById('rbGenderMale');
		var Female = document.getElementById('rbGenderFemale');
		var Location = document.getElementById('SelectCity');
        var Address =document.getElementById('txtTextAreaAdd');
        var Email=document.getElementById('txtBoxMail')
		if(Name.value == ""){
			alert('Nama tidak boleh kosong');
		}

		if(Male.checked == false && Female.checked == false){
			alert('Gender harus dipilih');
		}

		if(Location.value =="Please-Select"){
			alert('City harus dipilih');
		}
        
        if(/street|Street/.test(Address.value)){
            
        }else{alert("Address harus mengandung 'Street'")}
        if (/^\w+*@\w+*(\.\w{2,3})+$/.test(Email.value))
            {
                
            }else {alert('Masukkan format email yang benar')

                  }}
function validate2(){
    var LoginEmail1 = document.getElementById('LoginEmail');
    var Password1 = document.getElementById('LoginPassword');
    
    if(LoginEmail1.value==""){
            alert('Email tidak boleh kosong!');
        } 
        if(Password1.value==""){
            alert('Password tidak boleh kosong');
                
          } 
}


