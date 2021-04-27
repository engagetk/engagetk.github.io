import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import ArticlePreview from '../components/article-preview';
import UseCasePreview from '../components/use-case';
import FeaturePreview from '../components/feature';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import * as heroStyles from '../components/hero.module.css'

class RootIndex extends React.Component {
  render() {
    //const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const useCases = get(this, 'props.data.allContentfulUseCase.edges');
    const mainAssets = get(this, 'props.data.allContentfulMainAssets.edges');
    const features = get(this, 'props.data.allContentfulFeature.edges');
    const mainContent = get(this, 'props.data.allContentfulMainContent.edges');

    const mainHeroImage = getImage(mainAssets[0].node.cassieHero);
    const whoIsCassieImage = getImage(mainAssets[0].node.whoIsCassie);
    const airportHeroImage = getImage(mainAssets[0].node.airportHero);
    const officeMapImage = getImage(mainAssets[0].node.officeMap);
    const cassieDescription = mainContent[0].node.cassieDescription;
    const airportDescription = mainContent[0].node.airport;

    const whoIsCassieText = mainContent[0].node.whoIsCassie;

    const bgMainHeroImage = convertToBgImage(mainHeroImage);
    const bgWhoIsCassieImage = convertToBgImage(whoIsCassieImage);
    //console.log(mainHeroImage);
    //const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <section id="home" className="pt-0 md:pt-0 ">
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgMainHeroImage}
          preserveStackingContext
        >
      {/* <div style={{minHeight: 200, minWidth: 1000}}> */}
      {/* <GatsbyImage
              image={mainHeroImage}
              //className="bg-cover bg-center"
              alt="Cassie hero image" /> */}
      {/* </div> */}
      <div className="container mx-auto pt-8 pb-48 px-8 lg:flex">
          
            <div className="text-left lg:text-left lg:w-1/2 sm:text-left py-12 px-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Hello, I'm Cassie!
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                
              </p>
              <p className="mt-4 text-gray-600"></p>
            </div>

    </div>
    </BackgroundImage>
          
        </section>
        <div className="container mx-auto mx-12 my-12">
          {/* <Card className="mb-8"> */}
            <div className="mt-4 mx-8"
            dangerouslySetInnerHTML={{
            __html: cassieDescription.childMarkdownRemark.html,
            }} />
          {/* </Card> */}
        </div>

        <div style={{ background: '#fff' }}>
          {/* <Helmet title={siteTitle} />
          <Hero data={author.node} /> */}
          <div className="wrapper">
            {/* <div className="feature-container"> */}
            <ul className="feature-list">
              {features.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <FeaturePreview article={node} />
                  </li>
                );
              })}
            </ul>
            {/* </div> */}
          </div>
        </div>

        <section id="usecases">
        <div style={{ background: '#fff' }}>
          {/* <Helmet title={siteTitle} />
          <Hero data={author.node} /> */}
          <div className="wrapper">
            {/* <h2 className="section-headline">Use cases</h2> */}
            <ul className="article-list">
              {useCases.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <UseCasePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </section>

        <div className="flex lg:flex-row flex-wrap mx-2 my-8 justify-center items-center">

        <div className="lg:w-1/2 px-12">
          <h2>Who is Cassie?</h2>
            <div className="mt-4 mb-4"
            dangerouslySetInnerHTML={{
            __html: whoIsCassieText.childMarkdownRemark.html,
            }} />
        </div>

        <div className="w-full lg:w-1/2 px-12">
         <GatsbyImage
              image={whoIsCassieImage}
              alt="who is Cassie" />
          </div>

        </div>


        <section id="testimonials">
        <div className="flex lg:flex-row flex-wrap mx-2 my-8 justify-center items-center">

        <div className="w-full lg:w-1/2 px-12">
         <GatsbyImage
              image={airportHeroImage}
              alt="Norwich Airport" />
          </div>
        <div className="lg:w-1/2 px-12">

            <h4 className="mt-4 mb-4"
            dangerouslySetInnerHTML={{
            __html: airportDescription.childMarkdownRemark.html,
            }} />

        </div>
        </div>
        </section>

        <section id="pricing" className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full w-full lg:px-10 py-12 ">
        <article className="bg-white w-4/5 lg:w-custom mb-10 ml-2 mr-2 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">Bronze</h5>
          <h2 className="pb-4 flex justify-center font-bold "> <span class="text-3xl mt-6 mr-1">£</span><span class="text-6xl"> 499</span></h2>
          <h6 className="pb-4 border-b border-gray-200">per month</h6>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">FAQs in English and Translations in more than 20 languages</li>
            <li className="pt-3 pb-4 border-b border-gray-200">Listening and speaking chatbot for static content</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Listening and translation from 20+ languages to Cued English</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Engagement dashboard to understand your visitors</li>
          </ul>
          {/* <button className=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md" >Learn More</button> */}
        </article>
        <article className="bg-white w-4/5 lg:w-custom mb-10 ml-2 mr-2 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base ">Silver</h5>
          <h2 className="font-bold pb-4 flex justify-center"> <span className="text-3xl mt-6 mr-1">£</span><span className="text-6xl "> 999</span></h2>
          <h6 className="pb-4 border-b border-gray-200">per month</h6>
          <ul className=" text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">Bronze + dynamic content and bookings/reservations</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Listening and speaking chatbot for static content</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Listening and translation from 20+ languages to Cued English</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Engagement dashboard to understand your visitors</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Reservations and bookings</li>
          </ul>
          {/* <button className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-primary-blue" >Learn More</button> */}

        </article>
        <article className="bg-white w-4/5 lg:w-custom mb-10 ml-2 mr-2 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">Gold</h5>
          <h2 className="flex justify-center pb-4 font-bold "><span className="text-3xl mt-6 mr-1">£</span><span class="text-6xl">1999</span></h2>
          <h6 className="pb-4 border-b border-gray-200">per month</h6>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">Silver + e-commerce</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Listening and speaking chatbot for static content</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Listening and translation from 20+ languages to Cued English</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Engagement dashboard to understand your visitors</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Reservations and bookings</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Take payments, make purchases</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Click and collect</li>
          </ul>
          {/* <button className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light" >Learn More</button> */}
        </article>
      </section>

      <div className="w-full px-12">
        <h2>Find Us</h2>
         <GatsbyImage
              image={officeMapImage}
              alt="Office Map" />
      </div>

        {/* <div style={{ background: '#fff' }}> */}
          {/* <Helmet title={siteTitle} />
          <Hero data={author.node} /> */}
          {/* <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
        {/* <ul className="article-list">
      {posts.map(({ node }) => {
        return (
          <li key={node.slug}>
            <ArticlePreview article={node} />
          </li>
        );
      })}
    </ul> */}
    
        {/* <section id="features" className="py-20 lg:pb-40 lg:pt-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
            <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Service One</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                    velna vitae auctor integer.
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Service Two</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                    velna vitae auctor integer.
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Service Three</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                    velna vitae auctor integer.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Our team of enthusiastic marketers will analyse and evaluate how your company stacks
                against the closest competitors
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Design And Plan Your Business Growth Steps
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Once the market analysis process is completed our staff will search for
                opportunities that are in reach
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Search For Performance Optimization
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                With all the information in place you will be presented with an action plan that
                your company needs to follow
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <section id="stats" className="py-20 lg:pt-32">
          <div className="container mx-auto text-center">
            <LabelText className="text-gray-600">Our customers get results</LabelText>
            <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-20 lg:py-40">
          <div className="container mx-auto">
            <LabelText className="mb-8 text-gray-600 text-center">
              What customers are saying
            </LabelText>
            <div className="flex flex-col md:flex-row md:-mx-3">
              {customerData.map(customer => (
                <div key={customer.customerName} className="flex-1 px-3">
                  <CustomerCard customer={customer} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
          <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
          <p className="mt-8 text-xl font-light">
            Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
            in.
          </p>
          <p className="mt-8">
            <Button size="xl">Get Started Now</Button>
          </p>
        </section> */}
      </Layout>
    );
  }
}

export default RootIndex;

// export default () => {

//   //const posts = get(this, 'props.data.allContentfulBlogPost.edges');
//   return <Layout>
//     <section className="pt-20 md:pt-40">
//       <div className="container mx-auto px-8 lg:flex">
//         <div className="text-center lg:text-left lg:w-1/2">
//           <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
//             Main title of your landing page
//           </h1>
//           <p className="text-xl lg:text-2xl mt-6 font-light">
//             Free landing page template to promote your business startup and generate leads for the
//             offered services
//           </p>
//           <p className="mt-8 md:mt-12">
//             <Button size="lg">Get Started</Button>
//           </p>
//           <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
//         </div>
//         <div className="lg:w-1/2">
//           <HeroImage />
//         </div>
//       </div>
//     </section>

//     {/* <ul className="article-list">
//       {posts.map(({ node }) => {
//         return (
//           <li key={node.slug}>
//             <ArticlePreview article={node} />
//           </li>
//         );
//       })}
//     </ul> */}

//     <section id="features" className="py-20 lg:pb-40 lg:pt-48">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
//         <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
//           <div className="flex-1 px-3">
//             <Card className="mb-8">
//               <p className="font-semibold text-xl">Service One</p>
//               <p className="mt-4">
//                 An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
//                 velna vitae auctor integer.
//               </p>
//             </Card>
//           </div>
//           <div className="flex-1 px-3">
//             <Card className="mb-8">
//               <p className="font-semibold text-xl">Service Two</p>
//               <p className="mt-4">
//                 An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
//                 velna vitae auctor integer.
//               </p>
//             </Card>
//           </div>
//           <div className="flex-1 px-3">
//             <Card className="mb-8">
//               <p className="font-semibold text-xl">Service Three</p>
//               <p className="mt-4">
//                 An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
//                 velna vitae auctor integer.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//     <SplitSection
//       id="services"
//       primarySlot={
//         <div className="lg:pr-32 xl:pr-48">
//           <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
//           <p className="mt-8 text-xl font-light leading-relaxed">
//             Our team of enthusiastic marketers will analyse and evaluate how your company stacks
//             against the closest competitors
//           </p>
//         </div>
//       }
//       secondarySlot={<SvgCharts />}
//     />
//     <SplitSection
//       reverseOrder
//       primarySlot={
//         <div className="lg:pl-32 xl:pl-48">
//           <h3 className="text-3xl font-semibold leading-tight">
//             Design And Plan Your Business Growth Steps
//           </h3>
//           <p className="mt-8 text-xl font-light leading-relaxed">
//             Once the market analysis process is completed our staff will search for opportunities
//             that are in reach
//           </p>
//         </div>
//       }
//       secondarySlot={<SvgCharts />}
//     />
//     <SplitSection
//       primarySlot={
//         <div className="lg:pr-32 xl:pr-48">
//           <h3 className="text-3xl font-semibold leading-tight">
//             Search For Performance Optimization
//           </h3>
//           <p className="mt-8 text-xl font-light leading-relaxed">
//             With all the information in place you will be presented with an action plan that your
//             company needs to follow
//           </p>
//         </div>
//       }
//       secondarySlot={<SvgCharts />}
//     />
//     <section id="stats" className="py-20 lg:pt-32">
//       <div className="container mx-auto text-center">
//         <LabelText className="text-gray-600">Our customers get results</LabelText>
//         <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
//           <div className="w-full sm:w-1/3">
//             <StatsBox primaryText="+100%" secondaryText="Stats Information" />
//           </div>
//           <div className="w-full sm:w-1/3">
//             <StatsBox primaryText="+100%" secondaryText="Stats Information" />
//           </div>
//           <div className="w-full sm:w-1/3">
//             <StatsBox primaryText="+100%" secondaryText="Stats Information" />
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="testimonials" className="py-20 lg:py-40">
//       <div className="container mx-auto">
//         <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
//         <div className="flex flex-col md:flex-row md:-mx-3">
//           {customerData.map(customer => (
//             <div key={customer.customerName} className="flex-1 px-3">
//               <CustomerCard customer={customer} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
//       <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
//       <p className="mt-8 text-xl font-light">
//         Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
//       </p>
//       <p className="mt-8">
//         <Button size="xl">Get Started Now</Button>
//       </p>
//     </section>
//   </Layout>
// };

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulUseCase(sort: { fields: [displayOrder], order: DESC }) {
      edges {
        node {
          headline {
            headline
          }
          slug
          displayOrder
          sectionContent {
            sectionContent
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulMainAssets {
      edges {
        node {
          cassieHero {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          whoIsCassie {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          airportHero {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          officeMap {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulFeature {
      edges {
        node {
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulMainContent {
      edges {
        node {
          cassieDescription {
            cassieDescription
            childMarkdownRemark {
              html
            }
          }
          whoIsCassie {
            whoIsCassie
            childMarkdownRemark {
              html
            }
          }
          airport {
            airport
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
