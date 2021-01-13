import React, { Fragment, useContext, useEffect, Suspense } from 'react';
import { Store } from './Store'
import { IEpisodeProps } from "./interfaces"
import { toggleFavAction, fetchDataAction } from "./Actions"

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  }, [])

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
}