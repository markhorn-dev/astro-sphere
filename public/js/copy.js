const codeBlocks = document.querySelectorAll('pre:has(code)');

//add copy btn to every code block on the dom
codeBlocks.forEach((code) => {
  //button icon
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '/copy.svg#empty');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('copy-svg');
  svg.appendChild(use);

  //create button
  const btn = document.createElement('button');
  btn.appendChild(svg);
  btn.classList.add('copy-btn');
  btn.addEventListener('click', (e) => copyCode(e));

  //add to code block
  code.classList.add('relative');
  code.appendChild(btn);
});

/**
* @param {MouseEvent} e
*/
function copyCode(e) {
  let codeBlock = getChildByTagName(e.currentTarget.parentElement, 'CODE')
  navigator.clipboard.writeText(codeBlock.innerText)
  const use = getChildByTagName(getChildByTagName(e.currentTarget, 'svg'), 'use');
  use.setAttribute('href', '/copy.svg#filled')
  setTimeout(() => {
    if (use) {
      use.setAttribute('href', '/copy.svg#empty')
    }
  }, 100);
}

function getChildByTagName(element, tagName) {
  return Array.from(element.children).find((child) => child.tagName === tagName);
}
