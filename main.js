let poem_dic = {
    'One':[4, 9, 21, 75, 126],
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
    clearSelection();
};

let poems = document.getElementsByClassName('button');
for (let i = 0; i < poems.length; i++) {
    let poem = poems[i];
    let id = poem.id;
    poem.addEventListener('click', function() {replacePoem(id, poem)});
    poem.addEventListener('dblclick', function() {addPoem(id)});
};

function openAbout() {
    document.getElementById('more').removeEventListener('click', openAbout);
    document.getElementById('more').addEventListener('click', closeAbout);
    document.getElementById('about').classList.remove('closed');
    window.scrollTo(0,document.body.scrollHeight);
};

function closeAbout() {
    document.getElementById('more').removeEventListener('click', closeAbout);
    document.getElementById('more').addEventListener('click', openAbout);
    document.getElementById('about').classList.add('closed');
};

document.getElementById('more').addEventListener('click', openAbout);