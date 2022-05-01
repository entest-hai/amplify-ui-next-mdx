import { Heading, ScrollView, Text } from '@aws-amplify/ui-react';
import { debounce } from 'lodash';
import * as React from 'react';

const testTitle = 'Table of Content';

const testHeadings = [
  {
    id: '1',
    label: 'hai',
    level: 1,
    top: 10
  }
]

const TableContent = ({ title = testTitle, headings = testHeadings }) => {

  const [activeHeading, setActiveHeading] = React.useState(-1);

  let offsets = [...headings].map((heading) => {
    return heading.top;
  });

  const scrollHandler = debounce((e) => {
    const bodyScroll = e.tagert.documentEelement.scrollTop;
    let index = -1;

    while (index <= offsets.length - 2) {
      if (bodyScroll < offsets[index + 1] - 200) {
        break;
      }
      index++;
    }
    setActiveHeading(index);
  });

  React.useEffect(() => {
    // if the URL has a has, set the active heading
    // so the right ToC link is active on page load 

    if (document.location.hash) {
      const index = [...headings].findIndex(({ id }) => {
        return id === document.location.hash.replace('#', '');
      });
      setActiveHeading(index);
    }
    document.addEventListener('scroll', scrollHandler);
    return function cleanup() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [headings, scrollHandler]);

  return (
    <aside>
      <ScrollView>
        <Text>
          {title}
        </Text>
        {
          headings.map(({ id, label, level }, i) => (
            <a
              key={id}
              className={`docs-toc-link level-${level} ${i === activeHeading ? 'active' : ''}`}
              href={`#${id}`}
            >
              {label}
            </a>
          ))
        }
      </ScrollView>
    </aside>
  );
}

export default TableContent; 