import { use, expect as _expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
use(sinonChai);
use(chaiAsPromised);
const expect = _expect;

import { LambdaTestWrapper } from '../../src/lambda-test-wrapper.js';
import { InputValidator } from '../../src/input-validator.js';
import esmock from 'esmock';

// eslint-disable-next-line tsel/no-explicit-any
let _index: any = null;

describe('index', function () {
    beforeEach(async () => {
        _index = await esmock('../../src/index.js');
    });

    it('should export the expected modules and classes', () => {
        expect(_index.LambdaTestWrapper).to.equal(LambdaTestWrapper);
        expect(_index.InputValidator).to.equal(InputValidator);
    });
});
