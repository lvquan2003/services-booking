import type { CollectionConfig } from "payload"

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      admin: {
        description: "Phone number for appointment reminders",
      },
    },
    {
      name: "role",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Customer",
          value: "customer",
        },
        {
          label: "Staff",
          value: "staff",
        },
      ],
      defaultValue: "customer",
      required: true,
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "favoriteServices",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        description: "Private notes about the customer (only visible to staff)",
        condition: (data) => data.role === "admin" || data.role === "staff",
      },
    },
  ],
}

export default Users
