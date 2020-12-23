
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','64f'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','12b'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','680'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','45c'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','806'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','bdf'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','757'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','1f7'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','5b8'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','ca7'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','2dd'),
  exact: true,
},
{
  path: '/docs/chiefComplaints',
  component: ComponentCreator('/docs/chiefComplaints','d97'),
  exact: true,
},
{
  path: '/docs/Departments',
  component: ComponentCreator('/docs/Departments','dcb'),
  exact: true,
},
{
  path: '/docs/dictionary',
  component: ComponentCreator('/docs/dictionary','b1b'),
  exact: true,
},
{
  path: '/docs/doc4',
  component: ComponentCreator('/docs/doc4','50f'),
  exact: true,
},
{
  path: '/docs/drugs',
  component: ComponentCreator('/docs/drugs','a86'),
  exact: true,
},
{
  path: '/docs/emailTemplate',
  component: ComponentCreator('/docs/emailTemplate','c0b'),
  exact: true,
},
{
  path: '/docs/generalSettings',
  component: ComponentCreator('/docs/generalSettings','1f8'),
  exact: true,
},
{
  path: '/docs/hl7Listeners',
  component: ComponentCreator('/docs/hl7Listeners','fd8'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','80e'),
  exact: true,
},
{
  path: '/docs/laboratory',
  component: ComponentCreator('/docs/laboratory','68e'),
  exact: true,
},
{
  path: '/docs/ManageConsentForm',
  component: ComponentCreator('/docs/ManageConsentForm','2ce'),
  exact: true,
},
{
  path: '/docs/manageInsurance',
  component: ComponentCreator('/docs/manageInsurance','d5b'),
  exact: true,
},
{
  path: '/docs/manageSections',
  component: ComponentCreator('/docs/manageSections','67e'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/observations',
  component: ComponentCreator('/docs/observations','ae0'),
  exact: true,
},
{
  path: '/docs/radiology',
  component: ComponentCreator('/docs/radiology','75d'),
  exact: true,
},
{
  path: '/docs/userManagement',
  component: ComponentCreator('/docs/userManagement','c55'),
  exact: true,
},
{
  path: '/docs/userRoles',
  component: ComponentCreator('/docs/userRoles','3af'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
