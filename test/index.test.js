const fsExtra = require('fs-extra');
const path = require('path');

describe('Crashing if __snapshots__ gets removed', () => {

    it('Should make a snapshot', async () => {
        expect('Hello world').toMatchSnapshot('warnings');
    });
});

// It crashes here
afterAll(() => {
    fsExtra.removeSync(path.resolve(__dirname, '__snapshots__'));
});