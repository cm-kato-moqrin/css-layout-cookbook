import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import React from 'react';

const links = ['Home', 'Category', 'Sub-Category', 'Products', 'Our Team'];

function BreadcrumbLinks(crumbs: string[]) {
  let breadcrumbNavLinks;
  breadcrumbNavLinks = crumbs.map((crumb) => (
    <BreadcrumbItem key={crumb}>
      <BreadcrumbLink
        _hover={{
          color: 'purple.500',
        }}
        href={'#'}
      >
        {crumb}
      </BreadcrumbLink>
    </BreadcrumbItem>
  ));
  return breadcrumbNavLinks;
}

function BreadCrumbNav() {
  return (
    <Breadcrumb fontWeight='medium' fontSize='md' separator='→'>
      {BreadcrumbLinks(links)}
    </Breadcrumb>
  );
}

export default BreadCrumbNav;
