
  function generateParticles(n) {
    let value = `${getRandom(2000)}px ${getRandom(2000)}px #000`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2000)}px ${getRandom(2000)}px #000`;
    }
    return value;
  }

  function generateStars(n) {
    let value = `${getRandom(2000)}px ${getRandom(2000)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2000)}px ${getRandom(2000)}px #fff`;
    }
    return value;
  }

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function initBG() {
    let particlesSmall = generateParticles(700);
    let particlesMedium = generateParticles(200);
    let particlesLarge = generateParticles(100);
    let particles1 = document.getElementById('particles1');
    let particles2 = document.getElementById('particles2');
    let particles3 = document.getElementById('particles3');

    if (particles1) {
      particles1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${particlesSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles3) {
      particles3.style.cssText = `
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    let starsSmall = generateStars(500);
    let starsMedium = generateStars(200);
    let starsLarge = generateStars(100);
    let stars1 = document.getElementById('stars1');
    let stars2 = document.getElementById('stars2');
    let stars3 = document.getElementById('stars3');

    if (stars1) {
      stars1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      `;
    }
  }

  document.addEventListener('astro:after-swap', initBG);
  initBG();