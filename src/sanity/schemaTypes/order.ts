export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "customer",
      type: "object",
      title: "Customer",
      fields: [
        { name: "firstName", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
        { name: "lastName", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
        { name: "email", type: "string", validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email() },
        { name: "phone", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
        {
          name: "address",
          type: "object",
          fields: [
            { name: "street1", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
            { name: "street2", type: "string" },
            { name: "city", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
            { name: "country", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
          ],
        },
        { name: "subscribe", type: "boolean" },
      ],
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule: { required: () => any; }) => Rule.required(),
            },
            { name: "quantity", type: "number", validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1) },
            { name: "price", type: "number", validation: (Rule: { required: () => any; }) => Rule.required() },
          ],
        },
      ],
    },
    { name: "paymentMethod", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "subtotal", type: "number", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "shipping", type: "number", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "discount", type: "number" },
    { name: "total", type: "number", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "orderDate", type: "datetime", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "notes", type: "text" },
  ],
};