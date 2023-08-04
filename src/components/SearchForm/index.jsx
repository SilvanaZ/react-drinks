import { Form, Alert } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrinks';
import { StyledRow, StyledCol, StyledButton, StyledFormSelect, StyledFormControl, StyledFormLabel} from './SearchFormStyle.js'

export default function SearchForm() {
    const { categories } = useCategories();
    const { getDrink, loading} = useDrinks();
    
    const initialValues = {
        name: "",
        category: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("El campo nombre es obligatorio."),
        category: Yup.string().required("Selecciona una categoria.")
    })
    const handleSubmit = (values => {
        getDrink(values)
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        {
                            formik.status && (
                                <Alert variant="danger" className="text-danger">
                                    {formik.status}
                                </Alert>
                            )
                        }
                        <StyledRow>
                            <StyledCol md={6}>
                                <Form.Group className="mb-3">
                                    <StyledFormLabel><strong> Nombre de bebida</strong></StyledFormLabel>
                                    <Field
                                        id="name"
                                        type="text"
                                        placeholder="Ej: Tequila, Vodka, etc."
                                        name="name"
                                        as={StyledFormControl}
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component={Form.Text}
                                        className="text-danger"
                                    />
                                </Form.Group>
                            </StyledCol>
                            <StyledCol md={6}>
                                <Form.Group className="mb-3">
                                    <StyledFormLabel><strong > Categoria Bebida</strong></StyledFormLabel>
                                    <Field
                                        id="category"
                                        placeholder="- Selecciona una categoria -"
                                        name="category"
                                        as={StyledFormSelect}
                                    >
                                        <option>- Selecciona una categoria -</option>
                                        {
                                            categories.map(( category ) => {
                                                return(
                                                    <option 
                                                    key={category.strCategory}
                                                    value={category.strCategory}
                                                >
                                                    {category.strCategory}
                                                </option>

                                                )

                                            })
                                        }

                                    </Field>
                                    <ErrorMessage
                                        name="category"
                                        component={Form.Text}
                                        className="text-danger"
                                    />
                                </Form.Group>
                            </StyledCol>
                        </StyledRow>
                        <StyledRow className="justify-content-end">
                            <StyledCol md={3}>
                                <StyledButton
                                    className={"btn btn-secondary text-uppercase w-100"}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Buscando..." : "Buscar Bebidas"}
                                </StyledButton>
                            </StyledCol>
                        </StyledRow>
                    </Form>
                )
            }
        </Formik>
    )

}