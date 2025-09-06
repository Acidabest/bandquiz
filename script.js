const startBtn = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const vocalistImage = document.getElementById('vocalist-image');
const answerButtons = document.querySelectorAll('.answer-btn');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// Sample Data
const quizData = [
  {
    image: 'Source/FreddieMercury_Queen.jpg',
    correct: 'Freddie Mercury',
    options: ['James Hetfield', 'Freddie Mercury', 'Kurt Cobain', 'Axl Rose']
  },
  {
    image: 'Source/ChesterBennington_Linkinpark.jpg',
    correct: 'Chester Bennington',
    options: ['Chester Bennington', 'Gerard Way', 'Deryck Whibley', 'Brandon Flowers']
  },
  {
    image: 'Source/AngusYoung_ACDC.jpg',
    correct: 'Angus Young',
    options: ['Damon Albarn', 'Anthony Kiedis', 'Eddie Vedder', 'Angus Young']
  },
  {
    image: 'Source/AnthonyKiedis_RHCP.jpg',
    correct: 'Anthony Kiedis',
    options: ['Anthony Kiedis', 'Axl Rose', 'Eddie Vedder', 'Angus Young']
  },
  {
    image: 'Source/AxlRose_GaR.jpg',
    correct: 'Axl Rose',
    options: ['Mark Hoppus', 'Axl Rose', 'Gary Rossington', 'M Shadows']
  },
  {
    image: 'Source/DamonAlbarn_Blur.jpg',
    correct: 'Damon Albarn',
    options: ['Sid Vicious', 'Alex Tunner', 'Morrissey', 'Damon Albarn']
  },
  {
    image: 'Source/MattyHealy_The1975.jpg',
    correct: 'Matty Healy',
    options: ['Matty Healy', 'Axl Rose', 'Kurt Cobain', 'Brandon Flowers']
  },
  {
    image: 'Source/AlexTurner_AM.jpg',
    correct: 'Alex Turner',
    options: ['Mark Hoppus', 'Axl Rose', 'M Shadows', 'Alex Turner']
  },
    {
    image: 'Source/DeryckWhibley_Sum41.jpg',
    correct: 'Deryck Whibley',
    options: ['Mark Hoppus', 'John Lydon', 'Deryck Whibley', 'Brandon Flowers']
  },
  {
    image: 'Source/LiamGallagher_Oasis.jpg',
    correct: 'Liam Gallagher',
    options: ['Ian Brown', 'Noel Gallagher', 'John Lennon', 'Liam Gallagher']
  },
  {
    image: 'Source/KurtCobain_Nirvana.jpg',
    correct: 'Kurt Cobain',
    options: ['Serj Tankian', 'Kurt Cobain', 'John Lennon', 'James Hetfield']
  },
  {
    image: 'Source/GerardWay_MCR.jpg',
    correct: 'Gerard Way',
    options: ['Mark Hoppus', 'Axl Rose', 'Billie Joe Armstron', 'Gerard Way']
  },
  {
    image: 'Source/BillieJoeArmstrong_GreenDay.jpg',
    correct: 'Billie Joe Armstrong',
    options: ['Gerard Way', 'Billie Joe Armstrong', 'John Lennon', 'Zayn Malik']
  },
  {
    image: 'Source/MarkHoppus_Blink182.jpg',
    correct: 'Mark Hoppus',
    options: ['Mark Hoppus', 'Billie Joe Armstrong', 'Mark Tim', 'Nial Horan']
  },
  {
    image: 'Source/SerjTankian_SOAD.jpg',
    correct: 'Serj Tankian',
    options: ['Serj Tankian', 'Ian Brown', 'Corey Taylor', 'Brendon Urie']
  },
  {
    image: 'Source/JamesHetfield_Metallica.jpg',
    correct: 'James Hetfield',
    options: ['Serj Tankian', 'James Hetfield', 'John Lydon', 'Jonathan David']
  },
  {
    image: 'Source/JohnLydon_SexPistols.jpg',
    correct: 'John Lydon',
    options: ['Ian Brown', 'James Hetfield', 'John Lydon', 'Jonathan David']
  },
  {
    image: 'Source/Morrissey_TheSmiths.jpg',
    correct: 'Morrissey',
    options: ['Corey Taylor', 'Brendon Urie', 'Morrissey', 'Gary Rossington']
  },
  {
    image: 'Source/IanCurtis_JD.jpg',
    correct: 'Ian Curtis',
    options: ['Chriss Cerulli', 'Ian Brown', 'Ian Curtis', 'Jonathan David']
  },
  {
    image: 'Source/MShadow_AS.jpg',
    correct: 'M Shadow',
    options: ['Serj Tankian', 'James Hetfield', 'M Shadow', 'Jonathan David']
  },
  {
    image: 'Source/CourtneyLaPlante_Spiritbox.jpg',
    correct: 'Courtney La Plante',
    options: ['Courtney La Plante', 'Hayley Williams', 'Amy Lee', 'Avril Lavigne']
  },
  {
    image: 'Source/HayleyWilliams_Paramore.jpg',
    correct: 'Hayley Williams',
    options: ['Dolores', 'Hayley Williams', 'Anna Chlumsky', 'Avril Lavigne']
  },
  {
    image: 'Source/DoloresORiordan_TheCranberries.jpg',
    correct: "Dolores O' Riordan",
    options: ['Mandy Moore', 'Gena Rowlands', 'Anya Taylor', "Dolores O' Riordan"]
  },
  {
    image: 'Source/LayneStaley_AliceInChains.jpg',
    correct: "Layne Staley",
    options: ['Domhnall G', 'Thomas Row', 'Layne Staley', "Ryan Gosling"]
  },
  {
    image: 'Source/KeithMoon_TheWho.jpg',
    correct: "Keith Moon",
    options: ['Keith Moon', 'Tom Hanks', 'Daniel R', "Mick Jagger"]
  },
  {
    image: 'Source/AmyLee_Evanescene.jpg',
    correct: "Amy Lee",
    options: ['Clairo C', 'Claire F', 'Emma Myers', "Amy Lee"]
  },
  {
    image: 'Source/BrandonFlowers_TheKillers.jpg',
    correct: "Brandon Flowers",
    options: ['Ryan Gosling', 'Tom Hanks', 'Brandon Flowers', "Mick Jagger"]
  },
  {
    image: 'Source/ChinoMoreno_Deftones.jpg',
    correct: "Chino Moreno",
    options: ['Thomas Row', 'Tom Hanks', 'Mick Jagger', "Chino Moreno"]
  },
  {
    image: 'Source/DavidCoverdale_DeepPurple.jpg',
    correct: "David Coverdale",
    options: ['Tom Hansen', 'Landon Carter', 'Jack Dawson', "David Coverdale"]
  },
  {
    image: 'Source/SimonLeBon_DuranDuran.jpg',
    correct: "Simon Le Bon",
    options: ['Tom Hansen', 'Simon Le Bon', 'Jack Dawson', "David Coverdale"]
  },
  {
    image: 'Source/SamCarter_Architects.jpg',
    correct: "Sam Carter",
    options: ['Vessel', 'Usher', 'Sam Carter', "David Coverdale"]
  },
  {
    image: 'Source/ScottWeiland_TheStoneRoses.jpg',
    correct: "Scott Weiland",
    options: ['David Coverdale', 'Rey Davies', 'Jack Dawson', "Scott Weiland"]
  },
  {
    image: 'Source/RobertPlant_LedZeppelin.jpg',
    correct: "Robert Plant",
    options: ['Sam Carter', 'Rey Davies', 'Tyler O', "Robert Plant"]
  },
  {
    image: 'Source/BillyCorgan_TheSmashingPumpkins.jpg',
    correct: "Billy Corgan",
    options: ['Sam Carter', 'Rey Davies', 'Billy Corgan', "Robert Plant"]
  },
  {
    image: 'Source/BrendonUrie_PATD.jpg',
    correct: "Brandon Urie",
    options: ['Sam Carter', 'Brandon Urie', 'Noah Sebastian', "Robert Plant"]
  },
  {
    image: 'Source/RayDavies_TheKinks.jpg',
    correct: "Ray Davies",
    options: ['Sam Carter', 'Paul Weller', 'David Coverdale', "Ray Davies"]
  },
  {
    image: 'Source/GaryRossington_LynyrdSkynyrd.jpg',
    correct: "Gary Rossington",
    options: ['Axl Rose', 'James William', 'Gary Rossington', "Paul Weller"]
  },
  {
    image: 'Source/PeteWentz_FallOutBoy.jpg',
    correct: "Pete Wentz",
    options: ['Peter Weeles', 'Paul Weller', 'Pete Wentz', "Ray Davies"]
  },
  {
    image: 'Source/PeterSteele_TypeONegative.jpg',
    correct: "Peter Steele",
    options: ['Jhonson M', 'Paul Weller', 'David Coverdale', "Peter Steele"]
  },
  {
    image: 'Source/IanBrown_TSR.jpg',
    correct: "Ian Brown",
    options: ['Joe S', 'Sean Kingston', 'Ian Brown', "Ian Curtis"]
  },
  {
    image: 'Source/JohnLennon_TheBeatles.jpg',
    correct: "John Lennon",
    options: ['Noah Liar', 'Timberlake', 'Justin Hubner', "John Lennon"]
  },
  {
    image: 'Source/OzzyOsbourne_BlackSabbath.jpg',
    correct: "Ozzy Osbourne",
    options: ['Paul Timberlake', 'Ozzy Osbourne', 'David Coverdale', "Ray Davies"]
  },
  {
    image: 'Source/PaulWeller_TheJam.jpg',
    correct: "Paul Weller",
    options: ['Paul Timberlake', 'Paul Weller', 'Joe Ramone', "M Shadows"]
  },
  {
    image: 'Source/RonnieRadke_FallinginReverse.jpg',
    correct: "Ronnie Radke",
    options: ['Eric Bellinger', 'Ozzy Osbourne', 'Ronnie Radke', "Ray Davies"]
  },
  {
    image: 'Source/TrentReznor_NineInchTails.jpg',
    correct: "Trent Reznor",
    options: ['Ozzy Osbourne', 'Trent Reznor', 'David Coverdale', "VIc Fuentes"]
  },
  {
    image: 'Source/VicFuentes_PierceTheVeil.jpg',
    correct: "Vic Fuentes",
    options: ['Trent Reznor', 'Ozzy Osbourne', 'David Coverdale', "Vic Fuentes"]
  },
  {
    image: 'Source/OliverSykes_BMTH.jpg',
    correct: "Oliver Sykes",
    options: ['Vic Fuentes', 'Trent Reznor', 'David Coverdale', "Oliver Sykes"]
  },
  {
    image: 'Source/NoahSebastian_BadOmens.jpg',
    correct: "Noah Sebastian",
    options: ['Trent Reznor', 'Cameron James', 'Noah Sebastian', "Vic Fuentes"]
  },
  {
    image: 'Source/MickJagger_TheRollingStones.jpg',
    correct: "Vic Fuentes",
    options: ['Jam Steele', 'Noah Sebastian', 'Mick Jagger', "Vic Fuentes"]
  },
  {
    image: 'Source/MarcBonar_TRex.jpg',
    correct: "Marc Bonar",
    options: ['Jam Steele', 'Marc Bonar', 'Thomas Alfa', "Vic Fuentes"]
  },
  {
    image: 'Source/JonathanDavid_Korn.jpg',
    correct: "Jonathan David",
    options: ['Jam Steele', 'Mick Jagger', 'Jonathan David', "Vic Fuentes"]
  },
  {
    image: 'Source/JoeStrummer_TheClash.jpg',
    correct: "Joe Strummer",
    options: ['Jam Steele', 'Vic Fuentes', 'Joe Strummer', "Vic Fuentes"]
  },
];

let currentQuestion = 0;
let score = 0;

// Shuffle Array Function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  shuffle(quizData); // Shuffle questions at the start of the quiz
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const question = quizData[currentQuestion];
  vocalistImage.src = question.image;
  feedback.textContent = '';
  answerButtons.forEach((btn, index) => {
    btn.textContent = question.options[index];
    btn.onclick = () => checkAnswer(question.options[index]);
  });
}

function checkAnswer(selected) {
  const question = quizData[currentQuestion];

  if (selected === question.correct) {
    score++;
    feedback.textContent = "That's Great Bro";
    feedback.className = 'feedback correct';
  } else {
    feedback.textContent = `Wrong! The correct answer is ${question.correct}.`;
    feedback.className = 'feedback wrong';
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 2000);
}

function endQuiz() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  scoreElement.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}

function navigateTo(page) {
  alert(`Navigating to ${page}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul id="menu">
      <li><a href= "about.html" >About Me</a></li>
      <li><a href= "https://instagram.com/rasheed.djibril">Contact</a></li>
    </ul>
  `;
  document.body.prepend(nav);
});

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
