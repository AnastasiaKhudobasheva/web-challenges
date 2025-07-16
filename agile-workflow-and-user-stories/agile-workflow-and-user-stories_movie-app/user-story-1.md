# Title

Movie App Homepage: Display List of Current Movies

## Value Proposition

**As a** user <br>
**I want to** see a list of current movies on the homepage, <br>
**so that** I can quickly browse what's currently available.<br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- The homepage is titled "Movie App" at the top.

- The page displays a list of current movies as cards, one card per movie.

- Each movie card includes:

- Movie title (e.g., Barbie)

- IMDB rating shown as a round badge (e.g., 7.4)

- When a user clicks on a movie card:

- They are navigated to a movie detail page.

- If movie data is not available, the page displays:

- "Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later."

## Tasks

Create feature branch:
feature/movie-list-homepage

Backend Setup:

- Set up API endpoint: GET /movies

- Use mock data or connect to a movie API

- Return basic fields: title, imdbRating, id

Frontend Integration:

- Create MovieList component for the homepage

- Fetch movie data using SWR hook

- Map through movie data to render MovieCard for each movie:

- Display movie title

- Display IMDB rating using a round badge

Routing:

- Set up route: /movies/id

- Create MovieDetailPage component

- If no data is fetched, display fallback message:

"Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later."

Styling:

- Responsive card layout using flex or grid

- Use StyledComponents or CSS

- Create reusable <Badge/> component:

- Round shape

- Color-coded based on rating range (optional for later)
