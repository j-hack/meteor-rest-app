import { Template } from 'meteor/templating';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.html';

Template.Bookmarks.helpers({
  bookmarks: [
    {
      url: 'http://www.meteor.com/',
      title: 'Meteor',
    },
    {
      url: 'https://guide.meteor.com/',
      title: 'Meteor Guide',
    },
    {
      url: 'http://docs.meteor.com/',
      title: 'Meteor API Docs',
    },
    {
      url: 'https://forums.meteor.com/',
      title: 'Meteor Forums',
    },
    {
      url: 'https://crater.io/',
      title: 'Crater.io',
    },
  ],
});

