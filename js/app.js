import '../scss/base.scss';

function circularText(elemId, radius, params = {}) {
  var elem = document.getElementById(elemId);
  var elemText = elem.textContent.split('');
  var deg = origin = null;

  if (params.deg) deg = params.deg;
  else deg = 360 / elemText.length;

  if (params.origin) origin = params.origin - deg * elemText.length / 2;
  else origin = - deg * elemText.length / 2;

  elem.innerHTML = '';
  elemText.forEach(ea => {
    var pElem = document.createElement('p');
    pElem.classList = 'rounded-item';
    pElem.textContent = ea;
    pElem.style.height = radius + 'px';
    pElem.style.transform = `rotate(${origin}deg)`;

    elem.appendChild(pElem);
    origin += deg;
  });
}

var radius = document.body.offsetWidth / 2;
circularText('label-headline', radius, {
  deg: 4,
  origin: 0,
});

circularText('label-foot', radius, {
  deg: 1.1,
  origin: 180,
});

