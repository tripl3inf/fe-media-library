# Media Catalog

Springleaf front end ember.js interview app. This is an [ember-cli](http://www.ember-cli.com/) application using [ember-data](http://emberjs.com/api/data/) with the [active-model-adapter](https://github.com/ember-data/active-model-adapter) addon. If you're new to Ember, try the ember-cli generators!

## Getting Started

1. Clone this repo into any directory
1. `cd` into the repo's root folder
1. Run `npm install && bower install`
1. Run `ember server` to start the server at `http://localhost:4200`

## Features

Using the provided API endpoints, construct an application that includes the features outlined below. Don't worry about CSS, grids, or design; browser default styling is fine! Change whatever you need to change, just be sure to commit your work!

### Must Haves

- display links to all of the artists returned by the API
- click on an artist to show a header with the artist's name and their albums
- clicking on an album name will show a detail page for that album
- album detail page should show a list of comments with the most recent at the top
- home page lists all of the years for which we have albums, with a count of albums per year
- home page lists 5 most popular artists (by sum of albums sold)

### Nice to Haves (any one of these, no particular order)
- clicking on a year on the home page shows albums that were released that year organized by artist
- home page lists all known artist locations
- clicking on a location will show artists at that location organized by last name A-Z
- the show page for an artist displays artists that are nearby (same location)
- provide a form that will save a comment on an album
- validate that the form is filled in before allowing submission
- support deleting comments

## API

The following CRUD endpoints are provided:

Artists | |
--- | --- 
`GET /api/artists` | index of the artists in the system
`GET /api/artists/:id` | returns a single artist by its id
`POST /api/artists` | creates a new artist record
`PUT /api/artists/:id` | updates an artist record by its id
`DELETE /api/artists/:id` | destroys an artist given its id

Albums | |
--- | ---
`GET /api/albums` | index of all albums in the system
`GET /api/albums/:id` | returns a single album by its id
`POST /api/albums` | creates a new album record
`PUT /api/albums/:id` | updates an album record by its id
`DELETE /api/albums/:id` | destroys an album given its id

Comments | |
--- | ---
`GET /api/comments` | index of all the comments in the system
`GET /api/comments/:id` | returns a single comment by its id
`POST /api/comments` | creates a new comment record
`PUT /api/comments/:id` | updates a comment record by its id
`DELETE /api/comments/:id` | destroys a comment given its id

## Query Params for Index Routes

Name | Values | Description
--- | --- | ---
`sort_on` | `<any column name>` | Tells the mock server to sort results using the specified column name
`sort_direction` | `asc/desc` | Whether the mock server should sort ascending or descending
`per_page` | `<any int>` | The number of results that should be returned per page
`page` | `<any int>` | Page number of results to return
`location` | `<any string>` | ARTIST ROUTE ONLY - return artists by location
`year` | `<any string>` | ALBUM ROUTE ONLY - return albums by year

## Seed Data

The application comes with a very small set of seed data. If you want, you can add more data or columns via the `server/seeds.js` file.
You can also add more endpoints if you want!

