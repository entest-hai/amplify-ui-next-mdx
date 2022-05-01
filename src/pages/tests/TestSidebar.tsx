import * as React from 'react';
import { Heading } from '@aws-amplify/ui-react';
import Link from 'next/link';
import LinkButton from '../../components/Layout/LinkButton';
import { useRouter } from 'next/router';

const NavLink = ({
  href, children
}) => {

  const { pathname, query } = useRouter();
  const isCurrent = pathname === href;

  return (
    <Link href={{ pathname: href, query }}>
      <LinkButton href={href} classNames={`docs-secondary-nav-link ${isCurrent ? 'current' : ''}`}>
        {children}
      </LinkButton>
    </Link>
  );
}

const TestSecondaryNav = (props) => {
  return (
    <div>
      <NavLink {...props} href='/tests/TestSidebar'>
        Overview
      </NavLink>
      <NavLink {...props} href='/'>
        Responsive
      </NavLink>
      <NavLink {...props} href='/'>
        Dark mode
      </NavLink>
      <NavLink {...props} href='/tests/TestSidebar'>
        Alternative styling
      </NavLink>

    </div>
  );
}

const TestSidebar = () => {
  return (
    <aside className='test-docs-sidebar'>
    </aside>
  );
}

//<div className='test-docs-sidebar-inner'>
//        <nav className='test-docs-sidebar-nav'>
//          <TestSecondaryNav></TestSecondaryNav>
//        </nav>
//      </div>
//
const TestTableOfContent = () => {
  return (
    <div>
      <Heading level={2}>
        Table of Content
      </Heading>
    </div>
  )
}


const TestContent = () => {
  return (
    <div>
      <Heading level={1}>This is main content</Heading>
    </div>
  )
}

const TestDocPage = () => {
  return (
    <div className='test-docs-content'>
      <TestSidebar></TestSidebar>
      <TestContent></TestContent>
      <TestTableOfContent></TestTableOfContent>
    </div>
  );
}

export default TestDocPage;
