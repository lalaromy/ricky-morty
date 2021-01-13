export interface IState {
  episodes: Array<any> // []
  favourites: Array<any> //not knowing how long the array will be
}

export interface IAction {
  type: string,
  payload: any
}

export interface IEpisodes {
  airdate: string,
  airstamp: string,
  airtime: string,
  id: number,
  image: { medium: string, original: string }
  name: string,
  number: number,
  runtime: number,
  season: number,
  summary: string,
  type: string,
  url: string
}

export interface IEpisodeProps {
  episodes: Array<IEpisodes>, //or IEpiosde[]
  store: { state: IState, dispatch: any },
  toggleFavAction: (state: IState, dispatch: any, episodes: IEpisodes) => IAction,
  favourites: Array<IEpisodes>
}