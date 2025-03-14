import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),

  description: yup.string().required(),

  plate: yup
    .string()
    .matches(/^[a-zA-Z]{2}[A-Za-z0-9]{4}$/)
    .required(),
  isFavorite: yup.boolean(),

  year: yup.string().required(),

  color: yup.string().required(),

  price_max: yup.number().required(),

  price_min: yup.number().required(),
});

export default schema;
