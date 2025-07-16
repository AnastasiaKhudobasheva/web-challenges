# Title

Movie Detail Page: View Movie Information

## Value Proposition

**As a** user<br>
**I want to** view detailed information about a selected movie,<br>
**so that** I can learn more about it before deciding to watch it.<br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

- When a user clicks on a movie card from the homepage, they are navigated to the Movie Detail Page

- The detail page includes the following information:

- Movie title

- Release date

- Movie poster image

- Short summary description

- A back arrow (←) is visible at the top left corner of the page

- Clicking the arrow navigates the user back to the Movie List on the homepage

## Tasks

Create feature branch:
feature/movie-detail-page

Backend/API Setup:

- Use a new endpoint: GET /movies/id

- Ensure each movie returns:

- title

- releaseDate

- posterUrl

- summary

Frontend Integration:

- Create MovieDetailPage component

- Use useParams() (React Router) to extract movie ID from the URL

- Fetch individual movie data on component mount

- Display the following:

- Title (h1)

- Release date (p)

- Poster image (img)

- Summary (p)

Navigation:

- Add back navigation arrow button:

- BackButton component or inline icon

- Clicking the arrow triggers navigation to the homepage

Styling:

- Clean and focused layout

- Poster image should be responsive

- Back arrow should be styled to look clickable (hover effect)

- Use StyledComponents
