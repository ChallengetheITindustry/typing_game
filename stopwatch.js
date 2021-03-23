'use strict';

{

    function changeWord() {
        word = words.splice([Math.floor(Math.random() * words.length)], 1)[0];
        target.textContent = word;
        count = 0;
    }

    const words = ['white', 'orange', 'green', 'black', 'blue', 'red'];
    let count = 0;
    let word;
    let startTime;
    let isPlaying = false;

    document.addEventListener('keydown', (e) => {
        if (isPlaying === true) {
            return;
        }
        if (e.key === 'j') {
            isPlaying = true;
            setTimeout(changeWord, 3000);
            target.textContent = '3';
            setTimeout(function () {
                target.textContent = '2';
                setTimeout(function () {
                    target.textContent = '1';
                }, 1000);
            }, 1000);

            startTime = Date.now();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key !== word[count]) {
            const body = document.querySelector('body')
            body.classList.add('warn')
            setTimeout(function () {
                body.classList.remove('warn');
            }, 80)
            return;
        }

        count++;
        target.textContent = '_'.repeat(count) + word.substring(count);

        if (count === word.length) {
            changeWord();

            if (words.length === 0) {
                const result = document.getElementById('result');
                const stopTime = ((Date.now() - startTime - 3000) / 1000).toFixed(2);
                target.textContent = `Finished!!`
                result.textContent = `${stopTime}seconds`


                const change = document.createElement('p');
                change.textContent = '3';
                setTimeout(function () {
                    change.textContent = '2';
                    setTimeout(function () {
                        change.textContent = '1';
                        setTimeout(function () {
                            document.location.reload();
                        }, 1000)
                    }, 1000);
                }, 1000);
                result.appendChild(change);
            }
        }

    })
}