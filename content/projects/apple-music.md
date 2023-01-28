---
title: "Apple Music Case Study"

metaDesc: "Redesigning mixes, radio, and playlists for the modern music experience."

date: "Nov 2021"

tags:
    - medium
    - figma
    - ux/ui
    - case study
    - design
---

# Case Study: Mixing Up Apple Music

By [Daniel Wei](https://medium.com/@danielwei15) on Medium

![Apple Music Case Study](https://miro.medium.com/max/1400/1*RtiiRvQ49Pi8CkRmHyEXeA.webp)

Apple invented the playlist almost two decades ago to put control of music back in the consumers’ hands. But in the two decades since, the sheer amount of music available to us has exploded. Keeping track of all the music you love has become a chore — not entertainment. Faced with this Paradox of Choice, most consumers have gravitated towards one of two “profiles” …

![Image](https://miro.medium.com/max/1400/1*LGICqUV2aniRKtfy2JHypA.webp)

Here are three example profiles:

**Thomas** is a librarian. He composes classical and digital film music in his free time, and cycles through four seasonal playlists that he updates with the latest appropriate tracks. But as those playlists eventually get out of date, he has to delete them and start over. And finding specific music he wants to listen to is a pain each time: normally, he’ll just shuffle one of the large seasonal playlists, and then skip every other song that comes up.

**Aliah** is a browser. She makes a new playlist every single time she’s about to listen to music. Her library is filled with hundreds of one-use, 10-song playlists, and she spends a few minutes before each listening session just adding music to the playlist she’s about to listen to. Her library is cluttered and music is hard to find — but she doesn’t have to constantly update massive, catch-all playlists.

Some people are both librarian and browser. **Audrey** adds all the K-pop she listens to into one of two massive playlists in her library: boy-group, or girl-group. But when it comes time to enjoy some music, she’ll create a new playlist and populate it with about twenty of her current faves from the two larger, overarching playlists. Methods like these yield the most mood-accurate music, but also take the most time to maintain: investing effort not only in maintaining the library, but also in pulling subsets of the library out to listen to at particular moments.

**All of these have one problem in common**: heavy time investment, whether through maintaining or creating playlists — or both.

Of course, you could avoid all that with a radio, but — no one really listens to radio anymore, right? The reason: it’s never really playing the music you wanted to listen to.

When’s the last time you used one of these?

The thing is, whether you’re a Librarian, a Browser, or somewhere in the middle, there’s now a significant time cost involved in listening to the music you actually want to listen to. And, if by chance, you find yourself listening to radio, you’ll find that there’s no time cost involved — but you’re probably not listening to what you actually had in mind.

Formally:

> _As a busy music listener, I want to be able to play music that matches a certain mood quickly and easily, but I can’t do that well because…_
>
> Creating custom playlists from your library from scratch is time-consuming and tedious.
>
> Playing existing playlists can be hit-or-miss, and generally don’t match the user’s need for a specific mood.

The solution: the best of both radios and playlists: an endless stream of music tailored to your mood, sourced from your Library and recommendations.

I’ll call it **Mixes.**

![Image](https://miro.medium.com/max/1400/1*THOgvSqgIecV4bQq0-Clgw.webp)

# **Part 1:** Radios, Mixes, and Stations.

Apple Music, weirdly enough, has Radio. Not a single person I know that uses Apple Music uses it; in fact, most of those that I interviewed were barely aware that it even existed. And much like an actual Radio, the topic of the stream generally has no bearing on the music I actually want to listen to.

By contrast, Apple-mixed playlists like the “Chill Mix” and “Get Up! Mix,” which half of my interviewees at least occasionally used, were cited as “incredibly hard to find” — buried in an ever-shifting position somewhere in the “Listen Now” page, alongside Apple Music’s Stations.

Stations, unlike Radio stations or Mixes, are infinite feeds of music that are generated from some source: like a genre, artist, or your Library. Not only are they hard to find, but their access points are scattered across the app, from a genre page to an artist page to your Listen Now, making you really hunt down what you’re looking for.

**To summarize:**

![Image](https://miro.medium.com/max/1400/1*ZyPuy1aQKouqAiEqQOtQow.webp)

This is pretty bad.

Bizarre. Let’s restructure it, shall we?

First of all, we’re going to combine Mixes and Stations. They serve much the same purpose, in that they provide a mix of music on a particular “topic,” whether that be a genre, artist, or a purpose. The weakness of Mixes, unlike Stations, is that the algorithm only updates them once a week, so instead we’ll combine them into one thing, which I’ll just call Mixes.

Now, we have a clear dichotomy between just two categories: Radio, and Mixes. The differences are obvious.

![Image](https://miro.medium.com/max/1400/1*7-rZIObjsHpJmefu-_b3Nw.webp)

Secondly, we’ll merge Radio in with the rest of the Discover page, since Discover also helps introduce users to the most trendy and in-fashion music on the app right now. Since Apple’s trying to make Apple Music a media center for everything remotely music-related, I doubt they’d get rid of Radio completely — but it is important to realize when users aren’t biting.

The space that Radio used to occupy, then, can be used to give our Mixes (and former Stations) a dedicated page, which the user can come back to again and again confidently without having to search through the Windows-8-like mess that is the Listen Now page.

![Image](https://miro.medium.com/max/1400/1*_-p-5SfchwHRxMWE5PxW7g.webp)

This, of course, brings us to the Mixes themselves.

# **Part 2:** The Mixes Page

![Image](https://miro.medium.com/max/1400/1*EKPn3blFMG0v3oyWq_2jvg.webp)

The bulk of our solution really lies here, because only Mixes — an endless stream of music sourced from your Library, with the queue customized to your current mood — can bridge the gap between Librarian and Browser. Mixes provide the lack of time investment of a radio, but with the same specificity as a large playlist, since both are essentially “subsets” of your larger Library of music.

The new Mixes page will have to incorporate everything that both the old Stations and Mixes did. In addition, it’ll centralize them in one place so that the user can get back to them easier.

To do this, I’ve placed the Mixes of old in the first row, and then generated two more rows below it based on user listening habits. The first is a list of Artist Mixes based on the user’s favorite artists; the second is a list of Genre Mixes based on the user’s favorite genres. All three of the mixes in these rows will immediately pull up a queue page with the relevant music, in the same way that Stations have always worked in Apple Music.

The elephant in the room, of course, is the top and foremost element: Your Mood Mix. In order to make the mixes relevant for the user, no matter the scenario, we have to provide a way for the user to specify a certain emotion as the basis of the generated music feed.

This was the largest problem with the original Your Station that Apple Music currently has — while it pulls up music from your library and Apple Recommendations, these songs were often at direct odds with the mood of music I want to listen to at the present moment. Thus, I’ve decided to merge that original Station into a Your Mood Mix, that’ll customize the station’s music to match your current mood. The only difficult part is, well, figuring out what your current mood is.

![Image](https://miro.medium.com/max/1400/1*YgpCmHvK6B9IbTXlkQML6A.webp)

This control interface is thus the cornerstone of the Your Mood Mix feature. It needs to be vague enough that a clueless user can specify a reasonably accurate emotion; accurate enough to not clash with what the user is expecting; fine-grained enough to specify exactly what’s on your mind; and easy enough to quickly set and forget without overwhelming the user.

I eventually settled on a 5x5 grid of touch-able squares, with the y-axis specifying the positivity of emotion (sad-happy), and the x-axis specifying the intensity of emotion (calm-energetic). To specify what you’re looking for, just tap a few squares in the area you’re looking for.

To create it, I cast around for some research. Two articles in particular were useful, and I attach them here for your reference:

-   _Michael Nuzzolo’s_ Music Mood Classification in the Tufts University ECE Design Handbook: [https://bit.ly/3xAH3cE](https://bit.ly/3xAH3cE)
-   _Shuxin Zhao’s_ Explore the Music World: Categorize Music by Mood in Georgetown University’s CCTP-607: Leading Ideas in Technology: AI to The Cloud course. [https://bit.ly/3d2HK4Y](https://bit.ly/3d2HK4Y)

Both sources reference Psychologist Robert Thayer’s traditional model of mood, which categorizes mood on the same two-axis scale. The only difference here is wording: instead of asking what mood the user is, I want to know what mood of music they want to hear. This is because there may be a drastic difference between the two: when feeling down, some people want to hear happy music to rejuvenate themselves, for instance, while others prefer to hear music that matches their own bleak mood.

Now, we have a page dedicated to Mixes, queuing up mood-accurate music to whatever needs the user has. Our only remaining task is to refine the queue page itself.

![Image](https://miro.medium.com/max/1400/1*wmRs_6ooB_Rw1BFeXq1ijw.webp)

# **Part 3:** Queues and the Play Page

By default, the queue/play screen is a dialog that slides up and floats independently of whatever screen “sourced” it into being. This is a design precedent that I respect — thus separating, for instance, the mood specification dialog from the queue page, so that the only thing on the Queue page indicating it came from a Mix is the description text that specifies exactly that.

However, in order to let the algorithm that serves up the music in a mix do a better job, it’s important to “train” it — that is, provide user feedback. Currently, you can click on the context menu of any song when it’s playing, and then near the bottom, you’ll see two tiny buttons: Love, and Suggest Less Like This.

These two buttons are so incredibly well hidden that some of those I interviewed that had used the app for years had not realized it was there.

Thus, to improve visibility and make it easier for the user to provide feedback, I introduced two slight changes to the Queue/Play screens — changes that are uniform across the app, no matter what calls this screen into existence.

The first is a much larger Love and Dislike button in the context menu, simply so that users see it. These will be paired in the same sub-section as Generate Mix — a rephrasing of “Create Station,” which does much the same thing: create a new Mix based on the current song.

![Image](https://miro.medium.com/max/1400/1*chrYXvDayBYb_R8q1rT7aA.webp)

The second change is inspired by Instagram. If you double tap the album artwork on the currently playing song on the Play Page, it’ll automatically register the action as meaning that you love the song. If the song is an Apple Music recommendation, it’ll also add the song to your Library.

![Image](https://miro.medium.com/max/1400/1*PCC_j-_bl9MDRSc2TEy_ww.webp)

# **Conclusion**

Honestly, this whole project came out of my own serious frustrations with existing music apps.

The problem of time investment in Library maintenance isn’t relegated to Apple Music alone, but is a common problem for Spotify and Amazon Music users as well. The exception may be YouTube Music, whose experience centers around the algorithm first and not playlists — a change that makes it an increasingly popular choice today, since it takes almost no effort to maintain, and the magic of AutoPlay pulls up the music you want anyway.

The only issue with it is that, like Apple Music, it only provides a few default moods. Apple Music’s implementation of a grid-based dialog that would allow the user to specify their own Mood Mix, then, would be a truly innovative leg up on every other major competitor, even the most algorithmically-based one out there.

Should Apple ever implement this, I will be the first to finally cancel my YouTube Premium subscription.

# Full Demo

**Full Figma Prototype:** [https://bit.ly/3rtChwm](https://bit.ly/3rtChwm)
