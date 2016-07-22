import { Template } from 'meteor/templating';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.html';

import Bookmarks from '../imports/api/bookmarks/bookmarks';

Template.Bookmarks.helpers({
  bookmarks: Bookmarks.find(),
});
