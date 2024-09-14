export default {
    name: "category",
    title: "Menu category",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Category name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Category image",
        type: "image",
      },
    ],
  };