// monday:
function datasaverMnd() {
	localStorage.setItem('mnd1les', document.getElementById('mnd-1-less-value').value);
	localStorage.setItem('mnd1hw', document.getElementById('mnd-1-hw-value').value);

	localStorage.setItem('mnd2les', document.getElementById('mnd-2-less-value').value);
	localStorage.setItem('mnd2hw', document.getElementById('mnd-2-hw-value').value);

	localStorage.setItem('mnd3les', document.getElementById('mnd-3-less-value').value);
	localStorage.setItem('mnd3hw', document.getElementById('mnd-3-hw-value').value);

	localStorage.setItem('mnd4les', document.getElementById('mnd-4-less-value').value);
	localStorage.setItem('mnd4hw', document.getElementById('mnd-4-hw-value').value);

	localStorage.setItem('mnd5les', document.getElementById('mnd-5-less-value').value);
	localStorage.setItem('mnd5hw', document.getElementById('mnd-5-hw-value').value);

	localStorage.setItem('mnd6les', document.getElementById('mnd-6-less-value').value);
	localStorage.setItem('mnd6hw', document.getElementById('mnd-6-hw-value').value);

	localStorage.setItem('mnd7les', document.getElementById('mnd-7-less-value').value);
	localStorage.setItem('mnd7hw', document.getElementById('mnd-7-hw-value').value);

	localStorage.setItem('mnd8les', document.getElementById('mnd-8-less-value').value);
	localStorage.setItem('mnd8hw', document.getElementById('mnd-8-hw-value').value);

	localStorage.setItem('mnd-cb1', document.getElementById('mnd-cb1').checked);
	localStorage.setItem('mnd-cb2', document.getElementById('mnd-cb2').checked);
	localStorage.setItem('mnd-cb3', document.getElementById('mnd-cb3').checked);
	localStorage.setItem('mnd-cb4', document.getElementById('mnd-cb4').checked);
	localStorage.setItem('mnd-cb5', document.getElementById('mnd-cb5').checked);
	localStorage.setItem('mnd-cb6', document.getElementById('mnd-cb6').checked);
	localStorage.setItem('mnd-cb7', document.getElementById('mnd-cb7').checked);
	localStorage.setItem('mnd-cb8', document.getElementById('mnd-cb8').checked);
}

function datagetterMnd() {
	document.getElementById('mnd-1-less-value').value = localStorage.getItem('mnd1les');
	document.getElementById('mnd-1-hw-value').value = localStorage.getItem('mnd1hw');

	document.getElementById('mnd-2-less-value').value = localStorage.getItem('mnd2les');
	document.getElementById('mnd-2-hw-value').value = localStorage.getItem('mnd2hw');

	document.getElementById('mnd-3-less-value').value = localStorage.getItem('mnd3les');
	document.getElementById('mnd-3-hw-value').value = localStorage.getItem('mnd3hw');

	document.getElementById('mnd-4-less-value').value = localStorage.getItem('mnd4les');
	document.getElementById('mnd-4-hw-value').value = localStorage.getItem('mnd4hw');

	document.getElementById('mnd-5-less-value').value = localStorage.getItem('mnd5les');
	document.getElementById('mnd-5-hw-value').value = localStorage.getItem('mnd5hw');

	document.getElementById('mnd-6-less-value').value = localStorage.getItem('mnd6les');
	document.getElementById('mnd-6-hw-value').value = localStorage.getItem('mnd6hw');

	document.getElementById('mnd-7-less-value').value = localStorage.getItem('mnd7les');
	document.getElementById('mnd-7-hw-value').value = localStorage.getItem('mnd7hw');

	document.getElementById('mnd-8-less-value').value = localStorage.getItem('mnd8les');
	document.getElementById('mnd-8-hw-value').value = localStorage.getItem('mnd8hw');


	document.getElementById("mnd-cb1").checked = JSON.parse(localStorage.getItem('mnd-cb1'));
	document.getElementById("mnd-cb2").checked = JSON.parse(localStorage.getItem('mnd-cb2'));
	document.getElementById("mnd-cb3").checked = JSON.parse(localStorage.getItem('mnd-cb3'));
	document.getElementById("mnd-cb4").checked = JSON.parse(localStorage.getItem('mnd-cb4'));
	document.getElementById("mnd-cb5").checked = JSON.parse(localStorage.getItem('mnd-cb5'));
	document.getElementById("mnd-cb6").checked = JSON.parse(localStorage.getItem('mnd-cb6'));
	document.getElementById("mnd-cb7").checked = JSON.parse(localStorage.getItem('mnd-cb7'));
	document.getElementById("mnd-cb8").checked = JSON.parse(localStorage.getItem('mnd-cb8'));
}

// tuesday:
function datasaverTue() {
	localStorage.setItem('tue1les', document.getElementById('tue-1-less-value').value);
	localStorage.setItem('tue1hw', document.getElementById('tue-1-hw-value').value);

	localStorage.setItem('tue2les', document.getElementById('tue-2-less-value').value);
	localStorage.setItem('tue2hw', document.getElementById('tue-2-hw-value').value);

	localStorage.setItem('tue3les', document.getElementById('tue-3-less-value').value);
	localStorage.setItem('tue3hw', document.getElementById('tue-3-hw-value').value);

	localStorage.setItem('tue4les', document.getElementById('tue-4-less-value').value);
	localStorage.setItem('tue4hw', document.getElementById('tue-4-hw-value').value);

	localStorage.setItem('tue5les', document.getElementById('tue-5-less-value').value);
	localStorage.setItem('tue5hw', document.getElementById('tue-5-hw-value').value);

	localStorage.setItem('tue6les', document.getElementById('tue-6-less-value').value);
	localStorage.setItem('tue6hw', document.getElementById('tue-6-hw-value').value);

	localStorage.setItem('tue7les', document.getElementById('tue-7-less-value').value);
	localStorage.setItem('tue7hw', document.getElementById('tue-7-hw-value').value);

	localStorage.setItem('tue8les', document.getElementById('tue-8-less-value').value);
	localStorage.setItem('tue8hw', document.getElementById('tue-8-hw-value').value);

	localStorage.setItem('tue-cb1', document.getElementById('tue-cb1').checked);
	localStorage.setItem('tue-cb2', document.getElementById('tue-cb2').checked);
	localStorage.setItem('tue-cb3', document.getElementById('tue-cb3').checked);
	localStorage.setItem('tue-cb4', document.getElementById('tue-cb4').checked);
	localStorage.setItem('tue-cb5', document.getElementById('tue-cb5').checked);
	localStorage.setItem('tue-cb6', document.getElementById('tue-cb6').checked);
	localStorage.setItem('tue-cb7', document.getElementById('tue-cb7').checked);
	localStorage.setItem('tue-cb8', document.getElementById('tue-cb8').checked);
}

function datagetterTue() {
	document.getElementById('tue-1-less-value').value = localStorage.getItem('tue1les');
	document.getElementById('tue-1-hw-value').value = localStorage.getItem('tue1hw');

	document.getElementById('tue-2-less-value').value = localStorage.getItem('tue2les');
	document.getElementById('tue-2-hw-value').value = localStorage.getItem('tue2hw');

	document.getElementById('tue-3-less-value').value = localStorage.getItem('tue3les');
	document.getElementById('tue-3-hw-value').value = localStorage.getItem('tue3hw');

	document.getElementById('tue-4-less-value').value = localStorage.getItem('tue4les');
	document.getElementById('tue-4-hw-value').value = localStorage.getItem('tue4hw');

	document.getElementById('tue-5-less-value').value = localStorage.getItem('tue5les');
	document.getElementById('tue-5-hw-value').value = localStorage.getItem('tue5hw');

	document.getElementById('tue-6-less-value').value = localStorage.getItem('tue6les');
	document.getElementById('tue-6-hw-value').value = localStorage.getItem('tue6hw');

	document.getElementById('tue-7-less-value').value = localStorage.getItem('tue7les');
	document.getElementById('tue-7-hw-value').value = localStorage.getItem('tue7hw');

	document.getElementById('tue-8-less-value').value = localStorage.getItem('tue8les');
	document.getElementById('tue-8-hw-value').value = localStorage.getItem('tue8hw');


	document.getElementById("tue-cb1").checked = JSON.parse(localStorage.getItem('tue-cb1'));
	document.getElementById("tue-cb2").checked = JSON.parse(localStorage.getItem('tue-cb2'));
	document.getElementById("tue-cb3").checked = JSON.parse(localStorage.getItem('tue-cb3'));
	document.getElementById("tue-cb4").checked = JSON.parse(localStorage.getItem('tue-cb4'));
	document.getElementById("tue-cb5").checked = JSON.parse(localStorage.getItem('tue-cb5'));
	document.getElementById("tue-cb6").checked = JSON.parse(localStorage.getItem('tue-cb6'));
	document.getElementById("tue-cb7").checked = JSON.parse(localStorage.getItem('tue-cb7'));
	document.getElementById("tue-cb8").checked = JSON.parse(localStorage.getItem('tue-cb8'));
}

// wednesday:
function datasaverWed() {
	localStorage.setItem('wed-1-less-value', document.getElementById('wed-1-less-value').value);
	localStorage.setItem('wed-1-hw-value', document.getElementById('wed-1-hw-value').value);

	localStorage.setItem('wed-2-less-value', document.getElementById('wed-2-less-value').value);
	localStorage.setItem('wed-2-hw-value', document.getElementById('wed-2-hw-value').value);

	localStorage.setItem('wed-3-less-value', document.getElementById('wed-3-less-value').value);
	localStorage.setItem('wed-3-hw-value', document.getElementById('wed-3-hw-value').value);

	localStorage.setItem('wed-4-less-value', document.getElementById('wed-4-less-value').value);
	localStorage.setItem('wed-4-hw-value', document.getElementById('wed-4-hw-value').value);

	localStorage.setItem('wed-5-less-value', document.getElementById('wed-5-less-value').value);
	localStorage.setItem('wed-5-hw-value', document.getElementById('wed-5-hw-value').value);

	localStorage.setItem('wed-6-less-value', document.getElementById('wed-6-less-value').value);
	localStorage.setItem('wed-6-hw-value', document.getElementById('wed-6-hw-value').value);

	localStorage.setItem('wed-7-less-value', document.getElementById('wed-7-less-value').value);
	localStorage.setItem('wed-7-hw-value', document.getElementById('wed-7-hw-value').value);

	localStorage.setItem('wed-8-less-value', document.getElementById('wed-8-less-value').value);
	localStorage.setItem('wed-8-hw-value', document.getElementById('wed-8-hw-value').value);

	localStorage.setItem('wed-cb1', document.getElementById('wed-cb1').checked);
	localStorage.setItem('wed-cb2', document.getElementById('wed-cb2').checked);
	localStorage.setItem('wed-cb3', document.getElementById('wed-cb3').checked);
	localStorage.setItem('wed-cb4', document.getElementById('wed-cb4').checked);
	localStorage.setItem('wed-cb5', document.getElementById('wed-cb5').checked);
	localStorage.setItem('wed-cb6', document.getElementById('wed-cb6').checked);
	localStorage.setItem('wed-cb7', document.getElementById('wed-cb7').checked);
	localStorage.setItem('wed-cb8', document.getElementById('wed-cb8').checked);
}

function datagetterWed() {
	document.getElementById('wed-1-less-value').value = localStorage.getItem('wed-1-less-value');
	document.getElementById('wed-1-hw-value').value = localStorage.getItem('wed-1-hw-value');

	document.getElementById('wed-2-less-value').value = localStorage.getItem('wed-2-less-value');
	document.getElementById('wed-2-hw-value').value = localStorage.getItem('wed-2-hw-value');

	document.getElementById('wed-3-less-value').value = localStorage.getItem('wed-3-less-value');
	document.getElementById('wed-3-hw-value').value = localStorage.getItem('wed-3-hw-value');

	document.getElementById('wed-4-less-value').value = localStorage.getItem('wed-4-less-value');
	document.getElementById('wed-4-hw-value').value = localStorage.getItem('wed-4-hw-value');

	document.getElementById('wed-5-less-value').value = localStorage.getItem('wed-5-less-value');
	document.getElementById('wed-5-hw-value').value = localStorage.getItem('wed-5-hw-value');

	document.getElementById('wed-6-less-value').value = localStorage.getItem('wed-6-less-value');
	document.getElementById('wed-6-hw-value').value = localStorage.getItem('wed-6-hw-value');

	document.getElementById('wed-7-less-value').value = localStorage.getItem('wed-7-less-value');
	document.getElementById('wed-7-hw-value').value = localStorage.getItem('wed-7-hw-value');

	document.getElementById('wed-8-less-value').value = localStorage.getItem('wed-8-less-value');
	document.getElementById('wed-8-hw-value').value = localStorage.getItem('wed-8-hw-value');

	document.getElementById("wed-cb1").checked = JSON.parse(localStorage.getItem('wed-cb1'));
	document.getElementById("wed-cb2").checked = JSON.parse(localStorage.getItem('wed-cb2'));
	document.getElementById("wed-cb3").checked = JSON.parse(localStorage.getItem('wed-cb3'));
	document.getElementById("wed-cb4").checked = JSON.parse(localStorage.getItem('wed-cb4'));
	document.getElementById("wed-cb5").checked = JSON.parse(localStorage.getItem('wed-cb5'));
	document.getElementById("wed-cb6").checked = JSON.parse(localStorage.getItem('wed-cb6'));
	document.getElementById("wed-cb7").checked = JSON.parse(localStorage.getItem('wed-cb7'));
	document.getElementById("wed-cb8").checked = JSON.parse(localStorage.getItem('wed-cb8'));
}

// thursday:
function datasaverThu() {
	localStorage.setItem('thu-1-less-value', document.getElementById('thu-1-less-value').value);
	localStorage.setItem('thu-1-hw-value', document.getElementById('thu-1-hw-value').value);

	localStorage.setItem('thu-2-less-value', document.getElementById('thu-2-less-value').value);
	localStorage.setItem('thu-2-hw-value', document.getElementById('thu-2-hw-value').value);

	localStorage.setItem('thu-3-less-value', document.getElementById('thu-3-less-value').value);
	localStorage.setItem('thu-3-hw-value', document.getElementById('thu-3-hw-value').value);

	localStorage.setItem('thu-4-less-value', document.getElementById('thu-4-less-value').value);
	localStorage.setItem('thu-4-hw-value', document.getElementById('thu-4-hw-value').value);

	localStorage.setItem('thu-5-less-value', document.getElementById('thu-5-less-value').value);
	localStorage.setItem('thu-5-hw-value', document.getElementById('thu-5-hw-value').value);

	localStorage.setItem('thu-6-less-value', document.getElementById('thu-6-less-value').value);
	localStorage.setItem('thu-6-hw-value', document.getElementById('thu-6-hw-value').value);

	localStorage.setItem('thu-7-less-value', document.getElementById('thu-7-less-value').value);
	localStorage.setItem('thu-7-hw-value', document.getElementById('thu-7-hw-value').value);

	localStorage.setItem('thu-8-less-value', document.getElementById('thu-8-less-value').value);
	localStorage.setItem('thu-8-hw-value', document.getElementById('thu-8-hw-value').value);

	localStorage.setItem('thu-cb1', document.getElementById('thu-cb1').checked);
	localStorage.setItem('thu-cb2', document.getElementById('thu-cb2').checked);
	localStorage.setItem('thu-cb3', document.getElementById('thu-cb3').checked);
	localStorage.setItem('thu-cb4', document.getElementById('thu-cb4').checked);
	localStorage.setItem('thu-cb5', document.getElementById('thu-cb5').checked);
	localStorage.setItem('thu-cb6', document.getElementById('thu-cb6').checked);
	localStorage.setItem('thu-cb7', document.getElementById('thu-cb7').checked);
	localStorage.setItem('thu-cb8', document.getElementById('thu-cb8').checked);
}

function datagetterThu() {
	document.getElementById('thu-1-less-value').value = localStorage.getItem('thu-1-less-value');
	document.getElementById('thu-1-hw-value').value = localStorage.getItem('thu-1-hw-value');

	document.getElementById('thu-2-less-value').value = localStorage.getItem('thu-2-less-value');
	document.getElementById('thu-2-hw-value').value = localStorage.getItem('thu-2-hw-value');

	document.getElementById('thu-3-less-value').value = localStorage.getItem('thu-3-less-value');
	document.getElementById('thu-3-hw-value').value = localStorage.getItem('thu-3-hw-value');

	document.getElementById('thu-4-less-value').value = localStorage.getItem('thu-4-less-value');
	document.getElementById('thu-4-hw-value').value = localStorage.getItem('thu-4-hw-value');

	document.getElementById('thu-5-less-value').value = localStorage.getItem('thu-5-less-value');
	document.getElementById('thu-5-hw-value').value = localStorage.getItem('thu-5-hw-value');

	document.getElementById('thu-6-less-value').value = localStorage.getItem('thu-6-less-value');
	document.getElementById('thu-6-hw-value').value = localStorage.getItem('thu-6-hw-value');

	document.getElementById('thu-7-less-value').value = localStorage.getItem('thu-7-less-value');
	document.getElementById('thu-7-hw-value').value = localStorage.getItem('thu-7-hw-value');

	document.getElementById('thu-8-less-value').value = localStorage.getItem('thu-8-less-value');
	document.getElementById('thu-8-hw-value').value = localStorage.getItem('thu-8-hw-value');

	document.getElementById("thu-cb1").checked = JSON.parse(localStorage.getItem('thu-cb1'));
	document.getElementById("thu-cb2").checked = JSON.parse(localStorage.getItem('thu-cb2'));
	document.getElementById("thu-cb3").checked = JSON.parse(localStorage.getItem('thu-cb3'));
	document.getElementById("thu-cb4").checked = JSON.parse(localStorage.getItem('thu-cb4'));
	document.getElementById("thu-cb5").checked = JSON.parse(localStorage.getItem('thu-cb5'));
	document.getElementById("thu-cb6").checked = JSON.parse(localStorage.getItem('thu-cb6'));
	document.getElementById("thu-cb7").checked = JSON.parse(localStorage.getItem('thu-cb7'));
	document.getElementById("thu-cb8").checked = JSON.parse(localStorage.getItem('thu-cb8'));
}

// friday:
function datasaverFri() {
	localStorage.setItem('fri-1-less-value', document.getElementById('fri-1-less-value').value);
	localStorage.setItem('fri-1-hw-value', document.getElementById('fri-1-hw-value').value);

	localStorage.setItem('fri-2-less-value', document.getElementById('fri-2-less-value').value);
	localStorage.setItem('fri-2-hw-value', document.getElementById('fri-2-hw-value').value);

	localStorage.setItem('fri-3-less-value', document.getElementById('fri-3-less-value').value);
	localStorage.setItem('fri-3-hw-value', document.getElementById('fri-3-hw-value').value);

	localStorage.setItem('fri-4-less-value', document.getElementById('fri-4-less-value').value);
	localStorage.setItem('fri-4-hw-value', document.getElementById('fri-4-hw-value').value);
	localStorage.setItem('fri-5-less-value', document.getElementById('fri-5-less-value').value);
	localStorage.setItem('fri-5-hw-value', document.getElementById('fri-5-hw-value').value);

	localStorage.setItem('fri-6-less-value', document.getElementById('fri-6-less-value').value);
	localStorage.setItem('fri-6-hw-value', document.getElementById('fri-6-hw-value').value);

	localStorage.setItem('fri-7-less-value', document.getElementById('fri-7-less-value').value);
	localStorage.setItem('fri-7-hw-value', document.getElementById('fri-7-hw-value').value);

	localStorage.setItem('fri-8-less-value', document.getElementById('fri-8-less-value').value);
	localStorage.setItem('fri-8-hw-value', document.getElementById('fri-8-hw-value').value);

	localStorage.setItem('fri-cb1', document.getElementById('fri-cb1').checked);
	localStorage.setItem('fri-cb2', document.getElementById('fri-cb2').checked);
	localStorage.setItem('fri-cb3', document.getElementById('fri-cb3').checked);
	localStorage.setItem('fri-cb4', document.getElementById('fri-cb4').checked);
	localStorage.setItem('fri-cb5', document.getElementById('fri-cb5').checked);
	localStorage.setItem('fri-cb6', document.getElementById('fri-cb6').checked);
	localStorage.setItem('fri-cb7', document.getElementById('fri-cb7').checked);
	localStorage.setItem('fri-cb8', document.getElementById('fri-cb8').checked);
}

function datagetterFri() {
	document.getElementById('fri-1-less-value').value = localStorage.getItem('fri-1-less-value');
	document.getElementById('fri-1-hw-value').value = localStorage.getItem('fri-1-hw-value');

	document.getElementById('fri-2-less-value').value = localStorage.getItem('fri-2-less-value');
	document.getElementById('fri-2-hw-value').value = localStorage.getItem('fri-2-hw-value');

	document.getElementById('fri-3-less-value').value = localStorage.getItem('fri-3-less-value');
	document.getElementById('fri-3-hw-value').value = localStorage.getItem('fri-3-hw-value');

	document.getElementById('fri-4-less-value').value = localStorage.getItem('fri-4-less-value');
	document.getElementById('fri-4-hw-value').value = localStorage.getItem('fri-4-hw-value');

	document.getElementById('fri-5-less-value').value = localStorage.getItem('fri-5-less-value');
	document.getElementById('fri-5-hw-value').value = localStorage.getItem('fri-5-hw-value');

	document.getElementById('fri-6-less-value').value = localStorage.getItem('fri-6-less-value');
	document.getElementById('fri-6-hw-value').value = localStorage.getItem('fri-6-hw-value');

	document.getElementById('fri-7-less-value').value = localStorage.getItem('fri-7-less-value');
	document.getElementById('fri-7-hw-value').value = localStorage.getItem('fri-7-hw-value');

	document.getElementById('fri-8-less-value').value = localStorage.getItem('fri-8-less-value');
	document.getElementById('fri-8-hw-value').value = localStorage.getItem('fri-8-hw-value');

	document.getElementById("fri-cb1").checked = JSON.parse(localStorage.getItem('fri-cb1'));
	document.getElementById("fri-cb2").checked = JSON.parse(localStorage.getItem('fri-cb2'));
	document.getElementById("fri-cb3").checked = JSON.parse(localStorage.getItem('fri-cb3'));
	document.getElementById("fri-cb4").checked = JSON.parse(localStorage.getItem('fri-cb4'));
	document.getElementById("fri-cb5").checked = JSON.parse(localStorage.getItem('fri-cb5'));
	document.getElementById("fri-cb6").checked = JSON.parse(localStorage.getItem('fri-cb6'));
	document.getElementById("fri-cb7").checked = JSON.parse(localStorage.getItem('fri-cb7'));
	document.getElementById("fri-cb8").checked = JSON.parse(localStorage.getItem('fri-cb8'));
}

// saturday:
function datasaverSat() {
	localStorage.setItem('sat-1-less-value', document.getElementById('sat-1-less-value').value);
	localStorage.setItem('sat-1-hw-value', document.getElementById('sat-1-hw-value').value);

	localStorage.setItem('sat-2-less-value', document.getElementById('sat-2-less-value').value);
	localStorage.setItem('sat-2-hw-value', document.getElementById('sat-2-hw-value').value);

	localStorage.setItem('sat-3-less-value', document.getElementById('sat-3-less-value').value);
	localStorage.setItem('sat-3-hw-value', document.getElementById('sat-3-hw-value').value);

	localStorage.setItem('sat-4-less-value', document.getElementById('sat-4-less-value').value);
	localStorage.setItem('sat-4-hw-value', document.getElementById('sat-4-hw-value').value);

	localStorage.setItem('sat-5-less-value', document.getElementById('sat-5-less-value').value);
	localStorage.setItem('sat-5-hw-value', document.getElementById('sat-5-hw-value').value);

	localStorage.setItem('sat-6-less-value', document.getElementById('sat-6-less-value').value);
	localStorage.setItem('sat-6-hw-value', document.getElementById('sat-6-hw-value').value);

	localStorage.setItem('sat-7-less-value', document.getElementById('sat-7-less-value').value);
	localStorage.setItem('sat-7-hw-value', document.getElementById('sat-7-hw-value').value);

	localStorage.setItem('sat-8-less-value', document.getElementById('sat-8-less-value').value);
	localStorage.setItem('sat-8-hw-value', document.getElementById('sat-8-hw-value').value);

	localStorage.setItem('sat-cb1', document.getElementById('sat-cb1').checked);
	localStorage.setItem('sat-cb2', document.getElementById('sat-cb2').checked);
	localStorage.setItem('sat-cb3', document.getElementById('sat-cb3').checked);
	localStorage.setItem('sat-cb4', document.getElementById('sat-cb4').checked);
	localStorage.setItem('sat-cb5', document.getElementById('sat-cb5').checked);
	localStorage.setItem('sat-cb6', document.getElementById('sat-cb6').checked);
	localStorage.setItem('sat-cb7', document.getElementById('sat-cb7').checked);
	localStorage.setItem('sat-cb8', document.getElementById('sat-cb8').checked);
}

function datagetterSat() {
	document.getElementById('sat-1-less-value').value = localStorage.getItem('sat-1-less-value');
	document.getElementById('sat-1-hw-value').value = localStorage.getItem('sat-1-hw-value');

	document.getElementById('sat-2-less-value').value = localStorage.getItem('sat-2-less-value');
	document.getElementById('sat-2-hw-value').value = localStorage.getItem('sat-2-hw-value');

	document.getElementById('sat-3-less-value').value = localStorage.getItem('sat-3-less-value');
	document.getElementById('sat-3-hw-value').value = localStorage.getItem('sat-3-hw-value');

	document.getElementById('sat-4-less-value').value = localStorage.getItem('sat-4-less-value');
	document.getElementById('sat-4-hw-value').value = localStorage.getItem('sat-4-hw-value');

	document.getElementById('sat-5-less-value').value = localStorage.getItem('sat-5-less-value');
	document.getElementById('sat-5-hw-value').value = localStorage.getItem('sat-5-hw-value');

	document.getElementById('sat-6-less-value').value = localStorage.getItem('sat-6-less-value');
	document.getElementById('sat-6-hw-value').value = localStorage.getItem('sat-6-hw-value');

	document.getElementById('sat-7-less-value').value = localStorage.getItem('sat-7-less-value');
	document.getElementById('sat-7-hw-value').value = localStorage.getItem('sat-7-hw-value');

	document.getElementById('sat-8-less-value').value = localStorage.getItem('sat-8-less-value');
	document.getElementById('sat-8-hw-value').value = localStorage.getItem('sat-8-hw-value');

	document.getElementById("sat-cb1").checked = JSON.parse(localStorage.getItem('sat-cb1'));
	document.getElementById("sat-cb2").checked = JSON.parse(localStorage.getItem('sat-cb2'));
	document.getElementById("sat-cb3").checked = JSON.parse(localStorage.getItem('sat-cb3'));
	document.getElementById("sat-cb4").checked = JSON.parse(localStorage.getItem('sat-cb4'));
	document.getElementById("sat-cb5").checked = JSON.parse(localStorage.getItem('sat-cb5'));
	document.getElementById("sat-cb6").checked = JSON.parse(localStorage.getItem('sat-cb6'));
	document.getElementById("sat-cb7").checked = JSON.parse(localStorage.getItem('sat-cb7'));
	document.getElementById("sat-cb8").checked = JSON.parse(localStorage.getItem('sat-cb8'));
}