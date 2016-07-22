import { Template } from 'meteor/templating';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.html';

import Bookmarks from '../imports/api/bookmarks/bookmarks';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

Template.Bookmarks.onCreated(function() {
  this.bookmarks = new ReactiveVar();

  const fetchBookmarks = () => {
    // ブックマーク一覧取得
    HTTP.get('/api/bookmarks', (err, res) => {
      if (err) { console.error(err); return; }
      this.bookmarks.set(res.data.data);
    });
  };
  fetchBookmarks();

  Meteor.setInterval(fetchBookmarks, 5000);
});

Template.Bookmarks.helpers({
  bookmarks: () => Template.instance().bookmarks.get(),
});

Template.BookmarkForm.events({
  'submit .bookmark-form'(event) {
    event.preventDefault();

    const url = event.target.url.value;
    const title = event.target.title.value;
    const callOptions = {data: {url, title}};

    HTTP.post('/api/bookmarks', callOptions, (err, res) => {
      if (err) { console.log(err); return; }
      event.target.url.value = "";
      event.target.title.value = "";
    });
  },
});