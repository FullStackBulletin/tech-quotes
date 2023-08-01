export type AuthorDescription =
  'Artist' |
  'Author' |
  'Composer' |
  'Computer Scientist' |
  'Director' |
  'Engineer' |
  'Entrepreneur' |
  'Hacker' |
  'Historian' |
  'Inventor' |
  'Linguist' |
  'Journalist' |
  'Mathematician' |
  'Military Officer' |
  'Physicist' |
  'Scientist' |
  'Software Developer'

export interface RawQuote {
  text: string
  authorName: string
  authorDescription: AuthorDescription
  authorWiki?: `https://en.wikipedia.org/wiki/${string}`
}

export interface Author {
  id: string
  name: string
  description: AuthorDescription
  wiki?: `https://en.wikipedia.org/wiki/${string}`
  url: `${string}/authors/${string}.json`
}

export interface AuthorWithQuotes extends Author {
  quotes: Array<Omit<Quote, 'author'>>
}

export interface Quote {
  id: number
  text: string
  author: Author
  url: `${string}/quotes/${number}.json`
}

const quotes: RawQuote[] = [
  {
    text: 'Technology is anything that wasn\'t around when you were born',
    authorName: 'Alan Kay',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Kay'
  },
  {
    text: 'Any sufficiently advanced technology is equivalent to magic',
    authorName: 'Arthur C. Clarke',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Arthur_C._Clarke'
  },
  {
    text: 'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness',
    authorName: 'Mark Kennedy',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Mark_Kennedy'
  },
  {
    text: 'Just because something doesn\'t do what you planned it to do doesn\'t mean it\'s useless',
    authorName: 'Thomas Edison',
    authorDescription: 'Inventor',
    authorWiki: 'https://en.wikipedia.org/wiki/Thomas_Edison'
  },
  {
    text: 'It has become appallingly obvious that our technology has exceeded our humanity',
    authorName: 'Albert Einstein',
    authorDescription: 'Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    text: 'One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man',
    authorName: 'Elbert Hubbard',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Elbert_Hubbard'
  },
  {
    text: 'Technology is a word that describes something that doesn\'t work yet',
    authorName: 'Douglas Adams',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Adams'
  },
  {
    text: 'Humanity is acquiring all the right technology for all the wrong reasons',
    authorName: 'R. Buckminster Fuller',
    authorDescription: 'Inventor',
    authorWiki: 'https://en.wikipedia.org/wiki/R._Buckminster_Fuller'
  },
  {
    text: 'I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex',
    authorName: 'Kurt Vonnegut',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Kurt_Vonnegut'
  },
  {
    text: 'The human spirit must prevail over technology',
    authorName: 'Albert Einstein',
    authorDescription: 'Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    text: 'The great myth of our times is that technology is communication',
    authorName: 'Libby Larsen',
    authorDescription: 'Composer',
    authorWiki: 'https://en.wikipedia.org/wiki/Libby_Larsen'
  },
  {
    text: 'You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers',
    authorName: 'Walter Lippmann',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Walter_Lippmann'
  },
  {
    text: 'We are stuck with technology when what we really want is just stuff that works',
    authorName: 'Douglas Adams',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Adams'
  },
  {
    text: 'Technology made large populations possible; large populations now make technology indispensable',
    authorName: 'Joseph Krutch',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Joseph_Krutch'
  },
  {
    text: 'This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature',
    authorName: 'Don DeLillo',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Don_DeLillo'
  },
  {
    text: 'The real danger is not that computers will begin to think like men, but that men will begin to think like computers',
    authorName: 'Sydney Harris',
    authorDescription: 'Journalist',
    authorWiki: 'https://en.wikipedia.org/wiki/Sydney_Harris'
  },
  {
    text: 'If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner',
    authorName: 'Omar Bradley',
    authorDescription: 'Military Officer',
    authorWiki: 'https://en.wikipedia.org/wiki/Omar_Bradley'
  },
  {
    text: 'The art challenges the technology, and the technology inspires the art',
    authorName: 'John Lasseter',
    authorDescription: 'Director',
    authorWiki: 'https://en.wikipedia.org/wiki/John_Lasseter'
  },
  {
    text: 'Science and technology revolutionize our lives, but memory, tradition and myth frame our response',
    authorName: 'Arthur Schlesinger',
    authorDescription: 'Historian',
    authorWiki: 'https://en.wikipedia.org/wiki/Arthur_Schlesinger'
  },
  {
    text: 'The science of today is the technology of tomorrow',
    authorName: 'Edward Teller',
    authorDescription: 'Physicist',
    authorWiki: 'https://en.wikipedia.org/wiki/Edward_Teller'
  },
  {
    text: 'Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science',
    authorName: 'Ada Lovelace',
    authorDescription: 'Mathematician',
    authorWiki: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
  },
  {
    text: 'Software is like sex: It\'s better when it\'s free',
    authorName: 'Linus Torvalds',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
  },
  {
    text: 'Good programmers use their brains, but good guidelines save us having to think out every case',
    authorName: 'Francis Glassborow',
    authorDescription: 'Author'
  },
  {
    text: 'First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack',
    authorName: 'George Carrette',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/George_Charrette'
  },
  {
    text: 'There are two ways to write error-free programs; only the third one works',
    authorName: 'Alan J. Perlis',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_J._Perlis'
  },
  {
    text: 'That\'s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple',
    authorName: 'Steve Jobs',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Steve_Jobs'
  },
  {
    text: 'The function of good software is to make the complex appear to be simple',
    authorName: 'Grady Booch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Grady_Booch'
  },
  {
    text: 'I do not fear computers. I fear lack of them',
    authorName: 'Isaac Asimov',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Isaac_Asimov'
  },
  {
    text: 'Standards are always out of date.  That\'s what makes them standards',
    authorName: 'Alan Bennett',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Bennett'
  },
  {
    text: 'To iterate is human, to recurse divine',
    authorName: 'L. Peter Deutsch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/L._Peter_Deutsch'
  },
  {
    text: 'Computers are good at following instructions, but not at reading your mind',
    authorName: 'Donald Knuth',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Donald_Knuth'
  },
  {
    text: 'Never underestimate the bandwidth of a station wagon full of tapes hurtling down the highway',
    authorName: 'Andrew S. Tanenbaum',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum'
  },
  {
    text: 'Errors using inadequate data are much less than those using no data at all',
    authorName: 'Charles Babbage',
    authorDescription: 'Mathematician',
    authorWiki: 'https://en.wikipedia.org/wiki/Charles_Babbage'
  },
  {
    text: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important',
    authorName: 'Bill Gates',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Bill_Gates'
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute',
    authorName: 'Gerald Jay Sussman',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Gerald_Jay_Sussman'
  },
  {
    text: 'Code generation, like drinking alcohol, is good in moderation',
    authorName: 'Alex Lowe',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Alex_Lowe'
  },
  {
    text: 'Never trust a computer you can\'t throw out a window',
    authorName: 'Steve Wozniak',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Steve_Wozniak'
  },
  {
    text: 'The best way to predict the future is to implement it',
    authorName: 'David Heinemeier Hansson',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/David_Heinemeier_Hansson'
  },
  {
    text: 'UNIX is simple.  It just takes a genius to understand its simplicity',
    authorName: 'Dennis Ritchie',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
  },
  {
    text: 'Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration',
    authorName: 'Stan Kelly-Bootle',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Stan_Kelly-Bootle'
  },
  {
    text: 'I think computer viruses should count as life.  I think it says something about human nature that the only form of life we have created so far is purely destructive.  We\'ve created life in our own image',
    authorName: 'Stephen Hawking',
    authorDescription: 'Physicist',
    authorWiki: 'https://en.wikipedia.org/wiki/Stephen_Hawking'
  },
  {
    text: 'It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years',
    authorName: 'John Von Neumann',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/John_von_Neumann'
  },
  {
    text: 'Companies spend millions of dollars on firewalls, encryption and secure access devices, and it\'s money wasted, because none of these measures address the weakest link in the security chain',
    authorName: 'Kevin Mitnick',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Kevin_Mitnick'
  },
  {
    text: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    authorName: 'Alan Turing',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Turing'
  },
  {
    text: 'Technology feeds on itself. Technology makes more technology possible',
    authorName: 'Alvin Toffler',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Alvin_Toffler'
  },
  {
    text: 'To err is human, but to really foul things up you need a computer',
    authorName: 'Paul Ehrlich',
    authorDescription: 'Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Paul_Ehrlich'
  },
  {
    text: 'The difference between theory and practice is that in theory, there is no difference between theory and practice',
    authorName: 'Richard Moore',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Richard_Moore'
  },
  {
    text: 'Computers are useless.  They can only give you answers',
    authorName: 'Pablo Picasso',
    authorDescription: 'Artist',
    authorWiki: 'https://en.wikipedia.org/wiki/Pablo_Picasso'
  },
  {
    text: 'Computers are like Old Testament gods; lots of rules and no mercy',
    authorName: 'Joseph Campbell',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Joseph_Campbell'
  },
  {
    text: 'In C++ it\'s harder to shoot yourself in the foot, but when you do, you blow off your whole leg',
    authorName: 'Bjarne Stroustrup',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Bjarne_Stroustrup'
  },
  {
    text: "It's still magic even if you know how it's done",
    authorName: 'Terry Pratchett',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Terry_Pratchett'
  },
  {
    text: 'The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense',
    authorName: 'E.W. Dijkstra',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/E._W._Dijkstra'
  },
  {
    text: "It's supposed to be automatic, but actually you have to push this button",
    authorName: 'John Brunner',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/John_Brunner'
  },
  {
    text: 'Technology is best when it brings people together',
    authorName: 'Matt Mullenweg',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Matt_Mullenweg'
  },
  {
    text: 'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past',
    authorName: 'Tim Berners-Lee',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee'
  },
  {
    text: 'It\'s not a faith in technology. It\'s faith in people',
    authorName: 'Steve Jobs',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Steve_Jobs'
  },
  {
    text: 'Technology is a useful servant but a dangerous master',
    authorName: 'Christian Lous Lange',
    authorDescription: 'Historian',
    authorWiki: 'https://en.wikipedia.org/wiki/Christian_Lous_Lange'
  },
  {
    text: 'Programming is the art of algorithm design and the craft of debugging errant code',
    authorName: 'Ellen Ullman',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Ellen_Ullman'
  },
  {
    text: 'If we want users to like our software, we should design it to behave like a likable person',
    authorName: 'Alan Cooper',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Cooper'
  },
  {
    text: 'Everybody should learn to program a computer because it teaches you how to think',
    authorName: 'Steve Jobs',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Steve_Jobs'
  },
  {
    text: 'Software and cathedrals are much the same — first we build them, then we pray',
    authorName: 'Sam Redwine',
    authorDescription: 'Computer Scientist'
  },
  {
    text: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program',
    authorName: 'Linus Torvalds',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
  },
  {
    text: 'You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity',
    authorName: 'John Romero',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/John_Romero'
  },
  {
    text: 'Programming is learned by writing programs',
    authorName: 'Brian Kernighan',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Brian_Kernighan'
  },
  {
    text: 'The most important property of a program is whether it accomplishes the intention of its user',
    authorName: 'C.A.R. Hoare',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/C._A._R._Hoare'
  },
  {
    text: 'The best error message is the one that never shows up',
    authorName: 'Thomas Fuchs',
    authorDescription: 'Software Developer'
  },
  {
    text: 'There is always one more bug to fix',
    authorName: 'Ellen Ullman',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Ellen_Ullman'
  },
  {
    text: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code',
    authorName: 'Dan Salomon',
    authorDescription: 'Software Developer'
  },
  {
    text: 'If, at first, you do not succeed, call it version 1.0',
    authorName: 'Khayri R.R. Woulfe',
    authorDescription: 'Author'
  },
  {
    text: 'The best performance improvement is the transition from the nonworking state to the working state',
    authorName: 'J. Osterhout',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/John_Ousterhout'
  },
  {
    text: 'The most important single aspect of software development is to be clear about what you are trying to build',
    authorName: 'Bjarne Stroustrup',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Bjarne_Stroustrup'
  },
  {
    text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    authorName: 'Antoine de Saint-Exupery',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry'
  },
  {
    text: 'When to use iterative development? You should use iterative development only on projects that you want to succeed',
    authorName: 'Martin Fowler',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)'
  },
  {
    text: 'The best way to predict the future is to invent it',
    authorName: 'Alan Kay',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Kay'
  },
  {
    text: 'The most disastrous thing that you can ever learn is your first programming language',
    authorName: 'Alan Kay',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Kay'
  },
  {
    text: 'Make it work, make it right, make it fast',
    authorName: 'Kent Beck',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Kent_Beck'
  },
  {
    text: 'Java is to JavaScript what car is to Carpet',
    authorName: 'Chris Heilmann',
    authorDescription: 'Software Developer'
  },
  {
    text: 'Experience is the name everyone gives to their mistakes',
    authorName: 'Oscar Wilde',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Oscar_Wilde'
  },
  {
    text: 'First, solve the problem. Then, write the code',
    authorName: 'John Johnson',
    authorDescription: 'Software Developer'
  },
  {
    text: 'Optimism is an occupational hazard of programming: feedback is the treatment',
    authorName: 'Kent Beck',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Kent_Beck'
  },
  {
    text: 'Simple things should be simple, complex things should be POSSIBLE',
    authorName: 'Alan Kay',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Kay'
  },
  {
    text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    authorName: 'Martin Golding',
    authorDescription: 'Software Developer'
  },
  {
    text: "Programming is not about typing, it's about thinking",
    authorName: 'Rich Hickey',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Rich_Hickey'
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    authorName: 'Martin Fowler',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Martin_Fowler'
  },
  {
    text: 'Talk is cheap. Show me the code',
    authorName: 'Linus Torvalds',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
  },
  {
    text: 'The computer was born to solve problems that did not exist before',
    authorName: 'Bill Gates',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Bill_Gates'
  },
  {
    text: 'The amateur software engineer is always in search of magic',
    authorName: 'Grady Booch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Grady_Booch'
  },
  {
    text: 'The best designers will use many design patterns that dovetail and intertwine to produce a greater whole',
    authorName: 'Erich Gamma',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Erich_Gamma'
  },
  {
    text: 'If it\'s not tested, it\'s broken',
    authorName: 'Bruce Eckel',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Bruce_Eckel'
  },
  {
    text: 'Give users what they actually want, not what they say they want',
    authorName: 'Kathy Sierra',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Kathy_Sierra'
  },
  {
    text: 'Debugging is like being the detective in a crime movie where you are also the murderer',
    authorName: 'Filipe Fortes',
    authorDescription: 'Software Developer'
  },
  {
    text: 'Computing is kind of a mess. Your computer doesn\'t know where you are. It doesn\'t know what you\'re doing. It doesn\'t know what you know',
    authorName: 'Larry Page',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Larry_Page'
  },
  {
    text: 'JavaScript is the world\'s most misunderstood programming language',
    authorName: 'Douglas Crockford',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Crockford'
  },
  {
    text: 'The cleaner and nicer the program, the faster it\'s going to run. And if it doesn\'t, it\'ll be easy to make it fast',
    authorName: 'Joshua Bloch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joshua_Bloch'
  },
  {
    text: 'Often, the most striking and innovative solutions come from realizing that your concept of the problem was wrong',
    authorName: 'Eric S. Raymond',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Eric_S._Raymond'
  },
  {
    text: 'It is often easier to ask for forgiveness than to ask for permission',
    authorName: 'Grace Hopper',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Grace_Hopper'
  },
  {
    text: 'You can divide our industry into two kinds of people: those who want to go work for a company to make it successful, and those who want to go work for a successful company',
    authorName: 'Jamie Zawinski',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Jamie_Zawinski'
  },
  {
    text: 'A language that doesn\'t affect the way you think about programming is not worth knowing',
    authorName: 'Alan Perlis',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Perlis'
  },
  {
    text: 'In the practical world of computing, it is rather uncommon that a program, once it performs correctly and satisfactorily, remains unchanged forever',
    authorName: 'Niklaus Wirth',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Niklaus_Wirth'
  },
  {
    text: 'Much of my work has come from being lazy',
    authorName: 'John Backus',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/John_Backus'
  },
  {
    text: 'For much of the Internet, the shortest path between two points doesn\'t exist',
    authorName: 'Kevin Poulsen',
    authorDescription: 'Hacker',
    authorWiki: 'https://en.wikipedia.org/wiki/Kevin_Poulsen'
  },
  {
    text: 'Creativity comes from applying things you learn in other fields to the field you work in',
    authorName: 'Aaron Swartz',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Aaron_Swartz'
  },
  {
    text: 'In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders',
    authorName: 'Douglas Crockford',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Crockford'
  },
  {
    text: 'This is why I loved technology: if you used it right, it could give you power and privacy',
    authorName: 'Cory Doctorow',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Cory_Doctorow'
  },
  {
    text: 'Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.',
    authorName: 'Alan Perlis',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Alan_Perlis'
  },
  {
    text: 'If you can\'t understand the spec for a new technology, don\'t worry: nobody else will understand it either, and the technology won\'t be that important',
    authorName: 'Joel Spolsky',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joel_Spolsky'
  },
  {
    text: 'Just because something is a standard doesn\'t mean it is the right choice for every application. Like XML, for example',
    authorName: 'Douglas Crockford',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Crockford'
  },
  {
    text: 'To solve an interesting problem, start by finding a problem that is interesting to you',
    authorName: 'Eric S. Raymond',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Eric_S._Raymond'
  },
  {
    text: 'If you\'re not doing some things that are crazy, then you\'re doing the wrong things',
    authorName: 'Larry Page',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Larry_Page'
  },
  {
    text: 'We have to stop optimizing for programmers and start optimizing for users',
    authorName: 'Jeff Atwood',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Jeff_Atwood'
  },
  {
    text: 'Prolific programmers contribute to certain disaster',
    authorName: 'Niklaus Wirth',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Niklaus_Wirth'
  },
  {
    text: 'Any application that can be written in JavaScript, will eventually be written in JavaScript',
    authorName: 'Jeff Atwood',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Jeff_Atwood'
  },
  {
    text: 'Software is getting slower more rapidly than hardware becomes faster',
    authorName: 'Niklaus Wirth',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Niklaus_Wirth'
  },
  {
    text: 'Unix was not designed to stop you from doing stupid things, because that would also stop you from doing clever things',
    authorName: 'Douglas Gwyn',
    authorDescription: 'Software Developer'
  },
  {
    text: 'The most damaging phrase in the language is: "It\'s always been done that way"',
    authorName: 'Grace Hopper',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Grace_Hopper'
  },
  {
    text: 'Peers can be the best teachers, because they\'re the ones that remember what it\'s like to not understand',
    authorName: 'Peter Norvig',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Peter_Norvig'
  },
  {
    text: 'From then on, when anything went wrong with a computer, we said it had bugs in it',
    authorName: 'Grace Hopper',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Grace_Hopper'
  },
  {
    text: 'Many people tend to look at programming styles and languages like religions: if you belong to one, you cannot belong to others. But this analogy is another fallacy',
    authorName: 'Niklaus Wirth',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Niklaus_Wirth'
  },
  {
    text: 'It is hard to write even the smallest piece of code correctly',
    authorName: 'Joshua Bloch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joshua_Bloch'
  },
  {
    text: 'It isn\'t enough to think outside the box. Thinking is passive. Get used to acting outside the box',
    authorName: 'Tim Ferriss',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Tim_Ferriss'
  },
  {
    text: 'Once you get to naming your laptop, you know that you\'re really having a deep relationship with it',
    authorName: 'Cory Doctorow',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Cory_Doctorow'
  },
  {
    text: 'Common programmer thought pattern: there are only three numbers: 0, 1, and n',
    authorName: 'Joel Spolsky',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joel_Spolsky'
  },
  {
    text: 'There\'s a good part of Computer Science that\'s like magic. Unfortunately there\'s a bad part of Computer Science that\'s like religion',
    authorName: 'Hal Abelson',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Hal_Abelson'
  },
  {
    text: 'Smart data structures and dumb code works a lot better than the other way around',
    authorName: 'Eric S. Raymond',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Eric_S._Raymond'
  },
  {
    text: 'No computer is ever going to ask a new, reasonable question. It takes trained people to do that',
    authorName: 'Grace Hopper',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Grace_Hopper'
  },
  {
    text: 'Start out by making 100 users really happy, rather than a lot more users only a little happy',
    authorName: 'Paul Buchheit',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Paul_Buchheit'
  },
  {
    text: 'What is the most important thing you could be working on in the world right now? ... And if you\'re not working on that, why aren\'t you?',
    authorName: 'Aaron Swartz',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Aaron_Swartz'
  },
  {
    text: 'Teaching peers is one of the best ways to develop mastery',
    authorName: 'Jeff Atwood',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Jeff_Atwood'
  },
  {
    text: 'No one should do a job he can do in his sleep',
    authorName: 'Cory Doctorow',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Cory_Doctorow'
  },
  {
    text: 'Nobody is going to pour truth into your brain. It\'s something you have to find out for yourself',
    authorName: 'Noam Chomsky',
    authorDescription: 'Linguist',
    authorWiki: 'https://en.wikipedia.org/wiki/Noam_Chomsky'
  },
  {
    text: 'The computer revolution is a revolution in the way we think and in the way we express what we think',
    authorName: 'Hal Abelson',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Hal_Abelson'
  },
  {
    text: 'When you choose a language, you\'re choosing more than a set of technical trade-offs, you\'re choosing a community',
    authorName: 'Joshua Bloch',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joshua_Bloch'
  },
  {
    text: 'JavaScript is the only language that I\'m aware of that people feel they don\'t need to learn before they start using it',
    authorName: 'Douglas Crockford',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Douglas_Crockford'
  },
  {
    text: 'Almost everyone who has had an idea that\'s somewhat revolutionary or wildly successful was first told they\'re insane',
    authorName: 'Larry Page',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Larry_Page'
  },
  {
    text: 'One can steal ideas, but no one can steal execution or passion',
    authorName: 'Tim Ferriss',
    authorDescription: 'Author',
    authorWiki: 'https://en.wikipedia.org/wiki/Tim_Ferriss'
  },
  {
    text: 'If everything you do works, then you\'re not taking many risks and probably aren\'t innovating either',
    authorName: 'Paul Buchheit',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Paul_Buchheit'
  },
  {
    text: 'It turns out the Internet is this amazing resource for everyone who has access to it',
    authorName: 'Alexis Ohanian',
    authorDescription: 'Entrepreneur',
    authorWiki: 'https://en.wikipedia.org/wiki/Alexis_Ohanian'
  },
  {
    text: 'Being a young programmer today must be awful—you can choose 20 different programming languages, dozens of framework and operating systemsand you\'re paralyzed by choice',
    authorName: 'Joe Armstrong',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)'
  },
  {
    text: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them',
    authorName: 'Andrew Hunt',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Andy_Hunt_(author)'
  },
  {
    text: 'Testing leads to failure, and failure leads to understanding',
    authorName: 'Burt Rutan',
    authorDescription: 'Engineer',
    authorWiki: 'https://en.wikipedia.org/wiki/Burt_Rutan'
  },
  {
    text: 'Programming isn\'t about what you know; it\'s about what you can figure out',
    authorName: 'Chris Pine',
    authorDescription: 'Software Developer'
  },
  {
    text: 'If you optimize everything, you will always be unhappy',
    authorName: 'Donald Knuth',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Donald_Knuth'
  },
  {
    text: 'If debugging is the process of removing bugs, then programming must be the process of putting them in',
    authorName: 'E.W. Dijkstra',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/E._W._Dijkstra'
  },
  {
    text: 'Coding isn\'t the poor handmaiden of design or analysis. Coding is where your fuzzy ideas awaken in the harsh dawn of reality',
    authorName: 'Kent Beck',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Kent_Beck'
  },
  {
    text: 'Inside every well-written large program is a well-written small program',
    authorName: 'C.A.R. Hoare',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/C._A._R._Hoare'
  },
  {
    text: 'So much complexity in software comes from trying to make one thing do two things',
    authorName: 'Ryan Singer',
    authorDescription: 'Software Developer'
  },
  {
    text: 'Code is like humor. When you have to explain it, it\'s bad',
    authorName: 'Cory House',
    authorDescription: 'Software Developer'
  },
  {
    text: 'The more I study, the more insatiable do I feel my genius for it to be',
    authorName: 'Ada Lovelace',
    authorDescription: 'Mathematician',
    authorWiki: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
  },
  {
    text: 'There are only two hard things in Computer Science: cache invalidation and naming things',
    authorName: 'Phil Karlton',
    authorDescription: 'Software Developer'
  },
  {
    text: 'All programming languages are shit. But the good ones fertilize your mind',
    authorName: 'Reginald Braithwaite',
    authorDescription: 'Software Developer'
  },
  {
    text: 'The question of whether Machines Can Think... is about as relevant as the question of whether Submarines Can Swim',
    authorName: 'E.W. Dijkstra',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/E._W._Dijkstra'
  },
  {
    text: 'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter',
    authorName: 'Eric S. Raymond',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Eric_S._Raymond'
  },
  {
    text: 'Programming languages, like pizza, come in only two sizes: too big and too small',
    authorName: 'Eric S. Raymond',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Eric_S._Raymond'
  },
  {
    text: 'Computer Science is no more about computers than astronomy is about telescopes',
    authorName: 'Richard E. Pattis',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Richard_E._Pattis'
  },
  {
    text: 'Languages that try to disallow idiocy become themselves idiotic',
    authorName: 'Rob Pike',
    authorDescription: 'Computer Scientist',
    authorWiki: 'https://en.wikipedia.org/wiki/Rob_Pike'
  },
  {
    text: 'Perl: The only language that looks the same before and after RSA encryption',
    authorName: 'Keith Bostic',
    authorDescription: 'Software Developer',
    authorWiki: 'https://en.wikipedia.org/wiki/Keith_Bostic_(software_engineer)'
  }
]

export default quotes
