import Section from 'components/Home/Section'
import React from 'react'

export default function Home() {

  const items = [
    {
      id: 0,
      title: "Metallica Mix",
      description: "Disturbed, Rammstein, Five Finger Death Punch, ve daha fazlası",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/2ye2Wgw4gimLv2eAKyk1NB/tr/default",
      type: "album",
    },
    {
      id: 1,
      title: "Rock Mix",
      description: "Malt, Ogün Sanlısoy, Talking Heads, ve daha fazlası",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/rock/4acjV5gpm2vHLWpGvQ77DL/tr/default",
      type: "album"
    },
    {
      id: 2,
      title: "Chill techno vibes",
      description: "Only the best Techno tracks. Nothing less, nothing more. Don't forget to follow the playlist. Enjoy! 🖤🎉 |  ",
      image: "https://i.scdn.co/image/ab67706c0000da843396e87663336fc998cd125d",
      type: "album"
    },
    {
      id: 3,
      title: "Psytrance Supernova",
      description: "Lose yourself in the cosmic spheres of Psytrance.",
      image: "https://i.scdn.co/image/ab67706f00000002caf104e283ca7a598861a470",
      type: "album"
    },
    {
      id: 4,
      title: "Pentagram",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab6761610000f17804ffe7847c4fe6f506cc05e0",
      type: "artist"
    }
  ]


  return (
    <div className='grid gap-y-8'>
      <Section
        title="Çalma listelerin"
        more="/"
        items={items}
      />

      <Section
        title="Kaldığın yerden devam et"
        more="/"
        items={items}
      />

      <Section
        title="Yakınlarda Çalınanlar"
        more="/"
        items={items}
      />

      <Section
        title="Yeni bölümler"
        more="/"
        items={items}
      />

      <Section
        title="Beğendiklerin ve dahası"
        more="/"
        items={items}
      />
    </div>

  )
}
