import musicData from "./music-data.json";
import movieData from "./movie-data.json";
import bookData from "./book-data.json";
import gameData from "./game-data.json";

type InspoItemType = "movie" | "book" | "game" | "music";
export interface InspoItem {
  title: string;
  description?: string;
  image: string;
  links: Record<string, string | undefined>;
  type: InspoItemType;
  date: Date;
}

export async function getInspoData(): Promise<InspoItem[]> {
  const [music, movies, books, games] = await Promise.all([
    getInspoAlbums(),
    getInspoMovies(),
    getInspoBooks(),
    getInspoGames(),
  ]);

  return [...music, ...movies, ...books, ...games].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
}

// get album data from spotify for a given playlist
export async function getInspoAlbums(): Promise<InspoItem[]> {
  const _playlistId = "4omR72tpYWD4w2ndhh5VW0";
  // go to this to run the fetch a copy the output below
  // https://developer.spotify.com/console/get-playlist-tracks/?playlist_id=4omR72tpYWD4w2ndhh5VW0&market=&fields=items(track(album(name%2Crelease_date%2Cexternal_urls%2Cimages)))&limit=100&offset=&additional_types=
  const items = musicData.items.map((item) => ({
    title: item.track.album.name,
    image: item.track.album.images[0].url,
    links: {
      spotify: item.track.album.external_urls.spotify,
    },
    type: "music" as InspoItemType,
    date: new Date(item.track.album.release_date),
  }));

  return items;
}

export async function getInspoMovies(): Promise<InspoItem[]> {
  const _listId = "4omR72tpYWD4w2ndhh5VW0";
  // go to this to run the fetch a copy the output below
  // https://developers.themoviedb.org/3/lists/get-list-details
  const items = movieData.items.map((item) => ({
    title: item.title,
    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
    links: {
      // tmdb: `https://www.themoviedb.org/movie/${item.id}`,
      letterboxd: item.letterboxd,
    },
    type: "movie" as InspoItemType,
    date: new Date(item.release_date),
  }));
  return items;
}

export async function getInspoBooks(): Promise<InspoItem[]> {
  const items = bookData.items.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    links: {
      amazon: item.link,
    },
    type: "book" as InspoItemType,
    date: new Date(item.date),
  }));
  return items;
}

export async function getInspoGames(): Promise<InspoItem[]> {
  const items = gameData.items.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    links: {
      steam: item.steam,
      twitch: item.twitch,
    },
    type: "game" as InspoItemType,
    date: new Date(item.date),
  }));
  return items;
}
