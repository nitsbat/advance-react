import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' },
        },
    };

    it('renders correctly', () => {
        configure({ adapter: new ReactSixteenAdapter() });
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );

        expect(wrapper.find('ArticleContainer').length).toBe(2);

        expect(wrapper).toMatchSnapshot();
    });

});
