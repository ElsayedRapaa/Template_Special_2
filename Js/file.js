let the_Nav = document.querySelector('.nav'),
    the_List = document.querySelectorAll('.nav .list a'),
    my_Work = document.querySelector('.my-work'),
    the_Content = document.querySelector('.my-work .content'),
    the_Box = document.querySelectorAll('.my-work .box'),
    the_Text = document.querySelectorAll('.my-work .text'),
    the_Div = document.querySelectorAll('.my-work .text > div'),
    the_Icons = document.querySelectorAll('.my-work .text > div i'),
    the_Section = document.querySelectorAll('.my-work .option div');

// Hover in My Work
the_Box.forEach((box) => {
    box.addEventListener('mouseover', () => {
        the_Div.forEach((div) => {
            div.classList.add('animation');
        });
    });
    box.addEventListener('mouseleave', () => {
        the_Div.forEach((div) => {
            div.classList.remove('animation');
        });
    });
});

// Open Photo Portfolio in My Work
the_Icons.forEach((icon, index) => {

    icon.addEventListener('click', (e) => {

        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        the_Content.appendChild(overlay);

        let slide = document.createElement('div');
        slide.classList.add('slide');
        overlay.appendChild(slide);

        let img = document.createElement('img');
        img.src = e.target.parentNode.parentNode.parentNode.children[0].children[0].src;
        slide.appendChild(img);

        let arrow = document.createElement('i');
        let arrow2 = document.createElement('i');
        arrow.classList.add('fas');
        arrow.classList.add('fa-chevron-right');
        arrow.classList.add('arrow');
        arrow2.classList.add('fas');
        arrow2.classList.add('fa-chevron-left');
        arrow2.classList.add('arrow2');
        slide.appendChild(arrow2);
        slide.appendChild(arrow);

        let caption = document.createElement('div');
        caption.classList.add('caption');
        overlay.appendChild(caption);

        let p = document.createElement('p'),
            p_Text = document.createTextNode('Image ');
        p.appendChild(p_Text);

        let span1 = document.createElement('span'),
            span1_Text = document.createTextNode(index + 1);
        span1.appendChild(span1_Text);
        p.appendChild(span1);

        let the_Of = document.createTextNode(' of ');
        p.appendChild(the_Of);

        let span2 = document.createElement('span'),
            span2_Text = document.createTextNode(the_Icons.length);
        span2.appendChild(span2_Text);
        p.appendChild(span2);

        caption.appendChild(p);

        let icon2 = document.createElement('i');
        icon2.classList.add('fas');
        icon2.classList.add('fa-times');
        caption.appendChild(icon2);

        setTimeout(() => {
            overlay.classList.add('show');
        }, 200);

        icon2.onclick = function() {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 300ms';

            setTimeout(() => {
                overlay.remove();
            }, 300);
        };

        arrow.addEventListener('click', () => {

            span1_Text.textContent = parseInt(span1_Text.textContent) + 1;

            img.src = `./Img/portfolio-0${span1_Text.textContent}.jpg`;

            if (parseInt(span1_Text.textContent) == 6) {
                arrow.style.pointerEvents = 'none';
            } else {
                arrow2.style.pointerEvents = 'all';
            };

        });
        arrow2.addEventListener('click', () => {

            span1_Text.textContent = parseInt(span1_Text.textContent) - 1;

            img.src = `./Img/portfolio-0${span1_Text.textContent}.jpg`;

            if (parseInt(span1_Text.textContent) == 1) {
                arrow2.style.pointerEvents = 'none';
            } else {
                arrow.style.pointerEvents = 'all';
            };
        });
    });
});

// The Selected Photo
the_Section.forEach((sec) => {

    sec.addEventListener('click', (e) => {

        the_Section.forEach((sec) => {

            sec.classList.remove('active');

        });

        e.target.classList.add('active');

        the_Box.forEach((box) => {

            box.style.transform = 'scale(0)';
            box.style.transition = 'transform 300ms';

            setTimeout(() => {
                box.style.display = 'none';
            }, 300);

        });

        document.querySelectorAll(e.target.dataset.people).forEach((ele) => {
            ele.style.transform = 'scale(1)';
            ele.style.transition = 'transform 290ms';
            setTimeout(() => {
                ele.style.display = 'block';
            }, 301);
        });

        document.querySelectorAll(e.target.dataset.nature).forEach((ele) => {
            ele.style.transform = 'scale(1)';
            setTimeout(() => {
                ele.style.display = 'block';
            }, 301);
        });

        document.querySelectorAll(e.target.dataset.animals).forEach((ele) => {
            ele.style.transform = 'scale(1)';
            setTimeout(() => {
                ele.style.display = 'block';
            }, 301);
        });
    });
});

the_List.forEach((link) => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        the_List.forEach((link) => {

            link.classList.remove('active');

        });

        e.target.classList.add('active');

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let the_Sections = document.querySelectorAll('.section');

window.onscroll = function() {

    the_Sections.forEach((section) => {

        if (window.scrollY > section.offsetTop - 70) {

            the_List.forEach((link) => {

                link.classList.remove('active');

                if (link.dataset.section === section.id) {

                    link.classList.add('active');

                };
            });
        };
    });
};