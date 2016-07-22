import { Restivus } from 'meteor/nimble:restivus';
import Bookmarks from './bookmarks/bookmarks';

const Api = new Restivus({
  prettyJson: true,
});

Api.addRoute('hello', {
  get: {
    action: function() {
      return {
        status: 'success',
        data: {
          message: 'Hello, REST API!',
        },
      };
    },
  },
});

// GET /api/bookmarks
Api.addRoute('bookmarks', {
  get: {
    action: function() {
      return {
        status: 'success',
        data: Bookmarks.find().fetch(),
      };
    },
  },
});

// GET /api/bookmarks/:id
Api.addRoute('bookmarks/:id', {
  get: {
    action: function() {
      const bookmarkId = this.urlParams.id;
      return {
        status: 'success',
        data: Bookmarks.findOne(bookmarkId),
      };
    },
  },
});

export default Api;
