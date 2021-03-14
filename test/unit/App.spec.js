import React from 'react';
import { mount } from 'enzyme';
import App from "../../src/App";

describe('App', () => {
    it('renders App', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(".hello").text()).toContain("App");
    })
})
