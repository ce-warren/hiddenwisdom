let poem_dic = {
    "Together": [1, 30, 71, 104, 116, 137, 174, 204, 223, 248, 258, 279, 302, 313, 314, 317, 344, 353, 379, 394, 417, 420, 433, 442, 464, 470, 513, 532, 590, 618, 648, 657, 663, 682, 686, 700, 723, 725, 733, 804, 812, 837, 848],
    "Forgive": [3, 14, 31, 60, 113, 138, 299, 341, 438, 439, 511, 566, 602, 636, 714, 736, 755, 832],
    "Point": [19, 20, 56, 57, 61, 62, 69, 70, 77, 78, 86, 87, 94, 95, 101, 102, 113, 114, 119, 120, 127, 128, 129, 113, 114, 160, 161, 179, 180, 196, 197, 214, 215, 228, 229, 234, 235, 271, 272, 292, 293, 302, 303, 316, 317, 339, 340, 356, 357, 380, 381, 397, 398, 412, 413, 429, 430, 454, 455, 469, 470, 475, 476, 481, 482, 506, 507, 511, 512, 516, 517, 523, 524, 533, 534, 570, 571, 576, 577, 604, 605, 638, 639, 651, 652, 661, 662, 693, 694, 711, 712, 719, 720, 732, 733, 747, 748, 790, 791, 801, 802, 819, 820, 838, 839, 847, 848, 854, 855, 881, 882, 890, 891],
    "Loved": [2, 13, 17, 22, 27, 35, 37, 42, 50, 52, 55, 61, 70, 96, 108, 109, 114, 223, 226, 233, 235, 253, 258, 267, 275, 293, 306, 322, 331, 332, 335, 358, 368, 381, 471, 478, 485, 499, 501, 502, 503, 504, 507, 541, 559, 570, 604, 619, 628, 660, 676, 701, 725, 746, 797, 827],
    "Downward Spiral": [14, 127, 128, 178, 194, 264, 371, 389, 493, 578, 580, 582, 584, 586, 588, 647, 666, 675],
    "Stay Instead": [33, 100, 115, 185, 296, 310, 358, 368, 418, 439, 455, 504, 511, 529, 552, 579, 620, 648, 681, 694, 724, 794, 866, 874, 879],
    "Better": [10, 16, 82, 89, 171, 178, 179, 265, 268, 335, 342, 384, 402, 604, 609, 705, 709, 814, 827],
    "Translation": [39, 246, 256, 361, 364, 373, 404, 413, 460, 567, 610, 619, 828, 829, 855]
};

let len = 891;
let clicks = 0;

// function replacePoem(id) {
//     clicks ++;
//     setTimeout( function() {
//         clicks ++;
//     }, 500);
//     setTimeout( function() {
//         if (clicks % 2 != 0) {
//             for (let poem in poem_dic) {
//                 document.getElementById(poem).classList.remove('selected');
//             };
//             document.getElementById(id).classList.add('selected');
//             let words = document.getElementsByClassName('word');
//             for (let i = 0; i < words.length; i++) {
//                 let word = words[i];
//                 if (word.classList.contains('on')) {
//                     word.classList.remove('on');
//                     word.classList.add('off');
//                 };
//             };
//             for (let num of poem_dic[id]) {
//                 let word = document.getElementById(num.toString());
//                 word.classList.remove('off');
//                 word.classList.add('on');
//             };
//         };
//     }, 200);
// };

// function addPoem(id) {
//     document.getElementById(id).classList.add('selected');
//     for (let num of poem_dic[id]) {
//         let word = document.getElementById(num.toString());
//         if (word.classList.contains('off')) {
//             word.classList.remove('off');
//             word.classList.add('on');
//         };
//     };
// };

function replacePoem(id) {
    clicks ++;
    setTimeout( function() {
        clicks ++;
    }, 500);
    setTimeout( function() {
        if (clicks % 2 != 0) {
            for (let poem in poem_dic) {
                document.getElementById(poem).classList.remove('selected');
            };
            document.getElementById(id).classList.add('selected');
            let words = document.getElementsByClassName('word');
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word.classList.contains('on')) {
                    word.classList.remove('on');
                    word.classList.add('off');
                };
                if (word.classList.contains('fade1')) {
                    word.classList.remove('fade1');
                    word.classList.add('off');
                };
                if (word.classList.contains('fade2')) {
                    word.classList.remove('fade2');
                    word.classList.add('off');
                };
                if (word.classList.contains('fade3')) {
                    word.classList.remove('fade3');
                    word.classList.add('off');
                };
                if (word.classList.contains('fade4')) {
                    word.classList.remove('fade4');
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
    document.getElementById(id).classList.add('selected');
    for (let i = 1; i <= len; i ++) {
        let word = document.getElementById(i.toString());
        if (poem_dic[id].includes(i)) {
            if (word.classList.contains('off')) {
                word.classList.remove('off');
                word.classList.add('on');
            }
            else if (word.classList.contains('fade1')) {
                word.classList.remove('fade1');
                word.classList.add('on');
            }
            else if (word.classList.contains('fade2')) {
                word.classList.remove('fade2');
                word.classList.add('on');
            }
            else if (word.classList.contains('fade3')) {
                word.classList.remove('fade3');
                word.classList.add('on');
            }
            else if (word.classList.contains('fade4')) {
                word.classList.remove('fade4');
                word.classList.add('on');
            }
        }
        else {
            if (word.classList.contains('fade4')) {
                word.classList.remove('fade4');
                word.classList.add('off');
            }
            else if (word.classList.contains('fade3')) {
                word.classList.remove('fade3');
                word.classList.add('fade4');
            }
            else if (word.classList.contains('fade2')) {
                word.classList.remove('fade2');
                word.classList.add('fade3');
            }
            else if (word.classList.contains('fade1')) {
                word.classList.remove('fade1');
                word.classList.add('fade2');
            }
            else if (word.classList.contains('on')) {
                word.classList.remove('on');
                word.classList.add('fade1');
            };
        };
    };
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

for (let poem in poem_dic) {
    let p = document.createElement('div');
    p.classList.add('button');
    p.id = poem;
    p.innerHTML = poem;
    p.addEventListener('click', function() {replacePoem(p.id)});
    p.addEventListener('dblclick', function() {addPoem(p.id)});
    document.getElementById('buttons-inner').appendChild(p);
};