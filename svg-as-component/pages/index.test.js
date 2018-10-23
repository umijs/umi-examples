import TestRenderer from 'react-test-renderer';
import IndexPage from './index';

test('index', () => {
  const ret = TestRenderer.create(<IndexPage />).toJSON();
  expect(ret).toEqual({
    "type": "div",
    "props": {
      "className": "normal"
    },
    "children": [
      {
        "type": "h1",
        "props": {},
        "children": [
          "Page index"
        ]
      },
      {
        "type": "svg",
        "props": {
          "width": "120",
          "height": "120"
        },
        "children": [
          "rice.svg"
        ]
      }
    ]
  });
});
