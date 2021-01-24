let buttonProfil = document.getElementById('profil');
let carteProfil = document.getElementById('section-profil');
let contentProfil = document.getElementsByClassName('profil__content');
let closeProfil = document.getElementById('close-profil');

let buttonFormation = document.getElementById('formation');
let carteFormation = document.getElementById('section-formation');
let contentFormation = document.getElementsByClassName('formation__content');
let closeFormation = document.getElementById('close-formation');

let buttonCompetence = document.getElementById('competences-video');
let carteCompetence = document.getElementById('section-competence');
let contentCompetence = document.getElementsByClassName('competence__content');
let closeCompetence = document.getElementById('close-competence');

let buttonLangage = document.getElementById('langage');
let carteLangage = document.getElementById('section-langage');
let contentLangage = document.getElementsByClassName('langage__content');
let closeLangage = document.getElementById('close-langage');

let buttonWork = document.getElementById('work');
let carteWork = document.getElementById('section-work');
let contentWork = document.getElementsByClassName('work__content');
let closeWork = document.getElementById('close-work');

let buttonActivites = document.getElementById('activites');
let carteActivites = document.getElementById('section-activites');
let contentActivites = document.getElementsByClassName('activites__content');
let closeActivites = document.getElementById('close-activites');

function carteActivation(button, carte, content)
{
	button.addEventListener('click', function(e)
	{
		e.stopPropagation();
		carte.classList.add('animation');

		for(var i = 0; i <= content.length; i++)
		{
			content[i].classList.add('animation__text');
		}
	});
}

carteActivation(buttonProfil, carteProfil, contentProfil);
carteActivation(buttonFormation, carteFormation, contentFormation);
carteActivation(buttonCompetence, carteCompetence, contentCompetence);
carteActivation(buttonLangage, carteLangage, contentLangage);
carteActivation(buttonWork, carteWork, contentWork);
carteActivation(buttonActivites, carteActivites, contentActivites);

function textActivation(button, value, type)
{
	containerPhoto = document.getElementById('photo');
	content = document.getElementById('photo-content');

	button.addEventListener('mouseover', function()
	{	
		containerPhoto.classList.add('photo-hover');
		content.classList.add('photo__text--' + type);
		content.textContent = value;
	});

	button.addEventListener('mouseout', function()
	{
		containerPhoto.classList.remove('photo-hover');
		content.classList.remove('photo__text--' + type);
		content.textContent = '';
	});
}

let values = document.getElementsByClassName('section__heading');

textActivation(buttonProfil, values[0].textContent, 'normal');
textActivation(buttonFormation, values[1].textContent, 'normal');
textActivation(buttonCompetence, values[2].textContent, 'activites');
textActivation(buttonLangage, values[3].textContent, 'activites');
textActivation(buttonWork, values[4].textContent, 'normal');
textActivation(buttonActivites, values[5].textContent, 'activites');

function carteFermeture(button, carte)
{
	button.addEventListener('click', function()
	{
		carte.classList.remove('animation');
	});
}

carteFermeture(closeProfil, carteProfil);
carteFermeture(closeFormation, carteFormation);
carteFermeture(closeCompetence, carteCompetence);
carteFermeture(closeActivites, carteActivites);
carteFermeture(closeLangage, carteLangage);
carteFermeture(closeWork, carteWork);









