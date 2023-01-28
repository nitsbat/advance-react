/* eslint-disable linebreak-style */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ArticleList from '../ArticleList';


describe('ArticleList', () => {

    const testData = {
        articles: [
            { id: 'a' },
            { id: 'b' }
        ],
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
        },
    }

    it('render correctly', () => {
        const testRenderer = TestRenderer.create(
            <ArticleList
                {...testData}
            />
        ).toJSON();


        expect(testRenderer).toMatchSnapshot();
        expect(testRenderer.children.length).toBe(2);
    });
});
