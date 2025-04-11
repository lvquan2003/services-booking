import type { CollectionConfig } from 'payload'
const Bookings: CollectionConfig = {
  slug: "bookings",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["id", "customer", "service", "date", "status"],
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
      name: "staff",
      type: "relationship",
      relationTo: "users",
      filterOptions: {
        role: {
          equals: "staff",
        },
      },
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Confirmed",
          value: "confirmed",
        },
        {
          label: "Completed",
          value: "completed",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
        {
          label: "No-show",
          value: "no-show",
        },
      ],
      defaultValue: "pending",
      required: true,
    },
    {
      name: "totalAmount",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "paymentStatus",
      type: "select",
      options: [
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Paid",
          value: "paid",
        },
        {
          label: "Refunded",
          value: "refunded",
        },
        {
          label: "Failed",
          value: "failed",
        },
      ],
      defaultValue: "pending",
      required: true,
    },
    {
      name: "paymentMethod",
      type: "select",
      options: [
        {
          label: "Credit Card",
          value: "credit_card",
        },
        {
          label: "PayPal",
          value: "paypal",
        },
        {
          label: "Apple Pay",
          value: "apple_pay",
        },
        {
          label: "Cash",
          value: "cash",
        },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        description: "Special requests or notes for this booking",
      },
    },
    {
      name: "reminderSent",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Whether a reminder has been sent to the customer",
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

export default Bookings
