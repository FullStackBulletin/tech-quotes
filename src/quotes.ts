type AuthorDescription =
  'Artist' |
  'Author' |
  'Composer' |
  'Computer Scientist' |
  'Director' |
  'Entrepreneur' |
  'Historian' |
  'Inventor' |
  'Journalist' |
  'Mathematician' |
  'Military Officer' |
  'Physicist' |
  'Scientist' |
  'Software developer'

interface Quote {
  text: string
  author: string
  authorDescription: AuthorDescription
  authorUrl?: `https://en.wikipedia.org/wiki/${string}`
}

const quotes: Quote[] = [
  {
    text: 'Technology is anything that wasn\'t around when you were born',
    author: 'Alan Kay',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Alan_Kay'
  },
  {
    text: 'Any sufficiently advanced technology is equivalent to magic',
    author: 'Arthur C. Clarke',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Arthur_C._Clarke'
  },
  {
    text: 'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness',
    author: 'Mark Kennedy',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Mark_Kennedy'
  },
  {
    text: 'Just because something doesn\'t do what you planned it to do doesn\'t mean it\'s useless',
    author: 'Thomas Edison',
    authorDescription: 'Inventor',
    authorUrl: 'https://en.wikipedia.org/wiki/Thomas_Edison'
  },
  {
    text: 'It has become appallingly obvious that our technology has exceeded our humanity',
    author: 'Albert Einstein',
    authorDescription: 'Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    text: 'One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man',
    author: 'Elbert Hubbard',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Elbert_Hubbard'
  },
  {
    text: 'Technology is a word that describes something that doesn\'t work yet',
    author: 'Douglas Adams',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Douglas_Adams'
  },
  {
    text: 'Humanity is acquiring all the right technology for all the wrong reasons',
    author: 'R. Buckminster Fuller',
    authorDescription: 'Inventor',
    authorUrl: 'https://en.wikipedia.org/wiki/R._Buckminster_Fuller'
  },
  {
    text: 'I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex',
    author: 'Kurt Vonnegut',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Kurt_Vonnegut'
  },
  {
    text: 'The human spirit must prevail over technology',
    author: 'Albert Einstein',
    authorDescription: 'Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    text: 'The great myth of our times is that technology is communication',
    author: 'Libby Larsen',
    authorDescription: 'Composer',
    authorUrl: 'https://en.wikipedia.org/wiki/Libby_Larsen'
  },
  {
    text: 'You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers',
    author: 'Walter Lippmann',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Walter_Lippmann'
  },
  {
    text: 'We are stuck with technology when what we really want is just stuff that works',
    author: 'Douglas Adams',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Douglas_Adams'
  },
  {
    text: 'Technology made large populations possible; large populations now make technology indispensable',
    author: 'Joseph Krutch',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Joseph_Krutch'
  },
  {
    text: 'This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature',
    author: 'Don DeLillo',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Don_DeLillo'
  },
  {
    text: 'The real danger is not that computers will begin to think like men, but that men will begin to think like computers',
    author: 'Sydney Harris',
    authorDescription: 'Journalist',
    authorUrl: 'https://en.wikipedia.org/wiki/Sydney_Harris'
  },
  {
    text: 'If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner',
    author: 'Omar Bradley',
    authorDescription: 'Military Officer',
    authorUrl: 'https://en.wikipedia.org/wiki/Omar_Bradley'
  },
  {
    text: 'The art challenges the technology, and the technology inspires the art',
    author: 'John Lasseter',
    authorDescription: 'Director',
    authorUrl: 'https://en.wikipedia.org/wiki/John_Lasseter'
  },
  {
    text: 'Science and technology revolutionize our lives, but memory, tradition and myth frame our response',
    author: 'Arthur Schlesinger',
    authorDescription: 'Historian',
    authorUrl: 'https://en.wikipedia.org/wiki/Arthur_Schlesinger'
  },
  {
    text: 'The science of today is the technology of tomorrow',
    author: 'Edward Teller',
    authorDescription: 'Physicist',
    authorUrl: 'https://en.wikipedia.org/wiki/Edward_Teller'
  },
  {
    text: 'Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science',
    author: 'Ada Lovelace',
    authorDescription: 'Mathematician',
    authorUrl: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
  },
  {
    text: 'Software is like sex: It\'s better when it\'s free',
    author: 'Linus Torvalds',
    authorDescription: 'Software developer',
    authorUrl: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
  },
  {
    text: 'Good programmers use their brains, but good guidelines save us having to think out every case',
    author: 'Francis Glassborow',
    authorDescription: 'Author'
  },
  {
    text: 'First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack',
    author: 'George Carrette',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/George_Charrette'
  },
  {
    text: 'There are two ways to write error-free programs; only the third one works',
    author: 'Alan J. Perlis',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Alan_J._Perlis'
  },
  {
    text: 'That\'s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple',
    author: 'Steve Jobs',
    authorDescription: 'Entrepreneur',
    authorUrl: 'https://en.wikipedia.org/wiki/Steve_Jobs'
  },
  {
    text: 'The function of good software is to make the complex appear to be simple',
    author: 'Grady Booch',
    authorDescription: 'Software developer',
    authorUrl: 'https://en.wikipedia.org/wiki/Grady_Booch'
  },
  {
    text: 'I do not fear computers. I fear lack of them',
    author: 'Isaac Asimov',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Isaac_Asimov'
  },
  {
    text: 'Standards are always out of date.  That\'s what makes them standards',
    author: 'Alan Bennett',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Alan_Bennett'
  },
  {
    text: 'To iterate is human, to recurse divine',
    author: 'L. Peter Deutsch',
    authorDescription: 'Software developer',
    authorUrl: 'https://en.wikipedia.org/wiki/L._Peter_Deutsch'
  },
  {
    text: 'Computers are good at following instructions, but not at reading your mind',
    author: 'Donald Knuth',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Donald_Knuth'
  },
  {
    text: 'Never underestimate the bandwidth of a station wagon full of tapes hurtling down the highway',
    author: 'Andrew S. Tanenbaum',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum'
  },
  {
    text: 'Errors using inadequate data are much less than those using no data at all',
    author: 'Charles Babbage',
    authorDescription: 'Mathematician',
    authorUrl: 'https://en.wikipedia.org/wiki/Charles_Babbage'
  },
  {
    text: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important',
    author: 'Bill Gates',
    authorDescription: 'Entrepreneur',
    authorUrl: 'https://en.wikipedia.org/wiki/Bill_Gates'
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute',
    author: 'Gerald Jay Sussman',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Gerald_Jay_Sussman'
  },
  {
    text: 'Code generation, like drinking alcohol, is good in moderation',
    author: 'Alex Lowe',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Alex_Lowe'
  },
  {
    text: 'Never trust a computer you can\'t throw out a window',
    author: 'Steve Wozniak',
    authorDescription: 'Entrepreneur',
    authorUrl: 'https://en.wikipedia.org/wiki/Steve_Wozniak'
  },
  {
    text: 'The best way to predict the future is to implement it',
    author: 'David Heinemeier Hansson',
    authorDescription: 'Entrepreneur',
    authorUrl: 'https://en.wikipedia.org/wiki/David_Heinemeier_Hansson'
  },
  {
    text: 'UNIX is simple.  It just takes a genius to understand its simplicity',
    author: 'Dennis Ritchie',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
  },
  {
    text: 'Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration',
    author: 'Stan Kelly-Bootle',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Stan_Kelly-Bootle'
  },
  {
    text: 'I think computer viruses should count as life.  I think it says something about human nature that the only form of life we have created so far is purely destructive.  We\'ve created life in our own image',
    author: 'Stephen Hawking',
    authorDescription: 'Physicist',
    authorUrl: 'https://en.wikipedia.org/wiki/Stephen_Hawking'
  },
  {
    text: 'It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years',
    author: 'John Von Neumann',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/John_von_Neumann'
  },
  {
    text: 'Companies spend millions of dollars on firewalls, encryption and secure access devices, and it\'s money wasted, because none of these measures address the weakest link in the security chain',
    author: 'Kevin Mitnick',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Kevin_Mitnick'
  },
  {
    text: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    author: 'Alan Turing',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Alan_Turing'
  },
  {
    text: 'Technology feeds on itself. Technology makes more technology possible',
    author: 'Alvin Toffler',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Alvin_Toffler'
  },
  {
    text: 'To err is human, but to really foul things up you need a computer',
    author: 'Paul Ehrlich',
    authorDescription: 'Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Paul_Ehrlich'
  },
  {
    text: 'The difference between theory and practice is that in theory, there is no difference between theory and practice',
    author: 'Richard Moore',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Richard_Moore'
  },
  {
    text: 'Computers are useless.  They can only give you answers',
    author: 'Pablo Picasso',
    authorDescription: 'Artist',
    authorUrl: 'https://en.wikipedia.org/wiki/Pablo_Picasso'
  },
  {
    text: 'Computers are like Old Testament gods; lots of rules and no mercy',
    author: 'Joseph Campbell',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Joseph_Campbell'
  },
  {
    text: 'In C++ it\'s harder to shoot yourself in the foot, but when you do, you blow off your whole leg',
    author: 'Bjarne Stroustrup',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/Bjarne_Stroustrup'
  },
  {
    text: "It's still magic even if you know how it's done",
    author: 'Terry Pratchett',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/Terry_Pratchett'
  },
  {
    text: 'The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense',
    author: 'E.W. Dijkstra',
    authorDescription: 'Computer Scientist',
    authorUrl: 'https://en.wikipedia.org/wiki/E._W._Dijkstra'
  },
  {
    text: "It's supposed to be automatic, but actually you have to push this button",
    author: 'John Brunner',
    authorDescription: 'Author',
    authorUrl: 'https://en.wikipedia.org/wiki/John_Brunner'
  }
]

export default quotes
