const funky_woman = require("../../assets/color-woman.jpeg");
const love = require("../../assets/graffiti.jpeg");
const clowns = require("../../assets/3121.jpg");
const avatar = require("../../assets/avatar1.png");
const avatar1 = require("../../assets/avatar2.png");

const loggedInUser = [
  {
    _id: "63341ddd697822bb90ce013a",
    avatar: "avatar1.png",
    username: "Lara Croft",
    loginname: "@laracroft",
    isLiked: ["63341ddd697822bb90ce013e"],
  },
];

const testUser = [
  {
    _id: "63341ddd697822bb90ce013b",
    avatar: "avatar2.png",
    username: "Mao Loop",
    loginname: "@maoloop",
    isLiked: [
      "63341ddd697822bb90ce013d",
      "63341ddd697822bb90ce013e",
      "63341ddd697822bb90ce013f",
    ],
  },
];

const testArray = [];
for (let index = 0; index < 169; index++) {
  testArray.push(index);
}

const data = [
  {
    id: 0,
    user: 1,
    avatar: avatar,
    title: "Funky Girl in Zürich",
    location: "Zürich, Hardbrücke ",
    description: "Neues Graffiti nähe Hardbrücke.",
    isLiked: new Array(4269),
    imageUrl: funky_woman,
    imageUrls: [funky_woman, love, clowns],
    date: new Date("September 18, 2022 15:15:30 UTC").toJSON(),
    comments: [
      {
        id: 12,
        user: loggedInUser,
        comment: "@lari13, ja ich empfiehls dir uf jedefall!",
        date: new Date("September 21, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 13,
        user: testUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
    ],
  },
  {
    id: 1,
    user: 2,
    avatar: avatar1,
    title: "Peace and Love auf dem Munot",
    location: "Schaffhausen, Munot ",
    description: "Auffindbar nähe Munot.",
    isLiked: new Array(333),
    imageUrl: love,
    imageUrls: [love, clowns],
    comments: [
      {
        id: 14,
        user: loggedInUser,
        comment: "@lari13, ja ich empfiehls dir uf jedefall!",
        date: new Date("September 21, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 15,
        user: testUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 16,
        user: testUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 17,
        user: loggedInUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 18,
        user: loggedInUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 19,
        user: testUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 20,
        user: loggedInUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 21,
        user: loggedInUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
    ],

    date: new Date("September 18, 2022 09:15:30 UTC").toJSON(),
  },
  {
    id: 2,
    user: 1,
    avatar: avatar,
    title: "Random Graffiti auf Wand",
    location: "Zürich, Hardbrücke ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    isLiked: testArray,
    imageUrl: clowns,
    imageUrls: [clowns],
    comments: [
      {
        id: 16,
        user: testUser,
        comment: "@lari13, ja ich empfiehls dir uf jedefall!",
        date: new Date("September 21, 2022 15:15:30 UTC").toJSON(),
      },
      {
        id: 17,
        user: loggedInUser,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Suspendisse interdum consectetur libero id.",
        date: new Date("September 20, 2022 15:15:30 UTC").toJSON(),
      },
    ],

    date: new Date("September 12, 2022 15:15:30 UTC").toJSON(),
  },
];

export { loggedInUser, testUser, data };
