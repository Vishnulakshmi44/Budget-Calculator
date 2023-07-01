
    // create account * Register a new account
function register() {

    
    //1.fetch the values from the html
    Name = reg_name.value//100
    username = reg_username.value
    mail = reg_mail.value//Manu
    pswd = reg_pswd.value//100

    //2.creat acnoDetails object
    acnoDetails = {
        Name,
        username,
        mail,
        pswd
    }

    //3.Check if name is already present in the
    //local storage
    if (username in localStorage) {
        alert("Already Registered")
    }
    else {
        
        localStorage.setItem(username, JSON.stringify(acnoDetails))
        window.location ='./index.html'
        alert(" Registration Successfull")
        //redirectto login page
       
       
    }
}


//login 

function login() {


    //1.Fetch the details
    user = login_username.value//100
    pswd = login_pswd.value//100
    
  

    //2.Check if acno is already present in the local storage
    if (user in localStorage) {
           acnoDetails = JSON.parse(localStorage.getItem(user))
        if (pswd == acnoDetails.pswd) {
            window.location = "./home.html"
            alert("Login Successfull")
            
           
            
        }
        else {
            alert("Incorrect Password")

        }
    }
    else {
        alert("Invalid mail Id")

    }


    

}

function addIncome(){
    
    income=incomeName.value;
    incomeAmount=incomeAmt.value;
    if(income==""){
        alert('please enter the income title')
    }
    else if(incomeAmount==0){
        alert('please enter the income amount')
    }
    // balance=incomeAmt.value;
    // let incomeData=[income,incomeAmount]
    // for(let data in incomeData)
    // tableData=` 
    // <tr >
    //     <td>${data.income}</td>
    //     <td>${data.incomeAmount}</td>
        
    // </tr>`
    else{
    tableData=` 
     <tr >
        <td>${income}</td>
        <td>${incomeAmount}</td>
        
     </tr>`
        document.getElementById('incomeRow').innerHTML+=tableData;
        addBalance()
    }
        
    
  
}

document.getElementById("balanceScreen").value=0;
var balanceAMT = parseInt(document.getElementById("balanceScreen").value);
function addBalance(){
    incomeAMT = parseInt(document.getElementById("incomeAmt").value )
    
    // balance = parseInt(balanceAMT+incomeAmt); 
    // balance=incomeAMT+balanceAMT    
    balance=(balanceAMT+=incomeAMT )
    if(balance==0){
        alert("please enter the value")
    }
    else{
    document.getElementById("balanceScreen").value = balance;
    // balanceAMT=document.getElementById("balanceScreen").value 
    }
}

// expense 
function subBalance(){
    expAMT = parseInt(document.getElementById("expenseAmt").value )
    balance=parseInt(balanceAMT-=expAMT )
    document.getElementById("balanceScreen").value = balance;


}
function addExpense(){
    expense=expenseName.value;
    expenseAmount=expenseAmt.value;
    if(expense==""){
        alert('Please enter the expense title');
    }
    else if(expenseAmount==0){
        alert('Please enter the expense amount');
    }
    else{
    tabledata=` 
     <tr >
        <td>${expense}</td>
        <td>${expenseAmount}</td>
        
    </tr>`
        document.getElementById('expenseRow').innerHTML+=tabledata;
        subBalance()
    }

        
}

// clear all from table 

function clearAll(){
    incomeRow.innerHTML="";
    expenseRow.innerHTML="";
    balanceScreen.value=0;
}


// logout 
localStorage.getItem('userid')

function logout(){
    window.location='./index.html';
    document.getElementById('homeModal').style.display='block'

    localStorage.clear();
  

}