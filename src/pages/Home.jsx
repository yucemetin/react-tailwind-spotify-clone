import Section from 'components/Home/Section'
import React from 'react'

export default function Home() {

  const items = [
    {
      id: 0,
      title: "Metallica Mix",
      description: "Disturbed, Rammstein, Five Finger Death Punch, ve daha fazlası",
      artist: "Metallica",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/2ye2Wgw4gimLv2eAKyk1NB/tr/default",
      type: "album",
      src: "https://pl.meln.top/mr/dd3a776ede9f932458dc96d088ef6eaf.mp3?session_key=c77dc20d5995a64bf98f024cce1b7095",
    },
    {
      id: 1,
      title: "Rock Mix",
      description: "Malt, Ogün Sanlısoy, Talking Heads, ve daha fazlası",
      artist: "Red Hot Chili Paper",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/rock/4acjV5gpm2vHLWpGvQ77DL/tr/default",
      type: "album",
      src: "https://pl.meln.top/mr/2524da522f2077111db0df920d39d8a5.mp3?session_key=1a90fc80c2aefd30ab19d0d48e0d6a74",
    },
    {
      id: 2,
      title: "Chill techno vibes",
      description: "Only the best Techno tracks. Nothing less, nothing more. Don't forget to follow the playlist. Enjoy! 🖤🎉 |  ",
      artist: "Ben Bohmer",
      image: "https://i.scdn.co/image/ab67706c0000da843396e87663336fc998cd125d",
      type: "album",
      src: "https://pl.meln.top/mr/40949166c0338b7a2675e446fac6a65c.mp3?session_key=7c610ea1eb65d78c25e2fb88e7c0fb24",
    },
    {
      id: 3,
      title: "Psytrance Supernova",
      description: "Lose yourself in the cosmic spheres of Psytrance.",
      artist: "Metin Yüce",
      image: "https://i.scdn.co/image/ab67706f00000002caf104e283ca7a598861a470",
      type: "album",
      src: "https://pl.meln.top/mr/157bfeb4a4b1f3241924eb42043276c7.mp3?session_key=7ffc61ab49be11ca51f7b9fc246f7194",
    },
    {
      id: 4,
      title: "Pentagram",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab6761610000f17804ffe7847c4fe6f506cc05e0",
      artist: "Pentagram",
      type: "artist",
      src: "https://pl.meln.top/mr/eb435a1fb7b1997931ba7500ae3d9002.mp3?session_key=4d4d08fd33b55f69fb4b83ca254b9c8a",
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
