let quotes = [
    'Love For All, Hatred For None.',
    'Change the world by being yourself.',
    'Every moment is a fresh beginning.',
    'Never regret anything that made you smile.',
    'Die with memories, not dreams.',
    'Aspire to inspire before we expire.',
    'Everything you can imagine is real.',
    'Simplicity is the ultimate sophistication.',
    'Whatever you do, do it well.',
    'What we think, we become.'
]


function changeQuote() {
    let randomQuote = Math.floor(Math.random() * (quotes.length));
    document.querySelector('h3').innerHTML = quotes[randomQuote];
}