let inner_htm = '\n      <div class="thumbnail">\n        <img src="" alt="">\n        <div class="duration">11:50</div>\n      </div>\n      <div class="info">\n        <div class="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non optio enim repellendus aliquid perferendis sunt voluptates, est eligendi fugit quod recusandae rem molestias.</div>\n        <span>CodeWithHarry . 727K . 2 months </span>\n      \n      </div>\n    '

function injectcard(inner_htm) {
  let card = document.createElement('div')
  let container = document.querySelector('.container')
  container.append(card);
  card.setAttribute('class','card');
  card.innerHTML = inner_htm
  return card
}
function create_card(title, duration, c_name, views, p_time, url) {
  let card = injectcard(inner_htm);
  // card.outerHTML = oldcard.outerHTML;
  let thumbnail = card.querySelector('.thumbnail');
  thumbnail.querySelector('img').setAttribute('src',url);
  thumbnail.querySelector('.duration').innerHTML = duration;
  let info = card.querySelector('.info');
  info.querySelector('.title').innerHTML = title;
  info.querySelector('span').innerHTML = `${c_name} • ${views} views • ${p_time}months ago`
  return card
}

create_card(
  'Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 
  '12:00', 
  'CodeWithHarry',
  '234k', 
  '4',
  'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ' 
)
create_card(
  'Installing Vjkkjk Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 
  '12:00', 
  'CodeWithHarry',
  '234k', 
  '4',
  'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ' 
)
create_card(
  'Isha the black cat', 
  '99:99', 
  'Billistan',
  '1', 
  '9999999B ',
  'data:image/jpeg;base64,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' 
)
