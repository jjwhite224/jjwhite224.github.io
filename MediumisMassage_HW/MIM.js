let responseText = document.querySelector(".Response")
let phrase = document.querySelector("div");
let uDiv = document.querySelector(".u");
let famDiv = document.querySelector(".family");
let hoodDiv = document.querySelector(".neighborhood");
let eduDiv = document.querySelector(".education");
let jobDiv = document.querySelector(".job");
let govtDiv = document.querySelector(".govt");
let othersDiv = document.querySelector(".others");
let quote = document.querySelector("h1")
phrase.style.fontSize="52px"
quote.addEventListener('click',reseth1)
uDiv.addEventListener('mouseover',ufunc);
uDiv.addEventListener('mouseout',ufuncout);
uDiv.addEventListener('click',ufuncclick);
famDiv.addEventListener('mouseover',famfunc);
famDiv.addEventListener('mouseout',famfuncout);
famDiv.addEventListener('click',famfuncclick);
hoodDiv.addEventListener('mouseover',hoodfunc);
hoodDiv.addEventListener('mouseout',hoodfuncout);
hoodDiv.addEventListener('click',hoodfuncclick);
eduDiv.addEventListener('mouseover',edufunc);
eduDiv.addEventListener('mouseout',edufuncout);
eduDiv.addEventListener('click',edufuncclick);
jobDiv.addEventListener('mouseover',jobfunc);
jobDiv.addEventListener('mouseout',jobfuncout);
jobDiv.addEventListener('click',jobfuncclick);
govtDiv.addEventListener('mouseover',govtfunc);
govtDiv.addEventListener('mouseout',govtfuncout);
govtDiv.addEventListener('click',govtfuncclick);
othersDiv.addEventListener('mouseover',otherfunc);
othersDiv.addEventListener('mouseout',otherfuncout);
othersDiv.addEventListener('click',otherfuncclick);
function reseth1(){
  responseText.textContent = "The medium, or process, of our time electric technology is reshaping and restructuring patterns of social interdependence and every aspect of our personal life. It is forcing us to reconsider and reevaluate practically every thought, every action, and every institution formerly taken for granted. Everything is changing—"
}
function ufunc(){
  uDiv.style.color = "rgb(105,125,225)"
}
function ufuncout(){
  uDiv.style.color = "#FFFDD0"
}
function famfunc(){
  famDiv.style.color = "	#980000 "
}
function famfuncout(){
famDiv.style.color = "	#FFFDD0"
}

function hoodfunc(){
  hoodDiv.style.color = "	#0000CC "

}
function hoodfuncout(){
  hoodDiv.style.color = "	#FFFDD0"
}

function edufunc(){
  eduDiv.style.color = "	#6600FF "
}
function edufuncout(){
  eduDiv.style.color = "	#FFFDD0"
}
function jobfunc(){
  jobDiv.style.color = "	#FF6600 "
}
function jobfuncout(){
  jobDiv.style.color = "	#FFFDD0"
}
function govtfunc(){
  govtDiv.style.color = "	#336600 "
}
function govtfuncout(){
  govtDiv.style.color = "	#FFFDD0"
}
function otherfunc(){
  othersDiv.style.color = "	#00FFFF "
}
function otherfuncout(){
  othersDiv.style.color = "	#FFFDD0"
}
function ufuncclick(){
  responseText.style.color = "rgb(105,125,225)"
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = 'The idea of you as a person in the new digital age and the idea of a person means is lost in the modern age of the internet. The medium in which "you" exist is so widespread that you become diluted in it all'
}

function famfuncclick(){
  responseText.style.color = "#980000 "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "Growing up I learned alot from the internet and most of my hobbies and interests come from the internet so the influence of your direct family is lessening and it's interestong how culture is diffusing so the idea of cultural appropiation is becoming more nuanced"
}
function hoodfuncclick(){
  responseText.style.color = "#0000CC "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "The whole world becomes your neighborhood in a sense the you experience and a wide variety of cultures and adopt what speaks to you. Inadvertantly the internet is beginning to homogenize culture"
}
function edufuncclick(){
  responseText.style.color = "#6600FF "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "Recently I started to think the way we teach now is outdated becuase we are taught to solve problems with the least resources as possible when in a real world trial I would have all the resources I need at my fingertips. I feel maybe teaching a way to sift through all the information and streamline it to what I need at the moment would a valuable skill to teach and pass on"
}
function jobfuncclick(){
  responseText.style.color = "#FF6600 "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "I didn't fully understand this section but what I got os that as we advance the job market requores more specialization and the way society is setup only a few can fill those spots and the rest are left behind and this is where society fails in helping people it doesn't give them the skills to succeed or at least not quick enough to keep up with a rapidly changing world"
}
function govtfuncclick(){
  responseText.style.color = "#336600 "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "This election and the past couple years of modern politics shows the effect the media has on the government and how outdated the government is compared to the wants of the people. The average age of congress does not reflect the average age of the country and with that comes with a  lack of understanfing of the modern world and how it works"
}
function otherfuncclick(){
  responseText.style.color = "#00FFFF "
  responseText.style.textShadow = "#FFFDD0 2px 2px "
  responseText.textContent = "This part hit home because the idea that everything you do is tracked or lasts forever has been etched into mind and to this day I am wary to post online because everyone can see it even people you don't know. The more you use the internet the more your privacy disappears and that's a scray thought at times"
}
