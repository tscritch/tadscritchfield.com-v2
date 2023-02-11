import musicData from "./music-data.json";
import movieData from "./movie-data.json";

type InspoItemType = "movie" | "book" | "game" | "music";
export interface InspoItem {
  title: string;
  description?: string;
  image: string;
  links: Record<string, string>;
  type: InspoItemType;
  date: Date;
}

export async function getInspoData(): Promise<InspoItem[]> {
  const [music, movies] = await Promise.all([
    getInspoAlbums(),
    getInspoMovies(),
  ]);

  return [...music, ...movies].sort(
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
    description: item.overview,
    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
    links: {
      tmdb: `https://www.themoviedb.org/movie/${item.id}`,
    },
    type: "movie" as InspoItemType,
    date: new Date(item.release_date),
  }));
  return items;
}

// const bookList: InspoItem[] = [
//   {
//     title: "The Alchemist",
//     description: "Paulo Coelho",
//     image: "https://m.media-amazon.com/images/I/51ZQZQ1QFNL.jpg",
//     links: {
//       amazon: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416",
//     },
//     type: "book",
//   },
//   date: "1988-10-01",
// ];

// const gameList: InspoItem[] = [
//   {
//     title: "The Last of Us",
//     description: "Naughty Dog",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_cover.jpg",
//     links: {
//       amazon: "https://www.amazon.com/Last-Us-PlayStation-3/dp/B004P2YV7E",
//     },
//     type: "game",
//   },
// ];
