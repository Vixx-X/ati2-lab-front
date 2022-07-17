import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import { FlagSelector } from '@components/forms/FlagSelector';
import Select from '@components/forms/Select';
import Button from '@components/layout/Button';

import AddIcon from '@mui/icons-material/Add';
import { Field } from 'formik';

export const ProviderForm = ({ initValues }: any) => {
  const handleSelectFlag = (ISOflag: string) => {
    initValues.addresses[0].country = ISOflag;
  };
  return (
    <div className="pt-4">
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="name">Nombre</label>
          <Field
            label="Nombre de usuario"
            name="name"
            id="name"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder="Nombre de la empresa"
          />
          <ErrorMsg name="name" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="tax_id">Numero de identificación tributaria</label>
          <Field
            label="Numero de identificación tributaria"
            name="tax_id"
            id="tax_id"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder="Numero de identificación tributaria"
          />
          <ErrorMsg name="tax_id" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="phone_number">Teléfono de la empresa</label>
          <Field
            label="Teléfono de la empresa"
            name="phone_number"
            id="phone_numner"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder="Teléfono de la empresa"
          />
          <ErrorMsg name="phone_number" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="email">E-mail</label>
          <Field
            label="E-mail"
            name="email"
            id="email"
            type="email"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
            placeholder="E-mail"
          />
          <ErrorMsg name="email" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="website">Sitio Web</label>
          <Field
            label="Sitio web"
            name="website"
            id="website"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder="Sitio Web"
          />
          <ErrorMsg name="website" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="offered_services">Servicios que ofrezco</label>
          <Field
            label="Servicios que ofrezco"
            name="offered_services"
            id="offered_services"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder="Servicios que ofrezco"
          />
          <ErrorMsg name="offered_services" />
        </div>
      </div>
      <div>
        <div className="flex gap-x-8">
          <div className="mb-1 text-sm basis-1/3">
            <label htmlFor="addresses[0].country">País</label>
            <FlagSelector onSelect={handleSelectFlag}></FlagSelector>
            <ErrorMsg name="addresses[0].country" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <label htmlFor="addresses[0].city">Ciudad</label>
            <Field
              label="Ciudad"
              name="addresses[0].city"
              id="addresses[0].city"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder="Ciudad"
            />
            <ErrorMsg name="addresses[0].city" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <label htmlFor="addresses[0].state">Estado</label>
            <Field
              label="Estado"
              name="addresses[0].state"
              id="addresses[0].state"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder="Estado"
            />
            <ErrorMsg name="addresses[0].state" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="mb-4 text-sm basis-2/4">
            <label htmlFor="addresses[0].line1">Línea 1</label>
            <Field
              label="Línea 1"
              name="addresses[0].line1"
              id="addresses[0].line1"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder="Línea 1"
            />
            <ErrorMsg name="addresses[0].line1" />
          </div>
          <div className="mb-4 text-sm basis-2/4">
            <label htmlFor="addresses[0].line2">Línea 2</label>
            <Field
              label="Línea 2"
              name="addresses[0].line2"
              id="addresses[0].line2"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder="Línea 2"
            />
            <ErrorMsg name="addresses[0].line2" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="social_newtworks">Redes sociales</label>
        <div className="flex gap-x-16 justify-between">
          <div className="basis-4/5 gap-x-4 text-sm flex">
            <div className="basis-1/5">
              <Select choices={SOCIAL} placeholder="Red Social" />
            </div>
            <Field
              label=""
              name="socials[0].value"
              id="socials[0].value"
              className="rounded py-2 px-2 text-gray-600 mt-1 basis-4/5"
              placeholder=""
            />
          </div>
          <div className="basis-1/5">
            <Button endIcon={<AddIcon />}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProviderForm;
