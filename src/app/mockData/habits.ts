//  Template used to generate t
//  [
//     '{{repeat(5, 55)}}',
//     {
//       id: '{{objectId()}}',
//       daysCompleted: '{{integer(1, 100)}}',
//       title: '{{lorem(4, "words")}}',
//       description: '{{lorem(1,  "paragraphs")}}',
//       priority: '{{random("high", "medium", "low")}}',
//       createdAt: '{{date(new Date(2014, 0, 1))}}'
//     }
//   ]

import { IHabit } from '../models/habits';

export const habits: IHabit[] = [
    {
        id: '5e7f73200db291d06c409140',
        daysCompleted: 49,
        title: 'Brush my teeth twice a day',
        description: 'Ullamco commodo laborum enim anim dolor tempor aliquip et dolor ad. Laborum officia eu q',
        priority: 'medium',
        createdAt: 'Fri Dec 06 2019 13:46:52 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f7320ff3f0b7633a4fc58',
        daysCompleted: 64,
        title: 'Exercise',
        description: 'Sint laboris in officia velit. Veniam incididunt do minim Lorem nisi commodo id dolore.',
          priority: 'low',
        createdAt: 'Tue Sep 03 2019 05:24:55 GMT-0400 (Eastern Daylight Time)'
    },
    {
        id: '5e7f7320eb68d58e93d86cfb',
        daysCompleted: 10,
        title: 'Call a family member or a friend',
        description: 'Occaecat aute do sunt officia proident nisi et cupidatat consequat excepteur est consequat mollit',
        priority: 'high',
        createdAt: 'Fri Sep 02 2016 12:07:36 GMT-0400 (Eastern Daylight Time)'
    },
    {
        id: '5e7f7320e01935b14ecfd975',
        daysCompleted: 82,
        title: 'Laugh out loud for at least one minute',
        description: 'Enim veniam tempor cillum eu excepteur elit voluptate incididunt exc',
        priority: 'high',
        createdAt: 'Sat Jan 25 2020 01:25:49 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f7320b2e34b7947a695f2',
        daysCompleted: 77,
        title: 'Write my daily journal',
        description: 'Dolor et nulla ea mollit. In aute fugiat labore quis sunt id nisi minim quis. Aliqu',
        priority: 'high',
        createdAt: 'Tue Nov 29 2016 14:52:46 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f7320dbd25bd1b21fc44a',
        daysCompleted: 15,
        title: 'Do something today that my future self will be proud of',
        description: 'Est laborum exercita',
        priority: 'high',
        createdAt: 'Fri Jul 12 2019 09:24:45 GMT-0400 (Eastern Daylight Time)'
    },
    {
        id: '5e7f732047ad584e17db9253',
        daysCompleted: 89,
        title: 'Read the Bible',
        description: 'Exercitation laborum eiusmod incididunt ea incididunt ex minim anim ea fugiat eu do. Mi',
        priority: 'low',
        createdAt: 'Sun Dec 11 2016 04:31:08 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f73202e357cea8fec5bb3',
        daysCompleted: 26,
        title: 'Prayed and given God thanks',
        description: 'Est deserunt cupidatat exercitation labore non aliquip esse laborum ullamco aliqua. ',
        priority: 'low',
        createdAt: 'Fri Dec 06 2019 13:46:52 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f7320d7e18e4e58e2edb2',
        daysCompleted: 94,
        title: 'Appreciate Mojola for how amazing she is',
        description: 'Adipisicing et qui aliquip dolor commodo id nisi irure. Adipisicing do enim esse ea velit ',
        priority: 'low',
        createdAt: 'Tue Aug 23 2016 12:17:14 GMT-0400 (Eastern Daylight Time)'
    },
    {
        id: '5e7f73204de8ac8c476c1a32',
        daysCompleted: 22,
        title: 'Visualize all my goals twice a day',
        description: 'Reprehenderit eiusmod magna incididunt nostrud enim qui culpa consectetur commodo aute aliqua o',
        priority: 'low',
        createdAt: 'Tue Aug 23 2016 15:39:38 GMT-0400 (Eastern Daylight Time)'
    },

    {
        id: '5e7f7320d56d41ccbcb6f8b5',
        daysCompleted: 31,
        title: 'Play Basketball',
        description: 'Proident et aute quis velit elit occaecat irure consequat nisi sint. Cupidatat cillum esse exercitation aut',
        priority: 'low',
        createdAt: 'Wed Jan 23 2019 11:40:17 GMT-0500 (Eastern Standard Time)'
    },
    {
        id: '5e7f732015fabe5045cf8b6b',
        daysCompleted: 65,
        title: 'Give something to someone',
        description: 'Ad duis laborum magna laborum nisi in aliquip esse ipsum consequat sit eiusmod. Cillum reprehenderit voluptate ',
        priority: 'high',
        createdAt: 'Tue Sep 26 2017 10:48:35 GMT-0400 (Eastern Daylight Time)'
    }
];
//     {
//         id: '5e7f7320b13f2976cc6dc9a8',
//         daysCompleted: 39,
//         title: 'laboris culpa aliqua elit',
//         description: 'Nisi elit proident ea id veniam ea reprehenderit consectetur laborum exercitation dolore incididunt labore. ',
//         priority: 'high',
//         createdAt: 'Wed Dec 07 2016 02:47:27 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f73201b18b096f687bbd5',
//         daysCompleted: 49,
//         title: 'consectetur do exercitation aute',
//         description: 'Voluptate ad proident duis voluptate reprehenderit est ullamco nulla. Proident aliqua nulla ex ex velit amet mollit',
//         priority: 'medium',
//         createdAt: 'Sat May 10 2014 12:57:25 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f73200d2d56fc60b9a41e',
//         daysCompleted: 84,
//         title: 'laboris labore exercitation sint',
//         description: 'Aliquip dolor ipsum sint ex sunt eiusmod consequat eu laboris. Cupidatat deserunt deserunt ut',
//         priority: 'medium',
//         createdAt: 'Sun Feb 17 2019 10:21:52 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320b7b3eeafcbca4f00',
//         daysCompleted: 24,
//         title: 'tempor adipisicing est cupidatat',
//         description: 'Minim duis ad aliquip deserunt nisi tempor proident. Culpa adipisicing eu id cupidatat. ',
//         priority: 'low',
//         createdAt: 'Fri Jul 14 2017 00:34:13 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320ca9f41bc87f6525d',
//         daysCompleted: 67,
//         title: 'et anim deserunt consectetur',
//         description: 'Pariatur fugiat esse velit dolore incididunt eiusmod in',
//         priority: 'medium',
//         createdAt: 'Fri Mar 04 2016 11:58:09 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f73203b59733f98c28d82',
//         daysCompleted: 43,
//         title: 'magna id proident veniam',
//         description: 'Sit ex quis qui pariatur. Cupidatat ad laborum pariatur fugiat velit ullamco dolore nisi nisi. ',
//          priority: 'high',
//         createdAt: 'Tue Dec 12 2017 03:10:50 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f73209b68e7d144ae0671',
//         daysCompleted: 9,
//         title: 'Lorem eiusmod sit minim',
//         description: 'Id consequat deserunt deserunt nostrud velit officia duis minim id labore consequat est esse. ',
//         priority: 'high',
//         createdAt: 'Fri Oct 17 2014 14:59:22 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f732039533cd432bbb87d',
//         daysCompleted: 26,
//         title: 'culpa et tempor veniam',
//         description: 'Tempor exercitation labore Lorem Lorem non et aliqua non ipsum minim ex qui commodo.',
//         priority: 'low',
//         createdAt: 'Wed Mar 06 2019 02:04:09 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f73204ef937e4554a198f',
//         daysCompleted: 7,
//         title: 'tempor voluptate occaecat sit',
//         description: 'Eiusmod consequat laboris consectetur laborum tempor non nulla ex ipsum nulla nisi dolore est pariatur',
//         priority: 'medium',
//         createdAt: 'Mon Jul 24 2017 06:15:35 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320df2f36bfb0ef74c4',
//         daysCompleted: 32,
//         title: 'duis amet laborum fugiat',
//         description: 'Amet elit eiusmod non anim aliquip magna. Amet veniam ex ',
//         priority: 'low',
//         createdAt: 'Sat Nov 22 2014 13:00:35 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320aaab04c8296488bb',
//         daysCompleted: 47,
//         title: 'laborum fugiat deserunt qui',
//         description: 'Labore irure officia aliqua cillum occaecat. Mollit reprehenderit mollit esse minim aliqua nulla dolore ',
//         priority: 'high',
//         createdAt: 'Tue Jan 28 2014 13:16:17 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f732095090cc455b5a781',
//         daysCompleted: 8,
//         title: 'officia occaecat proident amet',
//         description: 'Deserunt quis culpa qui aute reprehenderit aute velit mollit velit tempor consectetur enim quis.',  
//         priority: 'low',
//         createdAt: 'Wed Aug 08 2018 19:03:05 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320e0f6f69b3e437d76',
//         daysCompleted: 78,
//         title: 'consequat ullamco enim fugiat',
//         description: 'Sunt exercitation enim quis aliquip elit pariatur eiusmod elit nostrud consectetur adipisicing magna.',
//         priority: 'low',
//         createdAt: 'Fri Nov 15 2019 12:59:16 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320f2a15c1c5858e7bd',
//         daysCompleted: 61,
//         title: 'veniam dolore sint ex',
//         description: 'Mollit non laborum cillum enim consequat excepteur proident exercitation mollit t',
//         priority: 'low',
//         createdAt: 'Thu Jul 11 2019 09:36:43 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320b29793dd242f15fd',
//         daysCompleted: 49,
//         title: 'tempor anim aute commodo',
//         description: 'Officia ad culpa anim elit enim reprehenderit ',
//         priority: 'low',
//         createdAt: 'Wed Aug 20 2014 06:27:26 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f73203abd94b40ac7c2f9',
//         daysCompleted: 78,
//         title: 'nisi veniam cupidatat reprehenderit',
//         description: 'Sit Commodo est quis ad irure mollit irure ut labore reprehenderit enim laborum non consectetur qui. ',
//         priority: 'high',
//         createdAt: 'Thu Jun 14 2018 01:36:06 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320c314706da0daf366',
//         daysCompleted: 45,
//         title: 'incididunt culpa laborum aliqua',
//         description: 'Do exercitation dolor deserunt magna incididunt id aute voluptate labore adipisicing in aliquip mollit officia.',
//         priority: 'low',
//         createdAt: 'Tue Apr 03 2018 20:05:05 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f732086055ae9d1e5aed2',
//         daysCompleted: 7,
//         title: 'magna non minim consequat',
//         description: 'Officia et irure excepteur nisi officia et veniam eu amet laborum. Labore ex aliquip ',
//         priority: 'low',
//         createdAt: 'Sun Feb 16 2014 19:41:23 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320a6d82da6a0cdc826',
//         daysCompleted: 59,
//         title: 'nostrud velit sit consectetur',
//         description: 'Adipisicing erit culpa enim. Proident dolor fugiat occaecat in ad veniam anim',
//         priority: 'low',
//         createdAt: 'Thu Nov 16 2017 04:06:26 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f73201d175b09755d43fe',
//         daysCompleted: 24,
//         title: 'minim labore fugiat ex',
//         description: 'Commodo minim fugiat cillum consequat voluptate amet esse. Magna nisi adipisicing minim aliqua reprehenderit eiusmo',
//         priority: 'medium',
//         createdAt: 'Mon Aug 17 2015 15:02:50 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f732061238cda392f87f0',
//         daysCompleted: 90,
//         title: 'enim mollit culpa deserunt',
//         description: 'Aliquip ullamco aliqua aliquip nulla lab',
//         priority: 'high',
//         createdAt: 'Wed Mar 12 2014 23:21:52 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320be6b5a05fae0defe',
//         daysCompleted: 21,
//         title: 'ea ipsum nisi in',
//         description: 'Quis ullamco excepteur id cillum voluptate amet. Dolor non ipsum consectetur ea',
//         priority: 'low',
//         createdAt: 'Mon Sep 12 2016 08:56:44 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f73208fd7c80835754741',
//         daysCompleted: 21,
//         title: 'laboris incididunt excepteur dolor',
//         description: 'Velit dolore pariatur cillum deserunt laboris laborum amet voluptate elit.',
//         priority: 'low',
//         createdAt: 'Wed Jul 27 2016 02:56:50 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320ca15a1fc46c13cff',
//         daysCompleted: 65,
//         title: 'sunt ex consectetur culpa',
//         description: 'Lorem reprehenderit dolore nulla nisi do nostrud aliqua nulla commodo',
//         priority: 'high',
//         createdAt: 'Thu Feb 25 2016 17:36:51 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320c9198f5beb93953e',
//         daysCompleted: 73,
//         title: 'velit voluptate consectetur ullamco',
//         description: 'Laborum nigia. Reprehenderit dolore elit eiusmod elit officia nisi fugiat nulla consectetur occaecat minim. Aliquip',
//         priority: 'medium',
//         createdAt: 'Mon Feb 15 2016 16:05:46 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320777223900d133f39',
//         daysCompleted: 23,
//         title: 'aliqua enim laboris anim',
//         description: 'Qui magna reprehenderit pariatur duis commodo veniam incididunt dolore eiusmod officia ipsum id. Consectetur ni',
//         priority: 'medium',
//         createdAt: 'Mon Jul 17 2017 13:44:23 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f73200461a04d613d29c2',
//         daysCompleted: 22,
//         title: 'proident minim sit ullamco',
//         description: 'Nulla minim velit anim laborum ',
//         priority: 'high',
//         createdAt: 'Tue Oct 24 2017 21:51:15 GMT-0400 (Eastern Daylight Time)'
//     },
//     {
//         id: '5e7f7320fef1114ea57fab8c',
//         daysCompleted: 5,
//         title: 'nisi nulla amet dolore',
//         description: 'Ullamco amet et quis mollit nisi culpa aliqua sint pariatur nostrud proident proident eu. Laborum ',
//         priority: 'medium',
//         createdAt: 'Sat Dec 02 2017 00:58:34 GMT-0500 (Eastern Standard Time)'
//     },
//     {
//         id: '5e7f7320f8af551b8d9ab9f2',
//         daysCompleted: 12,
//         title: 'Lorem anim dolore elit',
//         description: 'Lorem est et aliqud eiusmod adipisicing incididunt cupidatat ad anim nostrud. Tempor anim sunt culpa elit vo',
//         priority: 'high',
//         createdAt: 'Fri Feb 05 2016 22:04:16 GMT-0500 (Eastern Standard Time)'
//     }
// ];
