import React from 'react';
import { IEpisodes } from './interfaces'

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props
  const { state, dispatch } = store

  return episodes.map((episode: IEpisodes) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={'Ricky and Morty' + episode.name} />
        <div>{episode.name}</div>
        <section className="button">
          Season: {episode.season} Number: {episode.number}
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favourites.find((fav: IEpisodes) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}

