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

Api.addRoute('bookmarks', {
  get: { // GET /api/bookmarks
    action: function() {
      return {
        status: 'success',
        data: Bookmarks.find().fetch(),
      };
    },
  },
});

export default Api;
