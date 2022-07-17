import Button from '@components/layout/Button';
import { Field } from 'formik';
import ErrorMsg from '@components/forms/ErrorMsg';
import { SOCIAL } from '@components/data/SocialNetworks';
import Select from '@components/forms/Select';
import AddIcon from '@mui/icons-material/Add';
import { FlagSelector } from '@components/forms/FlagSelector';
import useTranslate from '@hooks/useTranslate';


export const RepresentantForm = ({ initValues }: any) => {
    
    const handleSelectFlag = (ISOflag: string) => {
        initValues.representant.addresses[0].country = ISOflag;
    }

    const t = useTranslate();

    return (
        <div className="pt-4">
            <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.first_name">
                        Nombre de Representante
                    </label>
                    <Field
                        label="Nombre de representante"
                        name="representant.first_name"
                        id="representant.first_name"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Nombre de la empresa"
                    />
                    <ErrorMsg name="representant.first_name" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.last_name">
                        Apellido de Representante
                    </label>
                    <Field
                        label="Apellido de representante"
                        name="representant.last_name"
                        id="representant.last_name"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Apellido de Representante"
                    />
                    <ErrorMsg name="representant.last_name" />
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.charge">
                        Cargo del representante
                    </label>
                    <Field
                        label="Cargo del representante"
                        name="representant.charge"
                        id="representant.charge"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Cargo del representante"
                    />
                    <ErrorMsg name="representant.charge" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.phone_number">
                        Teléfono celular
                    </label>
                    <Field
                        label="Teléfono celular"
                        name="representant.phone_number"
                        id="representant.phone_number"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Teléfono celular"
                    />
                    <ErrorMsg name="representant.phone_number" />
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.personal_email">
                        Correo electronico personal
                    </label>
                    <Field
                        label="Correo electronico personal"
                        name="representant.personal_email"
                        id="representant.personal_email"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Correo electronico personal"
                    />
                    <ErrorMsg name="representant.personal_email" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.business_email">
                        Correo electronico empresarial
                    </label>
                    <Field
                        label="Correo electronico empresarial"
                        name="representant.business_email"
                        id="representant.business_email"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Correo electronico empresarial"
                    />
                    <ErrorMsg name="representant.business_email" />
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="representant.local_phone">
                        Teléfono Local
                    </label>
                    <Field
                        label="Teléfono Local"
                        name="representant.local_phone"
                        id="representant.local_phone"
                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                        placeholder="Teléfono Local"
                    />
                    <ErrorMsg name="representant.local_phone" />
                </div>
            </div>
            <div >
                <div className="flex gap-x-8">
                    <div className="mb-1 text-sm basis-1/3">
                        <label htmlFor="representant.addresses[0].country">
                            País
                        </label>
                        <FlagSelector
                            onSelect={handleSelectFlag}
                        ></FlagSelector>
                        <ErrorMsg name="representant.addresses[0].country" />
                    </div>
                    <div className="mb-1 text-sm basis-1/3">
                        <label
                            htmlFor="representant.addresses[0].city"
                        >
                            Ciudad
                        </label>
                        <Field
                            label="Ciudad"
                            name="representant.addresses[0].city"
                            id="representant.addresses[0].city"
                            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                            placeholder="Ciudad"
                        />
                        <ErrorMsg name="representant.addresses[0].city" />
                    </div>
                    <div className="mb-1 text-sm basis-1/3">
                        <label
                            htmlFor="representant.addresses[0].state"
                        >
                            Estado
                        </label>
                        <Field
                            label="Estado"
                            name="representant.addresses[0].state"
                            id="representant.addresses[0].state"
                            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                            placeholder="Estado"
                        />
                        <ErrorMsg name="representant.addresses[0].state" />
                    </div>
                </div>
                <div className="flex gap-x-8">
                    <div className="mb-4 text-sm basis-2/4">
                        <label htmlFor="representant.addresses[0].line1">
                            Línea 1
                        </label>
                        <Field
                            label="Línea 1"
                            name="representant.addresses[0].line1"
                            id="representant.addresses[0].line1"
                            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                            placeholder="Línea 1"
                        />
                        <ErrorMsg name="representant.addresses[0].line1" />
                    </div>
                    <div className="mb-4 text-sm basis-2/4">
                        <label
                            htmlFor="representant.addresses[0].line2"
                        >
                            Línea 2
                        </label>
                        <Field
                            label="Línea 2"
                            name="representant.addresses[0].line2"
                            id="representant.addresses[0].line2"
                            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                            placeholder="Línea 2"
                        />
                        <ErrorMsg name="representant.addresses[0].line2" />
                    </div>
                </div>
            </div>
            <div>
                <label>
                    Redes sociales
                </label>
                <div className="flex gap-x-16 justify-between">
                    <div className="basis-4/5 gap-x-4 text-sm flex">
                        <div className="basis-1/5">
                            <Select choices={SOCIAL} placeholder='Red Social' />
                        </div>
                        <Field
                            label="Redes sociales"
                            name="representant.socials[0].value"
                            id="representant.socials[0].value"
                            className="rounded py-2 px-2 text-gray-600 mt-1 basis-4/5"
                            placeholder="Red Social"
                        />
                        <ErrorMsg name="representant.socials[0].value" />
                    </div>
                    <div className="basis-1/5">
                        <Button endIcon={<AddIcon />}>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RepresentantForm;


