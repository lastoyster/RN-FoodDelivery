export default {
    name: "featured",
    title: "Featured Menu categories",
    type: "document",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name of featured category",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "short description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "restaurants",
        type: "array",
        title: "Restaurants",
        of: [{ type: "reference", to: [{ type: "restaurant" }] }],
      },
    ],
  };