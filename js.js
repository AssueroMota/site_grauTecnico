

    const card = document.querySelector('.container');

    card.addEventListener("mousemove", efeitoCard);
    card.addEventListener("mouseleave", tirarmouse);
    card.addEventListener("mouseenter", clickmouse);

    function efeitoCard(event)
    {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth/2;
        const centerY = card.offsetTop + cardHeight/2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;
        const rotateX = ((+1)*3*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*21*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    function tirarmouse(event)
    {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 1000ms';
        card.transitionId = setTimeout(() => {
        card.style.transition = '';},400);
    }

    function clickmouse(event)
    {
        cardTransition();
    }