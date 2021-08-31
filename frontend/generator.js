const near = new nearApi.Near({
    keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
const wallet = new nearApi.WalletConnection(near, "make-melodies");
const btn1 = document.getElementById('sign_out')
const save = document.getElementById('sve')
const container = document.getElementById("container")
var canvas = document.getElementById("Canvas");      
var context = canvas.getContext("2d"); 

//LogOut Button
function logout(){
    wallet.signOut()
    window.location.href = "index.html"
}

btn1.onclick=logout

//Melody Generator 
function default_display(){
    //vertical lines 
    context.beginPath();    
    context.moveTo( 20, 50 );        
    context.lineTo( 20, 130 );        
    context.stroke(); 

    context.beginPath();    
    context.moveTo( 450, 50 );        
    context.lineTo( 450, 130 );        
    context.stroke(); 

    //horizontal  lines  for the music staff(?)
    //F
    context.beginPath();    
    context.moveTo( 20, 50 );        
    context.lineTo( 450, 50 );         
    context.stroke(); 

    //D
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 70 );        
    context.lineTo( 450, 70 );         
    context.stroke(); 


    //B
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 90 );        
    context.lineTo( 450, 90 );          
    context.stroke(); 


    //G
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 110 );        
    context.lineTo( 450, 110 );         
    context.stroke(); 

    //E
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 130 );        
    context.lineTo( 450, 130 );         
    context.stroke(); 

}
default_display()


function generator(){
    let notes = []
    for(let i = 0; i < 4; ++i){
        let gen_num = Math.floor(Math.random(8) * 10);
        val = 130 - (gen_num * 10)
        notes[i] = val
    }

    console.log("generated:", notes)

    //clear 
    context.clearRect(0,0,canvas.width,canvas.height)
    yint1 = notes[0]
    yint2 = notes[1]
    yint3 = notes[2]
    yint4 = notes[3]

    //music notes
    context.beginPath();
    context.arc(80, yint1, 10, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(180, yint2, 10, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(280, yint3, 10, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(380, yint4, 10, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.stroke();


    //vertical lines 
    context.beginPath();    
    context.moveTo( 20, 50 );        
    context.lineTo( 20, 130 );        
    context.stroke(); 

    context.beginPath();    
    context.moveTo( 450, 50 );        
    context.lineTo( 450, 130 );        
    context.stroke(); 

    //horizontal  lines  for the music staff(?)
    //F
    context.beginPath();    
    context.moveTo( 20, 50 );        
    context.lineTo( 450, 50 );         
    context.stroke(); 

    //D
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 70 );        
    context.lineTo( 450, 70 );         
    context.stroke(); 


    //B
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 90 );        
    context.lineTo( 450, 90 );          
    context.stroke(); 


    //G
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 110 );        
    context.lineTo( 450, 110 );         
    context.stroke(); 

    //E
    context.beginPath();    
    context.lineWidth = 1;  
    context.moveTo( 20, 130 );        
    context.lineTo( 450, 130 );         
    context.stroke(); 

    return notes.join()
}

string_notes = ""
const gen_btn = document.getElementById("gen")
gen_btn.addEventListener("click", (e)=>{    
    const my_notes = generator()
    string_notes = my_notes
})

//Save Button and posted under "Saved Melodies"
function convertCanvastoImage(canvas){
   let image = new Image()
   image.src = canvas.toDataURL()
   return image
}

function view_notes(notes, id){  //generates a melody when given notes
    var canvas1 = document.createElement("canvas")
    canvas1.width  = innerWidth;
    canvas1.height = 200;
    var context1 = canvas1.getContext("2d")
    arr = JSON.parse("[" + notes + "]");

    y1 = arr[0]
    y2 = arr[1]
    y3 = arr[2]
    y4 = arr[3]

    context1.font = "15px Arial";
    context1.strokeText(id+ ":", 10, 30)

    //music notes
    context1.beginPath();
    context1.arc(80, y1, 10, 0, Math.PI * 2);
    context1.closePath();
    context1.fill();
    context1.stroke();

    context1.beginPath();
    context1.arc(180, y2, 10, 0, Math.PI * 2);
    context1.closePath();
    context1.fill();
    context1.stroke();

    context1.beginPath();
    context1.arc(280, y3, 10, 0, Math.PI * 2);
    context1.closePath();
    context1.fill();
    context1.stroke();

    context1.beginPath();
    context1.arc(380, y4, 10, 0, Math.PI * 2);
    context1.closePath();
    context1.fill();
    context1.stroke();


    //vertical lines 
    context1.beginPath();    
    context1.moveTo( 20, 50 );        
    context1.lineTo( 20, 130 );        
    context1.stroke(); 

    context1.beginPath();    
    context1.moveTo( 450, 50 );        
    context1.lineTo( 450, 130 );        
    context1.stroke(); 

    //horizontal  lines  for the music staff(?)
    //F
    context1.beginPath();    
    context1.moveTo( 20, 50 );        
    context1.lineTo( 450, 50 );         
    context1.stroke(); 

    //D
    context1.beginPath();    
    context1.lineWidth = 1;  
    context1.moveTo( 20, 70 );        
    context1.lineTo( 450, 70 );         
    context1.stroke(); 


    //B
    context1.beginPath();    
    context1.lineWidth = 1;  
    context1.moveTo( 20, 90 );        
    context1.lineTo( 450, 90 );          
    context1.stroke(); 


    //G
    context1.beginPath();    
    context1.lineWidth = 1;  
    context1.moveTo( 20, 110 );        
    context1.lineTo( 450, 110 );         
    context1.stroke(); 

    //E
    context1.beginPath();    
    context1.lineWidth = 1;  
    context1.moveTo( 20, 130 );        
    context1.lineTo( 450, 130 );         
    context1.stroke(); 
    
    const img = convertCanvastoImage(canvas1)
    container.appendChild(img)
}

function clear_melodies(){
    container.innerHTML = ""
    console.log("cleared")
}

async function getMelodies(){
    clear_melodies();
    const melodies = await wallet.account().viewFunction("dev-1627446948630-96040177127597", "getMelody")
    console.log(melodies)
    melodies.forEach(e=>{
        const id = e.userID;
        const notes = e.notes;
        console.log(notes)
        if (id !== null & notes!== null){
            view_notes(notes, id)
        }
    })
}

save.addEventListener("click", (e)=>{
    wallet.account().functionCall({
        contractId: "dev-1627446948630-96040177127597",
        methodName: "add_Melody",
        args: {text: (string_notes), user: (wallet.getAccountId())}
    })
    getMelodies();
})
