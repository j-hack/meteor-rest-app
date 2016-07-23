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
  // GET /api/bookmarks
  get: {
    action: function() {
      return {
        status: 'success',
        data: Bookmarks.find().fetch(),
      };
    },
  },
  // POST /api/bookmarks
  post: {
    action: function() {
      const { url, title } = this.bodyParams;
      const bookmark = {
        url,
        title,
        createdAt: new Date(),
      };
      const res = Bookmarks.insert(bookmark);

      return {
        status: 'success',
        data: Bookmarks.findOne(res),
      };
    },
  },
});

Api.addRoute('bookmarks/:id', {
  // GET /api/bookmarks/:id
  get: {
    action: function() {
      const bookmarkId = this.urlParams.id;
      return {
        status: 'success',
        data: Bookmarks.findOne(bookmarkId),
      };
    },
  },
  // PUT /api/bookmarks/:id
  put: {
    action: function() {
      const bookmarkId = this.urlParams.id;
      const { url, title } = this.bodyParams;
      Bookmarks.update(bookmarkId, { $set: { url, title }});
      return {
        status: 'success',
        data: Bookmarks.findOne(bookmarkId),
      };
    },
  },
  // DELETE /api/bookmarks/:id
  delete: {
    action: function() {
      const bookmarkId = this.urlParams.id;
      Bookmarks.remove(bookmarkId);
      this.statusCode = 204;
      return {
        status: 'No Content',
      };
    },
  },
});

export default Api;
