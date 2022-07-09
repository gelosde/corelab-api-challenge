import * as yup from "yup";

const veicleUpdateSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  plate: yup.string().matches(/^[a-zA-Z]{2}[A-Za-z0-9]{4}$/),
  isFavorite: yup.boolean(),

  year: yup.string(),

  color: yup.string(),

  price_max: yup.number(),

  price_min: yup.number(),
});

export default veicleUpdateSchema;
