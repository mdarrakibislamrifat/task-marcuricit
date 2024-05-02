interface Records {
  id: number;
  firstImage: string;
  name: string;
  otDate: string;
  otHour: number;
  otType: string;
  description: string;
  status: string;
  approvedBy: string;
  image: string;
}

const records: Records[] = [
  {
    id: 1,
    firstImage:
      "https://i.ibb.co/2P4kwYR/jack-finnigan-rri-AI0nhcbc-unsplash-1.jpg",
    name: "John Doe",
    otDate: "1 Jan 2023",
    otHour: 2,
    otType: "Normal day OT 1.5x",
    description: "Lorem ipsum dolor",
    status: "New",
    approvedBy: "Richard Miles",
    image: "https://i.ibb.co/QDxJ0N5/istockphoto-656673020-612x612.jpg",
  },
];

export { records };
