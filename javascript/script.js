// user input
const r1 = document.querySelector('#div1')
const p1 = document.querySelector('#div2')
const s1 = document.querySelector('#div3')
// user input

// computer Output
const r = document.querySelector('.rock')
const p = document.querySelector('.paper')
const s = document.querySelector('.scissors')
// computer Output

const w = document.querySelector('.win')
const l = document.querySelector('.lose')
const t = document.querySelector('.tie')
const btn = document.querySelector('.btn')

const x = [
    1, // Rock
    2, // paper
    3, // Scissors
]
const z = x[Math.floor(Math.random() * x.length)]

function myFunction() {
    location.reload()
}

btn.onclick = function () {
    location.reload()
}

r1.onclick = function () {
    // rock
    r1.classList.toggle('r1active')
    if (z === 1) {
        t.classList.toggle('tactive')
        r.classList.toggle('ractive')
    }
    if (z === 2) {
        l.classList.toggle('lactive')
        p.classList.toggle('pactive')
        // console.log('Lose');
    }
    if (z === 3) {
        w.classList.toggle('wactive')
        s.classList.toggle('sactive')
        console.log('win');
    }
    setTimeout(myFunction , 3000);
}

p1.onclick = function () {
    // Paper
    p1.classList.toggle('p1active')
    if (z === 2) {
        t.classList.toggle('tactive')
        p.classList.toggle('pactive')
    }
    if (z === 3) {
        l.classList.toggle('lactive')
        s.classList.toggle('sactive')
        // console.log('Lose');
    }
    if (z === 1) {
        w.classList.toggle('wactive')
        r.classList.toggle('ractive')
        console.log('win');
    }
    setTimeout(myFunction , 3000);
}

s1.onclick = function () {
    // scissors
    s1.classList.toggle('s1active')
    if (z === 3) {
        t.classList.toggle('tactive')
        s.classList.toggle('sactive')
    }
    if (z === 1) {
        l.classList.toggle('lactive')
        r.classList.toggle('ractive')
        // console.log('Lose');
    }
    if (z === 2) {
        w.classList.toggle('wactive')
        p.classList.toggle('pactive')
        console.log('win');
    }
    setTimeout(myFunction , 3000);
}