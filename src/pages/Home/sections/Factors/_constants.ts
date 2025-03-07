import routes from "@/constants/routes";

export const articles = [
  {
    heading: "Education",
    content:
      "The completion rates among rural girls and richest urban girls range from 11.5 to 72.2 percent on upper secondary school.",
    imgLink:
      "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: routes.EDUCATION,
  },
  {
    heading: "Culture",
    content:
      "Netherlands became the one who legalize same-sex marriage around 2001 yet as of now, it is still around 37 countries legalizing it.",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1674435578145-4ba6ce1dd95c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: routes.CULTURE,
  },
  {
    heading: "Workplace",
    content:
      "Gender pay gap exist, giving lesser and lower pay to women and other minorities",
    imgLink:
      "https://images.unsplash.com/photo-1707757072739-7af4ec993444?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: routes.WORKPLACE,
  },
  {
    heading: "Relationship",
    content:
      "Most male rape occur by an acquaintance or stranger while women rape was by their intimate partner and acquaintance.",
    imgLink:
      "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: routes.RELATIONSHIP,
  },
  {
    heading: "Politics",
    content:
      "The more feminist women know about politics, the less they participate, and more strongly so regard to feminist online political activities.",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: routes.POLITICS,
  },
] as const;
