import type { CollectionConfig } from "payload"

const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["id", "customer", "service", "rating", "createdAt"],
  },
  fields: [
    {
      name: "customer",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "service",
      type: "relationship",
      relationTo: "services",
      required: true,
    },
    {
      name: "booking",
      type: "relationship",
      relationTo: "bookings",
    },
    {
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "comment",
      type: "textarea",
      required: true,
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
      ],
    },
    {
      name: "approved",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Reviews must be approved before they are visible to the public",
      },
    },
    {
      name: "staffResponse",
      type: "textarea",
      admin: {
        description: "Response from staff to this review",
        condition: (data) => data.approved === true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Set the customer to the logged in user if not specified
        if (!data.customer && req.user) {
          data.customer = req.user.id
        }
        return data
      },
    ],
  },
}

export default Reviews
