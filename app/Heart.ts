export class Heart {
    count = 0;

    constructor(id) {
        const heart = document.getElementById(id);
        const text = heart.querySelector('.heart-text');
        const sayings = [
            '璐璐',
            '我会',
            '爱你',
            '一生',
            '一世',
        ];

        heart.addEventListener('click', () => {
            this.addText(text, sayings);
        });
    }

    getText(sayings) {
        const selection = this.count;
        this.count++;
        if(this.count>= sayings.length) {
            this.count = 0;
        }
        return sayings[selection];
    }

    addText(container, sayings) {
        const str = this.getText(sayings);
        const words = str.split(' ');

        container.innerHTML = '';

        words.forEach(word => {
            const span = document.createElement('span');
            span.innerHTML = word;
            container.appendChild(span);
        });

        return container;
    }
}

// const heartContainer = new Heart('heart-container');
