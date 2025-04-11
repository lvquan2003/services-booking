import type { CollectionConfig } from "payload"

const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "price", "duration"],
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
        description: "URL-friendly version of the service name",
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
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "shortDescription",
      type: "textarea",
      admin: {
        description: "Brief description for service cards (max 150 characters)",
      },
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "duration",
      type: "number",
      required: true,
      min: 5,
      admin: {
        description: "Duration in minutes",
      },
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "staff",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      filterOptions: {
        role: {
          equals: "staff",
        },
      },
    },
    {
      name: "serviceOptions",
      type: "array",
      admin: {
        description: "Additional options or upgrades for this service",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "price",
          type: "number",
          required: true,
          min: 0,
        },
        {
          name: "duration",
          type: "number",
          min: 0,
          admin: {
            description: "Additional time in minutes",
          },
        },
      ],
    },
    {
      name: "availableTimes",
      type: "array",
      fields: [
        {
          name: "day",
          type: "select",
          options: [
            { label: "Monday", value: "monday" },
            { label: "Tuesday", value: "tuesday" },
            { label: "Wednesday", value: "wednesday" },
            { label: "Thursday", value: "thursday" },
            { label: "Friday", value: "friday" },
            { label: "Saturday", value: "saturday" },
            { label: "Sunday", value: "sunday" },
          ],
          required: true,
        },
        {
          name: "startTime",
          type: "text",
          required: true,
          admin: {
            description: "Format: HH:MM (24-hour)",
          },
        },
        {
          name: "endTime",
          type: "text",
          required: true,
          admin: {
            description: "Format: HH:MM (24-hour)",
          },
        },
      ],
    },
  ],
}

export default Services
