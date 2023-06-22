import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: `Dream big, work hard, and make it happen. #Motivation
    Every day is a new opportunity to make a positive change. #NewDay #Inspiration`,
    postImage: [
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653879802/FEvyvsiXsAY6Yjc_mg5kmj.jpg",
    ],
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "21b6b5fe-2f11-4606-1487-8b172d8db145",
          firstname: "Jane",
          lastname: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ashokpatel",
    firstname: "ashok",
    lastname: "patel",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("May 12, 2023 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
        username: "annachase",
        firstname: "anna",
        lastname: "chase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Haha, yes definitely!",
        createdAt: new Date("May 12, 2023 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
        username: "shubhamsoni",
        firstname: "shubham",
        lastname: "soni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "Lol your posts are hilarious!",
        createdAt: new Date("May 13, 2023 16:15:05"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "I'm so so evil...",
    postImage: [
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653880350/464153067332845568-png__700_dlx1wo.jpg",
    ],
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
          website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
        },
        {
          _id: "b0fb276d-0e13-4dd5-84fa-c72314f1dc21",
          firstname: "ashok",
          lastname: "patel",
          username: "ashokpatel",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        },
        {
          _id: "1de0af5d-8505-47be-9dfc-8e1a9c7261c2",
          firstname: "Bharati",
          lastname: "Subramanian",
          username: "bhaaratii",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        },
      ],
      dislikedBy: [],
    },

    username: "ashokpatel",
    firstname: "ashok",
    lastname: "patel",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",

    createdAt: new Date("February 10, 2023 10:16:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
        username: "shubhamsoni",
        firstname: "shubham",
        lastname: "soni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "Oh wow, you are indeed evil!",
        createdAt: new Date("February 11, 2023 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
        username: "annachase",
        firstname: "anna",
        lastname: "chase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Me likey how your brain works!",
        createdAt: new Date("February 10, 2023 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Progress lies not in enhancing what is, but in advancing toward what will be.",
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
          firstname: "Shubham",
          lastname: "Soni",
          username: "shubhamsoni",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "ashokpatel",
    firstname: "ashok",
    lastname: "patel",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",

    createdAt: new Date("February 10, 2023 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
        username: "shubhamsoni",
        firstname: "shubham",
        lastname: "soni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "Interesting",
        createdAt: new Date("February 12, 2023 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
        username: "annachase",
        firstname: "anna",
        lastname: "chase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Wow!",
        createdAt: new Date("February 13, 2023 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The longest period I went without picking a book was a month! It was super weird",
    postImage: null,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "Anna",
          lastname: "Chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
          website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
        },
        {
          _id: "b0fb276d-0e13-4dd5-84fa-c72314f1dc21",
          firstname: "ashok",
          lastname: "patel",
          username: "ashokpatel",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        },
        {
          _id: "1de0af5d-8505-47be-9dfc-8e1a9c7261c2",
          firstname: "Bharati",
          lastname: "Subramanian",
          username: "bhaaratii",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        },
      ],
      dislikedBy: [],
    },
    username: "hergranger",
    firstname: "Hermione",
    lastname: "Granger",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
    comments: [
      {
        _id: "1de0af5d-8505-47be-9dfc-8e1a9c7261c2",
        username: "bhaaratii",
        firstname: "Bharati",
        lastname: "Subramanian",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        text: "Haha, I know the feeling! *grimace*",
        createdAt: new Date("March 13, 2023 23:16:37"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "b0fb276d-0e13-4dd5-84fa-c72314f1dc21",
        username: "ashokpatel",
        firstname: "ashok",
        lastname: "patel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",

        text: "Hey, why don't you go out for a change! xD",
        createdAt: new Date("March 14, 2023 10:17:19"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("March 13, 2023 22:10:39"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `A little girl just ran into the library screaming "Books! BOOKS! BOOOOKS! books! BOOKS!" and honestly my day can't get better than that`,
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
          firstname: "Alison",
          lastname: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
        {
          _id: "7qm7f952-a5dc-8165-7q1t-384c83e5959b",
          firstname: "Jennifer",
          lastname: "Jäger",
          username: "jennyj",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "aliiday",
    firstname: "Alison",
    lastname: "Day",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
    comments: [],
    createdAt: new Date("March 17, 2023 15:26:58"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Harry Potter and that's it that's the book...\n"Ah yes, of course, I haven't told you," said Dumbledore.
        `,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "bhaaratii",
    firstname: "Bharati",
    lastname: "Subramanian",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    comments: [],
    createdAt: new Date("March 17, 2023 15:26:58"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "if you speak to me when i'm reading i will find a way to break into your home and force you to listen to my feelings on ostriches until you agree never to invade the world i'm visiting again.",
    postImage: null,
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "21b6b5fe-2f11-4606-1487-8b172d8db145",
          firstname: "Jane",
          lastname: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
        {
          _id: "8e97f472-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Ryan",
          lastname: "Terry",
          username: "terrry",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
        },
        {
          _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Sheldon",
          lastname: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
          firstname: "Alison",
          lastname: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
        {
          _id: "21b6b5fe-2f11-4606-9777-8b172d8db145",
          firstname: "Alex",
          lastname: "Smith",
          username: "youknowwho",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
        },
        {
          _id: "2e97f472-a5ef-0009-a6aa-157c83e5959b",
          firstname: "Dennis",
          lastname: "Snellenberg",
          username: "dennsnell",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jennyj",
    firstname: "Jennifer",
    lastname: "Jäger",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
    createdAt: new Date("November 23, 2022 09:17:22"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "21b6b5fe-2f11-4606-1487-8b172d8db145",
        username: "janedoe",
        firstname: "Jane",
        lastname: "Doe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        text: "Ahh! Absolutely hilarious!!",
        createdAt: new Date("November 2632016 14:11:22"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "my ideal partner is thick, has a tough spine, travels with me wherever I go, and might actually be a book.",
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "youknowwho",
    firstname: "Alex",
    lastname: "Smith",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
    createdAt: new Date("October 10,  2022 16:40:57"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "I love blue food and books. Oh, and obviously you Annachase!",
    postImage: null,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
        {
          _id: "18b6b5fe-2f11-4606-9777-8b172d8db165",
          firstname: "John",
          lastname: "Doe",
          username: "johndoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
        },
        {
          _id: "21b6b5fe-2f11-4606-1487-8b172d8db145",
          firstname: "Jane",
          lastname: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "percyblues",
    firstname: "Perseus",
    lastname: "Jackson",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
    createdAt: new Date("September 13, 2022 17:20:24"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
        username: "annachase",
        firstname: "anna",
        lastname: "chase",

        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
        text: "Haha, it's okay. I love books and architecture more than I love you as well!",
        createdAt: new Date("September 13, 2022 18:34:54"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "21b6b5fe-2f11-4606-9777-8b172d8db145",
    content:
      "God bless Jane Austen for naming the prettiest, kindest, most generous, most patient character in Pride and Prejudice after herself that is self-love and I am on board",
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Sheldon",
          lastname: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "shelbor",
    firstname: "Sheldon",
    lastname: "Borenstein",

    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
    createdAt: new Date("December 21, 2022 08:01:27"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `reads book: *favorite character dies*\nme: maybe if i read this again he won't die`,
    postImage: null,
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "b0fb276d-0e13-4dd5-84fa-c72314f1dc21",
          firstname: "ashok",
          lastname: "patel",
          username: "ashokpatel",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        },
        {
          _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
          firstname: "Shubham",
          lastname: "Soni",
          username: "shubhamsoni",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
        {
          _id: "1de0af5d-8505-47be-9dfc-8e1a9c7261c2",
          firstname: "Bharati",
          lastname: "Subramanian",
          username: "bhaaratii",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        },
        {
          _id: "21b6b5fe-2f11-4606-9777-8b172d8db145",
          firstname: "Alex",
          lastname: "Smith",
          username: "youknowwho",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
        },
        {
          _id: "8e97f472-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Ryan",
          lastname: "Terry",
          username: "terrry",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
        },
        {
          _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Sheldon",
          lastname: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
          firstname: "Alison",
          lastname: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstname: "John",
    lastname: "Doe",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
    comments: [
      {
        _id: "1de0af5d-8505-47be-9dfc-8e1a9c7261c2",
        username: "bhaaratii",
        firstname: "Bharati",
        lastname: "Subramanian",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        text: "me: cries in a corner!",
        createdAt: new Date("May 12, 2023 10:53:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("May 12, 2023 12:13:08"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `You should be able to call into work because you are mourning the end of a really good book.`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dennsnell",
    firstname: "Dennis",
    lastname: "Snellenberg",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
    comments: [],
    createdAt: new Date("October 30, 2022 16:16:09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Starting a cover band called book so no one can judge us.",
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "7qm7f952-a5dc-8165-7q1t-384c83e5959b",
          firstname: "Jennifer",
          lastname: "Jäger",
          username: "jennyj",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "terrry",
    firstname: "Ryan",
    lastname: "Terry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("August 10, 2022 19:22:07"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "7qm7f952-a5dc-8165-7q1t-384c83e5959b",
        username: "jennyj",
        firstname: "Jennifer",
        lastname: "Jäger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        text: "Lol! I loved this one!",
        createdAt: new Date("August 22, 2022 00:20:11"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "I wish someone would pay me to read books.",
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "21b6b5fe-2f11-4606-1487-8b172d8db145",
          firstname: "Jane",
          lastname: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "bhaaratii",
    firstname: "Bharati",
    lastname: "Subramanian",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("July 12, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
        username: "annachase",
        firstname: "anna",
        lastname: "chase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Oh wow! That's the dream!",
        createdAt: new Date("July 12, 2022 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `me: I love that character\nauthor: *laughs in evil*`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2e97f472-a5ef-0009-a6aa-157c83e5959b",
          firstname: "Dennis",
          lastname: "Snellenberg",
          username: "dennsnell",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aliiday",
    firstname: "Alison",
    lastname: "Day",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
    createdAt: new Date("December 17, 2022 19:10:15"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `I do not enjoy people. All I enjoy is books.`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "terrry",
    firstname: "Ryan",
    lastname: "Terry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("January 07, 2023 14:23:17"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `Reach for a book. It's a weapon.`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "8e97f472-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Ryan",
          lastname: "Terry",
          username: "terrry",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
        },
        {
          _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Sheldon",
          lastname: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
          firstname: "Alison",
          lastname: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jennyj",
    firstname: "Jennifer",
    lastname: "Jäger",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
    comments: [
      {
        _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
        username: "aliiday",
        firstname: "Alison",
        lastname: "Day",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        text: "So true. Very true. My brain's as sharp as a knife. Hehe",
        createdAt: new Date("April 30, 2023 08:36:27"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("May 10, 2023 17:18:55"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `When someone calls me a nerd for reading/ writing.\nme: Oh yeah, I'm not embarassed by that!`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "annachase",
    firstname: "anna",
    lastname: "chase",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
    comments: [],
    createdAt: new Date("April 25, 2023 10:34:20"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Me: Makes a list of books to read in TBR\n*New books released*\nMe: Throws list away. Chaos Rule.`,
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
          firstname: "Sheldon",
          lastname: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
          firstname: "Alison",
          lastname: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "youknowwho",
    firstname: "Alex",
    lastname: "Smith",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",

    createdAt: new Date("Jan 22, 2023 18:52:39"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "1e97f952-a5dc-8165-a6aa-384c83e5959b",
        username: "aliiday",
        firstname: "Alison",
        lastname: "Day",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        text: "I feel attacked.",
        createdAt: new Date("Jan 24, 2023 22:22:09"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `bookworm culture is buying highly anticipated new releases while having 72837288383 books in your room that haven't been read or touched`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "7qm7f952-a5dc-8165-7q1t-384c83e5959b",
          firstname: "Jennifer",
          lastname: "Jäger",
          username: "jennyj",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "terrry",
    firstname: "Ryan",
    lastname: "Terry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("Jan 18,  2023 12:12:37"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "7awqd122-a5dc-4388-a6aa-384c83e5959b",
        username: "shelbor",
        firstname: "Sheldon",
        lastname: "Borenstein",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        text: "I feel attacked.",
        createdAt: new Date("Jan 19,  2023 10:02:02"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `Chai aur Kitaab ♥`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhaaratii",
    firstname: "Bharati",
    lastname: "Subramanian",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("July 23, 2023 10:02:37"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: `There's no high like reading books the entire day! A day well spent.`,
    postImage: null,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "4786b5fe-2f11-4606-9777-8b172d8db008",
          firstname: "Hermione",
          lastname: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          _id: "8bb6b5fe-2f11-7429-1749-8b172d8db145",
          firstname: "anna",
          lastname: "chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
        {
          _id: "b0fb276d-0e13-4dd5-84fa-c72314f1dc21",
          firstname: "ashok",
          lastname: "patel",
          username: "ashokpatel",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        },
        {
          _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
          firstname: "Shubham",
          lastname: "Soni",
          username: "shubhamsoni",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "bhaaratii",
    firstname: "Bharati",
    lastname: "Subramanian",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("April 20, 2023 17:17:27"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
        username: "shubhamsoni",
        firstname: "shubham",
        lastname: "soni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "I love doing this!",
        createdAt: new Date("April 21, 2023 07:12:02"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "3cf48e2f-e199-46fc-86ea-804ca3ab49c9",
        username: "shubhamsoni",
        firstname: "shubham",
        lastname: "soni",

        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        text: "I know right!",
        createdAt: new Date("April 21, 2023 17:20:12"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
