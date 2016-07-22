import { Restivus } from 'meteor/nimble:restivus';

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

export default Api;
