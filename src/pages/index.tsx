import {
  Button,
  Card,
  Flex,
  Text,
  useTheme,
  Image,
  View,
  Heading,
  Authenticator,
  IconChevronRight,
  ToggleButtonGroup,
  ToggleButton,
  Link,
  Grid,
} from '@aws-amplify/ui-react';
import { HomeLogo } from './../components/HomeLogo';
import { Copy } from '../components/Copy';
import { ThemeButton } from '../components/ThemeButton';
import { Footer } from '../components/Layout/Footer';
import * as React from 'react';
import { HomePrimitivePreview } from '../components/HomePrimitivePreview';

const AmpCard = ({ title, description, href }) => (
  <Link isExternal href={href} className="docs-home-amp-product-card">
    <Card textAlign={'center'} variation="outlined">
      <Heading level={3}>{title}</Heading>
      <Text>{description}</Text>
    </Card>
  </Link>
);

const MyHomePage = () => {
  const { tokens } = useTheme();
  const installScripts = {
    react: `npm i @aws-amplfy/ui-react-aws-amplify`,
  };
  const frameworkInstallScript = installScripts['react'];

  return (
    <div>
      <View as="section" className="container">
        <h1 className="docs-home-logo">
          <HomeLogo></HomeLogo>
        </h1>
        <Flex
          direction={{ base: 'column', medium: 'row' }}
          padding={tokens.space.large}
        >
          <Card variation="outlined" flex={1}>
            <Text
              fontSize={{
                base: tokens.fontSizes.large,
                small: tokens.fontSizes.xl,
              }}
            >
              Amplify UI is an open source design system with cloud-connected
              components and primitives that simplify building accessible,
              performant, and beautiful application in React, Angular, Vue and
              Flutter (more comming soon).
            </Text>
            <Flex
              direction={{ base: 'column-reverse', medium: 'row' }}
              padding={`${tokens.space.medium} 0 0 0`}
            >
              <Button size="large" variation="primary" as="a">
                Getting started
              </Button>
              <code className="install-code__container">
                <p className="install-code__content">
                  {frameworkInstallScript}
                </p>
                <Copy
                  className={'install-code__button'}
                  size=""
                  variation={'link'}
                  text={frameworkInstallScript}
                ></Copy>
              </code>
            </Flex>
          </Card>
          <Flex
            alignSelf={'center'}
            textAlign={'center'}
            flex="1"
            display={{ base: 'none', large: 'initial' }}
          >
            <Image
              alt=""
              className="docs-home-react"
              src="/svg/integrations/vue.svg"
            ></Image>
            <Image
              alt=""
              className="docs-home-react"
              src="/svg/integrations/react.svg"
            ></Image>
            <Image
              alt=""
              className="docs-home-react"
              src="/svg/integrations/angular.svg"
            ></Image>
            <Image
              alt=""
              className="docs-home-react"
              src="/svg/integrations/flutter.svg"
            ></Image>
          </Flex>
        </Flex>
      </View>
      <View
        backgroundColor={tokens.colors.background.secondary}
        padding={tokens.space.large}
      >
        <Heading level={2} textAlign="center" margin={tokens.space.large}>
          Take it for a test drive
        </Heading>
      </View>

      <View as="section" className="docs-home-section container">
        <Flex direction={{ base: 'column-reverse', large: 'row' }}>
          <View flex={1} className="example">
            <Authenticator
              socialProviders={['amazon', 'apple', 'facebook', 'google']}
            ></Authenticator>
          </View>
          <Flex flex={1} direction="column" alignItems={'flex-start'}>
            <Heading level={2}>Cloud-Connected Components</Heading>
            <Text className="docs-home-description">
              Simplify complex cloud-connected workflows like authentication
              with minimal bolerplate code.
            </Text>
            <Button as="a" size="large" isFullWidth>
              Authenticator
              <IconChevronRight></IconChevronRight>
            </Button>
          </Flex>
        </Flex>
      </View>

      <View
        as="section"
        className="docs-home-section"
        backgroundColor={tokens.colors.background.secondary}
      >
        <Flex
          className="container"
          direction={{ base: 'column', large: 'row' }}
        >
          <Flex flex={1} direction="column" alignItems={'flex-start'}>
            <Heading level={2}>Themeing</Heading>
            <Text className="docs-home-description">
              Themeing capabilities that allow you to customize the appearance
              of Amplify UI to match your brand.
            </Text>
            <Button as="a" size="large">
              Get started with themeing
              <IconChevronRight></IconChevronRight>
            </Button>
          </Flex>
          <Flex
            flex={1}
            alignContent="center"
            padding={{ base: '0', large: tokens.space.large }}
          >
            <ToggleButtonGroup
              width={'100%'}
              value={'system'}
              isExclusive
              onChange={(value: string) => {
                console.log(value);
              }}
            >
              <ToggleButton value="" flex={1}>
                <ThemeButton
                  label={'Default'}
                  colors={[
                    'var(--amplify-colors-teal-60)',
                    'var(--amplify-colors-purple-60)',
                  ]}
                ></ThemeButton>
              </ToggleButton>
              <ToggleButton value="" flex={'1'}>
                <ThemeButton
                  label={'Terminal'}
                  colors={['#44AF5G', '#000']}
                ></ThemeButton>
              </ToggleButton>
              <ToggleButton value="classic" flex={'1'}>
                <ThemeButton
                  label={'Classic'}
                  colors={[
                    'var(--amplify-colors-blue-60)',
                    'var(--amplify-colors-neutral-60)',
                  ]}
                ></ThemeButton>
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </Flex>
      </View>

      <View as="section" className="docs-home-section">
        <Flex
          className="container"
          direction={{ base: 'column', large: 'row' }}
          gap={tokens.space.xxl}
        >
          <View maxWidth="100%" overFlow="hidden">
            <HomePrimitivePreview></HomePrimitivePreview>
          </View>
          <Flex flex={1} direction={'column'} alignItems="flex-start">
            <Heading level={2}>Primitive Components</Heading>
            <Text className="docs-home-description">
              Primitive components that create consistency accross Amplify UI
              and allow you to build complete applications that fit your brand,
              like Buttons and Badges.
            </Text>
            <Button as="a" size="large">
              Get started with components
            </Button>
          </Flex>
        </Flex>
      </View>

      <View
        as="section"
        className="docs-home-section"
        direction={{ base: 'column', large: 'row' }}
      >
        <Flex
          className="container"
          direction={{ base: 'column', large: 'row' }}
        >
          <View flex={1}>
            <Heading level={2}>Accesibility</Heading>
            <Text className="docs-home-description">
              Amplify UI components follow{' '}
              <Link isExternal href="/">
                WCAG
              </Link>{' '}
              and{' '}
              <Link isExternal href="/">
                WAI-ARIA
              </Link>{' '}
              best practices and guidelines such as color contrast, keyboard,
              navigation, accessible labels, and focus management.
            </Text>
          </View>
          <View flex={1}></View>
        </Flex>
      </View>

      <View as="section" className="docs-home-section">
        <Heading level={2} textAlign="center" margin={tokens.space.large}>
          Looking for other Amplify Products?
        </Heading>
        <Grid
          className="container"
          templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
          gap={tokens.space.medium}
          flex={1}
        >
          <AmpCard
            href="/"
            title={'Amplify Libraries'}
            description="Connect app to new or existing AWS services (Cognito, S3, and more)"
          ></AmpCard>
          <AmpCard
            href="/"
            title={'Amplify Libraries'}
            description="Connect app to new or existing AWS services (Cognito, S3, and more)"
          ></AmpCard>
          <AmpCard
            href="/"
            title={'Amplify Libraries'}
            description="Connect app to new or existing AWS services (Cognito, S3, and more)"
          ></AmpCard>
          <AmpCard
            href="/"
            title={'Amplify Libraries'}
            description="Connect app to new or existing AWS services (Cognito, S3, and more)"
          ></AmpCard>
        </Grid>
      </View>

      <Footer></Footer>
    </div>
  );
};

export default MyHomePage;
