const display= document.getElementById('D_fix');
const companyName= document.getElementById('G_N_fix');
const profilePic= document.getElementById('P_P_fix');
const equalsButton= document.getElementById('=_fix');

const buttons = document.querySelectorAll('button');
let enterInput= "";
// Function to speak the current input
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
   utterance.lang = "en-IN";
  speechSynthesis.speak(utterance);

}
function handleEqualsClick() {
  try {
    const result = eval(enterInput).toString();
    speak(` ahzaananin ${result} ,samunu zaah calculator`);
    enterInput = result;
  } catch {
    enterInput = "";
    speak("Eiba ma correct number yaansisun chaema");
  }
  display.textContent = enterInput || "bunzaaacaba";
}
equalsButton.addEventListener('click', handleEqualsClick);

buttons.forEach(btn =>{
	btn.addEventListener('click', function () {
		let value = btn.textContent.trim();
		if (value === "C") {
			enterInput= "";
			speak(" vilycee ahzaa");
				} else if (value === "") {
			speak("Pisunu") 

			

		} else if (value === "del") {
			enterInput= enterInput.slice(0,-1);
			speak("vilyceea ")
		} else if (value=== "=" || value=== "R") {
			try{
				enterInput= eval(enterInput).toString();
			} catch {
				enterInput = "Error";
			} 
			} else {
				if( value === "➕") value ="+";
				else if (value === "➖")value= "-" ;
					else if( value ==="✖" ) value = "*";
						else if (value === "➗") value = "/";
							enterInput += value;
			}
		
		display.textContent= enterInput || "00";
		display.style.textAlign= "right";
		display.style.fontSize = "3rem";
		// body...
	speak(enterInput || "boanszaaakaabee");
	});
} 
	);
//const submit = document.getElementById('mySubmit');
//const openCal = document.getElementById('mainb_box');
//const companyName1 = document.getElementById('name').value;
//const F_C = document.getElementById('form_container');
//const fullname = document.getElementById('Fullname'); // Replace with actual ID
//const Profile = document.getElementById('Profilepic'); // Replace with actual ID
//const companyNameCal = document.getElementById('C_N_fix');
//submit.addEventListener('mousedown', function () {
 //companyNameCal.innerHTML = companyName1.value;
  //openCal.style.display = "";
  //F_C.style.display = "none";
//});
const soundBtn= document.getElementById("D_fix");
soundBtn.addEventListener('click', () => {
	const welMessage= "samunu zaah calculator"
	  const utterance = new SpeechSynthesisUtterance(welMessage);
      utterance.lang = "en-IN";
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
      soundBtn.style.textAlign= "center";

	// body...
})
