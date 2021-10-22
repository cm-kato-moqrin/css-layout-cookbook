import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import React from 'react';

const Links = ['Home', 'Category', 'Sub-Category', 'Products', 'Our Team'];

function BreadcrumbLinks(crumbs: string[]) {
  let BreadcrumbNavLinks;
  BreadcrumbNavLinks = crumbs.map((crumb) => (
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
  return BreadcrumbNavLinks;
}

function BreadCrumbNav() {
  return (
    <Breadcrumb fontWeight='medium' fontSize='md' separator='→'>
      {BreadcrumbLinks(Links)}
    </Breadcrumb>
  );
}

export default BreadCrumbNav;
