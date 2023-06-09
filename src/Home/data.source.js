import React from 'react';

export const Banner30DataSource = {
  wrapper: { className: 'banner3 lg6iz1seym-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span>
            <p>We Offer Bespoke Tech Solutions</p>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan lg6iux0j9gs-editor_css',
        children: 'Welcome to Apple Tech Pie',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <span>
              <p>
                Providing the best solution for your business, from mobile, web
                app development to artificial intelligence and Blockchain
                Technology
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        onClick: (e) => { window.location.href = "mailto:accounts@appletechpie.com"; e.preventDefault(); },
        children: (
          <span>
            <p>Get a Free Quote</p>
          </span>
        ),
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Our Services</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>We provide the beyond experiences</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Web App Development</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- CMS Websites Development</p>
                <p>- On-demand Web Applications</p>
                <p>- Progressive Web App (PWA)</p>
                <p>- Custom-Facing Web Portals to CRM Systems</p>
                <p>- ERP Systems & Automation Systems</p>
                <p>- Enterprise Intranet & Extranets</p>
                <p>- Information Portals to Corporates B2B/ B2C Websites</p>
                <p>- Modern CI/CD tools</p>
                <br />
                <p>Apple Tech Pie offers optimum solutions for native and cross-platform mobile application development that helps to discover mobility with an innovative, unique and scalable approach. Our expertise with cross-platform mobile apps helps you create a roadmap based on a solid mobile strategy that successfully leads the way to your final enterprise goals and expectations. The mobile application will remain scalable with your business needs.</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Blockchain Consultation</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- Blockchain Based Distribution Application Development (DApp)</p>
                <p>- Blockchain Solution Consulting</p>
                <p>- Cryptocurrency Wallet</p>
                <p>- Decentralized Exchange Development</p>
                <p>- Personalized Web Analytics for E-currency</p>
                <p>- Trading bots for E-currency</p>
                <p>- Smart Contracts, E-wallet & Exchange Programs</p>
                <p>- Modern CI/CD tools</p>
                <br />
                <p>We help companies build secure enterprise solutions with the most efficient distributed ledger technologies. Our software engineers utilize all large tech stack - Distributed Ledger Technologies (DLTs), including Ethereum Platform, Smart Contracts, and blockchain-related programming languages including Java, Go, and Solidity.</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Digital Marketing &amp; SEO</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- Keyword research</p>
                <p>- Site audit SEO</p>
                <p>- Position tracking</p>
                <p>- QA testing for web & app</p>
                <br />
                <p>Are you looking to increase your online visibility and drive more traffic to your website? Our digital marketing and SEO services are designed to help businesses achieve their goals. We offer a range of services including keyword research, on-page optimization, link building, and more. Our team of experienced digital marketers can help you create a comprehensive digital marketing strategy that will help you achieve your business goals.</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Mobile App Development</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- iOS Application Development</p>
                <p>- Android Application Development</p>
                <p>- Hybrid Application Development</p>
                <p>- React-native Application Development</p>
                <p>- Ionic Development</p>
                <p>- Modern CI/CD tools</p>
                <br />
                <p>Build well-designed and optimized custom mobile applications. Optimum solutions for native and cross-platform mobile application development that helps to discover mobility with an innovative, unique and scalable approach. Our expertise with cross-platform mobile apps helps you create a roadmap based on a solid mobile strategy that successfully leads the way to your final enterprise goals and expectations. The mobile application will remain scalable with your business needs.</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Graphic Design</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- Design Logo</p>
                <p>- Design Banner</p>
                <p>- Design Branding Merchandise</p>
                <br />
                <p>Our team of experienced graphic designers can help you create stunning designs for your business that will help you stand out from your competitors.</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>UX UI Design</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>- Creative Design Strategy</p>
                <p>- UX Review and Analysis</p>
                <p>- Front-end Development</p>
                <p>- Clickable Prototypes</p>
                <p>- Responsive Designs & Layout</p>
                <p>- Mobile UI/UX</p>
                <br />
                <p>We embrace Design Thinking and innovation - our expert UI/UX designers ensure that they have the right mindsets, collaborative teams, and conducive environments. When we align our mindsets, skills and environments, we are able to create innovative designs that allow our designs to survive the disruptions the technology might face in the near future. We keep in mind a deep desire to create a better user experience for the world around us and our designers strive to deliver beautiful and usable products that solve user problems and help you achieve your business goal.</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5 lg6mekv5l5a-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Our Works</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>
              We are so delighted to present you the best and the most
              satisfaction projects that we have been working our clients so far
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper lg6lbypuayk-editor_css',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block lg6lfg5ofs-editor_css',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://drive.google.com/uc?id=1X7vPeWJ1x0UvkJsZ79PUvU1M4HBdiewx',
            className: 'lg6ld3fw3xr-editor_css',
          },
          content: {
            children: (
              <span>
                <p>MAMA CheckIn</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block lg6lfog2uq-editor_css',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://drive.google.com/uc?id=1RSbL0ozDSBrdvx4OJKqaT67UfwwubOIK',
            className: 'lg6ldnkqcx-editor_css',
          },
          content: {
            children: (
              <span>
                <p>NIK Mall</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~lg6mewe4me',
        className: 'block lg6lfog2uq-editor_css',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://drive.google.com/uc?id=1MxzquVY0ektU2wubJuwy5uQYGBDiMGCl',
            className: 'lg6ldnkqcx-editor_css',
          },
          content: {
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      D Marketplace - Modern E-Commerce Web &amp; Mobile App
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper lg6jmfkdv4q-editor_css',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>About Us</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <p>
                Apple tech Pie is A Bespoke Tech solution company.&nbsp;
                <span>
                  We have programme offices in London - India - Malaysia -
                  Cambodia.&nbsp;
                </span>
                <span>
                  Our services are tailored to the clients' 100% needs, we build
                  from scratch and never use a template and always provide the
                  client with the intellectual property on hand over.&nbsp;
                </span>
                <span>We operate with stricked NDA policy's.</span>
              </p>
            </span>
          </span>
        ),
        className: 'title-content lg6jj7tzrvc-editor_css',
      },
    ],
  },
};
