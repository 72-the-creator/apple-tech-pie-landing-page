import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://drive.google.com/uc?id=12hSxLgNOwL_YVwhlHVIg_755vLn92e8S',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: 'Home', href: '/' } },
      { name: 'item1', a: { children: 'Services', href: '/#services' } },
      { name: 'item2', a: { children: 'Works', href: '/#works' } },
      { name: 'item3', a: { children: 'About Us', href: '/#about-us' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2023 Apple Tech Pie All Rights Reserved |
        {' '}
        <a href="https://drive.google.com/uc?id=1a8IR8bC4Sb7DB-mhLbISZw00XRxfcNUz" target="_blank" rel="noopener">Terms &amp; Conditions</a>
      </span>
    ),
  },
};
