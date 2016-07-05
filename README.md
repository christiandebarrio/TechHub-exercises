Please put your code on GitHub or BitBucket, as you prefer, and after 72 hours don't do any more commits.

## 1) Meeting Rooms

We are using Contentful as CMS for some of our content and data.
In this case we are storing our meeting rooms details and I'd like you to visualise this data in the best way you think it's gonna help members to choose which room to book.

You won't need Contentful documentation at all, you can just retrieve the data using their Javascript SDK.

```js
var client = contentful.createClient({
  space: 'a87ovfhrfgt0',
  accessToken: 'ae40d50dd4ea667e6e0d185395a4f58ae6f514383513ff2e368bffba7591022b'
});
```

Then you can query the API for the `content_type`: `meetingRoom`
```js
client.getEntries({
  'content_type': 'meetingRoom'
}).then(function(entries) {
  // do stuff
});
```
It has to be an HTML page with CSS/JS, nothing server-side.

Write instructions with all the steps that are needed in order to view the project locally.  
In terms of browser support just make sure it works on the latest version of Chrome and it supports mobile/tablet/desktop.

You are free to use whatever you prefer in terms of technology/frameworks.

## 2) Booking Slots
Write an algorithm to allow people to select slots for their booking.  
Requirements:
* slots are 30min each but the minimum amount bookable is 1 hour
* when 2+ slots are selected remove the `.disabled` class from the book button
* if less than 2 slots are selected the book button should be `.disabled`
* you can only select consecutive slots
* add/remove the class `.selected` if it's a valid slot
* show an error if it's not a valid slot
Have a look at booking.html in this repo to understand better.

Write the code in `booking.html` and `booking.js`

## 3) Events
Query this endpoint to get the list of events and just show them in a table.
```
GET cache.techhub.com/events
```
Check `events.html` for an example.
