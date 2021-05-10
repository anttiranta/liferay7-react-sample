import React from 'react';
import {create} from 'react-test-renderer';
import {IntlProvider} from "react-intl";

import {useFrontPage} from "../../js/talons/useFrontPage.es";
import FrontPage from "../../js/pages/FrontPage.es";

jest.mock('../../js/talons/useFrontPage.es', () => {
    return {
        useFrontPage: jest.fn()
    }
});

const hookReturnValues = [
    {time: '15:25:43'},
    {
        refreshTime: jest.fn().mockName('refreshTime'),
        setTime: jest.fn().mockName('setTime')
    }
];

describe("FrontPage component", () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    afterAll(() => {
        console.error.mockRestore();
    });

    it('renders correctly', () => {
        useFrontPage.mockReturnValueOnce(hookReturnValues);

        let instance = create(
            <IntlProvider locale="en-US">
                <FrontPage/>
            </IntlProvider>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    it('renders using initial values', () => {
        const myHookReturnValues = [{}, hookReturnValues[1]];
        useFrontPage.mockReturnValueOnce(myHookReturnValues);

        let instance = create(
            <IntlProvider locale="en-US">
                <FrontPage/>
            </IntlProvider>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    it('should call refreshTime function on button click', () => {
        useFrontPage.mockReturnValueOnce(hookReturnValues);
        const {refreshTime} = hookReturnValues[1];

        let instance = create(
            <IntlProvider locale="en-US">
                <FrontPage/>
            </IntlProvider>
        );

        const btns = instance.root.findAllByType('button');
        const refreshButton = btns[0];

        refreshButton.props.onClick();
        expect(refreshTime).toHaveBeenCalledTimes(1);
    });
});


