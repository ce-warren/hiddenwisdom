let poem_dic = {
    'One':[4, 25, 65],
    'Two':[3, 178, 360]
};

let clicks = 0;

function replacePoem(id) {
    clicks ++;
    setTimeout( function() {
        clicks ++;
    }, 500);
    setTimeout( function() {
        if (clicks % 2 != 0) {
            let words = document.getElementsByClassName('word');
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word.classList.contains('on')) {
                    word.classList.remove('on');
                    word.classList.add('off');
                };
            };
            for (let num of poem_dic[id]) {
                let word = document.getElementById(num.toString());
                word.classList.remove('off');
                word.classList.add('on');
            };
        };
    }, 200);
};

function addPoem(id) {
    for (let num of poem_dic[id]) {
        let word = document.getElementById(num.toString());
        if (word.classList.contains('off')) {
            word.classList.remove('off');
            word.classList.add('on');
        };
    };
};

let poems = document.getElementsByClassName('button');
for (let i = 0; i < poems.length; i++) {
    let poem = poems[i];
    let id = poem.id;
    poem.addEventListener('click', function() {replacePoem(id, poem)});
    poem.addEventListener('dblclick', function() {addPoem(id)});
};