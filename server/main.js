import { Meteor } from 'meteor/meteor';
import Bookmarks from '../imports/api/bookmarks/bookmarks';

Meteor.startup(() => {
  // 初期データ投入
  if (Bookmarks.find().count() === 0) {
    const data = [
      {
        url: 'http://www.meteor.com/',
        title: 'Meteor',
        createdAt: new Date(),
      },
      {
        url: 'https://guide.meteor.com/',
        title: 'Meteor Guide',
        createdAt: new Date(),
      },
      {
        url: 'http://docs.meteor.com/',
        title: 'Meteor API Docs',
        createdAt: new Date(),
      },
      {
        url: 'https://forums.meteor.com/',
        title: 'Meteor Forums',
        createdAt: new Date(),
      },
      {
        url: 'https://crater.io/',
        title: 'Crater.io',
        createdAt: new Date(),
      },
    ];

    data.forEach(bookmark => {
      Bookmarks.insert(bookmark);
    });
  }
});
