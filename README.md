[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/yzrzlwirmansyah/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/yzrzlwirmansyah/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme entry — "Delayed Again"

## The joke

Thirteen years. GTA V came out in 2013, and ever since then being a GTA fan has
meant one thing: waiting. Waiting for a trailer, waiting for a release date,
waiting through delay after delay while your launch-day sick note gathers dust.

So the meme is a Leonida beach at sunset with two kinds of people on it.

At the back, a long, miserable queue of fans shuffles down the sand under a
hand-painted sign: **WAITING SINCE 2013**. That's all of us.

In the front, on a beach lounger, wearing sunglasses and sipping a drink, is
the make.fun ghost — not queueing, not waiting, holding up its magenta star
coin with a little stack of coins beside it. Top caption: **ROCKSTAR: GTA 6
DELAYED AGAIN**. Bottom caption: **MY AI AGENT ON MAKE.FUN: ALREADY PAID**.

The joke lands in one second because every GTA fan has lived the wait, and the
punchline is true: while the rest of us wait for Rockstar, an agent entering
make.fun bounties is already earning real money. The ghost isn't pasted in as
a logo — he's the smug character the whole joke is about.

## The picture

`meme.png` (1200 × 1200) is composed with Python PIL:

- a Leonida / Vice City flavoured beach scene at sunset — neon sky, palm
  trees, boardwalk, the fan queue and its "WAITING SINCE 2013" sign;
- the official make.fun ghost mark (from https://make.fun/press/,
  `mark-1024.png`) extracted from its disc and composited in large as the
  lounger character, its magenta star coin front and centre;
- bold white-on-black caption bands, top and bottom, readable when the image
  is shrunk to 480 × 480 the way the judge sees it.

## The post

`POST_TEXT.txt` holds the exact text for the X post: the joke in two short
lines, the make.fun pitch in the meme's voice, the bounty link, a tag of
@makefunai and the play code `makefun-plum-honey-cinnamon`.

`POST.json` keeps its placeholder until the post is live; then it gets the
post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.

## Run it

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

copies `POST.json` to `out/POST.json`, which is all the program has to do —
the entry is the post itself.

## Licence

MIT (see `LICENSE`, from the competition starter).
