// console.log(Math.random(10,20,70))

const Quotes = [
    {
        Name: '-- Oscar Wilde',
        Quote: '“Be yourself; everyone else is already taken.”'
    },
    {
        Name: '-- Frank Zappa',
        Quote: '“So many books, so little time.”'
    },
    {
        Name: '-- Marcus Tullius Cicero',
        Quote: '“A room without books is like a body without a soul.”.'
    },
    {
        Name: '-- Mae West',
        Quote: '“You only live once, but if you do it right, once is enough.”'
    },
    {
        Name: '-- Mahatma Gandhi ',
        Quote: '“Be the change that you wish to see in the world.”'
    },
    {
        Name: '-- Mark Twain',
        Quote: '“If you tell the truth, you dont have to remember anything”'
    },
    {
        Name: '-- Elbert Hubbard',
        Quote: '“A friend is someone who knows all about you and still loves you.”'
    },
    {
        Name: '-- Oscar Wilde ',
        Quote: '“To live is the rarest thing in the world. Most people exist, that is all.”'
    },
    {
        Name: '-- Andre Gide, Autumn Leaves',
        Quote: '“It is better to be hated for what you are than to be loved for what you are not.”'
    },
];

function getQoute() {

    let random = Math.random()
    let count = Math.floor((random * Quotes.length) + 1)
    let cartonaa =
        `<p>${Quotes[count].Name}</p>
        <h4> <i class="fa-solid fa-quote-right "></i></h4>

     <p>${Quotes[count].Quote}</p> `
    document.getElementById('first').innerHTML = cartonaa
}


