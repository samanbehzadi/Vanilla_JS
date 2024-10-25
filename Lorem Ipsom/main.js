const text = [
  `	Uncle Charlie Wheeler stamped on the steps before Nance McGregor's bake-shop on the Main Street of the town of Coal Creek Pennsylvania and then went quickly inside. Something pleased him and as he stood before the counter in the shop he laughed and whistled softly. With a wink at the Reverend Minot Weeks who stood by the door leading to the street, he tapped with his knuckles on the showcase.`,

  `“It has,” he said, waving attention to the boy, who was making a mess of the effort to arrange Uncle Charlie's loaf into a neat package, “a pretty name. They call it Norman—Norman McGregor.” Uncle Charlie laughed heartily and again stamped upon the floor. Putting his finger to his forehead to suggest deep thought, he turned to the minister. “I am going to change all that,” he said.`,

  `“Norman indeed! I shall give him a name that will stick! Norman! Too soft, too soft and delicate for Coal Creek, eh? It shall be rechristened. You and I will be Adam and Eve in the garden naming things. We will call it Beaut—Our Beautiful One—Beaut McGregor.”`,

  `The Reverend Minot Weeks also laughed. He thrust four fingers of each hand into the pockets of his trousers, letting the extended thumbs lie along the swelling waist line. From the front the thumbs looked like two tiny boats on the horizon of a troubled sea. They bobbed and jumped about on the rolling shaking paunch, appearing and disappearing as laughter shook him.`,

  ` The Reverend Minot Weeks went out at the door ahead of Uncle Charlie, still laughing. One fancied that he would go along the street from store to store telling the tale of the christening and laughing again. The tall boy could imagine the details of the story.`,

  `It was an ill day for births in Coal Creek, even for the birth of one of Uncle Charlie's inspirations. Snow lay piled along the sidewalks and in the gutters of Main Street—black snow, sordid with the gathered grime of human endeavour that went on day and night in the bowels of the hills. Through the soiled snow walked miners, stumbling along silently and with blackened faces. In their bare hands they carried dinner pails.`,

  `The McGregor boy, tall and awkward, and with a towering nose, great hippopotamus-like mouth and fiery red hair, followed Uncle Charlie, Republican politician, postmaster and village wit to the door and looked after him as with the loaf of bread under his arm he hurried along the street. Behind the politician went the minister still enjoying the scene in the bakery. He was preening himself on his nearness to life in the mining town.`,

  ` “Did not Christ himself laugh, eat and drink with publicans and sinners?” he thought, as he waddled through the snow. The eyes of the McGregor boy, as they followed the two departing figures, and later, as he stood in the door of the bake-shop watching the struggling miners, glistened, with hatred. It was the quality of intense hatred for his fellows in the black hole between the Pennsylvania hills that marked the boy and made him stand forth among his fellows.`,

  `In a country of so many varied climates and occupations as America it is absurd to talk of an American type. The country is like a vast disorganised undisciplined army, leaderless, uninspired, going in route-step along the road to they know not what end. In the prairie towns of the West and the river towns of the South from which have come so many of our writing men, the citizens swagger through life.`,

  ` Drunken old reprobates lie in the shade by the river's edge or wander through the streets of a corn shipping village of a Saturday evening with grins on their faces. Some touch of nature, a sweet undercurrent of life, stays alive in them and is handed down to those who write of them, and the most worthless man that walks the streets of an Ohio or Iowa town may be the father of an epigram that colours all the life of the men about him. `,

  `In a mining town or deep in the entrails of one of our cities life is different. There the disorder and aimlessness of our American lives becomes a crime for which men pay heavily. Losing step with one another, men lose also a sense of their own individuality so that a thousand of them may be driven in a disorderly mass in at the door of a Chicago factory morning after morning and year after year with never an epigram from the lips of one of them.`,
];

let form = document.querySelector(".lorem-form");
let amount = document.getElementById("amount");
let result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = parseInt(amount.value);

  if (value <= 0) {
    return (result.innerHTML = `<p class='maxValue'>لطفا تعداد پاراگرافها را بطور صحیح وارد کنید</p>`);
  } else if (isNaN(value)) {
    return (result.innerText = text.slice(0, 1));
  } else if (value > 9) {
    return (result.innerHTML = `<p class='maxValue'>اندازه متن تولیدی نمیتواند از 9 پاراگراف بیشتر باشد</p>`);
  } else {
    let generateText = text.slice(0, value);
    generateText = generateText.map((item) => {
        return `<p>${item}</p>`;
      })
      .join(" "); // to join each item of array with space character (" ")
    result.innerHTML = generateText;
  }
});
