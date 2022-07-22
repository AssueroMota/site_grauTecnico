

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
        const rotateX = ((+1)*5*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*20*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    // //function tirarmouse(event)
    // {
    //     card.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg)`;
    //     cardTransition();
    // }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 800ms';
        card.transitionId = setTimeout(() => {
        card.style.transition = '';},800);
    }

    function clickmouse(event)
    {
        cardTransition();
    }