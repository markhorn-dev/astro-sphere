const codeBlocks = document.querySelectorAll('pre:has(code)');

// //add copy btn to every code block on the dom
// codeBlocks.forEach((code) => {
//   // button icons
//   const use_empty = document.createElementNS('http://www.w3.org/2000/svg', 'use');
//   use_empty.setAttribute('href', '/copy.svg#empty');
//   const copy_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   copy_svg.classList.add('copy-svg', 'copy-svg-inactive');
//   copy_svg.appendChild(use_empty);

//   const use_filled = document.createElementNS('http://www.w3.org/2000/svg', 'use');
//   use_filled.setAttribute('href', '/copy.svg#filled');
//   const copied_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   copied_svg.classList.add('copy-svg', 'copy-svg-active');
//   copied_svg.appendChild(use_filled);

//   // create button
//   const btn = document.createElement('button');
//   btn.appendChild(copied_svg);
//   btn.appendChild(copy_svg);
//   btn.classList.add('copy-btn');
//   btn.addEventListener('mousedown', (e) => copyCode(e));

//   // container to fix copy button
//   const container = document.createElement('div');
//   container.classList.add('copy-cnt');
//   container.appendChild(btn);

//   // add to code block
//   code.classList.add('relative');
//   code.insertBefore(container, code.getElementsByTagName("code")[0]);
// });

/**
* @param {MouseEvent} event
*/
function copyCode(event) {
  let codeBlock = getChildByTagName(event.currentTarget.parentElement.parentElement, 'CODE')
  navigator.clipboard.writeText(codeBlock.innerText)
}

function getChildByTagName(element, tagName) {
  return Array.from(element.children).find((child) => child.tagName === tagName);
}
