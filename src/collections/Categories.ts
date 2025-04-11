import type { CollectionConfig } from 'payload'
const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        description: "URL-friendly version of the category name",
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data.name) {
              return data.name.toLowerCase().replace(/\s+/g, "-")
            }
            return ""
          },
        ],
      },
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "displayOrder",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Controls the order in which categories are displayed",
      },
    },
  ],
}

export default Categories
