import uuid from 'uuid/v1';

import mock from 'utils/mock';

mock.onGet('/api/friends').reply(200, {
    lists: [
        {name: 'Rahul Gupta', favorite: true, id: uuid()},
        {name: 'Shivangi Sharma', favorite: false, id: uuid()},
        {name: 'Akash Singh', favorite: false, id: uuid()},
        {name: 'Shaurav Yadav', favorite: false, id: uuid()},
        {name: 'Shobhit Mishra', favorite: false, id: uuid()},
    ]
});