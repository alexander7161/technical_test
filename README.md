# BookingGo Technical Test Submission

## Setup
```
install NodeJS

npm install

```

## Part 1

### Console application to print the search results for Dave's Taxis

`npm run CLI 51.470020,-0.454295 51.470020,-0.454295`

### Console application to filter by number of passengers

`npm run CLI 51.470020,-0.454295 51.470020,-0.454295 5`

## Part 2
run:
`npm run start`

post to:
`http://127.0.0.1:3000/`

example body:
```JSON
{"pickup": "51.470020,-0.454295", "dropoff": "51.470020,-0.454295"}
```

or 

```JSON
{"pickup": "51.470020,-0.454295", "dropoff": "51.470020,-0.454295", "passengers":5}
```
