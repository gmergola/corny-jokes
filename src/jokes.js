export const categories = [
  {
    id: 'food',
    label: 'Food',
    jokes: [
      { setup: 'What do you call cheese that isn’t yours?', punchline: 'Nacho cheese.' },
      { setup: 'What do you call a fake noodle?', punchline: 'An impasta.' },
      { setup: 'What did the grape say when it got stepped on?', punchline: 'Nothing, it just let out a little wine.' },
      { setup: 'Why did the coffee file a police report?', punchline: 'It got mugged.' },
      { setup: 'What’s orange and sounds like a parrot?', punchline: 'A carrot.' },
      { setup: 'Why don’t eggs tell jokes?', punchline: 'They’d crack each other up.' },
      { setup: 'Why did the cookie go to the doctor?', punchline: 'It was feeling crumby.' },
      { setup: 'What do you call a sad strawberry?', punchline: 'A blueberry.' },
    ],
  },
  {
    id: 'animals',
    label: 'Animals',
    jokes: [
      { setup: 'How does a penguin build its house?', punchline: 'Igloos it together.' },
      { setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear.' },
      { setup: 'What do you call a sleeping bull?', punchline: 'A bulldozer.' },
      { setup: 'Why do seagulls fly over the ocean?', punchline: 'Because it would be weird to fly over the bay.' },
      { setup: 'What do you call a dinosaur with an extensive vocabulary?', punchline: 'A thesaurus.' },
      { setup: 'What do you call a fish wearing a bowtie?', punchline: 'Sofishticated.' },
      { setup: 'Why are cats bad storytellers?', punchline: 'They only have one tail.' },
    ],
  },
  {
    id: 'science',
    label: 'Science & Nature',
    jokes: [
      { setup: 'Why can’t you trust an atom?', punchline: 'They make up everything.' },
      { setup: 'How do you organize a space party?', punchline: 'You planet.' },
      { setup: 'What does a cloud wear under its raincoat?', punchline: 'Thunderwear.' },
      { setup: 'What did the ocean say to the beach?', punchline: 'Nothing, it just waved.' },
      { setup: 'Why did the scarecrow win an award?', punchline: 'He was outstanding in his field.' },
      { setup: 'What did one volcano say to the other?', punchline: 'I lava you.' },
    ],
  },
  {
    id: 'everyday',
    label: 'Everyday Life',
    jokes: [
      { setup: 'Why don’t skeletons fight each other?', punchline: 'They don’t have the guts.' },
      { setup: 'Why did the bicycle fall over?', punchline: 'It was two tired.' },
      { setup: 'Why did the math book look so sad?', punchline: 'It had too many problems.' },
      { setup: 'Why are elevator jokes so good?', punchline: 'They work on so many levels.' },
      { setup: 'How do you make a tissue dance?', punchline: 'Put a little boogie in it.' },
      { setup: 'Why did the golfer bring two pairs of pants?', punchline: 'In case he got a hole in one.' },
      { setup: 'What do you call a factory that makes okay products?', punchline: 'A satisfactory.' },
      { setup: 'Why did the stadium get hot?', punchline: 'All the fans left.' },
    ],
  },
]

export const ALL = 'all'

export function jokesFor(categoryId) {
  if (categoryId === ALL) {
    return categories.flatMap((c) => c.jokes)
  }
  return categories.find((c) => c.id === categoryId).jokes
}
